/* eslint-disable prefer-import/prefer-import-over-require */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const fs = require('fs');
const template = require('lodash/template');
const wrap = require('lodash/wrap');
const { availableLocales, defaultLocale } = require('./intl/config');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports.modifyWebpackConfig = ({ config, program }) => {
    // Allow requires from the src/ folder
    config.merge({
        resolve: {
            root: path.join(__dirname, 'src'),
        },
        target: 'web',
    });

    // Allow requires from the src/ folder for postcss
    config.merge((current) => {
        const importPath = [
            path.join(__dirname, 'src'),
        ];

        if (typeof current.postcss === 'function') {
            current.postcss = wrap(current.postcss, (postcss, wp) => [
                require('postcss-import')({ addDependencyTo: wp, path: importPath }),
                ...postcss(wp).slice(1, 3),
                // Fix some weird reporting errors, see https://github.com/gatsbyjs/gatsby/issues/673#issuecomment-344245406
                // This makes sure that the most recent updated `postcss-reporter` is used
                require('postcss-reporter'),
            ]);
        } else if (current.postcss) {
            current.postcss[0] = require('postcss-import')({ path: importPath });
        }

        return current;
    });

    // Setup Babel & PostCSS
    config.merge((current) => {
        config.loader('js', (current) => {
            current.query = {
                ...current.query,
                presets: [
                    [require.resolve('babel-preset-moxy'), {
                        react: true,
                        modules: 'commonjs',
                        targets: {
                            browsers: program.browserslist,
                        },
                    }],
                ],
                plugins: [
                    require.resolve('react-hot-loader/babel'),
                    require.resolve('gatsby/dist/utils/babel-plugin-extract-graphql'),
                ],
            };

            return current;
        });

        return current;
    });

    // Optimize bundle
    config.merge((current) => {
        current.node = {
            ...current.node,
            module: false,
            clearImmediate: false,
            setImmediate: false,
        };

        return current;
    });

    // Setup service worker gateway
    config.merge((current) => {
        current.plugins.push(new ServiceWorkerWebpackPlugin({
            entry: path.join(__dirname, 'src/shared/service-worker/sw.js'),
        }));

        return current;
    });
};

exports.createLayouts = () => {
    // Create a layout for each locale, based on a template
    const layoutTemplate = fs.readFileSync(path.join(__dirname, 'src/layouts/index.js'));

    availableLocales.forEach((locale) => {
        const localeLayout = template(layoutTemplate)({ locale })
        .replace(/LayoutQuery/, `LayoutQuery_${locale}`);

        fs.writeFileSync(path.join(__dirname, `src/layouts/index-${locale}.js`), localeLayout);
    });
};

exports.onCreatePage = ({ page, boundActionCreators }) => {
    // Create a localized page for each locale
    const { createPage, deletePage } = boundActionCreators;

    deletePage(page);

    availableLocales.forEach((locale) => {
        createPage({
            ...page,
            layout: `index-${locale}`,
            path: locale === defaultLocale ? page.path : `/${locale}${page.path}`,
        });
    });
};

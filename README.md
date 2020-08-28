# [js.ipfs.io](https://js.ipfs.io) - The js-ipfs project Website.

Welcome to the js.ipfs.io Website repo. This website uses [gatsbyjs](https://www.gatsbyjs.org/). Most of the website content is data-driven, you can check the [data](https://github.com/ipfs/js.ipfs.io/tree/master/src/shared/data) directory to see the sections information bundled as `js` files.

[![](https://ipfs.io/ipfs/QmRNFokLYeHZiSkXVCSmTKjbGAKCeP2pVZe5fbdvUWtsPL)](https://js.ipfs.io)

## Lead Maintainer

[Pedro Santos](https://github.com/PedroMiguelSS)

## Table of Contents

- Contribute to the Website Content
  - [Internationalization](#internationalization-i18n)
  - [Listing a talk on the website](#listing-a-talk-on-the-website)
  - [Want to show what's possible to build with `js-ipfs`?](#want-to-show-whats-possible-to-build-with-js-ipfs)
- Development and Release Cycle
  - [Development](#development)
  - [Publish](#publish)
- [License](#license)

## Internationalization `i18n`

### Incorrect translation, help us fix it!

- 1. Create a [Transifex](https://www.transifex.com/signup/?join_project=js-ipfs-website) account
- 2. Go to https://www.transifex.com/ipfs/js-ipfs-website/, select a language, find an invalid string and propose a new translation

### Missing language? Help us translate!

Everyone can help by translating content at Transifex:

- Go to https://www.transifex.com/ipfs/js-ipfs-website and start translating.
- If your language is missing request it on Transifex.


### Synchronizing translations (maintainer task)

Periodically, a maintainer of this repo will need to synchronize translations to ensure everything is up to date.  
**NOTE: The steps below are for admins and can be ignored if you're a translator; all translation work happens in Transifex only.**

To download updates of all locales:
```console
$ tx pull -a
```

Then check if any language is missing in the file [intl/config](intl/config.js), if so, add a line for missing one. 

For example, if you were to add Portuguese, you would only have to add the new language to the `availableLocales` array:

```diff
module.exports = {
  defaultLocale: 'en',
  availableLocales: [
    { acronym: 'en', fullForm: 'English' },
+    { acronym: 'pt', fullForm: 'Português' }
  ]
}
```

Then, to download updates of specific locale:
```console
$ tx pull -l pt
```

Finally, commit changes to `./src/i18n.js` and `public/locales/`.

**Note:** Newly added language(s) will be live at [js.ipfs.io](https://js.ipfs.io/) as soon as the `production` branch is updated.

### Learn more on how to use Transifex

- [Installing the Transifex Client](https://docs.transifex.com/client/installing-the-client)
- [Understanding `.tx/config` file](https://docs.transifex.com/client/client-configuration#section-tx-config)
- Manual sync via Transifex Client
  - [Using Transifex with GitHub in Your Development Workflow](https://docs.transifex.com/integrations/github)
  - [Syncing a local project to Transifex with the Transifex Client](https://docs.transifex.com/integrations/github#section-using-the-client)

## Listing a talk on the website

You can add your talk to the website by creating a PR. You just need to add an object to the [`publicationsAndTalks`](https://github.com/ipfs/js.ipfs.io/blob/master/src/shared/data/publications-and-talks/index.js) array. Example, if you were to add a new entry, you would have to add the `link` to your talk and its `title`:

```js
const publicationsAndTalks = [
  {
    link: 'https://www.youtube.com/watch?v=WK4PIGr3RB8',
    active: true,
    title: 'Progress Report on the Decentralized Web, David Dias'
  },
  {
    link: 'https://www.youtube.com/watch?v=2cmbm6iABsI',
    title: 'IPFS on the Brave Browser, Alan Shaw'
  }
]
```

## Want to show what's possible to build with `js-ipfs`?

Sharing your app with us is very simple! You just need to host your code on [codesandbox](https://codesandbox.io/) and edit [`apps` array](https://github.com/ipfs/js.ipfs.io/blob/master/src/shared/data/what-you-can-build/index.js). Example, if you want to add a new app, you only have to add a new entry to the `apps` array by adding its title and the corresponding `codesandbox` share link:

```js
const apps = [
  {
    title: 'Example 1',
    link: 'https://codesandbox.io/embed/qkj8z9l8kq'
  },
  {
    title: 'Example 2',
    link: 'https://codesandbox.io/embed/vv99onw18y'
  }
]
```

## Development

### Dependencies

- `gatsbyjs v2` to build the website
- `Node.js >= v10` and `npm` for build tools
- `Transifex Client` for locales
- `ipfs` to deploy changes

### Install

```sh
> git clone https://github.com/ipfs/js.ipfs.io
> npm install
```

### Usage

The following commands are available:

- `npm run develop` - Starts a hot-reloading development environment at [localhost:8000](localhost:8000).
- `npm run build` - Generates the static HTML and JavaScript code bundles by performing a production build.
- `npm run lint` - Runs [aegir](https://github.com/ipfs/aegir) lint.

### Supported Browsers Versions

We are currently targeting:

| Browser       | Versions      |
| ------------- |:-------------:|
| Chrome        | >= 69         |
| Firefox       | >= 62         |
| Safari        | >= 11.1       |


## Publish

When a branch gets `merged` to master, it is deployed to [dev.js.ipfs](https://dev.js.ipfs.io/).

To deploy to [js.ipfs.io](https://js.ipfs.io/) the code should be merged into the `production` branch.

1. Build the project
```sh
> npm run build
```
2. Init your `ipfs` daemon (if you haven't done it before)
```sh
> ipfs init
```
3. Add the `public` folder to IPFS
```sh
> ipfs add -r public/
added <resulting-hash>
```
4. Finally, go to the [constants](https://github.com/ipfs/js.ipfs.io/tree/master/src/shared/constants) folder and paste the resulting hash on the `jsIpfsWebsite` property of the exported object.

**Note:** This process will be automated as soon as we tackle [this issue](https://github.com/ipfs/js.ipfs.io/issues/171).

## License

MIT

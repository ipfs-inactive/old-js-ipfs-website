const localesConfig = require('../../intl/config.js');

const locales = localesConfig.availableLocales;

function getLocalesAcronym() {
    return locales.map((locale) => locale.acronym);
}

function getLocalesFullForm() {
    return locales.map((locale) => locale.fullForm);
}

function getIndexByAcronym(acronym) {
    return locales.findIndex((locale) => locale.acronym === acronym);
}

module.exports = {
    getLocalesAcronym,
    getLocalesFullForm,
    getIndexByAcronym,
};

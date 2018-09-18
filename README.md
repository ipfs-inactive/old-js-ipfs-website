# [js.ipfs.io](https://js.ipfs.io)

> The js-ipfs Project Website.

[![](https://ipfs.io/ipfs/QmRNFokLYeHZiSkXVCSmTKjbGAKCeP2pVZe5fbdvUWtsPL)](https://js.ipfs.io)

## Table of Contents

`TODO`


## Development

```console
$ npm install
$ npm run develop
```


## Translations

### Invalid translation?
1. [Create Transifex account](https://www.transifex.com/signup/?join_project=js-ipfs-website)
2. Go to https://www.transifex.com/ipfs/js-ipfs-website/, select language, find invalid string and propose a new translation

### Missing language? Help us translate!


#### 1. Create a PR that adds a line to the config with new language code.

In the file [intl/config](intl/config.js), add a line for your language. Example, if you were to add Portuguese to:

```
module.exports = {
  defaultLocale: 'en',
  availableLocales: [
    { acronym: 'en', fullForm: 'English' }
  ]
}
```

You would only have to add the new language to the availableLocales array:

```
module.exports = {
  defaultLocale: 'en',
  availableLocales: [
    { acronym: 'en', fullForm: 'English' },
    { acronym: 'pt', fullForm: 'Português' }
  ]
}
```

#### 2. Translate content at Transifex

- Go to https://www.transifex.com/ipfs/js-ipfs-website and start translating.
- If your language is missing request it on Transifex or as an issue in this repo.
- To download and add translations to the PR:
  ```console
  $ tx pull -l <lang>
  $ git add intl
  $ git commit
  ```
	This step can be done by you or a person reviewing the PR. Replace `<lang>` with code added to `intl/config.js`

When you are finished, submit it as a PR to this repo. Once it gets merged it will be live at `js.ipfs.io`

###### Transifex Docs

- [Installing the Transifex Client](https://docs.transifex.com/client/installing-the-client)
- [Understanding `.tx/config` file](https://docs.transifex.com/client/client-configuration#section-tx-config)
- Manual sync via Transifex Client 
  -  [Using Transifex with GitHub in Your Development Workflow](https://docs.transifex.com/integrations/github)
     - [Syncing a local project to Transifex with the Transifex Client](https://docs.transifex.com/integrations/github#section-using-the-client)


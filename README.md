# [js.ipfs.io](https://js.ipfs.io)

> The js-ipfs Project Website.

[![](https://ipfs.io/ipfs/QmRNFokLYeHZiSkXVCSmTKjbGAKCeP2pVZe5fbdvUWtsPL)](https://js.ipfs.io)

## Table of Contents

`TODO`

## Don't see the Website translated in your language? Help us by submitting a PR!

You can do it in 2 steps:

#### 1. Add a line to the config to add your language to the supported list.

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
    { acronym: 'pt', fullForm: 'Português (PT)' }
  ]
}
```

#### 2. Create the correct translation.

Copy one of the existing translations https://github.com/ipfs/js.ipfs.io/tree/master/intl/messages, rename it to the acronym of your language and then update each value to the correct translation. Example:

```
cp intl/messages/en.json intl/messages/pt.json 
edit intl/messages/pt.json 
# Now edit the file directly
```

When you are finished, submit it as a PR to this repo. Once it gets merged it will be live at `js.ipfs.io`

## Development

`TODO`

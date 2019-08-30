// This is prism-okaidia.css:
// https://github.com/PrismJS/prism/blob/878ef2955671d8546bbcd3f9ce62c276a627f340/themes/prism-okaidia.css
export default {
  plain: {
    color: '#f8f8f2',
    backgroundColor: '#0e204c',
    fontFamily: 'Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace',
    lineHeight: 1.5
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: 'slategray'
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: '#f8f8f2'
      }
    },
    {
      types: ['property', 'tag', 'constant', 'symbol', 'deleted'],
      style: {
        color: '#f92672'
      }
    },
    {
      types: ['boolean', 'number'],
      style: {
        color: '#ae81ff'
      }
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: {
        color: '#a6e22e'
      }
    },
    {
      types: ['operator', 'entity', 'url', 'variable'],
      style: {
        color: '#f8f8f2'
      }
    },
    {
      types: ['atrule', 'attr-value', 'function', 'class-name'],
      style: {
        color: '#e6db74'
      }
    },
    {
      types: ['keyword'],
      style: {
        color: '#66d9ef'
      }
    },
    {
      types: ['regex', 'important'],
      style: {
        color: '#fd971f'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['entity'],
      style: {
        cursor: 'help'
      }
    }
  ]
}

import outdent from 'outdent'

const steps = [
  {
    translationListIndex: 0,
    language: 'bash',
    codeStr: outdent`> npm install ipfs --save`
  },
  {
    translationListIndex: 1,
    language: 'javascript',
    codeStr: outdent`
            const IPFS = require('ipfs')
            const node = new IPFS()
        `
  },
  {
    translationListIndex: 2,
    language: 'bash',
    codeStr: outdent`> npm install ipfs --global`
  },
  {
    translationListIndex: 3,
    language: 'html',
    codeStr: outdent`<!-- loading the minified version -->
                         <script src="https://unpkg.com/ipfs/dist/index.min.js"></script>
                         <script src="https://cdn.jsdelivr.net/npm/ipfs/dist/index.min.js"></script>

                         <!-- loading the human-readable (not minified) version -->
                         <script src="https://unpkg.com/ipfs/dist/index.js"></script>
                         <script src="https://cdn.jsdelivr.net/npm/ipfs/dist/index.js"></script>`
  }
]

export default steps

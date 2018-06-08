import outdent from 'outdent';

const steps = [
    {
        title: 'gettingStartedStep1Title',
        desc: 'gettingStartedStep1Desc',
        codeStr: outdent`> npm install ipfs --save`,
        note: 'gettingStartedStep1Note',
    },
    {
        title: 'gettingStartedStep2Title',
        desc: 'gettingStartedStep2Desc',
        codeStr: outdent`
            const IPFS = require('ipfs')
            const node = new IPFS()
        `,
    },
    {
        title: 'gettingStartedStep3Title',
        desc: 'gettingStartedStep3Desc',
        codeStr: outdent`> npm install ipfs --global`,
        note: 'gettingStartedStep3Note',
    },
    {
        title: 'gettingStartedStep4Title',
        desc: 'gettingStartedStep4Desc',
        codeStr: outdent`<!-- loading the minified version -->
                         <script src="https://unpkg.com/ipfs/dist/index.min.js"></script>
                         <script src="https://cdn.jsdelivr.net/npm/ipfs/dist/index.min.js"></script>

                         <!-- loading the human-readable (not minified) version -->
                         <script src="https://unpkg.com/ipfs/dist/index.js"></script>
                         <script src="https://cdn.jsdelivr.net/npm/ipfs/dist/index.js"></script>`,
        note: 'gettingStartedStep4Note',
    },
];

export default steps;

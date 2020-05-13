const codeAdd = (placeholder) => `const node = await IPFS.create()

const data = '${placeholder}'

// add your data to to IPFS - this can be a string, a Buffer,
// a stream of Buffers, etc
const results = node.add(data)

// we loop over the results because 'add' supports multiple 
// additions, but we only added one entry here so we only see
// one log line in the output
for await (const { cid } of results) {
  // CID (Content IDentifier) uniquely addresses the data
  // and can be used to get it again.
  console.log(cid.toString())
}`

const codeGet = (cid) => `const node = await IPFS.create()

const stream = node.cat('${cid}')
let data = ''

for await (const chunk of stream) {
  // chunks of data are returned as a Buffer, convert it back to a string
  data += chunk.toString()
}

console.log(data)`

function runCode (code, scope) {
  const entries = Object.entries(scope)
  // eslint-disable-next-line no-new-func
  const res = new Function(...entries.map(e => e[0]), `return (async () => { ${code} })()`)
  return res(...entries.map(e => e[1]))
}

function log (fn) {
  return {
    error: fn,
    log: fn,
    warning: fn
  }
}

async function getIpfs (opts) {
  // We are using webpackChunkName in the comment so that our chunk
  // will be named `ipfs.[hash].js` instead of `[id].[hash].js`
  const { default: IPFS } = await import(/* webpackChunkName: "ipfs" */ 'ipfs')
  const node = await IPFS.create({ repo: 'getting-started' })
  return Object.assign({}, IPFS, { create: async () => node })
}

export {
  runCode,
  log,
  getIpfs,
  codeAdd,
  codeGet
}

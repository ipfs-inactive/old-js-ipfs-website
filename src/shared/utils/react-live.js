const codeAdd = `const node = new IPFS()

const data = 'Hello, <YOUR NAME HERE>'

// once the node is ready
node.once('ready', () => {
  // convert your data to a Buffer and add it to IPFS
  node.files.add(node.types.Buffer.from(data), (err, files) => {
    if (err) return console.error(err)

    // 'hash', known as CID, is a string uniquely addressing the data
    // and can be used to get it again. 'files' is an array because
    // 'add' supports multiple additions, but we only added one entry
    console.log(files[0].hash)
  })
})`

const codeGet = (cid) => `const node = new IPFS()

node.once('ready', () => {
  node.files.cat('${cid}', (err, data) => {
    if (err) return console.error(err)

    // convert Buffer back to string
    console.log(data.toString())
  })
})`

function transformCode (code) {
  return `() => {
    ${code}
    return null
  }`
}

function log (fn) {
  return {
    error: fn,
    log: fn,
    warning: fn
  }
}

function stubIpfs (node) {
  node.once = (e, fn) => {
    fn()
  }

  node.on = (e, fn) => {
    fn()
  }

  const WrapIPFS = function () {
    return node
  }

  return WrapIPFS
}

function getIpfs (opts) {
  return new Promise((resolve, reject) => {
    const onLoad = () => {
      const Ipfs = window.Ipfs
      const node = new Ipfs({ repo: 'getting-started' })
      node.once('ready', () => {
        resolve(stubIpfs(node, Ipfs), node, Ipfs)
      })
    }

    var script = document.createElement('script')
    script.src = 'https://unpkg.com/ipfs/dist/index.min.js'
    script.onload = onLoad
    script.onerror = reject
    document.body.appendChild(script)
  })
}

export {
  transformCode,
  log,
  stubIpfs,
  getIpfs,
  codeAdd,
  codeGet
}

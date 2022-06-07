/*
 * @Date: 2022-06-01 16:47:51
 * @Description: mock
 */

const chokidar = require('chokidar')
const path = require('path')
const { spawn } = require('cross-spawn')

const cwd = process.cwd()

let serve = null

const args = process.argv.slice(2)

const port = args.find((item) => item.startsWith('port=')).slice(5)

chokidar.watch(path.join(cwd, 'mock')).on('all', (event, pathname) => {
  // console.log(event, pathname);
  if (serve) {
    const result = serve.kill()
    if (result) {
      serve = spawn('node', [path.join(__dirname, './serve.js'), port], {
        stdio: 'inherit',
      })
    }
  } else {
    serve = spawn('node', [path.join(__dirname, './serve.js'), port], {
      stdio: 'inherit',
    })
  }
});

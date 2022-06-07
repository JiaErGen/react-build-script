#!/usr/bin/env node

/*
 * @Date: 2022-05-25 14:14:09
 * @Description: 启动编译
 */

const { spawn } = require('cross-spawn');
const path = require('path')

const argv = process.argv.slice(2)

if (argv.includes('--dev')) {
  process.env.NODE_ENV = 'dev'
  spawn('node', [path.join(__dirname, './dev.js'), ...argv], {
    stdio: 'inherit',
  })
}

if (argv.includes('--build')) {
  process.env.NODE_ENV = 'build'
  spawn('node', [path.join(__dirname, './prod.js'), ...argv], {
    stdio: 'inherit',
  })
}

if (argv.includes('--analyzer')) {
  process.env.NODE_ENV = 'build'
  spawn('node', [path.join(__dirname, './analyzer.js'), ...argv], {
    stdio: 'inherit',
  })
}

if (argv.includes('--init')) {
  spawn('node', [path.join(__dirname, './init/index.js'), ...argv], {
    stdio: 'inherit',
  })
}
/*
 * @Date: 2022-06-07 19:07:59
 * @Description: 快速生成模板
 */

const path = require('path')
const fs = require('fs-extra')
const cwd = process.cwd()

const name = process.argv[3]

fs.copy(path.join(__dirname, 'template'), path.join(cwd, name))
  .then(() => console.log('项目创建成功!'))
  .catch(err => console.error(err))
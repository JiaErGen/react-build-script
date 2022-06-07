/*
 * @Date: 2022-06-01 16:47:51
 * @Description: mock serve
 */

const port = Number(process.argv[2])

const express = require('express')
const path = require('path')
const app = express()
const cwd = process.cwd()

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

try {
  require(path.join(cwd, 'mock'))(app)
} catch (e) {

}

app.listen(port, () => {
  console.log(`mock修改成功：http://localhost:${port}`)
})

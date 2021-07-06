const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})   

app.get('/request', (req, res, next) => {
  req.name = '张三';
  next(); // 继续执行下面的中间件
})

app.get('/request', (req, res) => {
  res.send(req.name);
})
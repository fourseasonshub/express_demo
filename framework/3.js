const express = require('express')
const app = express()
const port = 3000

// 接收所有请求的中间件
/* 注意：app.use中的next非常重要，如果在app.use里面，
在处理完这个请求以后，没有将控制权交给下一个中间件， 
但是又没有对客户端做出响应，那么客户端就接收不到任何结果
*/
app.use((req, res, next) => {
    console.log('请求走了app.use中间件');
    next();// 可以去掉next方法，看看效果（客户端一直等待响应）
})

// 当客户端请求/request这个路径时，才走这个中间件
app.use('/request', (req, res, next) => {
    console.log('请求走了app.use / request中间件');
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/list', (req, res) => {
    res.send('/list');
})

app.get('/request', (req, res, next) => {
  req.name = '张三';
  next();
})

app.get('/request', (req, res) => {
  res.send(req.name);
})
// 引入express框架
const express = require('express') 
const app = express()
// 引入body-parser'
const bodyParser = require('body-parser') // 返回模块对象
const port = 3000

// http://localhost:3000/index/123
app.get('/index/:id', (req, res) => {
    res.send(req.params)
})

// http://localhost:3000/index/123/zhangsan/20
// app.get('/index/:id/:name/:age/', (req, res) => {
//     res.send(req.params)
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

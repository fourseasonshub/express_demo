// 引入express框架
const express = require('express') 
const app = express()
const port = 3000

// 访问路径为http://localhost:3000/index?name=zhangsan&age=20&sex=男
app.get('/index', (req, res) => {
    // 获取get请求参数
    res.send(req.query)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

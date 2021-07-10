// 引入express框架
const express = require('express') 
const app = express()
const port = 3000

// 引入模块化路由对象(路由模块)
const home = require('./route/home')
const admin = require('./route/admin')

// 匹配home路由模块
app.use('/home', home)

// 匹配admin路由模块
app.use('/admin', admin)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

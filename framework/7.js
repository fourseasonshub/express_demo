// 引入express框架
const express = require('express') 
// 返回的express是一个方法
// 在js当中，方法也属于对象（函数对象），express方法就是一个函数对象
// 如果它是一个对象，那么在对象下面也可以挂载方法
// 创建网站服务器
const app = express()
const port = 3000

// express方法（函数对象），下有一个函数Router
// express.Router()是用来创建路由的
// 它的返回值就是一个路由对象

// 创建路由对象
// home就是一个路由对象
const home = express.Router()

// 为当前路由对象匹配一个请求路径
// 当客户端访问什么请求路径时，我们使用这个路由对象来处理这个请求
// 当客户端请求路径以/home开头时，使用home这个路由对象来处理这个请求，具体的请求处理需要到二级路由中去处理
app.use('/home', home)  // home不是一个请求处理函数，它只是一个路由对象，是一级路由，具体的请求处理需要到二级路由中去处理

// 调用路由对象下的get方法和post方法创建二级路由
home.get('/index', (req, res) => {
    res.send('欢迎来到博客首页页面')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

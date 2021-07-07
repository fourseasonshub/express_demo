const express = require('express')
const app = express()
const port = 3000

// 网站公告
// 这里会匹配到所有请求
// app.use((req, res, next) => {
//     res.send('当前网站正在维护...');
//     // 并没有调用next方法，请求到这里直接结束
// })

// 路由保护
app.use('/admin', (req, res, next) => {
    // 模拟用户登录
    let isLogin = true;
    // 如果用户登录
    if(isLogin) {
        // 让请求继续向下执行
        next();
    }else {
        // 如果用户没有登录，直接对客户端做出响应
        res.send('您还没有登录，不能访问/admin这个页面')
    }
    
})

// 到达这个路由之前，我们需要对用户是否登录进行判断
app.get('/admin', (req, res) => {
    res.send('您已登录，可以访问当前页面')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/list', (req, res) => {
    res.send('/list');
})

// 自定义404页面
// 匹配请求的不存在的路径
app.use((req, res, next) => {
    // 增加这一句，为客户端响应404状态码以及提示信息
    res.status(404);
    res.send('当前访问的页面是不存在的') // 如果没有res.status(404)，虽然提示页面不存在，但是此时返回的状态码为200，访问的路径不存在，应该返回404
    // 注意：res.status方法、res.send方法是可以链式调用的
    // res.status(404).send('当前访问的页面是不存在的');
})


// 引入express框架
const express = require('express') 
const app = express()
// 引入body-parser'
const bodyParser = require('body-parser') // 返回模块对象
const port = 3000

// npm i body-parser
// 使用bodyParser去处理请求参数
// 使用app.use拦截所有的请求
/* 
使用bodyParser.urlencoded方法对请求进行处理，
方法内部会检测当前请求中是否包含请求参数，
如果包含，会接收请求参数，并将请求参数转换为对象类型，
然后为req对象添加一个熟悉body，将转换为对象的请求参数赋值给req.body属性
最后在方法内部，调用了next方法，将请求控制权交给下一个中间件
// 所以接下来我们就可以在路由中，通过req.body属性拿到这个请求参数
 */
// extended: false方法内部使用querystring模块来处理请求参数的格式
// extended: true方法内部使用第三方qs模块来处理请求参数的格式
app.use(bodyParser.urlencoded({
    extended: false
}))

app.post('/add', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

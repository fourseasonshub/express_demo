// 引入express框架
const express = require('express') 
const app = express()
// 引入body-parser'
const bodyParser = require('body-parser') // 返回模块对象
const port = 3000

// 注意这里，为啥app.use里面使用了函数调用bodyParser.urlencoded({extended: false})，而不是一个处理函数
// 因为函数调用bodyParser.urlencoded({extended: false})仍然返回了一个函数，返回的这个函数作为处理函数
// app.use(bodyParser.urlencoded({
//     extended: false
// }))

// 比如，示例
app.use(fn({ a: 1}))
// app.use(fn({ a: 2}))

function fn(obj) {
    return function(req, res, next) {
        if(obj.a == 1) {
            console.log(req.url);
        }else {
            console.log(req.method);
        }
        next();
    }
}

app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

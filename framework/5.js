const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

// 访问/index请求地址的时候，程序会抛出一个错误，当程序抛出错误，会自动去执行错误处理中间件
app.get('/index', (req, res, next) => {
    /* 同步错误 */
    // 手动抛出一个错误，让程序发生错误
    // throw new Error('程序发生了未知错误')
    // res.send('程序正常执行') // 如果程序正常执行就不会执行错误处理中间件了

    /* 异步错误 */
    fs.readFile('./demo.txt','utf8', (err, result) => {
        if(err) {
            next(err); // 手动触发错误处理中间件
        }else {
            res.send(result)
        }
    })
})

// 错误处理中间件
app.use((err, req, res,next) => {
    // res.status(500).send('服务器发生未知错误')
    // 程序发生错误是有一些原因的，我们希望将原因直接输出到页面当中，或者说响应给客户端
    // err对象其实就是错误对象，err.message中就是错误信息
    res.status(500).send(err.message)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



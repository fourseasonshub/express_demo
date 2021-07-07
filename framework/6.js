const express = require('express')
const fs = require('fs') // fs为node.js内置模块
const promisify = require('util').promisify // util为node.js内置模块
const readFile = promisify(fs.readFile); // 使用promisify方法把fs.readFile进行包装，包装成异步函数的形式
const app = express()
const port = 3000


// 异步API写法
// app.get('/index', (req, res, next) => {
//     fs.readFile('./demo.txt','utf8', (err, result) => {
//         if(err) {
//             next(err); // 手动触发错误处理中间件
//         }else {
//             res.send(result)
//         }
//     })
// })


// 异步函数写法
app.get('/index', async (req, res, next) => {
    try{
        await readFile('./demo.txt')
    }catch(err) {
        next(err)   // 手动触发错误处理中间件，并把错误信息传递过去
    }
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



const express = require('express') 

// 创建路由对象
const admin = express.Router()

admin.get('/index', (req, res) => {
    res.send('欢迎来到博客管理页面')
})

// 导出此模块的路由对象（路由模块）
module.exports = admin
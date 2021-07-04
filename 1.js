// 引入express框架
// 返回值是一个方法，通过调用这个方法我们就可以创建网站服务器了
// 当我们使用了express后，我们就不需要调用原生Node中http模块的createServer方法创建网站服务器了
const express = require('express') 
// 创建网站服务器
// app为网站服务器对象
const app = express()

// 创建路由
// 客户端要想服务器端发送请求，作为服务器端来讲，它还要创建路由，以响应客户端的请求
// express如何创建路由呢？实际上跟使用第三方模块router是一模一样的
// app网站服务器下面有对应的get方法和post方法用来分别接收get请求和post请求
app.get('/', (req, res) => {    // 当客户端什么也不写，只访问localost:3000，实际上默认的返回地址是/
    // 现在我们不再使用原生Node的res.end方法对客户端进行响应了
    // 而是使用res.send方法
    // send方法也会对客户端进行响应
    // send方法内部
    // 1、帮我们自动检测内容的类型
    // 2、帮我们把内容的类型自动设置到响应头当中（原生Node中需要使用res.writeHead方法手动去设置设置响应类型的）
    // 3、同时帮我们设置响应内容的编码（防止出现乱码）
    // 4、它还可以帮我们自动设置http状态码
    // send方法能做的事情比end方法多得多
    res.send('Hello Express')

})

app.get('/list', (req, res) => {
    res.send({name: '张三', age: 20}) // send内部除了可以传字符串，还可以传JSON对象
})


// 监听端口
// 光有网站服务器还不行，我们还需要让服务器监听端口，它才能对外提供服务
app.listen(3000, (req, res) => {
    console.log('网站启动');
});
console.log('网站服务器启动成功');

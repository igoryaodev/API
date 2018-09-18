## css less sass
## html
## js
## vue, react
## 性能、时间优化
## webpack
## git gitlab nginx node mongodb 
## 前端架构，前端自动化

## 引擎模板

pug(Jade), ejs




熟悉使用linux常用命令，从购买域名服务器到项目部署上线
熟悉使用nginx nodejs代理服务
熟悉使用git常用命令，自己搭建过gitlab，bitbucket。
熟悉使用webpack，gulp打包工具，手写过webpack4 + react的项目脚手架
熟悉使用nodejs，写过node + koa2 + mongodb + mogoose的项目
node + express项目中使用过pug(Jade), ejs引擎模板
写过大约一年的java前端

前后端物理分离
发布部署分离
模板由前端维护(react ssr)
交互性、非SEO页面：后端负责接口，前端负责展现，通过接口读取数据在浏览器端渲染


分离需要做什么
代码分离 使用git来做代码版本管理
使用webpack，做模块管理 代码分离后，我们可以使用目前前端主流的框架、工具，搭建友好的开发环境、流程
分离之后，请求后端接口，联调、debug，都需要设置代理
自动化发布(Jenkins + githook 前端自动化部署)
服务器配置 考虑如何部署前端代码(node + nginx)

发布的流程

代码提交
打包构建
备份服务器当前文件 - 回滚使用
将构建结果同步到服务器目录(上传包解压替换)

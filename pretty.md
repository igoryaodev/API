## 前端优化总结

### 优化用户体验
| 文字 | 图片 | 动效 | 错误页 |
| :------: | :------: | :------: | :------: |
|占位图|占位图，大小, 清晰度|流畅度，展示效果|展示效果，信息告知|


### 优化响应时间

##### 静态资源
| css | js | html | 图片 | 音/视频 |
| :------: | :------: | :------: | :------: |
| 配置cdn, 瘦身压缩 | 同css | 同css | 同css | 同css |
| 抽象公用模版，去除冗余，选择性缓存 | 同css | 同css | 字体图标，CSS Sprite, 本地缓存（选择性加密） | 本地缓存（选择性加密） |
| 拆分，按需加载 | 拆分，按需加载 | | |
| 预渲染首屏（服务器） ||||

##### 数据接口

##### 渲染/应用初始化
##### 日志管理

[客户端HTTP协议缓存的研究](https://blog.csdn.net/m_xiaoer/article/details/70750643)
[Web静态资源缓存及优化-美团点评点餐](https://juejin.im/post/5a098b5bf265da431a42b227)
[HTTP Headers - MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)
[HTTP Header 详解](https://www.jianshu.com/p/92246c963268)
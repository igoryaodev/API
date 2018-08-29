## react

### react简介

```
react 是专注于view层的UI库。
优点：
1、跨平台。Learn Once,Write Anywhere. 跨平台是react最大的亮点。react-native提供相应的组件如view、Text、TextInput等，组件依赖react如生命周期、状态。
react-native基于Virtual DOM 渲染出原生控件，react组件可映射为对应的原生控件。可输出Web Dom, ios控件，安卓控件。
2、组件化。组件化的好处在于可以隔离，每个组件都有自己的生命周期，便与管理维护、修改、测试和阅读
3、Virtual DOM。真实页面对应一个DOM树。react把真实DOM树转换成javascript对象树，也就是Virtual DOM。
每次数据更新都将重新计算Virtual DOM并与上一次生成的Virtual DOM做对比，对发生变化的部分做“批量更新”，
使用shouldComponentUpdate生命周期回调来减少数据变化后不必要的Virtual DOM对比过程，提升性能。(构建与更新都在内存中完成)
4、函数式编程。
 1）代码简洁，开发快速。
 2）接近自然语言，易于理解。
 3）更方便的代码管理。
 4）易于"并发编程"。
（注：函数是"第一等公民"，指的是函数与其他数据类型一样，处于平等地位，可以赋值给其他变量函数式编程要求，只使用表达式，不使用语句。也就是说，
 每一步都是单纯的运算，而且都有返回值。函数式编程强调没有"副作用"，意味着函数要保持独立，所有功能就是返回一个新的值，没有其他行为，
尤其是不得修改外部变量的值。引用透明，函数的运行不依赖于外部变量或"状态"，只依赖于输入的参数，任何时候只要参数相同，引用函数所得到的返回值总是相同的。）
5、jsx语法糖。(静态编译)
6、大厂与生态。

以上优点并非react独有，但也算集各大优势于一身。

```
##### 链接  [静态编译，CoffeeScript](http://coffee-script.org/ 'CoffeeScript')

### jsx语法

```
1、类xml语法。标签一定要闭合，只允许被一个标签包裹。
2、DOM元素与组件元素，Title生成组件元素，Menu中的ul生成DOM元素。
3、注释。{/* content */}
4、Es6 rest/spread, 表达式{}
5、元素属性，省略属性值皆默认为true。className替换class,htmlFor替换for;其它onClick, onLoad,fontSize,data-name,checked...

const titleLayout = {
  xs: { span: 2, offset: 0 },
  xl: { span: 2, offset: 0 },
  lg: { span: 2, offset: 0 },
  md: { span: 2, offset: 0 },
  sm: { span: 2, offset: 0 },
  style: {
    width: 160,
    border: '1px solid #eee',
    padding: 0,
    minHeight: 45,
    overFlow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
  },
}
const Title = () => (
  {/*
  checked省略属性值默认为true
  */}
  <div className="title" {...titleLayout}  data-name="menu" onClick={(e) => this.handle(e)} checked>
    { 
      true ? 'menu' : (
        <em>title</em>
      )
    }
  </div>
  )
const Menu = () => (
  <ul>
    {/*<li>menu1</li>
    <li>menu2</li>*/}
    <li>menu3</li>
    <li>menu4</li>
    <li><Title /></li>
  </ul>
)
const Layout = () => (
  <Menu />
)

6、动态html

const htmlTemplate = `
  <div>
    <div><img src="..." /><div>
    <article>
      <header>
        <h1>title</h1>
      </header>
      <content>
        <p>content</p>
      <content/>
    </article>
  </div>
`
const Article = () => (
  <div>
    ......
    <div dangerouslySetInnerHTML={
      _html: {htmlTemplate}
    } />
  </div>
)

7、HTML转义。react会将所有要显示到DOM的字符串转义，防止xss。
<div dangerouslySetInnerHTML={
  _html: `&copy; 2018`
  } />

```

### react生命周期
![react生命周期](https://upload-images.jianshu.io/upload_images/12041061-6e442aac7b504370.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 'react')

##### 链接  [图解ES6中的React生命周期](https://juejin.im/post/5a062fb551882535cd4a4ce3 'react')

```
import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  // 静态类型检测
  static propTypes = {
    name: PropTypes.string,
    handle: PropTypes.func
  }

  // 默认类型
  static defaultProps = {
    name: '秦桥云课堂'
  }

  // 
  constructor(props) {
    super(props)
    this.state = {
      logo: 'https://...'
    }
  }

}

1、PropTypes 由于javascript不是强类型语言。react补足静态类型检测，开发环境中会在控制台打印warning日志，正式环境不检测
2、propTypes 和defaultProps分别代表props类型检测和默认类型。都被声明为静态属性，意味着从类外面可以访问到： App.propsTypes.name，App.defaultProps.name
con




```


### react组件

##### 组件通信
##### 组件抽象 
##### 组件优化 

### react样式

### react动画 

### react数据流


### react事件

### react多语言

### react服务端渲染同构

### react+webpack

### react-router

### axios

### redux

### react+redux+react-redux+react-router-dom
## css 面试题汇总

[css参考手册](http://www.css88.com/book/css/values/length/vw.htm)
[BAT及各大互联网公司2014前端笔试面试题--Html,Css篇](https://www.cnblogs.com/coco1s/p/4034937.html)
[ 50道CSS基础面试题（附答案）2018-02-22](https://segmentfault.com/a/1190000013325778)
[前端开发面试题之 CSS](https://www.jianshu.com/p/10a7959033f8)
[前端开发面试题总结之——CSS3 2017-03-02](https://juejin.im/entry/58b7ad418ac24766f5609206)
[CSS 面试题解答 2017-02-25](https://www.jianshu.com/p/4a11f07791d3)
#### 1 CSS的盒子模型

```
1）标准盒模型，怪异盒模型

标准盒子模型：宽度 = 内容的宽度（content）+ border + padding + margin
低版本IE盒子模型：宽度 = 内容宽度（content+border+padding）+ margin

2）盒模型转换：
box-sizing: border-box;
  (IE传统盒子模型,设置元素的height/width属性指的是border + padding + content部分的高/宽)
box-sizing: border-box;
  (W3C的标准盒子模型,设置元素的 height/width 属性指的是content部分的高/宽)
```

#### 2 CSS选择器

```
1）CSS选择符有哪些

  通配符选择器（*）
  id选择器（#classId）
  类选择器（.className）
  标签选择器（div，h1，p，span，table）
  相邻选择器（h1 + p）
  子选择器（ul > li）
  后代选择器（li a）
  属性选择器（a[rel = "external"]）
  伪类选择器（a:hover，li:nth-child）

2）继承

  可继承：font-size，font-family，color
  不可继承：border，padding，margin，width，height

3）优先级权重计算
  
  important的权重为     1,0,0,0
  ID的权重为            0,1,0,0
  类的权重为             0,0,1,0
  伪类的权重为           0,0,1,0
  属性的权重为           0,0,1,0
  标签的权重为           0,0,0,1
  伪对象的权重为         0,0,0,1
  通配符的权重为         0,0,0,0

  就近原则，同权重情况下以样式定义最近者为准；
  载入样式以最后载入的定位为准；
  优先级：
      //!important > id > class > tag
      //important 比 内联优先级高
      important > 内联样式 > ID > 类 | 伪类 | 属性选择 > 标签 | 伪元素 > 继承 > 通配符

4）CSS3新增伪类
  p:first-of-type 选择属于其父元素的首个元素
  p:last-of-type 选择属于其父元素的最后元素
  p:only-of-type 选择属于其父元素唯一的元素
  p:only-child 选择属于其父元素的唯一子元素
  p:nth-child(2) 选择属于其父元素的第二个子元素
  :enabled :disabled 表单控件的禁用状态。
  :checked 单选框或复选框被选中

```

#### 3 如何居中div
```
1) 文本流中（水平居中）
<div style="margin: 0 auto;...">...</div>

2）浮动元素（水平&垂直居中）
  //父级以上元素不能设置transform属性
  border: 1px solid red;
  float: left;
  position: absolute;
  width: 200px;
  height: 100px;
  left: 50%;
  top: 50%;
  margin: -50px 0 0 -100px;

3）绝对定位（水平居中）
  border: 1px solid black;
  position: absolute;
  width: 200px;
  height: 100px;
  margin: 0 auto;
  left: 0;
  right: 0;

4）flex布局（水平&垂直居中）
  display: flex;
  justify-content: center;
  align-items: center;

```

#### 4 flex, grid, columns

flex
紧跟在 -webkit-, -ms- 或 -moz- 后的数字为支持该前缀属性的第一个版本。

|属性|chrome|IE|firefox|safari|Opera|
|:------:|:------:|:------:|:------:|:------:|:------:|
|flex|29.0|21.0 -webkit- 11.0|10.0 -ms- 28.0|18.0 -moz-  9.0|6.1 -webkit-  17.0|

columns
columns：[ column-width ] || [ column-count ]
[!columns](https://segmentfault.com/img/bVTQJq?w=1134&h=130 'columns')

```
1) CSS3 flexbox（弹性盒布局模型）,以及适用场景
  该布局模型的目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。
  在传统的布局方式中，block 布局是把块在垂直方向从上到下依次排列的；而 inline 布局则是在水平方向来排列。弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。
  试用场景：弹性布局适合于移动前端开发，在Android和ios上也完美支持。

2) CSS3 Grid布局
  是一个基于网格的二维布局系统，目的是用来优化用户界面设计

3) CSS3 columns(多列布局)
  CSS3中新出现的多列布局(multi-column)是传统HTML网页中块状布局模式的有力扩充。
  这种新语法能够让WEB开发人员轻松的让文本呈现多列显示。我们知道，当一行文字太长时，
  读者读起来就比较费劲，有可能读错行或读串行；人们的视点从文本的一端移到另一端、
  然后换到下一行的行首，如果眼球移动浮动过大，他们的注意力就会减退，容易读不下去。
  所以，为了最大效率的使用大屏幕显示器，页面设计中需要限制文本的宽度，让文本按多列呈现，
  就像报纸上的新闻排版一样。
```
[CSS：Grid 布局](https://juejin.im/entry/5894135c8fd9c5a19507f6a1)
[CSS3多列布局(columns)的用法](http://www.webhek.com/post/css3-multi-columns.html)
[Flex 布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

#### 5 display

```
  inline（默认）   --内联
  none            --隐藏
  block           --块显示
  table           --表格显示
  list-item       --项目列表
  inline-block    --内联块
```

#### 6 position

```
  absolute: 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
  fixed （老IE不支持）: 生成绝对定位的元素，相对于浏览器窗口进行定位。
  relative: 生成相对定位的元素，相对于其正常位置进行定位。
  static: 默认值。没有定位，元素出现在正常的流中 忽略 top, bottom, left, right z-index 声明）。
  inherit: 规定从父元素继承 position 属性的值。

```

#### 7 CSS3新特性

```
  RGBA和透明度
  background-image background-origin(content-box/padding-box/border-box) background-size background-repeat
  word-wrap（对长的不可分割单词换行）word-wrap：break-word
  文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）
  font-face属性：定义自己的字体
  圆角（边框半径）：border-radius 属性用于创建圆角
  边框图片：border-image: url(border.png) 30 30 round
  盒阴影：box-shadow: 10px 10px 5px #888888
  媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性
  CSS3新增伪类选择器

```

#### 8 用纯CSS创建一个三角形的原理是什么

  采用的是均分原理
  非常有意思的是盒子都是一个矩形或正方形，从形状的中心，向4个角上下左右划分4个部 

```
代码的实现

  第一步 保证元素是块级元素
  第二步 设置元素的边框
  第三步 不需要显示的边框使用透明色

  .square{  
       width:0;  
       height:0;  
       margin:0 auto;  
       border:6px solid transparent;  
       border-top: 6px solid red;  
   }  
  第二种写法：
  .square{  
       width:0;  
       height:0;  
       margin:0 auto;  
       border-width:6px;
       border-color:red transparent transparent transparent;
       border-style:solid dashed dashed dashed;//为了兼容IE6，把没有的边框都设置为虚线
   }
```

#### 9 一个满屏品字布局如何设计

```
第一种真正的品字：
  三块高宽是确定的；
  上面那块用margin: 0 auto;居中；
  下面两块用float或者inline-block不换行；
  用margin调整位置使他们居中。

第二种全屏的品字布局:
  上面的div设置成100%，下面的div分别宽50%，然后使用float或者inline使其不换行。
```
#### 10 常见的兼容性问题
```
//postcss

不同浏览器的标签默认的margin和padding不一样。
*{margin:0;padding:0;}

IE6双边距bug：块属性标签float后，又有横行的margin情况下，
在IE6显示margin比设置的大。hack：display:inline;将其转化为行内属性。
渐进识别的方式，从总体中逐渐排除局部。首先，巧妙的使用“9”这一标记，
将IE浏览器从所有情况中分离出来。接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

{
background-color:#f1ee18;/*所有识别*/
.background-color:#00deff\9; /*IE6、7、8识别*/
+background-color:#a200ff;/*IE6、7识别*/
_background-color:#1e0bd1;/*IE6识别*/
}
设置较小高度标签（一般小于10px），在IE6，IE7中高度超出自己设置高度。
hack：给超出高度的标签设置overflow:hidden;或者设置行高line-height 小于你设置的高度。
IE下，可以使用获取常规属性的方法来获取自定义属性,也可以使用getAttribute()获取自定义属性；
Firefox下，只能使用getAttribute()获取自定义属性。解决方法:统一通过getAttribute()获取自定义属性。
Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,
可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。
超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了。
解决方法是改变CSS属性的排列顺序:L-V-H-A ( love hate ): a:link {} a:visited {} a:hover {} a:active {}
```
11 link和@import的区别？
```
（1）link属于XHTML标签，而@import是CSS提供的。
（2）页面被加载时，link会同时被加载，
     而@import引用的CSS会等到页面被加载完再加载。
（3）import只在IE 5以上才能识别，而link是XHTML标签，无兼容问题。
（4）link方式的样式权重高于@import的权重。
（5）使用dom控制样式时的差别。当使用javascript控制dom去改变样式的时候，
     只能使用link标签，因为@import不是dom可以控制的。
```
12 什么是CSS reset

[http://meyerweb.com/eric/tools/css/reset/reset200802.css](http://meyerweb.com/eric/tools/css/reset/reset200802.css)
```
在不同浏览器之间，默认样式有着诸多差异和问题，而为了在不同浏览器之间具备相同的视觉效果，开发人员往往会在样式表文件中引入一段CSS代码，如http://meyerweb.com/eric/tools/css/reset/reset200802.css，我们把这个过程叫做CSS reset。

当然，好处就和他的作用一样。但是我们应该认识其缺点，很多如排版标签，列表标签等这样的语义元素就失去了他的意义，在没有为其设置其他样式时，视觉上和其他内容也没了区别；如果页面内有第三方内容嵌入，则会影响第三方内容的视觉效果；而很多开发人员更是直接百度一段代码，复制到自己的项目中，我认为这样的开发是不负责任的。

个人认为在项目中可根据需求对一些全局样式进行设置，如字体，字号等，而对于元素的样式设置应该通过选择器精确的设置。在项目中，本人一般都会建立一个基础的样式文件，里面编写通用的类选择器，在需要的元素上添加类名达到重置的效果。如


.no-padding {padding: 0;}
.only-content {padding: 0;margin: 0;border: 0}

<body class="only-content user-difined-className"></body>
```

#### 14 为什么要初始化CSS样式
```
  因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，
  如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
```
#### 15 absolute的containing block计算方式跟正常流有什么不同？
```
无论属于哪种，都要先找到其祖先元素中最近的 position 值不为 static 的元素，然后再判断：
若此元素为 inline 元素，则 containing block 为能够包含这个元素生成的第一个和最后一个 
inline box 的 padding box (除 margin, border 外的区域) 的最小矩形；
否则,则由这个祖先元素的 padding box 构成。
如果都找不到，则为 initial containing block。

补充：

static(默认的)/relative：简单说就是它的父元素的内容框（即去掉padding的部分）
absolute: 向上找最近的定位为absolute/relative的元素
fixed: 它的containing block一律为根元素(html/body)
```
#### 16 CSS里的visibility属性有个collapse属性值？在不同浏览器下以后什么区别？
```
当一个元素的visibility属性被设置成collapse值后，对于一般的元素，它的表现跟hidden是一样的。

chrome中，使用collapse值和使用hidden没有区别。
firefox，opera和IE，使用collapse值和使用display：none没有什么区别。
```
#### 17 display:none与visibility：hidden的区别？
```
display：none 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）
visibility：hidden 隐藏对应元素，在文档布局中仍保留原来的空间（重绘）
```
18 position跟display、overflow、float这些特性相互叠加后会怎么样？
```
display属性规定元素应该生成的框的类型；position属性规定元素的定位类型；
float属性是一种布局方式，定义元素在哪个方向浮动。
类似于优先级机制：position：absolute/fixed优先级最高，有他们在时，
float不起作用，display值需要调整。float 或者absolute定位的元素，只能是块元素或表格。
```
19 对BFC规范(块级格式化上下文：block formatting context)的理解？
```
BFC规定了内部的Block Box如何布局。
定位方案：

内部的Box会在垂直方向上一个接一个放置。
Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。
每个元素的margin box 的左边，与包含块border box的左边相接触。
BFC的区域不会与float box重叠。
BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
计算BFC的高度时，浮动元素也会参与计算。
满足下列条件之一就可触发BFC

根元素，即html
float的值不为none（默认）
overflow的值不为visible（默认）
display的值为inline-block、table-cell、table-caption
position的值为absolute或fixed
```
20 为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式？
```
浮动元素碰到包含它的边框或者浮动元素的边框停留。由于浮动元素不在文档流中，
所以文档流的块框表现得就像浮动框不存在一样。浮动元素会漂浮在文档流的块框上。
浮动带来的问题：

父元素的高度无法被撑开，影响与父元素同级的元素
与浮动元素同级的非浮动元素（内联元素）会跟随其后
若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。
清除浮动的方式：

父级div定义height
最后一个浮动元素后加空div标签 并添加样式clear:both。
包含浮动元素的父标签添加样式overflow为hidden或auto。
父级div定义zoom
```
21 上下margin重合的问题
```
在重合元素外包裹一层容器，并触发该容器生成一个BFC。
例子：

<div class="aside"></div>
<div class="text">
    <div class="main"></div>
</div>
<!--下面是css代码-->
 .aside {
            margin-bottom: 100px;  
            width: 100px;
            height: 150px;
            background: #f66;
        }
        .main {
            margin-top: 100px;
            height: 200px;
            background: #fcc;
        }
         .text{
            /*盒子main的外面包一个div，通过改变此div的属性使两个盒子分属于两个不同的BFC，以此来阻止margin重叠*/
            overflow: hidden;  //此时已经触发了BFC属性。
        }
```
22设置元素浮动后，该元素的display值是多少？
```

自动变成display:block
```

23 移动端的布局用过媒体查询吗？
```

通过媒体查询可以为不同大小和尺寸的媒体定义不同的css，适应相应的设备的显示。

<head>里边
<link rel="stylesheet" type="text/css" href="xxx.css" media="only screen and (max-device-width:480px)">

CSS : @media only screen and (max-device-width:480px) {/css样式/}
```

24 使用 CSS 预处理器吗？
```

Less sass
```

25 CSS优化、提高性能的方法有哪些？
```

避免过度约束
避免后代选择符
避免链式选择符
使用紧凑的语法
避免不必要的命名空间
避免不必要的重复
最好使用表示语义的名字。一个好的类名应该是描述他是什么而不是像什么
避免！important，可以选择其他选择器
尽可能的精简规则，你可以合并不同类里的重复规则
```

26 浏览器是怎样解析CSS选择器的？
```

CSS选择器的解析是从右向左解析的。若从左向右的匹配，发现不符合规则，
需要进行回溯，会损失很多性能。若从右向左匹配，先找到所有的最右节点，
对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，
则结束这个分支的遍历。两种匹配规则的性能差别很大，
是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），
而从左向右的匹配规则的性能都浪费在了失败的查找上面。
而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，
最终用来进行绘图。在建立 Render Tree 时（WebKit 中的「Attachment」过程），
浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的 Render Tree。
```

27 在网页中的应该使用奇数还是偶数的字体？为什么呢？
```

使用偶数字体。偶数字号相对更容易和 web 设计的其他部分构成比例关系。
Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，
而 13、15、17 px时用的是小一号的点。（即每个字占的空间大了 1 px，但点阵没变），
于是略显稀疏。
```

28 margin和padding分别适合什么场景使用？
```

何时使用margin：

需要在border外侧添加空白
空白处不需要背景色
上下相连的两个盒子之间的空白，需要相互抵消时。
何时使用padding：

需要在border内侧添加空白
空白处需要背景颜色
上下相连的两个盒子的空白，希望为两者之和。
兼容性的问题：在IE5 IE6中，为float的盒子指定margin时，
左侧的margin可能会变成两倍的宽度。通过改变padding或者指定盒子的display：inline解决。
```

29 元素竖向的百分比设定是相对于容器的高度吗？
```

当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，
但是，对于一些表示竖向距离的属性，例如 padding-top , padding-bottom ,
 margin-top , margin-bottom 等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。
```

30 全屏滚动的原理是什么？用到了CSS的哪些属性？
```

原理：有点类似于轮播，整体的元素一直排列下去，假设有5个需要展示的全屏页面，
那么高度是500%，只是展示100%，剩下的可以通过transform进行y轴定位，也可以通过margin-top实现
overflow：hidden；transition：all 1000ms ease；
```

31 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？
```

响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，
而不是为每一个终端做一个特定的版本。
基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。
页面头部必须有meta声明的viewport。

<meta name=’viewport’ content=”width=device-width, initial-scale=1. 
maximum-scale=1,user-scalable=no”>
```

32 视差滚动效果？
```

视差滚动（Parallax Scrolling）通过在网页向下滚动的时候，
控制背景的移动速度比前景的移动速度慢来创建出令人惊叹的3D效果。

CSS3实现
优点：开发时间短、性能和开发效率比较好，缺点是不能兼容到低版本的浏览器
jQuery实现
通过控制不同层滚动速度，计算每一层的时间，控制滚动效果。
优点：能兼容到各个版本的，效果可控性好
缺点：开发起来对制作者要求高
插件实现方式
例如：parallax-scrolling，兼容性十分好
```

33 ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用
```

单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。
::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。
:before 和 :after 这两个伪元素，是在CSS2.1里新出现的。
起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，
在CSS3的规范里，伪元素的语法被修改成使用双冒号，
成为::before ::after
```

34 你对line-height是如何理解的？
```

行高是指一行文字的高度，具体说是两行文字间基线的距离。
CSS中起高度作用的是height和line-height，没有定义height属性，
最终其表现作用一定是line-height。
单行文本垂直居中：把line-height值设置为height一样大小的值可以实现单行文字的垂直居中，
其实也可以把height删除。
多行文本垂直居中：需要设置display属性为inline-block。
```

35 怎么让Chrome支持小于12px 的文字？
```

p{font-size:10px;-webkit-transform:scale(0.8);} //0.8是缩放比例
```

36 让页面里的字体变清晰，变细用CSS怎么做？
```

-webkit-font-smoothing在window系统下没有起作用，
但是在IOS设备上起作用-webkit-font-smoothing：antialiased是最佳的，灰度平滑。
```

37 position:fixed;在android下无效怎么处理？
```

<meta name="viewport" content="width=device-width, initial-scale=1.0, 
maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
```

38 如果需要手动写动画，你认为最小时间间隔是多久，为什么？
```

多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms。
```

39 li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
```

行框的排列会受到中间空白（回车空格）等的影响，因为空格也属于字符,
这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。
解决方法：

可以将<li>代码全部写在一排
浮动li中float：left
在ul中用font-size：0（谷歌不支持）；可以使用letter-space：-3px
```

40 display:inline-block 什么时候会显示间隙？
```

有空格时候会有间隙 解决：移除空格
margin正值的时候 解决：margin使用负值
使用font-size时候 解决：font-size:0、letter-spacing、word-spacing
```

41 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度
```

外层div使用position：relative；
高度要求自适应的div使用position: absolute; top: 100px; bottom: 0; left: 0
```

42 png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？
```

png是便携式网络图片（Portable Network Graphics）
是一种无损数据压缩位图文件格式.优点是：压缩比高，色彩好。 
大多数地方都可以用。
jpg是一种针对相片使用的一种失真压缩方法，是一种破坏性的压缩，
在色调及颜色平滑变化做的不错。在www上，被用来储存和传输照片的格式。
gif是一种位图文件格式，以8位色重现真色彩的图像。可以实现动画效果.
webp格式是谷歌在2010年推出的图片格式，压缩率只有jpg的2/3，
大小比png小了45%。缺点是压缩的时间更久了，兼容性不好，目前谷歌和opera支持。
```

43 style标签写在body后与body前有什么区别？
```

页面加载自上而下 当然是先加载样式。
写在body标签后由于浏览器以逐行方式对HTML文档进行解析，
当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，
等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象
（即样式失效导致的页面闪烁问题）
```

44 CSS属性overflow属性定义溢出元素内容区的内容会如何处理?
```

参数是scroll时候，必会出现滚动条。
参数是auto时候，子元素内容大于父元素时出现滚动条。
参数是visible时候，溢出的内容出现在父元素之外。
参数是hidden时候，溢出隐藏。
```

45 阐述一下CSS Sprites
```

将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的 
background-image，background- repeat，background-position 
的组合进行背景定位。利用CSS Sprites能很好地减少网页的http请求，
从而大大的提高页面的性能；CSS Sprites能减少图片的字节。
```



### HTML
```
每个HTML文件里开头都有个很重要的东西，Doctype，知道这是干什么的吗？
div+css的布局较table布局有什么优点？
strong与em的异同？
你能描述一下渐进增强和优雅降级之间的不同吗?
为什么利用多个域名来存储网站资源会更有效？
请描述一下cookies，sessionStorage和localStorage的区别？
简述一下src与href的区别。
你如何理解HTML结构的语义化？
```

### CSS
```
有哪项方式可以对一个DOM设置它的CSS样式？
CSS都有哪些选择器？
CSS选择器的优先级是怎么样定义的？
CSS中可以通过哪些属性定义，使得一个DOM元素不显示在浏览器可视范围内？
超链接访问过后hover样式就不出现的问题是什么？如何解决？
行内元素和块级元素的具体区别是什么？行内元素的padding和margin可设置吗？
css中可以让文字在垂直和水平方向上重叠的两个属性是什么？
px和em的区别。
描述一个”reset”的CSS文件并如何使用它。知道normalize.css吗？你了解他们的不同之处？
```





## 一、定义。
每个名字背后都是有自己的深意的。比如行内元素：只占据它对应标签的边框所包含的空间。只能容纳文本或者其他内联元素

## 二.块级元素和内联元素的区别：
1.块元素，总是在新行上开始；内联元素，和其他元素在一行；
2.块元素，能容纳其他块元素或者内联元素；内联元素，只能容纳文本或其他内联元素；
3.块元素中高度，行高以及顶和底边距都可以控制；内联元素中高，行高及顶和底边距不可改变。

## 三.各自的特点：
1.块元素的特点：
a.总是在新行上开始；
b.高度、行高以及外边距和内边距都可控制；
c.宽度默认是它容器的100%，除非设定一个宽度；
d.他可以容纳内联元素和其他块元素。
2.内联元素的特点：
a.和其他元素都在同一行；
b.高，行高及外边距和内边距不可改变；
c.宽度就是它的文字和图片的宽度，不可改变；
d.内联元素只能容纳文本或者其他内联元素。

## 四、1.常见的块元素：
address - 地址
blockquote - 块引用
center - 举中对齐块
dir - 目录列表
div - 常用块级容易，也是css layout的主要标签
dl - 定义列表
fieldset - form控制组
form - 交互表单
h1 - 大标题
h2 - 副标题
h3 - 3级标题
h4 - 4级标题
h5 - 5级标题
h6 - 6级标题
hr - 水平分隔线
isindex - input prompt
menu - 菜单列表
noframes - frames可选内容（对于不支持frame的浏览器显示此区块内容）
noscript - 可选脚本内容（对于不支持script的浏览器显示此内容）
ol - 排序列表
p - 段落
pre - 格式化文本
table - 表格
ul - 非排序列表
2.常见的内联元素：
a - 锚点
abbr - 缩写
acronym - 首字
b - 粗体（不推荐）
bdo - bidi override
big - 大字体
br - 换行
cite - 引用
code - 计算机代码（在引用源码的时候需要）
dfn - 定义字段
em - 强调
font - 字体设定（不推荐）
i - 斜体
img - 图片
input - 输入框
kbd - 定义键盘文本
label - 表格标签
q - 短引用
s - 中划线（不推荐）
samp - 定义范例计算机代码
select - 项目选择
small - 小字体文本
span - 常用内联容器，定义文本内区块
strike - 中划线
strong - 粗体强调
sub - 下标
sup - 上标
textarea - 多行文本输入框
tt - 电传文本
u - 下划线
var - 定义变量
## 五、块级元素和内联元素之间的转换：
1.display
块元素默认display:block;行内非替换元素(a,span)默认为display：inline;行内替换元素(input)默认为display:inline-block;
a.display:none;不显示该元素，也不会保留该元素原先占有的文档流位置。
b.display:block;转换为块级元素。
c.display:inline;转换为行内元素。
d.display:inline-block;转换为行内块级元素。
2.float
当把行内元素设置完float:left/right后，该行内元素的display属性会被赋予block值，且拥有浮动特性。行内元素去除了之间的莫名空白。
3.position
当为行内元素进行定位时，position:absolute与position:fixed.都会使得原先的行内元素变为块级元素。

[面试汇总javascript 2018.04.19](https://www.jianshu.com/p/6824676ea821)
[BAT及各大互联网公司2014前端笔试面试题--JavaScript篇](http://www.cnblogs.com/coco1s/p/4029708.html)
[80% 应聘者都不及格的 JS 面试题](https://juejin.im/post/58cf180b0ce4630057d6727c)


近年来，从事JavaScript的程序员越来越多，JavaScript的曝光率也越来越高，如果你想转行试试JavaScript，不妨收下这份面试题及答案，没准用得上。当然，如果针对这些问题，你有更棒的答案，欢迎移步至评论区。

1、什么是JavaScript？（这是基本题，对很多程序员来说也是送分题！）

JavaScript是客户端和服务器端脚本语言，可以插入到HTML页面中，并且是目前较热门的Web开发语言。同时，JavaScript也是面向对象编程语言。

类似的基本题目还包括：JavaScript都有哪些类型?JavaScript是谁发明的？……

2、列举Java和JavaScript之间的区别？

Java是一门十分完整、成熟的编程语言。相比之下，JavaScript是一个可以被引入HTML页面的编程语言。这两种语言并不完全相互依赖，而是针对不同的意图而设计的。 Java是一种面向对象编程（OOPS）或结构化编程语言，类似的如C ++或C，而JavaScript是客户端脚本语言，它被称为非结构化编程。

JavaScript和ASP脚本相比，哪个更快？
JavaScript更快。JavaScript是一种客户端语言，因此它不需要Web服务器的协助来执行。另一方面，ASP是服务器端语言，因此总是比JavaScript慢。值得注意的是，Javascript现在也可用于服务器端语言（nodejs）。



4、什么是负无穷大？

负无穷大是JavaScript中的一个数字，可以通过将负数除以零来得到。

5、如何将JavaScript代码分解成几行吗？

在字符串语句中可以通过在第一行末尾使用反斜杠“\”来完成

例：document.write(“This is \a program”);

如果不是在字符串语句中更改为新行，那么javaScript会忽略行中的断点。

例：

var x=1, y=2,

z=

x+y;

上面的代码是完美的，但并不建议这样做，因为阻碍了调试。

6、什么是未声明和未定义的变量？

未声明的变量是程序中不存在且未声明的变量。如果程序尝试读取未声明变量的值，则会遇到运行时错误。未定义的变量是在程序中声明但尚未给出任何值的变量。如果程序尝试读取未定义变量的值，则返回未定义的值。

7、如何编写可动态添加新元素的代码？



8、什么是全局变量？这些变量如何声明，使用全局变量有哪些问题？

全局变量是整个代码长度可用的变量，也就是说这些变量没有任何作用域。var关键字用于声明局部变量或对象。如果省略var关键字，则声明一个全局变量。

例：// Declare a global globalVariable = “Test”;

使用全局变量所面临的问题是本地和全局变量名称的冲突。此外，很难调试和测试依赖于全局变量的代码。

9、解释JavaScript中定时器的工作？如果有，也可以说明使用定时器的缺点？

定时器用于在设定的时间执行一段代码，或者在给定的时间间隔内重复该代码。这通过使用函数setTimeout，setInterval和clearInterval来完成。

setTimeout（function，delay）函数用于启动在所述延迟之后调用特定功能的定时器。

setInterval（function，delay）函数用于在提到的延迟中重复执行给定的功能，只有在取消时才停止。

clearInterval（id）函数指示定时器停止。

定时器在一个线程内运行，因此事件可能需要排队等待执行。

10、ViewState和SessionState有什么区别？

“ViewState”特定于会话中的页面。

“SessionState”特定于可在Web应用程序中的所有页面上访问的用户特定数据。

11、什么是===运算符？

===被称为严格等式运算符，当两个操作数具有相同的值而没有任何类型转换时，该运算符返回true。

12、说明如何使用JavaScript提交表单？

要使用JavaScript提交表单，请使用

document.form [0] .submit（）;

13、元素的样式/类如何改变？

可以通过以下方式完成：

document.getElementById(“myText”).style.fontSize = “20?;

或

document.getElementById(“myText”).className = “anyclass”;

14、JavaScript中的循环结构都有什么？

For、While、do-while loops

15、如何在JavaScript中将base字符串转换为integer？

parseInt() 函数解析一个字符串参数，并返回一个指定基数的整数。parseInt（）将要转换的字符串作为其第一个参数，第二个参数是给定字符串的基础。

为了将4F（基数16）转换为整数，所使用的代码是 ：parseInt (“4F”, 16);

16、说明“==”和“===”之间的区别？

“==”仅检查值相等，而“===”是一个更严格的等式判定，如果两个变量的值或类型不同，则返回false。

17、3 + 2 +“7”的结果是什么？

由于3和2是整数，它们将直接相加。由于7是一个字符串，它将会被直接连接，所以结果将是57。

18、说明如何检测客户端机器上的操作系统？

为了检测客户端机器上的操作系统，应使用navigator.appVersion字符串（属性）。

19、Javascript中的NULL是什么意思？

NULL用于表示无值或无对象。它意味着没有对象或空字符串，没有有效的布尔值，没有数值和数组对象。

20、delete操作符的功能是什么？

delete操作符用于删除程序中的所有变量或对象，但不能删除使用VAR关键字声明的变量。

21、JavaScript中有哪些类型的弹出框？

Alert、Confirm and、Prompt

22、Void（0）怎么用？

Void（0）用于防止页面刷新，并在调用时传递参数“zero”。

Void（0）用于调用另一种方法而不刷新页面。

23、如何强制页面加载JavaScript中的其他页面？

必须插入以下代码才能达到预期效果：



24、escape字符是用来做什么的？

使用特殊字符（如单引号，双引号，撇号和＆符号）时，将使用转义字符（反斜杠）。在字符前放置反斜杠，使其显示。

例：



25、什么是JavaScript Cookie？

Cookie是用来存储计算机中的小型测试文件，当用户访问网站以存储他们需要的信息时，它将被创建。

26、解释JavaScript中的pop（）方法？

pop（）方法与shift（）方法类似，但不同之处在于Shift方法在数组的开头工作。此外，pop（）方法将最后一个元素从给定的数组中取出并返回。然后改变被调用的数组。

例：

var cloths = [“Shirt”, “Pant”, “TShirt”];

cloths.pop();

//Now cloth becomes Shirt,Pant

27、在JavaScript中使用innerHTML的缺点是什么？

如果在JavaScript中使用innerHTML，缺点是：内容随处可见；不能像“追加到innerHTML”一样使用；即使你使用+ = like“innerHTML = innerHTML +’html’”旧的内容仍然会被html替换；整个innerHTML内容被重新解析并构建成元素，因此它的速度要慢得多；innerHTML不提供验证，因此我们可能会在文档中插入有效的和破坏性的HTML并将其中断。

28、break和continue语句的作用？

Break语句从当前循环中退出。

continue语句继续下一个循环语句。

29、在JavaScript中，dataypes的两个基本组是什么？

Primitive

Reference types

原始类型是数字和布尔数据类型。引用类型是更复杂的类型，如字符串和日期。

30、如何创建通用对象？

通用对象可以创建为：

var I = new object();

31、operator类型用来做什么？

‘Typeof’是一个运算符，用于返回变量类型的字符串描述。

32、哪些关键字用于处理异常？

try… Catch-finally用于处理JavaScript中的异常。



33、JavaScript中不同类型的错误有几种？

有三种类型的错误：

Load time errors：该错误发生于加载网页时，例如出现语法错误等状况，称为加载时间错误，并且会动态生成错误。

Run time errors：由于在HTML语言中滥用命令而导致的错误。

Logical Errors：这是由于在具有不同操作的函数上执行了错误逻辑而发生的错误。

34、在JavaScript中使用的Push方法是什么？

push方法用于将一个或多个元素添加或附加到数组的末尾。使用这种方法，可以通过传递多个参数来附加多个元素。

35、什么是JavaScript中的unshift方法？

Unshift方法就像在数组开头工作的push方法。该方法用于将一个或多个元素添加到数组的开头。

36、对象属性如何分配？

属性按以下方式分配给对象：

obj[“class”] = 12;

或

obj.class = 12;

37、获得CheckBox状态的方式是什么？

alert（document.getElementById（’checkbox1’）。checked）;

如果CheckBox被检查，此警报将返回TRUE。

38、解释window.onload和onDocumentReady？

在载入页面的所有信息之前，不运行onload函数。这导致在执行任何代码之前会出现延迟。

onDocumentReady在加载DOM之后加载代码。这允许早期的代码操纵。

39、你将如何解释JavaScript中的闭包？ 什么时候使用？

Closure是与函数返回时保留在内存中的函数相关的本地声明变量。

例如：



40、一个值如何附加到数组？

可以以给定的方式将值附加到数组：

arr [arr.length] = value;

41、解释for-in循环？

for-in循环用于循环对象的属性。

for-in循环的语法是：



在每次循环中，来自对象的一个属性与变量名相关联，循环继续，直到对象的所有属性都被耗尽。

42、描述JavaScript中的匿名函数？

被声明为没有任何命名标识符的函数被称为匿名函数。一般来说，匿名函数在声明后无法访问。

匿名函数声明：



43、.call（）和.apply（）之间有什么区别？

函数.call（）和.apply（）在使用上非常相似，只是有一点区别。当程序员知道函数参数的编号时，使用.call（），因为它们必须在调用语句中被提及为参数。另一方面，当不知道数字时使用.apply（）,函数.apply（）期望参数为数组。

.call（）和.apply（）之间的基本区别在于将参数传递给函数。它们的用法可以通过给定的例子进行说明。



44、定义事件冒泡？

JavaScript允许DOM元素嵌套在一起。在这种情况下，如果单击子级的处理程序，父级的处理程序也将执行同样的工作。

45、什么样的布尔运算符可以在JavaScript中使用？

“And”运算符（&&），’Or’运算符（||）和’Not’运算符（！）可以在JavaScript中使用。

*运算符没有括号。

46、一个特定的框架如何使用JavaScript中的超链接定位？

可以通过使用“target”属性在超链接中包含所需帧的名称来实现。

>New Page

47、在web-garden和web-farm之间有何不同？

web-garden和web-farm都是网络托管系统。唯一的区别是web-garden是在单个服务器中包含许多处理器的设置，而web-farm是使用多个服务器的较大设置。

48、如何分配对象属性？

将属性分配给对象的方式与赋值给变量值相同。例如，表单对象的操作值以下列方式分配为“‘submit”：Document.form.action =“submit”

49、在JavaScript中读取和写入文件的方法是什么？

可以通过使用JavaScript扩展（从JavaScript编辑器运行），打开文件的示例来完成：

fh = fopen(getScriptPath(), 0);

50、在JavaScript中如何使用DOM？

DOM代表文档对象模型，并且负责文档中各种对象的相互交互。DOM是开发网页所必需的，其中包括诸如段落，链接等对象。可以操作这些对象以包括添加或删除等操作，DOM还需要向网页添加额外的功能。除此之外，API的使用比其他更有优势。

51、JavaScript中如何使用事件处理程序？

事件是由用户生成活动（例如单击链接或填写表单）导致的操作。需要一个事件处理程序来管理所有这些事件的正确执行。事件处理程序是对象的额外属性。此属性包括事件的名称以及事件发生时采取的操作。

52、解释延迟脚本在JavaScript中的作用？

默认情况下，在页面加载期间，HTML代码的解析将暂停，直到脚本停止执行。这意味着，如果服务器速度较慢或者脚本特别沉重，则会导致网页延迟。在使用Deferred时，脚本会延迟执行直到HTML解析器运行。这减少了网页加载时间，并且它们的显示速度更快。

53、JavaScript中的各种功能组件是什么？

JavaScript中的不同功能组件是：

First-class函数：JavaScript中的函数被用作第一类对象。这通常意味着这些函数可以作为参数传递给其他函数，作为其他函数的值返回，分配给变量，也可以存储在数据结构中。

嵌套函数：在其他函数中定义的函数称为嵌套函数。

54、解释unshift（）方法？

该方法在数组启动时起作用，与push（）不同。 它将所需数量的元素添加到数组的顶部。例如：



输出如下所示：

[” joseph “,” Jane “, ” charlie “, ” john “]

55、decodeURI（）和encodeURI（）是什么？

EncodeURl（）用于将URL转换为十六进制编码。而DecodeURI（）用于将编码的URL转换回正常。

56、为什么不建议在JavaScript中使用innerHTML？

innerHTML内容每次刷新，因此很慢。 在innerHTML中没有验证的余地，因此，更容易在文档中插入错误代码，从而使网页不稳定。

57、如何在不支持JavaScript的旧浏览器中隐藏JavaScript代码？

[原文  史上最全的Javascript面试题总结（内附答案)](https://blog.csdn.net/xingfei_work/article/details/78962991)

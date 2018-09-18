全局的对象（ global objects ）或称标准内置对象，
不要和 "全局对象（global object）" 混淆。
这里说的全局的对象是说在全局作用域里的对象。

"全局对象 （global object）” 是一个Global类的对象。
可以在全局作用域里，用this访问（但只有在非严格模式下才可以，
在严格模式下得到的是 undefined）。实际上，
全局作用域包含了全局对象的属性，还有它可能继承来的属性。

全局对象(global object)在javascript中有着重要的用途：
全局对象的属性是全局定义的符号，js程序可以直接使用。
当javascript解释器启动时(或web浏览器加载新页面时)，
它将创建一个新的全局对象，并给它一组定义的初始属性。


全局作用域中的其他对象可以由用户的脚本创建或由宿主程序提供。
浏览器作为最常见的宿主程序，其所提供的宿主对象的说明可以在这里找到：

[API 参考](https://developer.mozilla.org/zh-CN/docs/Web/API)。 
关于 [DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model)
和核心 [JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) 之间的区别，
可参阅 [JavaScript 技术概述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/JavaScript_technologies_overview) 
来了解更详细的信息。


## 标准内置对象的分类

### 值属性

这些全局属性返回一个简单值，这些值没有自己的属性和方法。

*   [`Infinity`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity )
"全局属性 Infinity 是一个数值，表示无穷大。"
*   [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)
 "全局属性 NaN 的值表示不是一个数字（Not-A-Number）。"
*   [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)
 "undefined是全局对象的一个属性。也就是说，它是全局作用域的一个变量。undefined的最初值就是原始数据类型undefined。"
*   [`null` 字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)
 "值 null 特指对象的值未设置。它是 JavaScript 基本类型 之一。"



### 函数属性
*   [`eval()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval )
"执行指定代码之后的返回值。如果返回值为空，返回undefined"
*   [`uneval()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/uneval) 
"uneval() 函数创建一个代表对象的源代码的字符串。"
*   [`isFinite()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isFinite)
 "该全局 isFinite() 函数用来判断被传入的参数值是否为一个有限数值（finite number）。在必要情况下，参数会首先转为一个数值。"
*   [`isNaN()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN) 
"isNaN() 函数用来确定一个值是否为NaN 。注：isNaN函数内包含一些非常有趣的规则；
你也可以通过ECMAScript 2015/ES6 中定义的Number.isNaN()或者 可以使用typeof 来判断该值是否为一个非数字。"
*   [`parseFloat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) 
"parseFloat() 函数解析一个字符串参数并返回一个浮点数。"
*   [`parseInt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
 "parseInt() 函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。"
*   [`decodeURI()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)
 "decodeURI() 函数解码一个由encodeURI 先前创建的统一资源标识符（URI）或类似的例程。"
*   [`decodeURIComponent()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)
 "decodeURIComponent() 方法用于解码由 encodeURIComponent 方法或者其它类似方法编码的部分统一资源标识符（URI）。")
*   [`encodeURI()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
 "encodeURI()  函数通过将特定字符的每个实例替换为一个、两个、三或四转义序列来对统一资源标识符 (URI) 进行编码 
 (该字符的 UTF-8 编码仅为四转义序列)由两个 "代理" 字符组成)。"
*   [`encodeURIComponent()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
 "encodeURIComponent()是对统一资源标识符（URI）的组成部分进行编码的方法。
 它使用一到四个转义序列来表示字符串中的每个字符的UTF-8编码
 （只有由两个Unicode代理区字符组成的字符才用四个转义字符编码）。")
*   [`escape()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/escape)
 "废弃的 escape() 方法生成新的由十六进制转义序列替换的字符串. 使用 encodeURI 或 encodeURIComponent 代替."
*   [`unescape()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/unescape)
 "已废弃的unescape() 方法计算生成一个新的字符串，其中的十六进制转义序列将被其表示的字符替换。
 上述的转义序列就像escape里介绍的一样。因为 unescape 已经废弃，
 建议使用 decodeURI或者decodeURIComponent 替代本方法。"




### 基本对象

顾名思义，基本对象是定义或使用其他对象的基础。基本对象包括一般对象、函数对象和错误对象。

*   [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)
 "Object 构造函数创建一个对象包装器。"
*   [`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Function)
 "此页面仍未被本地化, 期待您的翻译!"
*   [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Boolean)
 "此页面仍未被本地化, 期待您的翻译!"
*   [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
 "Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。
 它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的symbol注册，
 且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："new Symbol()"。"
*   [`Error`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error) 
"通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。
Error对象也可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。"
*   [`EvalError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
 "本对象代表了一个关于 eval 函数的错误.此异常不再会被JavaScript抛出，但是EvalError对象仍然保持兼容性."
*   [`InternalError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/InternalError )
"InternalError 对象表示出现在JavaScript引擎内部的错误。 
例如： "InternalError: too much recursion"（内部错误：递归过深）。"
*   [`RangeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
 "RangeError对象标明一个错误，当一个值不在其所允许的范围或者集合中。"
*   [`ReferenceError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
 "ReferenceError（引用错误） 对象代表当一个不存在的变量被引用时发生的错误。"
*   [`SyntaxError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
 "SyntaxError 对象代表尝试解析语法上不合法的代码的错误。"
*   [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
 "TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。"
*   [`URIError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/URIError)
 "URIError 对象用来表示以一种错误的方式使用全局URI处理函数而产生的错误。"


### 数字和日期对象

用来表示数字、日期和执行数学计算的对象。

*   [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)
 "JavaScript 的 Number 对象是经过封装的能让你处理数字值的对象。Number 对象由 Number() 构造器创建。"
*   [`Math`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)
 "Math 是一个内置对象， 它具有数学常数和函数的属性和方法。不是一个函数对象。"
*   [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Date)
 "此页面仍未被本地化, 期待您的翻译!"

### [字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#%E5%AD%97%E7%AC%A6%E4%B8%B2)

用来表示和操作字符串的对象。

*   [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/String)
 "此页面仍未被本地化, 期待您的翻译!"
*   [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/RegExp)
 "此页面仍未被本地化, 期待您的翻译!"

### [可索引的集合对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#%E5%8F%AF%E7%B4%A2%E5%BC%95%E7%9A%84%E9%9B%86%E5%90%88%E5%AF%B9%E8%B1%A1)

这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。

*   [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array)
 "entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。"
*   [`Int8Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)
 "Int8Array 类型数组表示二进制补码8位有符号整数的数组。内容初始化为0。
  一旦建立，你可以使用对象的方法引用数组中的元素，或使用标准数组索引语法( 即，使用括号注释)。"
*   [`Uint8Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
 "Uint8Array 数组类型表示一个8位无符号整型数组，创建时内容被初始化为0。
 创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素。"
*   [`Uint8ClampedArray`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)
 "Uint8ClampedArray（8位无符号整型固定数组） 类型化数组表示一个由值固定在0-255区间的8位无符号整型组成的数组；
 如果你指定一个在 [0,255] 区间外的值，它将被替换为0或255；如果你指定一个非整数，那么它将被设置为最接近它的整数。
 （数组）内容被初始化为0。一旦（数组）被创建，你可以使用对象的方法引用数组里的元素，
 或使用标准的数组索引语法（即使用方括号标记）。")
*   [`Int16Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)
 "The Int16Array typed array represents an array of twos-complement 16-bit signed
  integers in the platform byte order. If control over byte order is needed, 
  use DataView instead. The contents are initialized to 0\. Once established,
   you can reference elements in the array using the object's methods, 
   or using standard array index syntax (that is, using bracket notation)."
*   [`Uint16Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)
 "The Uint16Array typed array represents an array of 16-bit unsigned integers 
 in the platform byte order. If control over byte order is needed,
  use DataView instead. The contents are initialized to 0\. Once established, 
  you can reference elements in the array using the object's methods, 
  or using standard array index syntax (that is, using bracket notation)."
*   [`Int32Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
 "The Int32Array typed array represents an array of twos-complement 32-bit signed integers
  in the platform byte order. If control over byte order is needed, use DataView instead.
   The contents are initialized to 0\. Once established, you can reference elements in 
   the array using the object's methods, or using standard array index syntax 
   (that is, using bracket notation)."
*   [`Uint32Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)
 "Uint32Array表示一个由基于平台字节序的32位无符号字节组成的数组.如果需要对字节顺序进行控制
 (译者注:即 littleEndian 或 bigEndian),请使用DataView代替.数组中每个元素的初始值都是0.一旦创建，
 你可以用对象的方法引用数组里的元素，或者使用标准的数组索引语法（即，使用中括号）。")
*   [`Float32Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)
 "Float32Array 类型数组代表的是平台字节顺序为32位的浮点数型数组(对应于 C 浮点数据类型) 。 
 如果需要控制字节顺序， 使用 DataView 替代。其内容初始化为0。一旦建立起来，
 你可以使用这个对象的方法对其元素进行操作，或者使用标准数组索引语法 (使用方括号)。"
*   [`Float64Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
 "Float64Array 类型数组代表的是平台字节顺序为64位的浮点数型数组(对应于 C 浮点数据类型) 。
  如果需要控制字节顺序， 使用 DataView 替代。其内容初始化为0。一旦建立起来，
 你可以使用这个对象的方法对其元素进行操作，或者使用标准数组索引语法 (使用方括号)。"


### [使用键的集合对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#%E4%BD%BF%E7%94%A8%E9%94%AE%E7%9A%84%E9%9B%86%E5%90%88%E5%AF%B9%E8%B1%A1)

这些集合对象在存储数据时会使用到键，支持按照插入顺序来迭代元素。

*   [`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Map)
 "此页面仍未被本地化, 期待您的翻译!"
*   [`Set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)
 "Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。"
*   [`WeakMap`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/WeakMap)
 "此页面仍未被本地化, 期待您的翻译!"
*   [`WeakSet`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
 "WeakSet 对象允许你将弱保持对象存储在一个集合中。"

### [矢量集合](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#%E7%9F%A2%E9%87%8F%E9%9B%86%E5%90%88)

[SIMD](https://developer.mozilla.org/en-US/docs/Glossary/SIMD)
 "SIMD: SIMD (pronounced "seem-dee") is short for Single Instruction/Multiple Data which
  is one classification of computer architectures. SIMD allows one same operation to 
  be performed on multiple data points resulting in data level parallelism and thus 
  performance gains, for example for 3D graphics and video processing, 
  physics simulations or cryptography, and other domains.") 
  矢量集合中的数据会被组织为一个数据序列。

*   [`SIMD`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/SIMD)
*   [`SIMD.Float32x4`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Float32x4)
*   [`SIMD.Float64x2`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Float64x2)
*   [`SIMD.Int8x16`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Int8x16) 
*   [`SIMD.Int16x8`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Int16x8)
*   [`SIMD.Int32x4`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Int32x4) 
*   [`SIMD.Uint8x16`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Uint8x16)
*   [`SIMD.Uint16x8`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Uint16x8)
*   [`SIMD.Uint32x4`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Uint32x4) 
*   [`SIMD.Bool8x16`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Bool8x16)
*   [`SIMD.Bool16x8`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Bool16x8)
*   [`SIMD.Bool32x4`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Bool32x4) 
*   [`SIMD.Bool64x2`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Bool64x2)

### [结构化数据](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#%E7%BB%93%E6%9E%84%E5%8C%96%E6%95%B0%E6%8D%AE)

这些对象用来表示和操作结构化的缓冲区数据，或使用 JSON （JavaScript Object Notation）编码的数据。

*   [`ArrayBuffer`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
 "The source for this interactive example is stored in a GitHub repository. If you'd like 
 to contribute to the interactive examples project, please clone 
 https://github.com/mdn/interactive-examples and send us a pull request."
*   [`SharedArrayBuffer`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
 "SharedArrayBuffer 对象用来表示一个通用的，固定长度的原始二进制数据缓冲区，
 类似于 ArrayBuffer 对象，它们都可以用来在共享内存（shared memory）上创建视图。
 与 ArrayBuffer 不同的是，SharedArrayBuffer 不能被分离。") 
*   [`Atomics`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics)
 "Atomics 对象提供了一组静态方法用来对 SharedArrayBuffer 对象进行原子操作。"
*   [`DataView`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView)
 "DataView 视图是一个可以从 ArrayBuffer 对象中读写多种数值类型的底层接口，在读写时不用考虑平台字节序问题。"
*   [`JSON`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON )
"JSON对象包含两个方法: 用于解析 JavaScript Object Notation  (JSON) 的 parse() 方法，
以及将对象/值转换为 JSON字符串的 stringify() 方法。除了这两个方法, JSON这个对象本身并没有其他作用，
也不能被调用或者作为构造函数调用。"

### [控制抽象对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#%E6%8E%A7%E5%88%B6%E6%8A%BD%E8%B1%A1%E5%AF%B9%E8%B1%A1)

*   [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 "Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。"
*   [`Generator`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)
 "生成器对象是由一个 generator function 返回的,并且它符合可迭代协议和迭代器协议。"
*   [`GeneratorFunction`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)
 "GeneratorFunction构造器生成新的生成器函数 对象。在JavaScript中，生成器函数实际上都是GeneratorFunction的实例对象。"
*   [`AsyncFunction`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)
 "AsyncFunction 构造函数用来创建新的 异步函数 对象，JavaScript 中每个异步函数都是  AsyncFunction 的对象。"

### [反射](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#%E5%8F%8D%E5%B0%84)

*   [`Reflect`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
 "Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与处理器对象的方法相同。
 Reflect不是一个函数对象，因此它是不可构造的。"
*   [`Proxy`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
 "Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。"

### [国际化](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#%E5%9B%BD%E9%99%85%E5%8C%96)

为了支持多语言处理而加入ECMAScript的对象。

*   [`Intl`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl)
 "国际化的构造函数和其他构造函数的几个语言敏感的方法（可见See also）一样，
 使用同样的模式来识别语言区域和确定使用哪一种语言格式：他们都接收 locales 和 options 参数，
 使用 options.localeMatcher 属性指定的一个算法来对比应用请求的和支持的语言区域，来确定使用哪一个语言区域。"
*   [`Intl.Collator`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Collator)
 "Intl.Collator 是用于语言敏感字符串比较的 collators构造函数。"
*   [`Intl.DateTimeFormat`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)
 "交互示例的源代码存储在 GitHub 资源库。如果你愿意分布交互示例，
 请复制https://github.com/mdn/interactive-examples，并向我们发送一个pull请求。"
*   [`Intl.NumberFormat`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)
 "Intl.NumberFormat是对语言敏感的格式化数字类的构造器类"

### [WebAssembly](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#WebAssembly)

*   [`WebAssembly`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly)
 "WebAssemblyJavaScript 对象是所有 WebAssembly 相关功能的命名空间。"
*   [`WebAssembly.Module`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module)
 "所有 Module 实例继承自 Module() 构造函数的原型对象 —— 修改它会影响所有 Module 实例。"
*   [`WebAssembly.Instance`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance)
 "A WebAssembly.Instance object is a stateful, executable instance of a WebAssembly.Module.  
 Instance objects contain all the Exported WebAssembly functions that allow calling into 
 WebAssembly code from JavaScript."
*   [`WebAssembly.Memory`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory)
 "WebAssembly.Memory() 构造函数创建一个新的 Memory 对象。它包含一个可调整大小的 ArrayBuffer ，
 其内存储的是 WebAssembly 实例 所访问内存的原始字节码。"
*   [`WebAssembly.Table`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table)
*   [`WebAssembly.CompileError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError)
*   [`WebAssembly.LinkError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError)
*   [`WebAssembly.RuntimeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError)

### [其他](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects#%E5%85%B6%E4%BB%96)

*   `[arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments)`

```
```




##### Infinity 

  是全局对象（global object）的一个属性，即它是一个全局变量。

  Infinity 属性的属性特性：
  writable  false
  enumerable  false
  configurable  false

  Infinity 的初始值是 Number.POSITIVE_INFINITY。Infinity（正无穷大）大于任何值。
  该值和数学意义上的无穷大很像，例如任何正值乘以 Infinity 为 Infinity, 
  任何数值（除了Infinity 和 -Infinity）除以 Infinity 为 0。

  在 ECMAScript 5 的规范中， Infinity 是只读的（实现于 JavaScript 1.8.5 / Firefox 4）。
```

  console.log(Infinity          ); /* Infinity */  
  console.log(Infinity + 1      ); /* Infinity */  
  console.log(Math.pow(10, 1000)); /* Infinity */  
  console.log(Math.log(0)       ); /* -Infinity */  
  console.log(1 / Infinity      ); /* 0 */
```


##### NaN

  全局属性 NaN 的值表示不是一个数字（Not-A-Number）。

  NaN 属性的属性特性：
  writable  false
  enumerable  false
  configurable  false
  NaN 是一个全局对象的属性。

  NaN 属性的初始值就是 NaN，和 Number.NaN 的值一样。在现代浏览器中（ES5中）， 
  NaN 属性是一个不可配置（non-configurable），不可写（non-writable）的属性。
  但在ES3中，这个属性的值是可以被更改的，但是也应该避免覆盖。

  编码中很少直接使用到 NaN。通常都是在计算失败时，作为 Math 的某个方法的返回值出现的
  （例如：Math.sqrt(-1)）或者尝试将一个字符串解析成数字但失败了的时候
  （例如：parseInt("blabla")）。
  
  等号运算符（== 和 ===） 不能被用来判断一个值是否是 NaN。必须使用 Number.isNaN() 或 isNaN() 函数。在执行自比较之中：NaN，也只有NaN，比较之中不等于它自己。
```

  NaN === NaN;        // false
  Number.NaN === NaN; // false
  isNaN(NaN);         // true
  isNaN(Number.NaN);  // true

```

##### undefined

  全局属性undefined表示原始值undefined。它是一个JavaScript的 原始数据类型 。

  undefined 属性的属性特性：
  writable  false
  enumerable  false
  configurable  false

  undefined是全局对象的一个属性。也就是说，它是全局作用域的一个变量。
  undefined的最初值就是原始数据类型undefined。

  在现代浏览器（JavaScript 1.8.5/Firefox 4+），自ECMAscript5标准以来undefined是一个不能被配置
  （non-configurable），不能被重写（non-writable）的属性。即便事实并非如此，也要避免去重写它。

  一个没有被赋值的变量的类型是undefined。如果方法或者是语句中操作的变量没有被赋值，
  则会返回undefined（对于这句话持疑惑态度，请查看英文原文来理解）。
```

  function test(a){
      console.log(typeof a);    // undefined
      return a;
  }

  test();                       // 返回"undefined"

  一个函数如果没有使用return语句指定返回值，就会返回一个undefined值。
```


  严格相等和undefined

  你可以使用undefined和严格相等或不相等操作符来决定一个变量是否拥有值。
  在下面的代码中，变量x是未定义的，if 语句的求值结果将是true
  
```
var x;

if (x === undefined) {
// 执行这些语句
} else {
// 这些语句不会被执行
}

注意：这里是必须使用严格相等操作符（===）而不是标准相等操作符（==），
因为 x == undefined 会检查x是不是null，但是严格相等不会检查。
null不等同于undefined。
```

  Typeof 操作符和undefined

```
var x;
if(typeof x === 'undefined') {
    // 执行这些语句
}
使用 typeof的原因是它不会在一个变量没有被声明的时候抛出一个错误。

// 这里没有声明y
if(typeof y === 'undefined') {       // 没有错误，执行结果为true
   console.log("y is " + typeof y )  // y is undefined
}

if(y === undefined) {                // ReferenceError: y is not defined

}

但是，技术方面看来这样的使用方法应该被避免。JavaScript是一个静态作用域语言，
所以，一个变量是否被声明可以通过看它是否在一个封闭的上下文中被声明。
唯一的例外是全局作用域，但是全局作用域是被绑定在全局对象上的，
所以要检查一个变量是否在全局上下文中存在可以通过检查全局对象上是否存在这个属性（比如使用in操作符）。
```

Void操作符和undefined

```
void 操作符是第三种可以替代的方法。

var x;
if(x === void 0) {
    // 执行这些语句
}

// 没有声明y
if(y === void 0) {
    // 抛出一个RenferenceError错误(与`typeof`相比)
}
```


##### null

  值 null 特指对象的值未设置。它是 JavaScript 基本类型 之一。

  值 null 是一个字面量，它不像undefined 是全局对象的一个属性。
  null 是表示缺少的标识，指示变量未指向任何对象。把 null 作为尚未创建的对象，
  也许更好理解。在 APIs 中，null 常在返回类型是对象，但没关联值的地方使用。

```
// foo不存在，它从来没有被定义过或者是初始化过：
foo;
"ReferenceError: foo is not defined"

// foo现在已经是知存在的，但是它没有类型或者是值：
var foo = null; 
foo;
null
```

  null 与 undefined 的不同点：

  当检测 null 或 undefined 时，注意相等（==）与全等（===）两个操作符的区别 ，前者会执行类型转换：

```
typeof null        // "object" (因为一些以前的原因而不是'null')
typeof undefined   // "undefined"
null === undefined // false
null  == undefined // true
null === null // true
null == null // true
!null //true
isNaN(1 + null) // false
isNaN(1 + undefined) // true
```










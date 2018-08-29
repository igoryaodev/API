### 1、工厂模式
#### 用函数来封装特定接口创建对象细节，抽象创建具体对象的过程

#### createProduct函数每次都会返回一个包含三个属性的对象，解决了创建多个相似对象的问题。
```
function createProduct(name, price, description) {
    let product = new Object()
    product.name = name;
    product.price = price;
    product.description = description;
    return product;

}

或

function createProduct(name, price, description) {
    return {
        name: name,
        price: price,
        description: description
    }

}

let oneYearCard = createProduct('秦桥云阅读年卡', 300, '秦桥云阅读卡，免费畅读一年畅读类书籍')
let oneMonthCard = createProduct('秦桥云阅读月卡', 30, '秦桥云阅读卡，免费畅读一个月畅读类书籍')


拓展


1、皆开辟新内存，而非引用
let oneYearCard = createProduct('秦桥云阅读年卡', 300, '秦桥云阅读卡，免费畅读一年畅读类书籍') //先开辟内存创建新对象，再将引用地址赋给oneYearCard
let oneMonthCard = createProduct('秦桥云阅读月卡', 30, '秦桥云阅读卡，免费畅读一个月畅读类书籍')// 同上
oneYearCard.name = 'oneYearCard'
oneMonthCard.name = 'oneMonthCard'
console.log(oneYearCard.name) // oneYearCard
console.log(oneMonthCard.name) // oneMonthCard

2、引用
let oneYearCard = createProduct('秦桥云阅读年卡', 300, '秦桥云阅读卡，免费畅读一年畅读类书籍') //先开辟内存创建新对象，再将引用地址赋给oneYearCard
let oneMonthCard = oneYearCard
console.log(oneYearCard.name) // 秦桥云阅读年卡
console.log(oneMonthCard.name) // 秦桥云阅读年卡
oneMonthCard.name = 'test'
console.log(oneYearCard.name) // test
console.log(oneMonthCard.name) // test


3、实际应用，新增商品：
let list = []
function addProduct(name, price, description) {
    //do something
    return list.push({
        name: name,
        price: price,
        description: description
    })
}
...
```

### 2、构造函数模式
#### ECMAScript中的构造函数可用来创建特定类型的对象。像Object,Array这样的原生构造函数，在运行时会自动出现在执行环境中。
#### 此外，也可以创建自定义的构造函数，从而定义自定义对象类型的属性和方法。
#### 在下面的例子中，Product首字母大写，借鉴自其他面向对象语言，用于区别于其他函数。
#### 使用new操作符创建Product的新实例，会经历以下四个步骤：
#### 1）、开辟一块新内存，创建一个新对象
#### 2）、将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
#### 3）、执行构造函数中的代码为新对象添加属性）
#### 4）、返回新对象

```
function Product(name, price, description) {
    //debugger 如图2.1.1, 图2.1.2
    console.log(this) // Product {}
    this.name = name;
    this.price = price;
    this.description= description;
}
let oneYearCard = new Product('秦桥云阅读年卡', 300, '秦桥云阅读卡，免费畅读一年畅读类书籍')//先开辟内存创建Product对象，再赋值
let oneMonthCard = new Product('秦桥云阅读月卡', 30, '秦桥云阅读卡，免费畅读一个月畅读类书籍')//同上

oneYearCard与oneMonthCard保存着Product的一个不同的实例。这两个对象都有一个constructor（构造函数）属性，该属性指向Product
console.log(oneYearCard.constructor == Product) // true
console.log(oneMonthCard.constructor == Product)// true

instanceof操作符检测类型
console.log(oneYearCard instanceof Object) // true  继承自Object
console.log(oneYearCard instanceof Product) // true
console.log(oneMonthCard instanceof Object) // true
console.log(oneMonthCard instanceof Product) // true

创建自定义的构造函数意味新创建了一种类型，可以将它的实例标识为一种特定的类型

```
![图2.1.1](https://upload-images.jianshu.io/upload_images/12041061-7e544544df006329.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 '2.1.1')
![图2.1.2](https://upload-images.jianshu.io/upload_images/12041061-5968ceb000d7f83a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 '2.1.2')

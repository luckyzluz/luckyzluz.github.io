---
title: 面试题-原生JS
tags:
  - 面试
  - 原生JS
categories: 面试题总结
keywords: '前端,面试,原生JS'
abbrlink: f3e36dc4
description: 这是我整理的一些关于原生JS的面试题，如有不妥，请指正
topimg: >-
  https://img14.360buyimg.com/ddimg/jfs/t1/126644/12/18742/1131620/60b0c5a2E7f11d7c8/2d4f9f29e8c49f92.jpg
cover: >-
  https://img14.360buyimg.com/ddimg/jfs/t1/126644/12/18742/1131620/60b0c5a2E7f11d7c8/2d4f9f29e8c49f92.jpg
copyright_author: zluz
copyright_author_href: 'https://blog.wuwang.co'
copyright_url: 'https://blog.wuwang.co'
copyright_info: 此文章版权归zluz所有，如有转载，请注明来自原作者
date: 2021-05-14 14:46:21
sticky:
---
## 1.Js基本数据类型有哪些

7种,`Number`、`String`、`Boolean`、`Null`、`undefined`、`object`、`symbol`。

> 在ES5的时候，我们认知的数据类型是前6种。
>
> ES6 中新增了一种 `Symbol` 。
>
> 这种类型的对象永不相等，即始创建的时候传入相同的值，可以解决属性名冲突的问题，做为标记。

------

## 2.Ajax如何使用

> **全称：**`Asynchronous Javascript And XML`(异步传输+js+xml)。
>
> 所谓**异步**，在这里简单地解释就是：
>
> 向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，等到有了结果它自己会根据设定进行后续操作，与此同时，页面是**不会**发生整页刷新的，提高了用户体验

1. 创建`XMLHttpRequest`对象,也就是创建一个异步调用对象.
2. 创建一个新的`HTTP`请求,并指定该HTTP请求的方法、URL及验证信息.
3. 设置响应`HTTP`请求状态变化的函数.
4. 发送`HTTP`请求.
5. 获取异步调用返回的数据.
6. 使用`JavaScript`和`DOM`实现局部刷新.

```javascript
var xmlHttp = new XMLHttpRequest(); 
xmlHttp.open('GET','demo.php','true'); 
xmlHttp.send() 
xmlHttp.onreadystatechange = function(){ 
   if(xmlHttp.readyState === 4 & xmlHttp.status === 200){ 
       console.log(xhr.responseText);
   } 
} 
```

------

## 3.如何判断一个数据是NaN

**注意**:NaN首先是一个`number`类型，然后同时又有着`not a number`的意义，而不仅仅只是表达着`不是"number类型"`

关于NaN的一些操作：

1. **isNaN(n)**

```javascript
let a  = NaN 
console.log(isNaN(a))  // true
```

2. **Object.is(n)**

```javascript
let a  = NaN
console.log(Object.is(a,NaN)) // true
```

3. **封装成方法：NaN连自己本身都不相等，所以可以利用这个特性来判断这个值是不是NaN**

```javascript
 let isNaNMethod = v=>v!==v && true 
    console.log(isNaNMethod(NaN)); // true
    console.log(isNaNMethod('sdsd')); // false
    console.log(isNaNMethod(3)); // false
    console.log(isNaNMethod('3.233')); // false
    let bq = {name:'zs'}
    console.log(isNaNMethod(bq)); // false
```

4. **判断数组中是否含有NaN**

```javascript
let arr = [1,2,3,NaN]
console.log(arr.includes(NaN))  // true
```

**注意：不能用indexOf判断数组中是否含有NaN**

------

## 4.Js中null与undefined区别

**Null** 只有一个值，是 null，代表一个`空对象指针`。

**Undefined** 只有一个值，是undefined。

当一个声明了一个变量未初始化时，得到的就是undefined。undefined 是从 null 中派生出来的。

**简单理解**就是：undefined 是没有定义的，null 是定义了但是为空。

------

## 5.闭包是什么?有什么特性?对页面会有什么影响?

​		闭包可以简单理解成"定义在一个函数内部的函数"。**当其中一个内部函数在包含它们的外部函数之外被调用时**，就会形成闭包。

**特点：**

1. 函数嵌套函数。
2. 函数内部可以引用外部的参数和变量。
3. 参数和变量不会被垃圾回收机制回收。

**用处**

 常驻内存会增大内存的使用量使用不：

1. 读取函数内部的变量；
2. 这些变量的值始终保持在内存中，不会在外层函数调用后被自动清除。

**优点：**

1. 变量长期驻扎在内存中；
2. 避免全局变量的污染；
3. 私有成员的存在 ；

**缺点：**

会造成内存泄露

##  6.事件委托是什么？如何确定事件源

事件委托还有一个名字叫事件代理，JS高程上讲：

​		**事件委托**就是利用事件冒泡，只制定一个事件处理程序，就可以管理某一类型的所有事件。

​		**在事件中,当前操作的那个元素就是事件源**。比如网页元素中a标签和input都有onclick事件，当点击a发生onclick事件时，事件源就是a标签，当点击input发送onclic事件是，事件源就是input。

**如何获取事件源那？？**

> IE下：window.event.srcElement 
>
> 标准下：event.target

由此可见，我们是通过事件对象获取到的事件源。

------

## 7.本地存储与cookie的区别

**1.Cookie** 

​		是小甜饼的意思。顾名思义，cookie 确实非常小，它的大小限制为<u>4KB</u>左右。它的主要用途有保存登录信息，比如你登录某个网站市场可以看到“记住密码”，这通常就是通过在 Cookie 中存入一段辨别用户身份的数据来实现的。

**2.localStorage**

​		是 HTML5 标准中新加入的技术，它并不是什么划时代的新东西。早在 IE 6 时代，就有一个叫 userData 的东西用于本地存储，而当时考虑到浏览器兼容性，更通用的方案是使用 Flash。而如今，localStorage 被大多数浏览器所支持，如果你的网站需要支持 IE6+，那以 userData 作为你方案是种不错的选择。

**3.sessionStorage**

​		与localStorage 的接口类似，但保存数据的生命周期与 localStorage 不同。做过后端开发的同学应该知道 Session 这个词的意思，直译过来是“会话”。而 sessionStorage 是一个前端的概念，它只是可以将一部分数据在当前会话中保存下来，刷新页面数据依旧存在。但**当页面关闭后，sessionStorage 中的数据就会被清空**。

**三者的异同**

| ***特性***     | **Cookie**                                                   | **localStorage**                                            | **sessionStorage**                           |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------- | -------------------------------------------- |
| 数据的生命期   | 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效 | 除非被清除，否则永久保存                                    | 仅在当前会话下有效，关闭页面或浏览器后被清除 |
| 存放数据大小   | 4K左右                                                       | 一般为5MB                                                   |                                              |
| 与服务器端通信 | 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信          |                                              |
| 易用性         | 需要程序员自己封装，源生的Cookie接口不友好                   | 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持 |                                              |

**相同点:**都保存在浏览器端，同源的

**不同点：**

**①传递方式不同**

> - ​		cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。
>
> - ​		sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

**②数据大小不同**

> - ​		cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。
>
> - ​		存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。
>
> - ​		sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

**③数据有效期不同**

> - ​		sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；
>
> - ​		localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
>
> - ​		cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

**④作用域不同**

> - ​		sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
>
> - ​		localStorage在所有同源窗口中都是共享的；
>
> - ​		cookie也是在所有同源窗口中都是共享的。
>
> - ​		Web Storage支持事件通知机制，可以将数据更新的通知发送给监听者。
>
> - ​		Web Storage的api接口使用更方便。

------

## 8.ES6新特性

- ***const和let***

- ***模板字符串***

- ***箭头函数***

- ***函数的参数默认值***

- ***对象和数组解构***

- ***for...of 和 for...in***
- ***ES6中的类***

------

## 9.Let与var与const的区别

- **var声明的变量会挂载在window上,而let和const声明的变量不会;**

- **声明变量存在变量提升,let和const不存在变量提升**

- **let和const声明形成块作用域**

- **同一作用域下let和const不能声明同名变量,而var可以**
- **let暂存死区**

------

## 10.数组方法有哪些请简述

***arr.push()*** ***从后面添加元素，返回值为添加完后的数组的长度***

***arr.pop()*** ***从后面删除元素，只能是一个，返回值是删除的元素***

***arr.shift()*** ***从前面删除元素，只能删除一个 返回值是删除的元素***

***arr.unshift()*** ***从前面添加元素, 返回值是添加完后的数组的长度***

 ***arr.splice(i,n)*** ***删除从i(索引值)开始之后的那个元素。返回值是删除的元素***

***arr.concat()*** ***连接两个数组 返回值为连接后的新数组***

***str.split()*** ***将字符串转化为数组***

 ***arr.sort()*** ***将数组进行排序,返回值是排好的数组，默认是按照最左边的数字进行排序，不是按照数字大小排序的***

***arr.reverse()*** ***将数组反转,返回值是反转后的数组***

 ***arr.slice(start,end)*** ***切去索引值start到索引值end的数组，不包含end索引的值，返回值是切出来的数组***

 ***arr.forEach(callback)*** ***遍历数组,无return 即使有return，也不会返回任何值，并且会影响原来的数组***

 ***arr.map(callback)*** ***映射数组(遍历数组),有return 返回一个新数组 。***

 ***arr.filter(callback)*** ***过滤数组，返回一个满足要求的数组*** 

------

## 11.Json如何新增/删除键值对

(1)数据结构是Object

```javascript
var jsonStr={};
//增加
jsonStr["name1"]="yu";
jsonStr["name2"]="jin";
$.each(jsonStr,function(_key){
    console.log("Push结果："+_key+"=="+jsonStr[_key]+"\r\n");
});
//遍历
$.each(jsonStr,function(_key){
    var key = _key;
    var value = jsonStr[_key];
    if(_key=="name1")
    {  //删除
delete jsonStr[_key];
    }
});
$.each(jsonStr,function(_key){
    console.log("删除后的结果："+_key+"=="+jsonStr[_key]+"\r\n");
});
```

(2)数据结构是Array

```javascript
var str = '[{"name":"aa","age":"23"}]';
var array=JSON.parse(str);
//新增
array.push({"name":"dd","age":"25"});
//修改
var obj=array.firstOrDefault(
function(x){
return x.name=='bb';
}
);
obj.age=25;
//删除
array.delete(
function(x){
return x.name=='cc';
}
);
//转为json字符串
str=JSON.stringify(array);
```

------

## 12.什么是面向对象请简述

首先，我们要明确，**面向对象**不是语法，是一个思想，是一种编程模式

**面向过程(POP)**：关注点在于做了什么，描述的是发展的过程。

**面向对象(OOP)**：关注点在于能做什么，描述的是对象与对象之间的关系。

面向对象的**特点**：继承、多态、封装

------

## 13.普通函数和构造函数去的区别

**构造函数**:如用函数用来初始化(使用new运算符)一个新建的对象，我们称之为构造函数(constructor)

**普通函数**:不使用new运算符的函数就是普通函数

**区别**：

1. 构造函数也是一个普通函数，创建方式和普通函数一样，但构造函数习惯上**首字母大写**

2. 构造函数和普通函数的区别在于：调用方式不一样。作用也不一样（**构造函数用来新建实例对象**）

3. 调用方式不一样。

   a. 普通函数的调用方式：**直接调用** `person()`;

   b.构造函数的调用方式：**需要使用new关键字来调用** `new Person()`;

4. 构造函数的函数名与类名相同：`Person()` 这个构造函数，`Person` 既是函数名，也是这个对象的类名

5. 构造函数内部可以使用`this`关键字；**普通函数内部不建议使用**`this`，因为这时候**this指向的是window全局对象**，这样无意间就会为window添加了一些全局变量或函数

   ```javascript
   function Person(name,job,age)
   {
        this.name=name;
        this.job=job;
        this.age=age;
        this.sayHi=function()
            {
             alert("Hi")
            }
    } 
   ```

6. 构造函数的执行流程

   1. 立刻在堆内存中创建一个新的对象`var p = {};`

   2. 将新建的对象设置为函数中的this

   3. 逐个执行函数中的代码

   4. 将新建的对象作为返回值

7. 普通函数例子：因为没有返回值，所以为undefined

   ```javascript
   //普通函数
   function person(){
   var per = person(); 
   consoLe.log(per);//undefined
   ```

8. 构造函数例子：构造函数会马上创建一个新对象，并将该新对象作为返回值返回

   ```javascript
   //构造函数
   function Person(){
   var per = new Person();
   console.log(per);//[object object]
   ```

9. 用instanceof 可以检查一个对象是否是一个类的实例，是则返回true；

   ```javascript
   //构造函数
   function Person (name , age , gender){
   //往对象中添加属性和属性值
   this.name = name ;
   this.age = age;
   this.gender = gender
   var per = new Person("张三”,18,"男");
   console.log(per);//[object object]  马上创建一个对象
   console.log(per.name);//"张三”
   console.log(per.age);//"18"
   console.log(per instanceof Person);//"true" per为Person函数的实例，返回true
   ```

   ​	所有对象都是Object对象的后代，所以任何对象和Object做instanceof都会返回true

------

## 14.请简述原型/原型链/继承

​		**原型**：**在JavaScript中，每当定义一个函数数据类型(普通函数、类)时候，都会天生自带一个`prototype`属性，这个属性指向函数的原型对象，并且这个属性是一个对象数据类型的值。**

让我们用一张图表示构造函数和实例原型之间的关系：

<img src="https://img-blog.csdnimg.cn/img_convert/67e633b1b48eb146b188536fa57cbf5f.png" style="zoom:67%;" />

​		**原型对象**就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中。

​		**隐式原型(_proto_)**:上面说的这个原型是JavaScript中的内置属性`prototype`，此属性继承自object对象，在脚本中没有标准的方式访问`prototype`，但Firefox、Safari和Chrome在每个对象上都支持一个属性`_proto_`，隐式原型的作用是用来构成原型链，实现基于原型的继承

​		**显示原型(prototype)**:每一个函数在创建之后，便会拥有一个prototype属性，这个属性指向函数的原型对象，显示原型的作用是用来实现基于原型的继承与属性的共享

​		**原型链**:在JavaScript中万物都是对象，对象和对象之间也有关系，并不是孤立存在的。对象之间的继承关系，在JavaScript中是通过prototype对象指向父类对象，直到指向Object对象为止，这样就形成了一个原型指向的链条，专业术语称之为原型链。**如果在Object原型中依然没有找到，则返回undefined**

> 1. 原型链解决的主要是继承问题
> 2. 每个对象拥有一个原型对象，通过 proto 指针指向其原型对象，并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层，最终指向 null(`Object.proptotype.__proto__`指向的是null)。这种关系被称为原型链(prototype chain)，通过原型链一个对象可以拥有定义在其他对象中的属性和方法
> 3. 构造函数 Parent、Parent.prototype 和 实例 p 的关系如下:(`p.__proto__ === Parent.prototype`)

------

## 15.Promise的理解  

​		Promise 是异步编程的一种解决方案：

1. 从语法上讲，promise是一个对象，从它可以获取异步操作的消息；
2. 从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。
3. promise有三种状态： **pending(等待态)**，**resolved(成功态)**，**rejected(失败态)**；状态一旦改变，就不会再变。创造promise实例后，它会立即执行。
4. 在需要用到异步处理并且需要回调值时，但是promise**本身并不是异步的**。

------

## 16.Promise在哪里使用过

加载图片，ajax请求，vue接口请求

------

## 17.请简述async的用法

**(1)async函数的基本形式**

```javascript
//函数声明
async function foo() {}
//函数表达式
const foo = async function () {};
//对象的方法
let obj = { async foo() {} };
obj.foo().then(...)
//Class 的方法
class Storage {
constructor() {
    this.cachePromise = caches.open('avatars');
}
async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match(`/avatars/${name}.jpg`);
}
}
const storage = new Storage();
storage.getAvatar('jake').then(…);
//箭头函数
const foo = async () => {};
```

**(2) async函数的返回值总是一个Promise**

​		无论async函数有无await操作，其总是返回一个Promise。

1. 没有显式return，相当于return Promise.resolve(undefined);

2. return非Promise的数据data，相当于return Promise.resolve(data);

3. return Promise, 会得到Promise对象本身

   > ​	async总是返回Promise，因此，其后面可以直接调用then方法，函数内部return返回的值，会成为then回调函数的参数函数内部抛出的错误，会被then的第二个函数或catch方法捕获到

```javascript
//正常返回值
async function f(){
    retrun 'hello world';
}
f().then(v => console.log(v));//hello world
//抛出错误
async function f(){
    throw new Error('出错了');
}
f().then(
    v => console.log(v),
    e => console.log(e) //Error: 出错了
)
```

------

## 18.jQuery相关的知识

 见jquery

------

## 19.Css预处理sass less是什么？为什么使用他们

​		**Sass 和 LESS**都是是 CSS 预处理器，是 CSS 上的一种抽象层，是一种特殊的 语法/语言 最终会编译成 CSS

​		**less**是一种动态样式语言，将 CSS 赋予了动态语言的特性，如变量，继承，运算， 函数.。less 既可以在客户端上运行 (支持 IE 6+, Webkit, Firefox)，也可一在服务端运行(需要借助 Node.js)。

**为什么要使用它们？**

1. 结构清晰，便于扩展。
2. 可以方便地屏蔽浏览器私有语法差异。这个不用多说，封装对浏览器语法差异的重复处理，减少无意义的机械劳动。
3. 可以轻松实现多重继承。
4. 完全兼容 CSS 代码，可以方便地应用到老项目中。LESS 只是在 CSS 语法上做了扩展，所以老的 CSS 代码也可以与 LESS 代码一同编译。

------

## 20.Js中.call()与.apply()区别

`apply`接受两个参数，第一个参数指定了函数体内`this`对象的指向，第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，

`apply`方法把这个集合中的元素作为参数传递给被调用的函数。

```javascript
let func = function(a,b,c){
    console.log([a,b,c])
}
func.apply(null,[1,2,3])  // [1,2,3]
```

`call`传入的参数数量不固定，跟`apply`相同的是，第一个参数也是代表函数体内的`this`指向，从第二个参数开始往后，每个参数被依次传入函数

```javascript
let func = function(a,b,c){
    console.log([a,b,c])
}
func.call(null,3,4,5) // [3,4,5]
```

------

## 21.为什么会造成跨域/请简述同源策略

**为什么会造成跨域**

​		因为浏览器的**同源政策**，就会产生跨域。比如说发送的异步请求是不同的两个源，就比如是不同的的两个端口或者不同的两个协议或者不同的域名。由于浏览器为了安全考虑，就会产生一个同源政策，不是同一个地方出来的是不允许进行交互的。

**简述同源策略**

​		**同源策略**是客户端脚本（尤其是Javascript）的重要的安全度量标准。它最早出自Netscape Navigator2.0，其目的是防止某个文档或脚本从多个不同源装载。
这里的同源策略指的是：协议，域名，端口相同，同源策略是一种安全协议。

​		指一段脚本只能读取来自同一来源的窗口和文档的属性。

------

## 22.This指向

1. 如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window。

   > 这里需要说明的是在js的严格版中this指向的不是window，但是我们这里不探讨严格版的问题，你想了解可以自行上网查找。

2. 如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。

3. 一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象。

------

## 23.请输出三种减少页面加载时间的方式

1. 优化图片 
2. 图像格式的选择（GIF：提供的颜色较少，可用在一些对颜色要求不高的地方）
3. 优化CSS（压缩合并css，如margin-top,margin-left...)
4. 网址后加斜杠，对服务器而言，不加斜杠服务器会多一次判断的过程，加斜杠就会直接返回网站设置的存放在网站根目录下的默认页面。
5. 标明高度和宽度（如果浏览器没有找到这两个参数，它需要一边下载图片一边计算大小，如果图片很多，浏览器需要不断地调整页面。这不但影响速度，也影响浏览体验。 当浏览器知道了高度和宽度参数后，即使图片暂时无法显示，页面上也会腾出图片的空位，然后继续加载后面的内容。从而加载时间快了，浏览体验也更好了。）
6. 减少http请求（合并文件，合并图片）。

------

## 24.什么是jsonp，工作原理是什么？他为什么不是真正的ajax

**Jsonp其实就是一个跨域解决方案。**

**jsonp的原理**:就是利用浏览器可以动态地插入一段js并执行的特点完成的。

**为什么不是真正的 ajax?**   

**ajax的核心**：通过`XmlHttpRequest`获取非本页内容，

**jsonp的核心**：动态添加`<script>`标签来调用服务器提供的js脚本。

**相同点：**

​		ajax和jsonp的调用方式很像，目的一样，都是请求url，然后把服务器返回的数据进行处理，因此jquery和ext等框架都把jsonp作为ajax的一种形式进行了封装；

**不同点：**

1. 实质不同
   ajax的核心是通过xmlHttpRequest获取非本页内容

   jsonp的核心是动态添加script标签调用服务器提供的js脚本

2. ajax通过服务端代理一样跨域

   jsonp也不并不排斥同域的数据的获取

3. jsonp是一种方式或者说非强制性的协议

   ajax也不一定非要用json格式来传递数据　

4. jsonp只支持get请求，ajax支持get和post请求

------

## 25.请掌握2种以上数组去重的方式

```javascript
let originalArray = [1,2,3,4,5,3,2,4,1];
```

**方式1：(ES6的Set集合)**

```javascript
const result = Array.from(new Set(originalArray));
console.log(result); // -> [1, 2, 3, 4, 5]
```

**方式2:(map集合)**

```javascript
const result = [];
const map = new Map();
for (let v of originalArray) {
    if (!map.has(v)) {
        map.set(v, true);
        result.push(v);
    }
}
console.log(result); // -> [1, 2, 3, 4, 5]
```

**方式3:(Includes)**

```javascript
const result = [];
for (let v of originalArray) {
    if (!result.includes(v)) {
        result.push(v);
    }
}
console.log(result); // -> [1, 2, 3, 4, 5]
```

**方式4:(前后对比)**

```javascript
for (let i = 0; i < originalArray.length; i++) {
    for (let j = i + 1; j < originalArray.length; j++) {
        if (originalArray[i] === originalArray[j]) {
            originalArray.splice(j, 1);
            j--;
        }
    }
}
console.log(originalArray); // -> [1, 2, 3, 4, 5]
```

**方式5:(Filter过滤器)**

```javascript
const obj = {};
const result = originalArray.filter(item => obj.hasOwnProperty(typeof item + item) ? false:(obj[typeof item + item] = true));
console.log(result); // -> [1, 2, 3, 4, 5]
```

------

## 26.深浅拷贝是什么,如何实现？

> **浅拷贝**只是对指针的拷贝，拷贝后两个指针指向同一个内存空间，
>
> **深拷贝**不但对指针进行拷贝，而且对指针指向的内容进行拷贝，经深拷贝后的指针是指向两个不同地址的指针。
>
> **浅拷贝**只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。
>
> **但深拷贝**会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象

​		**浅拷贝**子对象复制父对象，父子对象发生关联，两者属性值指向同一内存空间。简单来讲，就是改变其中一个对象，另一个对象也会跟着改变。

```javascript
let a = [0,1,2],b = a;
a[0] = 3;
console.log(a,b) // [3,1,2] [3,1,2]
```

​		**深拷贝**拷贝对象各个层级的属性。简单的讲，就是复制出来的每个对象都有属于自己的内存空间，不会互相干扰。

**借用JSON对象的 parse（转JavaScript 对象） 和 stringify（转json字符串）**

```javascript
function deepClone(obj){
    let newObj = JSON.stringify(obj);
    let objClone = JSON.parse(newObj);
    return objClone;
}
let a=[0,1,[2,3],4],
    b=deepClone(a);
a[0]=1;
a[2][0]=1;
console.log(a,b);
```

------

## 27.为什么js是弱类型语言

​		**弱类型语言**是相对强类型语言来说的。

​		在强类型语言中，变量类型有多种，例如`int` `char` `float` `boolean` 等不同的类型相互转换有时需要强制转换而javascript只有一种类型`var`，为变量赋值时会自动判断类型并进行转换，所以javascript是弱语言就体现在变量定义类型var上了 

------

## 28.怎么转换less为css

​		**Less** 是一门 CSS 预处理语言，它扩充了 CSS 语言，增加了诸如变量、混合（mixin）、函数等功能，让 CSS 更易维护、方便制作主题、扩充。

1. 首先，你要确认你的电脑已经安装了node。
2. 使用 npm 安装 lessc，命令行：
   `npm install -g less`
3. 然后，进入需要转换的less文件的目标位置。
4. 最后，你只需输入以下两条命令：

```cmd
npm install -g less
lessc less文件名.less 生成的css文件名.css
```

------

## 29.echarts使用最多的是什么

> ​		商业级数据图表，它是一个纯JavaScript的图标库，兼容绝大部分的浏览器，底层依赖轻量级的canvas类库ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。创新的拖拽重计算、数据视图、值域漫游等特性大大增强了用户体验，赋予了用户对数据进行挖掘、整合的能力。

**折线图（区域图）、柱状图（条状图）、散点图（气泡图）、K线图、饼图（环形图）**

**雷达图（填充雷达图）**

------

## 30.For循环与map循环有什么区别

> **for**:遍历对象自身的和继承的可枚举的属性，也就是说会包括那些原型链上的属性。如果想要仅迭代自身的属性，那么在使用 for...in
>
> **forEach**:只能遍历数组，不能中断，没有返回值(或认为返回值是undefined)
>
> **map**:只能遍历数组，不能中断，返回值是修改后的数组

**forEach和map的区别**

**相同点**

1. 都是循环遍历数组中的每一项
2. forEach和map方法里每次执行匿名函数都支持3个参数，参数分别是item(当前每一项)，index(索引值)，arr(原数组)
3. 匿名函数中的this都是指向window
4. 只能遍历数组,都不会改变原数组

**区别**
**map方法**

1. map方法**返回一个新的数组**，数组中的元素为原始数组调用函数处理后的值。
2. map方法不会对空数组进行检测，map方法**不会改变原始数组**。
3. 浏览器支持：chrome、Safari1.5+、opera都支持，IE9+,
4. 若arr为空数组，则map方法返回的也是一个空数组。

```js
array.map(function(item,index,arr){},thisValue)

var arr = [0,2,4,6,8];
var str = arr.map(function(item,index,arr){
    console.log(this); //window
    console.log("原数组arr:",arr); //注意这里执行5次
    return item/2;
},this);
console.log(str);//[0,1,2,3,4]
```

**forEach方法**

1. forEach方法用来调用数组的每个元素，将元素传给回调函数
2. forEach对于空数组是不会调用回调函数的。
3. 无论arr是不是空数组，forEach返回的都是undefined。这个方法只是将数组中的每一项作为callback的参数执行一次。

```js
Array.forEach(function(item,index,arr){},this)
var arr = [0,2,4,6,8];
var sum = 0;
var str = arr.forEach(function(item,index,arr){
    sum += item;
    console.log("sum的值为：",sum); //0 2 6 12 20
    console.log(this); //window
},this)
console.log(sum);//20
console.log(str); //undefined
```

------

## 31.请写出一个简单的类与继承

```js
let _this = this; // 声明一个 _this 指向当前的this
	// 定义一个类名为 myLike 的类
	class myLike {
		// 定义一个 JS 构造器
		constructor(type) {
			_this.type = type;
		}
		// 创建实例方法
		sayType() {
			console.log('我喜欢' + _this.type);
		}
	}
	// 创建一个类名为 Programmer 的类的继承 myLike 类
	class Programmer extends myLike {
		constructor(type) {
			// 直接调用父类构造器进行初始化操作
			super(type);
		}
		program() {
			console.log("我是一个写代码的游戏主播");
		}
	}
	// 测试我刚创建的类
	var goPlay = new myLike('打游戏'), // 声明一个打游戏的对象
		writeCode = new Programmer('写代码'); // 声明一个写代码的对象
	// 开始测试程序结果
	goPlay.sayType(); // 输出  我喜欢打游戏
	writeCode.sayType(); // 输出  我喜欢写代码
	writeCode.program(); // 输出  我是一个写代码的游戏主播
```

------

## 32.同步与异步的区别/阻塞与非阻塞区别

​		“阻塞”与"非阻塞"与"同步"与“异步"不能简单的从字面理解，提供一个从分布式系统角度的回答。
**同步与异步**
​		同步和异步关注的是**消息通信机制** (synchronous communication/ asynchronous communication)

​		所谓同步，就是在发出一个*调用*时，在没有得到结果之前，该*调用*就不返回。但是一旦调用返回，就得到返回值了。
换句话说，就是由*调用者*主动等待这个*调用*的结果。

​		而异步则是相反，**调用在发出之后，这个调用就直接返回了，所以没有返回结果**。换句话说，当一个异步过程调用发出后，调用者不会立刻得到结果。而是在*调用*发出后，*被调用者*通过状态、通知来通知调用者，或通过回调函数处理这个调用。

典型的异步编程模型比如Node.js

> 举个通俗的例子：
> 		你打电话问书店老板有没有《分布式系统》这本书，如果是同步通信机制，书店老板会说，你稍等，”我查一下"，然后开始查啊查，等查好了（可能是5秒，也可能是一天）告诉你结果（返回结果）。
> 而异步通信机制，书店老板直接告诉你我查一下啊，查好了打电话给你，然后直接挂电话了（不返回结果）。然后查好了，他会主动打电话给你。在这里老板通过“回电”这种方式来回调。

**阻塞与非阻塞**
		阻塞和非阻塞关注的是**程序在等待调用结果（消息，返回值）时的状态.**

​		**阻塞调用**是指调用结果返回之前，当前线程会被挂起。调用线程只有在得到结果之后才会返回。
​		**非阻塞调用**指在不能立刻得到结果之前，该调用不会阻塞当前线程。

> 还是上面的例子，
> 		你打电话问书店老板有没有《分布式系统》这本书，你如果是阻塞式调用，你会一直把自己“挂起”，直到得到这本书有没有的结果，如果是非阻塞式调用，你不管老板有没有告诉你，你自己先一边去玩了， 当然你也要偶尔过几分钟check一下老板有没有返回结果。
> 在这里阻塞与非阻塞与是否同步异步无关。跟老板通过什么方式回答你结果无关。

------

## 33.重绘和回流是什么

​		引起DOM树结构变化，页面布局变化的行为叫**回流**，且回流**一定**伴随重绘。

​		只是样式的变化，不会引起DOM树变化，页面布局变化的行为叫**重绘**，且重绘**不一定**会便随回流。

------

## 34.http是什么？有什么特点

**超文本** **传输** **协议**

特点:

1. 支持客户/服务器模式；
2. 简单快速；
3. 灵活；
4. 无连接；(是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接)
5. 无状态。(http协议没法保存客户机信息，也就没法区分每次请求的不同之处)

------

## 35.HTTP协议和HTTPS区别

1. https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。
2. http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
3. http和https使用的是完全不同的连接方式，用的**端口也不一样**，前者是80，后者是443。
4. http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

------

## 36.原型和继承，prototype，call和apply继承的区别（第一个参数是相同的，第二个的区别在哪）

**js继承的6种方式**

​		想要继承，就必须要提供个父类（继承谁，提供继承的属性）

<img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvOTQwODg0LzIwMTkwNy85NDA4ODQtMjAxOTA3MTcxNjIwNTQyNjctMTIwMDIxMTI3Ni5wbmc?x-oss-process=image/format,png#pic_center" alt="在这里插入图片描述" style="zoom: 67%;" />

**1. 原型链继承**

**核心：**

> 将父类的实例作为子类的原型

**特点：**

- 子类的实例也是父类的实例
- 可以方便的继承父类型的原型中的方法，但是属性的继承无意义
  **缺点：**
- 只执行一次，无法给属性传值
- 属性的继承无意义

<img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xNDU5Mjc5NS02OTY0MWMzNGY1YTUwYmE4LlBORw?x-oss-process=image/format,png#pic_center" alt="在这里插入图片描述" style="zoom:67%;" />

**2.借用构造函数继承**

**核心：**

在子类的内部调用父类，通过call改变父类中this的指向
等于是复制父类的实例属性给子类

**特点:**

创建子类实例时，可以向父类传递参数
可以实现多继承
可以方便的继承父类型的属性，但是无法继承原型中的方法
**缺点：**

实例并不是父类的实例，只是子类的实例
无法继承原型中的方法
无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

**3.组合继承（组合原型链继承和借用构造函数继承）**

<img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvOTQwODg0LzIwMTkwNy85NDA4ODQtMjAxOTA3MTcxNjIxMzcwODQtMTIzNDYyMzEyMC5wbmc?x-oss-process=image/format,png#pic_center" alt="在这里插入图片描述" style="zoom:67%;" />

**核心：**

> 结合了两种模式的优点，传参和复用

**特点：**

- 可以继承父类原型上的属性，可以传参，可复用。
- 每个新实例引入的构造函数属性是私有的。

**缺点：** 调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数。

**4.原型式继承**

<img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvOTQwODg0LzIwMTkwNy85NDA4ODQtMjAxOTA3MTcxNjIxNDc1OTYtMTM2MzQ4NjU4Ni5wbmc?x-oss-process=image/format,png#pic_center" alt="在这里插入图片描述" style="zoom:67%;" />

**核心：**

​		用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象。object.create()就是这个原理。

**特点：** 类似于复制一个对象，用函数来包装。

**缺点：**

所有实例都会继承原型上的属性。
无法实现复用。（新实例属性都是后面添加的）

**5.寄生式继承**

**核心**
就是给原型式继承外面套了个壳子。

**特点：** 没有创建自定义类型，因为只是套了个壳子返回对象（这个），这个函数顺理成章就成了创建的新对象。
**缺点：** 没用到原型，无法复用。

**6.寄生组合式继承（常用）**
**核心：**

修复了组合继承的问题

**寄生**:在函数内返回对象然后调用

**组合:**
1.函数的原型等于另一个实例。

2.在函数中用apply或者call引入另一个构造函数，可传参

<img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvOTQwODg0LzIwMTkwNy85NDA4ODQtMjAxOTA3MTcxNjIyMjAyODUtMTQ3ODg4ODkzNi5wbmc?x-oss-process=image/format,png#pic_center" alt="在这里插入图片描述" style="zoom:67%;" />

[call和apply继承的区别](#20.Js中.call()与.apply()区别)

------

## 37.数组的方法，字符串的方法，要知道每个的含义，掌握排序和去重的方法

[数组的方法](#10数组方法有哪些请简述)

**字符串的方法：**

**charAt()** 返回指定位置的字符

```js
console.log(str_two.charAt(2));  //c
```

**.length** 返回字符串的长度

```js
console.log(str_two.length);//5
```

**charCodeAt():** 返回指定位置的字符 的Unicode编码

```js
console.log(str_two.charCodeAt(3));//68
```

**fromCharCode():** 接受一个UniCode编码， 返回对应的字符串

```js
console.log(String.fromCharCode(68));//D
```

**replace():** 替换

> 1.想替换哪个字符串，就用哪个字符串来调用
> 2.参数1是被替换的目标， 参数2是替换的新内容
> 3.会将替换后的字符串，整体返回

```
console.log(str_two.replace("a","A"));//AbcDg
```

**substring()** : 提取 介于两个下标之间的 字符串 包头不包尾 (和数组slice相似)

> 参数1： 开始下标 参数2： 结束下标

```js
console.log(str_two.substring(0,2));//ab
```

**substr()**: 可在字符串中 从开始位置截取指定长度的字符串 (和数组splice相似)

> 参数1： 开始位置， 参数2 ： 指定长度

```js
console.log(str_two.substr(0,3));//abc
```

**split()**:方法用于把一个字符串 分割成字符串数组(本质上就是个数组，只是存的都是字符串罢了)

> 参数1 ：分割的依据
> 参数2：(可选参数)分割后 返回的长度
> (超出实际大小，按照实际大小算。 小于实际大小的话，按照指定长度返回，超出的不返回)

```js
 var s = "Where are you from?"
 console.log(s.split(" ",2));//["Where", "are"]
```

**slice():** 方法 可提取指定范围 的字符串

> 参数1： 开始范围, 参数2： 结束范围 包头不包尾

```js
console.log(s.slice(0,4)); //wher
```

**indexOf()**: 方法可返回指定字符 的对应下标 (首先出现的)
如果没有 ： 返回 -1

```js
//   用indexof（）去重：
     var arr_new= "jintianbucuo";    
                var arr_two=[];
                for (var i=0;i<arr_new.length;i++) {
                     if(arr_two.indexOf(arr_new[i])==-1){
                           arr_two.push(arr_new[i]);
                     }
                }
                console.log(arr_two.join(""));
```

**lastIndexOf()**: 返回指定字符 最后出现的位置

```js
console.log(s.lastIndexOf(' '));//19
```

需要谁改变，就由谁来调用这个方法
**toLowerCase() :** 把字符串转换为小写

```js
console.log(s.toLowerCase());
```

**toUpperCase() :** 把字符串转换为大写

```js
 console.log(s.toUpperCase());
```

**用splice（）去重：**

```js
function arr(a){
           for (var i=0;i<a.length;i++) {
               for (var j=i+1;j<a.length;j++) {
                if(a[i]==a[j]){
                     a.splice(j,1);
                   --j;
                   
               }
               
              }
              
            } return a;
        }
        var d=[4,7,8,4,6,7,2];
         console.log(arr(d));
```

**数组的排序：**

```js
var arr=[4,7,8,6,2];           
           for (var i=0;i<arr.length;i++) {
                  for (var j=i+1;j<arr.length;j++) {
                   if(arr[i]>arr[j]){
                       var mm=arr[i];
                        arr[i]=arr[j];
                        arr[j]=mm;
                     }      
                  }
                   }
console.log(arr);
```

------

## 38.箭头函数与普通函数的区别

**一.外形不同**：

​		箭头函数使用箭头定义，普通函数中没有
代码实例如下：

**二.箭头函数都是匿名函数**
		普通函数可以有匿名函数，也可以有具体名函数，但是箭头函数都是匿名函数。
代码实例如下：

**三.箭头函数不能用于构造函数，不能使用new**
		普通函数可以用于构造函数，以此创建对象实例。
代码实例如下：

**四.箭头函数中this的指向不同**
		在普通函数中，this总是指向调用它的对象，如果用作构造函数，this指向创建的对象实例。
1.箭头函数本身不创建this
		也可以说箭头函数本身没有this，但是它在声明时可以捕获其所在上下文的this供自己使用。
注意：this一旦被捕获，就不再发生变化

------

## 39.什么是js内存泄露？

​		指由于疏忽或者错误造成程序未能释放已经不再使用的内存，从而造成内存上的浪费。

**原因：**

1） 意外的全局变量引起的内存泄露

2）闭包引起的内存泄露

3）没有清理的DOM元素引用

4）被遗忘的定时器或者回调

5）子元素存在引起的内存泄露

6）IE7/8引用计数使用循环引用产生的问题

**怎样避免内存泄露**

1）减少不必要的全局变量，或者生命周期较长的对象，及时对无用的数据进行垃圾回收；

2）注意程序逻辑，避免“死循环”之类的 ；

3）避免创建过多的对象 原则：不用了的东西要及时归还。

------

## 40.你如何对网站的文件和资源进行优化？

1. 文件合并（目的是减少http请求）

2. 文件压缩，减少文件下载的体积。

3. 使用 CDN （内容分发网络）来托管资源

4. 使用缓存。

5. 精简优化自己的css和js代码

------

## 41.请简述ajax的执行过程 以及常见的HTTP状态码

```js
//步骤一:创建异步对象
var xmlHTTP = new XMLHttpRequest();
//步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
xmlHTTP.open(method, url, isAsync)
//步骤三:发送请求
xmlHTTP.send();
//步骤四:注册事件 onreadystatechange 状态改变就会调用
xmlHTTP.onreadystatechange = function () {
	if (xmlHttp.readyState == 4 && xmlHTTP.status == 200) {
      //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
       console.log(xmlHTTP.responseText);
    }
}
```

> **xmlHttp.readyState的五种状态**
> **0** ：请求未初始化，XMLHttpRequest对象已经创建，但还没有调用open()方法。
>
> **1** ：请求已建立，已经调用open() 方法，但尚未发送请求。
>
> **2** ： 请求已发送，正在处理中（通常现在可以从响应中获取内容头）
>
> **3** ： 请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
>
> **4** ：响应完成，已经接收到了全部数据，并且连接已经关闭。

**常见的HTTP状态码**
**200** ： OK 客户端请求成功

**400** ： Bad Request 客户端请求有语法错误，不能被服务器所理解

**401** ： Unauthorized 请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用

**403** ： Forbidden 服务器收到请求，但是拒绝提供服务

**404** ： Not Found 请求资源不存在，eg：输入了错误的URL

**500** ： Internal Server Error 服务器发生不可预期的错误

**503** ： Server Unavailable 服务器当前不能处理客户端的请求，一段时间后可能恢复正常

------

## 42.预加载和懒加载的区别，预加载在什么时间加载合适

​		**预加载**是指在页面加载完成之前，提前将所需资源下载，之后使用的时候从缓存中调用；

​		**懒加载**是延迟加载，按照一定的条件或者需求等到满足条件的时候再加载对应的资源

​		**预加载**增加了服务器压力，换来的是用户体验的提升，典型例子是在一个图片较多的网页中，如果使用了预加载就可以避免网页加载出来是时，图片的位置一片空白（图片可能还没加载出来），造成不好的用户体验；

​		**懒加载**的作用减少不要的请求，缓解了服务器压力

**懒加载的原理**

​		原理很简单，先把img的src指向空或者一个小图片，图片真实的地址存储在img一个自定义的属性里,`< img src=”” data-src=”http://real.com/real.jpg” />`,等到此图片出现在视野范围内了，获取img元素，把data-src里的值赋给src。这样做能防止页面一次性向服务器响应大量请求导致服务器响应慢，页面卡顿或崩溃等问题。

**优点**：页面加载速度快、可以减轻服务器的压力、节约了流量,用户体验好

**预加载的原理**

​		提前加载图片，当用户需要查看时可直接从本地缓存中渲染

**意义**：预加载可以说是牺牲服务器前端性能，换取更好的用户体验，这样可以使用户的操作得到最快的反映。

------

## 43.Jquery选择器有哪些

1. **jquery基本选择器**

   通过元素<u>id</u>、<u>class</u>和<u>标签名</u>来查找DOM元素。

   `$(" ")`

2. **jquery层次选择器**

   层次选择器通过DOM元素间的层次关系来获取元素

   | `$("form input")`    | 选择所有的form元素中的input元素                              |
   | -------------------- | ------------------------------------------------------------ |
   | `$("#main > *")`     | 选择id值为main的所有的子元素                                 |
   | `$("label + input")` | 选择所有的label元素的下一个input元素节点，经测试选择器返回的是label标签后面直接跟一个input标签的所有input标签元素 |
   | `$("#prev ~ div")`   | 同胞选择器，该选择器返回的为id为prev的标签元素的所有的属于同一个父元素的div标签 |

   

3. **jquery过滤选择器**

   分为**基本过滤，内容过滤，可见性过滤，属性过滤，子元素过滤和表单对象属性过滤选择器**共六种选择器

   **（1）jquery基本过滤选择器**

   过滤选择器是根据某类过滤规则进行元素的匹配，书写时都以(:)开头；简单过滤选择器是过滤选择器中使用最广泛的一种。

   `$("tr:first")`：选择所有tr元素的第一个

   `$("tr:last")`：选择所有tr元素的最后一个

   `$("input:not(:checked) + span")` ：过滤掉：checked的选择器的所有的input元素

   `$("tr:even")`：选择所有的tr元素的第0，2，4... ...个元素（注意：因为所选择的多个元素时为数组，所以序号是从0开始）

   `$("tr:odd")`：选择所有的tr元素的第1，3，5... ...个元素

   `$("td:eq(2)")`：选择所有的td元素中序号为2的那个td元素

   `$("td:gt(4)")` ：选择td元素中序号大于4的所有td元素

   `$("td:ll(4)")`：选择td元素中序号小于4的所有的td元素

   `$(":header")`：匹配如 h1, h2, h3之类的标题元素.这个是专门用来获取h1,h2这样的标题元素

   `$("div:animated")`：匹配所有正在执行动画效果的元素

   **（2）jquery内容过滤选择器**

   内容过滤选择器的过滤规则主要体现在它所包含的子元素和文本内容上。

   `$("div:contains('John')")` ：选择所有div中含有John文本的元素

   `$("td:empty")` ：选择所有的为空（也不包括文本节点）的td元素的数组

   `$("div:has(p)")` ：选择所有含有p标签的div元素

   `$("td:parent")`：选择所有的以td为父节点的元素数组

   **（3）jquery可见性过滤选择器**

   可见度过滤选择器是根据元素的可见和不可见状态来选择相应的元素。

   `$("div:hidden")`：选择所有的被hidden的div元素

   `$("div:visible")`：选择所有的可视化的div元素

   **（4）jquery属性过滤选择器**

   属性过滤选择器的过滤规则是通过元素的属性来获取相应的元素。

   `$("div[id]")`： 选择所有含有id属性的div元素

   `$("input[name='newsletter']")`：选择所有的name属性等于'newsletter'的input元素

   `$("input[name!='newsletter']")` ：选择所有的name属性不等于'newsletter'的input元素

   `$("input[name^='news']")`： 选择所有的name属性以'news'开头的input元素

   `$("input[name$='news']")` ：选择所有的name属性以'news'结尾的input元素

   `$("input[name*='man']")` ：选择所有的name属性包含'news'的input元素

   **（5）jquery子元素过滤选择器**

   `$("ul li:nth-child(2)")`,`$("ul li:nth-child(odd)")`,`$("ul li:nth-child(3n + 1)")` ：匹配其父元素下的第N个子或奇偶元素.这个选择器和之前说的基础过滤(Basic Filters)中的eq() 有些类似,不同的地方就是前者是从0开始,后者是从1开始。

   `$("div span:first-child")`：返回所有的div元素的第一个子节点的数组

   `$("div span:last-child")`：返回所有的div元素的最后一个节点的数组

   `$("div button:only-child")` ：返回所有的div中只有唯一一个子节点的所有子节点的数组

   **（6） jquery表单对象属性过滤选择器**

   此选择器主要对所选择的表单元素进行过滤。

   `$(":enabled")`：选择所有的可操作的表单元素

   `$(":disabled")`：选择所有的不可操作的表单元素

   `$(":checked")`：选择所有的被checked的表单元素

   `$("select option:selected")`：选择所有的select 的子元素中被selected的元素

   `$("input[@ name =S_03_22]").parent().prev().text()`：选取一个 name 为"S_03_22"的input text框的上一个td的text值

   `$("input[@ name ^='S_']").not("[@ name $='_R']")`：名字以"S_ "开始，并且不是以"_R"结尾的

   `$("input[@ name =radio_01][@checked]").val()`：一个名为 radio_01的radio所选的值

   `$("A B")`：查找A元素下面的所有子节点，包括非直接子节点

   `$("A>B")` ：查找A元素下面的直接子节点

   `$("A+B")` ：查找A元素后面的兄弟节点，包括非直接子节点

   `$("A~B")` ：查找A元素后面的兄弟节点，不包括非直接子节点

4. **jquery表单选择器**

   `$(":input")` ：选择所有的表单输入元素，包括input, textarea, select 和 button

   `$(":text")` ： 选择所有的text input元素

   `$(":password")`： 选择所有的password input元素

   `$(":radio")` ：选择所有的radio input元素

   `$(":checkbox")` ：选择所有的checkbox input元素

   `$(":submit")` ：选择所有的submit input元素

   `$(":image")` ： 选择所有的image input元素

   `$(":reset")` ：选择所有的reset input元素

   `$(":button")` ：选择所有的button input元素

   `$(":file")` ：选择所有的file input元素

   `$(":hidden")`：选择所有类型为hidden的input元素或表单的隐藏域

------

## 44.Jquery插入节点的方法

`append()`:向每个匹配的元素内部追加内容

`prepend()`: 向每个匹配的元素内部前置内容

`appendTo()`: 将所有匹配的元素追加到指定元素中，实际上，使用该方法是颠倒了常规的$(A).append(B)的操作，即不是将B追加到A中，而是将A追加到B中

`prependTo()`: 将所有匹配的元素前置到指定的元素中。实际上，使用该方法是颠倒了常规的$(A).prepend(B)的操作，即不是将B前置到A中，而是将A前置到B中

`after()`:在每个匹配的元素之后插入内容

`insertAfter()`:将所有匹配的元素插入到指定元素的后面。实际上，使用该方法是颠倒了常规的$(A).after(B)的操作，即不是讲B插入到A后面，而是将A插入到B后面

`before()`	在每个匹配的元素之前插入内容

`insertBefore()`:将所有匹配的元素插入到指定的元素的前面。实际上，使用该方法是颠倒了常规的$(A).before(B)的操作，即不是将B插入到A前面，而是将A插入到B前面

------

## 45.Js的函数节流和函数防抖的区别

​		**函数节流**是指一定时间内js方法只跑一次。比如人的眨眼睛，就是一定时间内眨一次。这是函数节流最形象的解释。

​		函数节流应用的**实际场景**，多数在监听页面元素滚动事件的时候会用到。因为滚动事件，是一个高频触发的事件。以下是监听页面元素滚动的示例代码：

```javascript
// 函数节流
var canRun = true;
document.getElementById("throttle").onscroll = function(){
    if(!canRun){
        // 判断是否已空闲，如果在执行中，则直接return
        return;
    }

   canRun = false;
   setTimeout(function(){
       console.log("函数节流");
       canRun = true;
   }, 300);
};
```

​		函数节流的**要点**是，声明一个变量当标志位，记录当前代码是否在执行。

> 如果空闲，则可以正常触发方法执行。
>
> 如果代码正在执行，则取消这次方法执行，直接return。

​		**函数防抖**是指频繁触发的情况下，只有足够的空闲时间，才执行代码一次。比如生活中的坐公交，就是一定时间内，如果有人陆续刷卡上车，司机就不会开车。只有别人没刷卡了，司机才开车。

​		函数防抖的**应用场景**，最常见的就是用户注册时候的手机号码验证和邮箱验证了。只有等用户输入完毕后，前端才需要检查格式是否正确，如果不正确，再弹出提示语。以下还是以页面元素滚动监听的例子，来进行解析：

```javascript
// 函数防抖
var timer = false;
document.getElementById("debounce").onscroll = function(){
 clearTimeout(timer); // 清除未执行的代码，重置回初始化状态
timer = setTimeout(function(){
    console.log("函数防抖");
}, 300);
};  
```

​		函数防抖的**要点**，也是需要一个`setTimeout`来辅助实现。延迟执行需要跑的代码。

> 如果方法多次触发，则把上次记录的延迟执行代码用clearTimeout清掉，重新开始。
>
> 如果计时完毕，没有方法进来访问触发，则执行代码。

------

## 46.Get和post不同

| 请求方式区别 |                             get                              |                             post                             |
| ------------ | :----------------------------------------------------------: | :----------------------------------------------------------: |
| 用途         |                       从服务器获取数据                       |                       向服务器提交数据                       |
| 参数传递     |          参数拼接在URL上，xxx?id=1234&name=zhagnsan          |             参数封装在消息主体中一起提交到服务器             |
| 传输数据量   | 传送的数据量较小，不能大于2KB（URL 的最大长度是 2048 个字符）。 |             参数封装在消息主体中一起提交到服务器             |
| 安全性       | 与 POST 相比，GET的安全性较差，因为所发送的数据是 URL 的一部分。(在发送密码或其他敏感信息时绝不要使用 GET ) | POST 比 GET 更安全，因为参数不会被保存在浏览器历史或 web 服务器日志中。 |
| 书签         |                         可收藏为书签                         |                        不可收藏为书签                        |
| 缓存         |                           能被缓存                           |                           不能缓存                           |
| 编码类型     |              application/x-www-form-urlencoded               | application/x-www-form-urlencoded 或 multipart/form-data。为二进制数据使用多重编码 |
| 历史         |                    参数保留在浏览器历史中                    |                  参数不会保存在浏览器历史中                  |
| 可见性       |                数据在URL中对所有人都是可见的                 |                     数据不会显示在URL中                      |

------

## 47.什么是csrf攻击

​		CSRF（Cross-site request forgery）也被称为 one-click attack或者 session riding，中文全称是叫**跨站请求伪造**。

​		一般来说，攻击者通过伪造用户的浏览器的请求，向访问一个用户自己曾经认证访问过的网站发送出去，使目标网站接收并误以为是用户的真实操作而去执行命令。常用于盗取账号、转账、发送虚假消息等。攻击者利用网站对请求的验证漏洞而实现这样的攻击行为，网站能够确认请求来源于用户的浏览器，却不能验证请求是否源于用户的真实意愿下的操作行为。

------

## 48.Js数据类型的分类

1. **基本数据类型 （值类型）**
   +  数字number
   +  字符串string
   +  布尔 boolean
   +  null
   +  undefined

2. **引用数据类型**

   - 对象object

   - 函数function

------

## 49.Js中手写一个深拷贝

1. 数组中map方法通过制定函数对数组进行操作，并将处理结果返回，结果以新数组的形式返回，不会修改原数组

```javascript
//深拷贝
	let obj = [1, 2, 3, 4, 5, 6]
	let newobj = obj.map(function(itme, index) {
		//给obj的每一项加一
		return itme + 1
	})
	let newobjb = obj
	console.log(obj) // [1, 2, 3, 4, 5, 6]
	//深拷贝
	console.log(newobj) //[2, 3, 4, 5, 6, 7]
```

2. 将数组先转成JSON字符串，再转成JSON对象，实现深拷贝。

```javascript
let objc = [1, 2, 3, 4]
	let objv = JSON.parse(JSON.stringify(objc))
	console.log(objc)
	objv.push(100) //[1, 2, 3, 4]
	console.log(objv) //[1, 2, 3, 4, 100]
```

------

## 50.什么时候用深拷贝 /浅拷贝

​		想要不改变原值的时候用深拷贝，反之用浅拷贝

> ​		无论深浅，都是需要的。当深拷贝发生时，通常表明存在着一个“聚合关系”，而浅拷贝发生时，通常表明存在着一个“相识关系”。 
>
> 举个简单的例子：
>
> ​		当你实现一个Composite  Pattern，你通常都会实现一个深拷贝(如果需要拷贝的话)，很少有要求同的Composite共享Leaf的； 
>
> 而当你实现一个Observer  Pattern时，如果你需要拷贝Observer,你大概不会去拷贝Subject，这时就要实现个浅拷贝。 
>
> 是深拷贝还是浅拷贝，并不是取决于时间效率、空间效率或是语言等等，而是取决于哪一个是逻辑上正确的。  

------

## 51.如何遍历一个多维数组

```javascript
//遍历多维数组
	var newarr = [];

	function demo(arr) {
		for (let i = 0; i < arr.length; i++) {
			if (typeof arr[i] !== "object") {
				// console.log(arr[i])
				newarr.push(arr[i])
			} else {
				demo(arr[i])
			}
		}
		return newarr
	}
	console.log(demo([1, 2, 3, 4, [5],
		[6, 7, [8, 9, [10, 11]]]
	])) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

------

## 52.区别2种类型的容器

**1).** **数组容器**:用来保存有序的多个数据(如列表数据), 数据的标识是下标,我们通过下标来操作对应的数据

**2).对象容器**:用来保存无序的多个数据,多个数据的标识是属性名,我们通过属性名来操作属性值数据

------

## 53.说说开发中常用的ES6新语法

**定义变量/常量**: const/let

**解构赋值**: `let {a, b} = this.props / import {aa} from 'xxx' / function f ({name}) {}`

**对象的简洁表达**: `{a, b, c () {}}`

**箭头函数**: 

   **组件的自定义方法**: `xxx = () => {}`

   **匿名函数作为实参**

   **优点**:

   * 简洁

   * 没有自己的this,使用引用this查找的是外部this

**扩展运算符**: ...
**类**: class/extends/constructor/super
**ES6模块化**: export/default/import
**异步**: promise, async/await

------

## 54.说说你对事件处理机制的理解

1. **js事件机制**

   js中事件的发生包括捕获和冒泡两个阶段，两个阶段的传播顺序为

   **捕获**：从最外边父元素节点传递至发生事件的元素节点，即由外到内；

   **冒泡**：从发生事件的元素节点传递至最外边父元素节点，即由内到外；

2. **事件监听**

对事件的监听执行一般有一下三种方法

```js
//1.在HTML中对事件进行绑定；
<button id="btn" οnclick="myClick()">点击</button>
//2.在js中对DOM元素进行事件绑定；
document.getElementById("btn").onclick = myClick;
//3.利用监听函数addEventListener("事件名",function(){},false)；
```

`removeEventListenter("事件名",Fun,false)`用于解除事件的绑定监听，与addEventListener对应，用法相同

但是这种方法在IE8及其低版本浏览器中不能兼容，可以使用`attachEvent("事件名",Fun)`来进行绑定，因为浏览器

不支持捕获事件，所以没有第三个参数。detachEvent("事件名",Fun)与之对应为解除绑定。

一般的事件用法：

![img](images/20170711111746920.jpg)

3. **如何阻止浏览器的默认事件的发生**

   ​	对于前两种的事件，如果想阻止后面的操作的话，只需要在你需要阻止的位置加上一个 return false;

对第三种情况绑定的事件，阻止默认事件，需要用到`event.preventDefault()；`

![img](images/20170711114905188.jpg)

------

## 55.async/await?

**1). 作用**

​    简化pormise的使用(不用再使用then()来指定成功或失败的回调函数)

​    以同步编码的方式实现异步流程(没有回调函数)

**2). 哪里使用await?**

​    在返回promise对象的表达式左侧, 为了直接得到异步返回的结果, 而不是promsie对象

**3). 哪里使用async?**

​    使用了await的函数定义左侧

------

## 56.用数组的相关方法实现以下业务需求

> 公司前后招聘了10个员工(性别,年龄, 月薪各不相同),有以下需求
>
> 1). 列表显示所有员工的所有信息  `forEach`
>
> 2). 对员工进行年薪降序列表显示  `sort()`
>
> 3). 得到男员工的总月薪: `reduce()`
>
> 4). 查找一个月薪只比12000高一点点的员工: `find()`
>
> 5). 查找出所有月薪高于12000的员工: **filter()**
>
> 6). 列表显示所有员工的姓名/性别和年薪: `map()`

```js
const employees = [
   {name: 'A', sex: '男', age: 21, salary: 10000},
   {name: 'B', sex: '女', age: 25, salary: 12000},
   {name: 'C', sex: '男', age: 24, salary: 13000},
   {name: 'D', sex: '男', age: 24, salary: 12500},
   {name: 'E', sex: '女', age: 21, salary: 14000},
   {name: 'F', sex: '男', age: 24, salary: 16000},
   {name: 'G', sex: '男', age: 23, salary: 9000},
   {name: 'H', sex: '女', age: 21, salary: 11000},
   {name: 'I', sex: '男', age: 23, salary: 13200},
   {name: 'J', sex: '男', age: 23, salary: 15000}
]

//1). 
employees.forEach(e => console.log(e))
//2). 
employees.sort((e1, e2) => e2.salary-e1.salary)
//3). 
employees.reduce((preTotal, e) => preTotal + (e.sex=='男'?e.salary:0), 0)
//4). 
employees.find(e => e.salary>1200 && e.salary<1400 && e.sex==='男')
//5). 
employees.filter(e => e.salary>1200)
//6). 
employees.map(e => ({'姓名/性别': `${e.name}/${e.sex}`, '年薪': e.salary*12}))
```

------

## 57.说说你对cookie的理解(分类, 创建, 保存, 使用)

**cookie**由`key`和`value`组成的文本小数据

**分类**: 会话cookie和持久化cookie

**由服务器端创建**: `res.cookie(key, value, {maxAge: 1000})`

**由浏览器端保存**: 浏览器接收到新的cookie会自动保存(内存/文件)

**使用**: 浏览器发送请求时自动携带对应的cookie, 服务器端通过req读取: `req.cookies.key`

------

## 58.内存结构图(原型结构图)

```js
function Foo () {}
const fn1 = new Foo()
const fn2 = new Foo()
const o1 = {}
const o2 = new Object()
```

<img src="images/wps1.jpg" alt="img" style="zoom:50%;" />

------

## 59.说说你对变量提升与函数提升的理解

**变量提升**: 在变量定义语句前就可以读取到变量, 值为undefined

**函数提升**: 在函数定义语句前就可以调用函数

**原因**: JS引擎在运行全局代码或执行函数前有预处理/解析

------

## 60.说说原型链的理解

**作用**: 原型链用于查找对象的属性

**什么**: 实例对象上都会有一个隐式原型属性(`__proto__`), 它指向的就是原型对象, 而原型对象也有`__proto__`属性指向它的原型对象

**为什么`__proto__`指向的是原型对象?**

-    构造函数对象上有显式原型属性(`prototype`), 它指向的就是原型对象
-    实例对象的`__proto__`属性被赋值为构造函数的prototype属性值

------

## 61.说说你对作用域链的理解

1. **作用**: 作用链用来查找变量

2. **什么**: 多个由内向外作用域形成的链

3. **作用域**: 一块代码区域, 

   ​	**分类**：全局作用域和函数/局部作用域, ES6有了块作用域

------

## 62.说说你对闭包的理解

1. **如何产生闭包?**

   ​	2个函数嵌套

      内部函数引用了外部函数内的局部变量

      执行外部函数

2. **是什么?**

   包含了那个局部变量的容器

   它被内部函数对象引用着

3. **作用?**

   ​	延长局部变量的生命周期

      使函数外部可以多次间接操作到函数内部的数据

4. **应用?**

   循环遍历加监听

   IIFE定义模块

   jQuery内部

5. **代码演示:**

```js
function fn1 () {
      var a = 2
      function fn2 () {
         a++
         console.log(a)
      }
      return fn2
   }
   var f = fn1()
   f()
   f()
   f = null
```

------

## 63.JS事件循环机制(图)

<img src="images/wps2.jpg" alt="img" style="zoom:50%;" />

------

## 64.比较函数的call()/apply()/bind()

1. `call(obj, param1, param2)/apply(obj, [[param1, param2])`

   调用/执行函数

   只是强制指定函数中的this为第一个参数指定的对象

   如果函数执行需要传参数, call是依次传递, apply需要封装成数组传递

2. `bind()`

   返回一个新函数, 不会自动执行, 需要手动执行

   强制指定函数中的this为第一个参数指定的对象

   新函数内部会原样调用原函数

------

## 65.debug调试

1. **调试的目的**

   ​     查找bug: 不断缩小可疑代码的范围

   ​     查看程序的运行流程(用于熟悉新接手项目的代码)

2. **如何开启调试模式**

   ​     添加语debugger句: 程序运行前     此方式用打包后才运行的项目

   ​     添加(打)断点: 程序运行前或者过程中   此方式用运行源码js

3. **如何进行调试操作**

   `resume`: 恢复程序执行(可能执行完或者进入下一个断点处)

   `step ove`: 单步跳转, 尝试执行完当前语句, 进入下一条(如果内部有断点, 自动进入内部断点处)

   `step into`: 跳入, 进入当前调用函数内部

   `step out`: 跳出, 一次性执行完当前函数后面所有语句,并出去

   `deactivate breakpoints`: 使所有断点暂时失效     

   `call stack`: 显示是程序函数调用的过程
    `scop`: 当前执行环境对应的作用域中包含的变量数据
    `breakpoints`: 断点列表

------

## 66.说说你对回调函数的理解

1. **什么函数才是回调函数**

   你定义的

   你没有直接调用

   它最终执行了

2. **回调函数相关的3个问题**

   什么时候执行

   用来做什么的

   函数中的this是谁

------

## 67.详细说明如何判断函数中的this

1. **正常情况**: 执行函数的方式决定了函数中的this

   **直接调用**: `fn()`       window

   **new调用**: `new fn()`   新创建的对象 

   **对象调用**: `obj.fn()`   obj对象

   **call/apply调用**: `fn.call(obj)`   第一个参数指定的对象

2. **特别情况**:

   **bind()返回的函数**: `fn2 = fn.bind(obj)` fn2()第一个参数指定的对象

   **箭头函数**: 使用的外部的this(内部没有自己的this) `fn = () => {} fn()`

   **回调函数**

   ​      **定时器回调/ajax回调/数组遍历相关方法回调**: window

   ​      **dom事件监听回调**: dom元素

   ​      **组件生命周期回调**: 组件对象

3. 在开发我们经常会利用**箭头函数/bind()来改变this的指向**

------

## 68.区别localStorage和sessionStorage, session与cookie

1. **localStorage**: 浏览器端持久化存储, 关闭浏览还存在, 最大5MB(基本没限制了)
2. **sessionStorage**: 浏览器端内存存储, 关闭浏览器不存在
3. **session**: 服务器端创建, 服务器端保存, 依赖于cookie
4. **cookie**: 服务器端创建, 浏览器端保存, 请求携带对应cookie, 长度和数量有限制(4kb)

------

## 69.关于2个引用变量指向同一个对象的2个问题

1. 2个引用变量指向同个对象, 通过一个引用变量改变对象内部的数据, 另一个引用变量看到的新的
2. 2个引用变量指向同个对象, 让一个引用变量指向一个新的对象, 另一个引用变量看到的还是原来的对象

------

## 70.console.log(a.b)的查找流程

1. 先查找a, 沿着作用域链查找, 找不到报错(变量未定义)
2. 找到后查找对象上的b属性, 查找原型链, 如果找不到返回undefined

------

## 71.为什么要深拷贝、浅拷贝？

```js
let a = {age: 1}
let b = a
a.age = 2 // 操作a也会影响b
console.log(b.age) // 2
//从上述例子中我们可以发现，如果给一个变量赋值一个对象，那么两者的值会是同一个引用，其中一方改变，另一方也会相应改变。
```

------

## 72.手写深度克隆

```js
//深度克隆：对象/数组
function deepClone(target) {
    // 1. 初始化变量，获取目标数据的类型
    let result, targetClass = getTargetClass(target);
    // 2. 判断目标的类型
    if(targetClass === 'Object'){ // 对象
        result = {};
    }else if(targetClass === 'Array'){  // 数组
        result = [];
    }else {
        return target;
    }
    // 3. 遍历目标数据
    for(let key in target){
        // 获取每一项值
        let item = target[key];
        // 4. 判断每一项数据的类型
        if(getTargetClass(item) === 'Object' || getTargetClass(item) === 'Array'){
            // 无论是对象还是数组，都可以result[key]取值
            // item = {name: 'kobe'}  item[]
            result[key] = deepClone(item);
        }else {
            result[key] = item;
        }
    }
    return result;
}
//定义一个判断数据类型的函数
function getTargetClass(target) {
    return Object.prototype.toString.call(target).slice(8, -1)
}
```

------

## 73.ES6中共有五种针对对象遍历的方法？

1. `for in`
       for in 循环遍历对象自身的和继承的可枚举的属性（不含Symbol属性）
2. `Object.keys(obj)`
   返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）
3. `Object.getOwnPropertyNames(obj)`
   返回一个数组，包含对象自身的所有属性（不含Symbol属性，但包括不可枚举属性）
4. `Object.getOwnPropertySymbols(obj)`
   返回一个数组，包含对象自身所有的Symbol属性
5. `Reflect.ownKeys(obj)`
   返回一个数组，包含对象自身的所有属性，不论属性名是Symbol或字符串，也不管是否可枚举。

------

## 74.什么是同源策略？

1. **同源策略**是由Netscape提出的一个著名的安全策略，现在所有支持JavaScript 的浏览器都会使用这个策略。
2. Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。
3. 所谓**同源**是指：协议，域名（IP），端口必须要完全相同
   即：**协议、域名（IP）、端口都相同**，才能算是在同一个域里。

------

## 75.非同源受到了哪些限制？

1. Cookie不能读取；
2. DOM无法获得；
3. Ajax请求不能发送

------

## 76.JSONP解决跨域

```js
//1.前端写法
<body>
	<button id="btn">按钮</button>
	<script type="text/javascript">
		var btn = document.getElementById('btn');
		btn.onclick = function() {
			//1. 创建一个script标签
			var script = document.createElement('script');
			//2. 设置回调函数
			window.getData = function(data) {
				console.log(data); //拿到数据
			}
			//3. 设置script标签src属性，填写跨域请求的地址
			script.src = 'http://localhost:3000/jsonp?callback=getData';
			//4. 将script标签添加到body中生效
			document.body.appendChild(script);
			//5.不影响整体DOM结构，删除script标签
			document.body.removeChild(script);
		}
	</script>
</body>
//2.后端写法
app.get('/jsonp', (req, res) => {
//解构赋值获取请求参数
const {callback} = req.query
//去数据库查找对应数据
const data = [{name: 'tom', age: 18}, {name: 'jerry', age: 20}];
res.send(callback + '(' + JSON.stringify(data) + ')');
})
```

------

## 77.Cors解决跨域？

以Node为例：
`res.set('Access-Control-Allow-Origin', 'http://localhost:63342');`

存在安全问题
以上两种凡是解决跨域， 第三种使用代理工具 反向代理工具

------

## 78.函数防抖

```js
// 防抖（一段时间会等，然后带着一起做了）
 function debounce(fn, delay){
     let timerId = null
     return function(){
         const context = this
         if(timerId){window.clearTimeout(timerId)}
         timerId = setTimeout(()=>{
             fn.apply(context, arguments)
             timerId = null
         },delay)
     }
 }
```

------

## 79.函数节流

```js
// 节流（一段时间执行一次之后，就不执行第二次）
 function throttle(fn, delay){
     let canUse = true
     return function(){
         if(canUse){
             fn.apply(this, arguments)
             canUse = false
             setTimeout(()=>canUse = true, delay)
         }
     }
 }
```

------

## 80.手写ajax

```js
var request = new XMLHttpRequest()
 request.open('GET', '/a/b/c?name=ff', true);
 request.onreadystatechange = function () {
   if(request.readyState === 4 && request.status === 200) {
     console.log(request.responseText);
   }};
 request.send();
```

后记
------

如需前端交流请以以下方式联系。

> QQ:2567046155
> Q群:110156046
> 备注：加好友请注明来源。
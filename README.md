# flexeplorer

## flex layout 学习

在学习flex 过程中，从CSS-TRICK网站获得了一些基本的知识，作者CHRIS COYIER解析得很清楚，
但是个人对子元素的flex属性值还是没有很明白，在文章下部分的参考中找到了一个可视化的学习
网站，http://bennettfeely.com/flexplorer,  看了之后对flex布局有了更加深入的了解，同时，
觉得这个网页很是炫酷，我萌发了“抄袭”创意，挑战自己，看是否能制作成一个和它类似（相同）
的网页，加油。

时间：2015年12月22日
Deadline: 2016年1月10日

## 选型

初步决定，采用flex布局实现网页基础布局，利用Bootstrap实现UI组件，采用Jquery库，综合原生javascript，实现
需求

## 工程拆分
+ 切页面（本周完成）
  + 布局实现 （Done，基本实现布局，但是还有很多小问题要改进）时间：2015-12-24.
<<<<<<< HEAD
    + main 部分不能充满，解决办法很简单，可以可main加一个高度，比如100vh;，另外可以给body添加绝对定位，top,bottom,left,right赋值为0.main height赋值100%,也能解决问题。
    + 基本布局完成，计划用semantic UI“装饰”组件
    + UI完成（细化无止尽，先放一下），接下来才是重头戏。
    + 
  + 
+ 功能实现
  + 基本功能实现
  + 先暂停开发，着手学习原生js，接着是DOM编程和Jquery，当然最终要的是对Javascript的理解

### 基本功能实现过程问题与实现(javascript)
1, 更新classname实现方法
    [add classname](http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript)
    
 实践过程中碰到问题：
 
  1, 提取指定元素classname后，为字符串，利用字符串方法replace()在网页内不能
    替换指定的classname，但是在控制台却能实现，待解决。
  2, 使用 += 的方法增加classname并绑定至某元素后，实现了基本功能，但是，多次点击
    却会多次在原字符串上增加（这个应该就是这个样子的），需要更换更好的方法，或者
    使用什么可以消除这个副作用？
  3,怎么实现多次点击，实现功能的切换？
  
  
#### 基本完成了flexbox相关的主题功能
+ 代码区代码如何跟进跟新？
+ 如何取得随机字符量的字符串（现在实现的方法（定义一个长的字符串，用'string.meth()结合，Math.property来
实现随机字数的字符串，但是效果不好::cry::)很丑，但是暂时还不会更好的，先用着。


### 完善所有功能，改进现有的方法，去除冗余
    
    
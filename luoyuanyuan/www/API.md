# 接口：/yijin/course/:uid
#### 功能：获得课程列表
#### 输入：uid（用户id）
#### 输出：json数组
#### demo:
```
浏览器访问 http://localhost:8080/yijin/course/2

结果：
[  {
    id: 1,
    cname: '初识HTML+CSS',
    summary:
     '本课程从最基本的概念开始讲起，步步深入，带领大家学习HTML、CSS样式基础知识，了解各种常用标签的意义以及基本用法，后 半部分教程主要讲解CSS样式代码添加，为后面的案例课程打下基础。',
    cimgurl: 'images/html+css.jpg',
    t_id: '1' },
   {
    id: 2,
    cname: 'java入门第一季',
    summary:
     '本教程为Java入门第一季，欢迎来到精彩的Java编程世界！Java语言已经成为当前软件开发行业中主流的开发语言。本教程将介绍Java环境搭建、工具使用、基础语法。带领大家一步一步的踏入Java达人殿堂！Let’s go!',
    cimgurl: 'images/Java.jpg',
    t_id: '15' } ]
```
# 接口：/yijin/course/chapter/:cid
#### 功能：获得课程列表
#### 输入：cid（章节的id）
#### 输出：json数组
#### demo:
```
浏览器访问 http://localhost:8080/yijin/chapters/1

结果：
[ RowDataPacket { id: 1, chaptername: '第一章，环境搭建', courseid: 1 },
  RowDataPacket { id: 2, chaptername: '第二章，HelloWorld', courseid: 1 } ]
```



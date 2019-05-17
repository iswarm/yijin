# 接口: /login
#### 功能：登录
#### 方法：post
#### 输入：{"username":"xxx","password":"xxx"}
#### 输出：json对象
#### demo:
```
demo1:
输入(正确的用户名，错误的密码):
{
	"username":"张三",
	"password":"3345678qq"
}
输出:
{
	"isSuccess":false,
	"message":"密码错误"
}
*********************************
demo2:
输入(错误的用户名):
{
	"username":"jjkkll",
	"password":"3345678qq"
}
输出：
{
	"isSuccess":false,
	"message":"用户名不存在"
}
*********************************
demo3：
输入(正确的用户名和密码):
{
	"username":"张三",
	"password":"123456"
}
输出:
{
	"isSuccess":true,
	"data":
		{
			"id":"1","username":
			"张三",
			"password":"123456",
			"email":"3373@qq.com",
			"phone":"13978999009"
		}
}
```
# 接口: /register
#### 功能：注册
#### 方法：post
#### 输入：{"username":"xx","password":"xxxx","phone":"xxxxxx","rid":"xxx"}
#### 输出:json对象
#### demo:
```
输入:
{
	"username":"王五",
	"password":"456712580",
	"phone":"15777950121",
	"rid":"1"
}
输出:
{
	isSuccess: true
	message: "注册成功"
}
```
# 接口：/course/:uid
#### 功能：根据用户的id查询用户拥有的可课程
#### 方法：GET
#### 输入：{"uid":"x"}
#### 输出：json对象
#### demo：
```
/course/1
{
	"courses":
	[
		{
			"id":1,
			"cname":"初识HTML+CSS",
			"summary":"本课程从最基本的概念开始讲起，步步深入，带领大家学习HTML、CSS样式基础知识，了解各种常用标签的意义以及基本用法，后半部分教程主要讲解CSS样式代码添加，为后面的案例课程打下基础。",
			"cimgurl":"images/html+css.jpg","t_id":"1"
		},
		{
			"id":2,"cname":"java入门第一季",
			"summary":"本教程为Java入门第一季，欢迎来到精彩的Java编程世界！Java语言已经成为当前软件开发行业中主流的开发语言。本教程将介绍Java环境搭建、工具使用、基础语法。带领大家一步一步的踏入Java达人殿堂！Let’s go!",
			"cimgurl":"images/Java.jpg","
			t_id":"15"
		}
	]
}
```
# 接口：/chapter/:cid
#### 功能：根据课程的id查询课程的章节
#### 方法：GET
#### 输入：{"cid":"x"}
#### 输出：json对象
#### demo：
```
/chapter/:cid
{
	"chapters":
	[
		{
			"id":1,
			"chaptername":"第一章，环境搭建",
			"courseid":1
		},
		{
			"id":2,
			"chaptername":"第二章，HelloWorld",
			"courseid":1
		}
	]
}
```
# 接口：/node/:chapterid
#### 功能：根据章节的id查询章节的小节
#### 方法：GET
#### 输入：{"chapterid","xx"}
#### 输出：json对象
#### demo:
```
/node/1

{
	"nodes":
	[
		{"id":1,"nodeName":"1-1.第一节","chapterId":1,"src":null},
		{"id":2,"nodeName":"1-2.第二节","chapterId":1,"src":null},
		{"id":3,"nodeName":"1-3.第三节","chapterId":1,"src":null}
	]
}
```
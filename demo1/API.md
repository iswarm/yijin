# 接口: /login
#### 功能：登录
#### 方法：post
#### version:1.0.1
#### 输入：{"username":"username","password":"password"}
#### 输入描述：username为用户名，password为密码
#### 输出：{"code":0,"message":"message","data":{}}
#### demo:
```
demo1:
输入(正确的用户名，错误的密码):
{
	"username":"张三",
  	"password":"asdasdsad"
}
输出:
{
	"code": 0,
	"message": "密码错误"
}
*********************************
demo2:
输入(错误的用户名):
{
	"username":"张啊大大撒旦三",
  	"password":"asdasdsad"
}
输出：
{
	"code": 0,
	"message": "用户名不存在"
}
*********************************
demo3：
输入(正确的用户名和密码):
{
	"username":"张三",
	"password":"123456"
}
输出:{
	"code": 1,
	"data": {
		"id": "0efc4a80-7d58-11e9-b50c-15995960f8f6",
		"username": "张三",
		"password": "123456",
		"email": "3373@qq.com",
		"phone": null
	}
}
```
# 接口: /register
#### 功能：注册
#### 方法：post
#### version:1.0.1
#### 输入：{"username":"username","password":"password","email":"email","rolename":"xxx"}
#### 输入描述：username为用户名，password为密码，email为邮箱，rolename为角色名
#### 输出：json对象
#### demo:
```
输入:
{
	"username":"iso-8859-1",
  	"password":"123456",
  	"email":"456@qq.com",
  	"rolename":"老师"
}
输出:
{
	"code": 1,
	"message": "注册成功"
}
```
# 接口：/user/:user_id/courses
#### 功能：根据用户的id查询用户拥有的可课程
#### 方法：GET
#### version:1.0.1
#### 输入：{"user_id":"user_id"}
#### 输入描述：user_id为用户的id
#### 输出：json对象
#### demo：
```
http://localhost:8080/user/1/courses
{
	"code": 1,
	"data": [
		  {
		"id": 1,
		"cname": "初识HTML+CSS",
		"summary": "本课程从最基本的概念开始讲起，步步深入，带领大家学习HTML、CSS样式基础知识，了解各种常用标签的意义以及基本用法，后半部分教程主要讲解CSS样式代码添加，为后面的案例课程打下基础。",
		"cimgurl": "images/html+css.jpg",
		"t_id": "1"
		},
		  {
		"id": 2,
		"cname": "java入门第一季",
		"summary": "本教程为Java入门第一季，欢迎来到精彩的Java编程世界！Java语言已经成为当前软件开发行业中主流的开发语言。本教程将介绍Java环境搭建、工具使用、基础语法。带领大家一步一步的踏入Java达人殿堂！Let’s go!",
		"cimgurl": "images/Java.jpg",
		"t_id": "15"
		}
	],
}
```
# 接口：/course/:course_id/chapter
#### 功能：根据课程的id查询课程的章节
#### 方法：GET
#### version:1.0.1
#### 输入：{"course_id":"course_id"}
#### 输入描述：course_id为课程的id
#### 输出：json对象
#### demo：
```
http://localhost:8080/course/1/chapters
{
	"code": 1,
	"data": [
		  {
		"id": 1,
		"chaptername": "第一章，环境搭建",
		"courseid": 1
		},
		  {
		"id": 2,
		"chaptername": "第二章，HelloWorld",
		"courseid": 1
		}
	],
}
```
# 接口：/node/:chapterid
#### 功能：根据章节的id查询章节的小节
#### 方法：GET
#### version:1.0.0
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
# 接口：/user/:user_id/courses/state/:statecode
#### 功能：查询用户已学课程
#### 方法：GET
#### version:1.0.1
#### 输入：{"user_id":"user_id","statecode":"statecode"}
#### 输出描述：user_id为用户id。statecode为状态可取值0或1，0表示未学，1表示已学
#### 输出：json对象
#### demo:
```
http://localhost:8080/user/2/courses/state/1

{
	"code": 1,
	"data": [
		  {
		"id": 3,
		"cname": "C语言入门",
		"summary": "本C语言教程从以下几个模块来贯穿主要知识点：初始C程序、数据类型、运算符、语句结构、函数和数组。每个阶段都配有练习题同时提供在线编程任务。希望通过本教程帮助C语言入门学习者迅速掌握程序逻辑并开始C语言编程。",
		"cimgurl": "images/c.jpg",
		"t_id": "22"
		}
	],
}
```
# 接口：/user/:user_id/recording/:hashcode
#### 功能：上传屏幕录像
#### 方法：put
#### version:1.0.1
#### 输入：{"user_id":"user_id","hashcode":"hashcode"}
#### 输出描述：user_id为用户id。hashcode为ipfs返回的hash值
#### 输出：json对象
#### demo:
```
http://localhost:8080/user/1/recording/adasdasdqwoeqwiuegiqwgeiuasd

{
	"code": 1,
	"message": "上传成功"
}
```
# 接口：/username/:username
#### 功能：检查用户名是否存在
#### 方法：get
#### version:1.0.1
#### 输入：{"username":"username"}
#### 输出描述：username为用户名。
#### 输出：json对象
#### demo:
```
http://localhost:8080/username/张三

{
	"message": "该用户名已被注册"
}

http://localhost:8080/username/张三aaaa
{
	"message": "该用户名可用"
}
```
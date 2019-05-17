# 请求Url: /login
#### 功能：登录
#### 接口描述：登录界面
#### 请求类型：post
#### 输入：{"username":"xxx","password":"xxx"}
#### 输出：json对象
#### 参数的请求与响应:
```
例子1:
请求:(输入正确的用户名，错误的密码):
{
	"username":"张三",
	"password":"3345678qq"
}
响应:
{
	"isSuccess":false,
	"message":"密码错误"
}
*********************************
例子2:
请求:(输入错误的用户名):
{
	"username":"jjkkll",
	"password":"3345678qq"
}
响应：
{
	"isSuccess":false,
	"message":"用户名不存在"
}
*********************************
例子3：
请求:(正确的用户名和密码):
{
	"username":"张三",
	"password":"123456"
}
响应:
{
	"isSuccess":true,
	"data":
		{
			"userid":"1",
			"username":"张三",
			"password":"123456",
			"email":"3373@qq.com",
			"phone":"13978999009"
		}
}
```
# 请求Url: /register
#### 功能：注册
#### 接口描述：注册页面
#### 请求类型：post
#### 输入：{"username":"xx","password":"xxxx","phone":"xxxxxx","userid":"xxx"}
#### 输出:json对象
#### 参数的请求与响应:
```
请求:
{
	"username":"王五",
	"password":"456712580",
	"phone":"15777950121",
	"userid":"1"
}
响应:
{
	"isSuccess": true
	"message": "注册成功"
}
```
# 请求Url：/course/:userid
#### 功能：根据用户的id查询用户拥有的课程
#### 接口描述：我的课程
#### 请求类型：get
#### 输入：{"userid":"x"}
#### 输出：json对象
#### 参数的请求与响应：
```
/course/:userid
{
	"courses":
	[
		{
			"userid":"1",
			"cid":"3",
			"kname":"初识HTML+CSS",
			"summary":"本课程从最基本的概念开始讲起，步步深入，带领大家学习HTML、CSS样式基础知识，了解各种常用标签的意义以及基本用法，后半部分教程主要讲解CSS样式代码添加，为后面的案例课程打下基础。",
			"cimgurl":"images/css.jpg"
		},
		{
			"userid":"1",
			"cid":"15",
			"kname":"java入门第一季",
			"summary":"本教程为Java入门第一季，欢迎来到精彩的Java编程世界！Java语言已经成为当前软件开发行业中主流的开发语言。本教程将介绍Java环境搭建、工具使用、基础语法。带领大家一步一步的踏入Java达人殿堂！Let’s go!",
			"cimgurl":"images/Java.jpg"
		}
	]
}
```
# 请求Url：/chapter/:cid
#### 功能：根据课程的id查询课程的章节
#### 接口描述：课程栏
#### 请求类型：get
#### 输入：{"cid":"x"}
#### 输出：json对象
#### 参数的请求与响应：
```
/chapter/:cid
{
	"chapters":
	[
		{
			"chapterid":"1",
			"chaptername":"第一章，环境搭建",
			"cid":"1"
		},
		{
			"chapterid":"2",
			"chaptername":"第二章，HelloWorld",
			"cid":"1"
		}
	]
}
```
# 请求Url：/node/:chapterid
#### 功能：根据章节的id查询章节的小节
#### 接口描述：章节栏
#### 请求类型：get
#### 输入：{"chapterid","xx"}
#### 输出：json对象
#### demo:
```
/node/:chapterid

{
	"nodes":
	[
		{"barid":1,"nodeName":"1-1.第一节","chapterid":1,"src":null},
		{"barid":2,"nodeName":"1-2.第二节","chapterid":1,"src":null},
		{"barid":3,"nodeName":"1-3.第三节","chapterid":1,"src":null}
	]
}
```
# 请求Url: /stuschedule
#### 功能：修改用户昵称
#### 接口描述：修改用户昵称那一栏
#### 请求类型：post
#### 输入：{"userid":"x","nickname":"xxx"}
#### 输出：json对象
#### 参数的请求与响应:
```
例子1:
请求:(输入新的用户昵称):

{
	"userid":"1",
	"nickname":"李四"
}
响应：
{
	"isSuccess":true,
	"message":"昵称修改成功"
}

******************

例子2:
请求:(输入已经存在的用户名):
{
	"userid":"2",
	"nickname":"王五"
}
响应：
{
	"isSuccess":false,
	"message":"昵称已经存在,请输入新的昵称"
}

```
# 请求Url: /tUname
#### 功能：填写用户真实姓名
#### 接口描述：修改学员名字那一栏
#### 请求类型：post
#### 输入：{"userid":"x"，"tUsername":"xxx"}
#### 输出:json对象
#### 参数的请求与响应:
```
请求:（输入真实姓名）:
{
	"userid":"2",
	"tUsername":"王五"
}
响应:
{
	"isSuccess": true
	"message": "保存成功"
}
```
# 请求Url：/card
#### 功能：绑定身份证件号
#### 接口描述：绑定身份证证那一栏
#### 请求类型：post
#### 输入：{"userid":"x","tUsername":"xxx","IDcard":"xxx"}
#### 输出：json对象
#### 参数的请求与响应：
```
例子1
请求:（输入真实姓名和身份证号）:
{
	"userid":"5",
	"tUsername":"陈皮",
	"IDcard":"450521199610286928"
}
响应:
{
	"isSuccess": true
	"message": "绑定成功"
}
*******
例子2
请求:（输入真实姓名和身份证号）:
{
	"userid":"5",
	"tUsername":"陈皮",
	"IDcard":"450521199610286938"
}
响应:
{
	"isSuccess": false
	"message": "信息错误，重新输入"
}
```
# 请求Url：/fcd
#### 功能：绑定子账号,便于老师跟踪学习
#### 接口描述:绑定子账号那一栏
#### 请求类型：post
#### 输入：{"userid":"x","fucard":"家长"}
#### 输出：json对象
#### 参数的请求与响应：
```
请求:（输入自己的身份类型）:
{
	"userid":"1",
	"fucard":"家长"
}
响应:
{
	"isSuccess": true
	"message": "绑定成功"
}
```
# 请求Url：/SearchBar/:coursename
#### 功能：搜索对应的课程
#### 接口描述:搜索那一栏
#### 请求类型：get
#### 输入：{"coursename":"xxx"}
#### 输出：json对象
#### 参数的请求与响应:
```
/SearchBar/:couresename
{
	"courses":
	[
		{
			"cid":"1",
			"coursename":"微信小程序入门和实战",
			"kimgurl":"images/one.jpg"
		},
		{
			"cid":"15",
			"coursename":"玩转算法与数据结构",
			"kimgurl":"images/two.jpg"
		}
	]
}
```
# 请求Url：/xcourses/:userid
#### 功能：反馈课程的通过情况和学习进度
#### 接口描述:发现那一栏
#### 请求类型：get
#### 输入：{"userid":"xxx"}
#### 输出：json对象
#### 参数的请求与响应:
```
/xcourses/:userid
{
	"courses":
	[
		{
			"userid":"1",
			"cid":"1",
			"kname":"微信小程序入门和实战",
			"kimgurl":"images/one.jpg","
			"message1": "课程已经完成",
			"message2": "进度为100%"
		},
		{
			"userid":"1",
			"c_id":"15",
			"kname":"玩转算法与数据结构",
			"kimgurl":"images/two.jpg","
			"message1": "课程未完成",
			"message2": "进度为60%"
		}
	]
}
```
# 请求Url: /Eanswer
#### 功能：进入练习
#### 接口描述：练习小节那一栏
#### 请求类型：post
#### 输入：{"exersiseid":"xxx"}
#### 输出：json对象
#### 参数的请求与响应:
```
请求:（点击练习章节）:
{
	"exersiseid":"1"
}
响应:
{
	        "exersiseid":"1"
			"message": "编写一段程序，输出：Hello world"
}
```
# 请求Url: /upload
#### 功能：上传录制的视频
#### 接口描述：录制完后的上传那一栏
#### 请求类型：post
#### 输入：{"videoid":"x"}
#### 输出：json对象
#### 参数的请求与响应:
```
请求:（点击分享按钮）:
{
	"videoid":"1"
}
响应:
{
	        "videoid":"1"
			"message": "上传成功"
			"hashmessage": "QmbFcQRZX3P5LwzTwLiSbxiRcczpdwahwPnukZLgQU25x8"
}

```
# 请求Url: /played
#### 功能：播放录制完的视频
#### 接口描述：播放录制视频栏
#### 请求类型：post
#### 输入：{"hashmessage":"xxx"}
#### 输出：json对象
#### 参数的请求与响应:
```
请求:(点击播放按钮):
{
	"hashmessage": "QmbFcQRZX3P5LwzTwLiSbxiRcczpdwahwPnukZLgQU25x8"
}
响应:
{
	        "videoid":"1"
}
```
# 请求Url: /download
#### 功能：下载视频
#### 接口描述：下载按钮那一栏
#### 请求类型：get
#### 输入：{"videoid":"x"}
#### 输出：json对象
#### 参数的请求与响应:
```
请求:(点击播放按钮):
{
	 "videoid":"1"
}
响应:
{
	  "message": "下载成功" 
}
```


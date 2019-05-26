# [ POST ] /login
#### 功能：登录用户
#### 接口描述：登录界面
#### 参数
| 参数名 | 类型 | 限制 | 描述 |
|:-------:|:-------|--------|--------:|
|username|varchar|1~50字节|姓名|
|password|varchar|1~50字节|密码|
#### 用例：
```
正向用例：
request（输入正确的用户名和密码）:
{
	"username":"张三",
	"password":"3345678qq"
}
response:
{
    "success":true,
    "data":{"id":1, "username":"张三"}
}
反向用例1：
request(输入正确的用户名，错误的密码):
{
	"username":"张三",
	"password":"3345678qq"
}
response:
"error": 
        {
            "message": "用户名或密码错误，请重新输入"
        }
反向用例2:
request(输入错误的用户名):
{
	"username":"jjkkll",
	"password":"3345678qq"
}
response：
"error": 
        {
            "message": "用户名或密码错误，请重新输入"
        }

```
# [ POST ] /register
#### 功能：注册用户
#### 接口描述：注册页面
#### 参数
| 参数名 | 类型 | 限制 | 描述 |
|:-------:|:-------|--------|--------:|
|username|varchar|1~50字节|姓名|
|password|varchar|1~50字节|密码|
|identity|String|1~50字节|身份|
|phone|int|1~50字节|手机号码|
#### 用例：
```
request:
{
	"username":"王五",
	"password":"456712580",
	"phone":"15777950121"
	"identity":"学生"
}
response:
{
	"success":true,
   "data":{"id":1, "username":"王五","password":"456712580",
   "phone":"15777950121","identity":"学生"}
}
```
# [ GET ] /users/1/course
#### 功能：根据用户的id查询用户拥有的课程
#### 接口描述：我的课程
#### 参数
| 参数名 | 类型 | 限制 | 描述 |
|:-------:|:-------|--------|--------:|
|userid|varchar|1~50字节|用户ID|
#### 返回参数
| 参数名 | 类型 | 限制 | 描述 |
|:-------:|:-------|--------|--------:|
|cid|int|1~50字节|课程ID|
|kanme|varchar|1~50字节|课程名字|
|summary|varchar|无限制|课程介绍|
#### 用例：
```
/users/1/course
{
	"courses":
	[
		{
			"cid":"3",
			"kname":"初识HTML+CSS",
			"summary":"本课程从最基本的概念开始讲起，步步深入，带领大家学习HTML、CSS样式基础知识，了解各种常用标签的意义以及基本用法，后半部分教程主要讲解CSS样式代码添加，为后面的案例课程打下基础。",
			"cimgurl":"images/css.jpg"
		},
		]
	}
```
# [ GET ] /course/1/chapter
#### 功能：根据课程的id查询课程的章节
#### 接口描述：课程栏
#### 参数
| 参数名 | 类型 | 限制 | 描述 |
|:-------:|:-------|--------|--------:|
|course|varhcar|1~50字节|课程|
|cid|int|1~50字节|课程ID|
|chapter|varchar|1~50字节|课程章节|
#### 返回参数
| 参数名 | 类型 | 限制 | 描述 |
|:-------:|:-------|--------|--------:|
|chapterid|int|1~50字节|章节ID|
|chaptername|varchar|1~50字节|章节名|
|cid|int|1~50字节|课程ID|
#### 用例：
```
/course/1/course
{
	"chapter":
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
# [ GET ] /chapter/1/chapter_section
#### 功能：根据章节的id查询章节的小节
#### 接口描述：章节栏
#### 参数
| 参数名 | 类型 | 限制 | 描述 |
|:-------:|:-------|--------|--------:|
|chapter|varhcar|1~50字节|课程章节|
|chapterid|int|1~50字节|章节ID|
|chapter_section|varchar|1~50字节|章节的小节|
#### 返回参数
| 参数名 | 类型 | 限制 | 描述 |
|:-------:|:-------|--------|--------:|
|chapterid|int|1~50字节|章节ID|
|barid|int|1~50字节|小节ID|
|barName|varchar|1~50字节|小节名|
#### 用例：
```
chapter/1/chapter_section
{
	"chapter_section":
	[
		{"barid":1,"barName":"1-1.第一节","chapterid":1,"src":null},
		{"barid":2,"barName":"1-2.第二节","chapterid":1,"src":null},
		{"barid":3,"barName":"1-3.第三节","chapterid":1,"src":null}
	]
}
```
# [ POST ] /nickname
#### 功能：修改用户昵称
#### 接口描述：修改用户昵称那一栏
#### 参数
| 参数名 | 类型 | 限制 | 描述 |
|:-------:|:-------|--------|--------:|
|nickname|varhcar|1~50字节|用户昵称|
#### 用例：
```
正向用例
request:
{
	
	"nickname":"李四"
}
response:
{
	"success":true,
    "message":"昵称修改成功"
}
反向用例
request:
{
	
	"nickname":"张五"
}
response:
"error": 
        {
            "message":"昵称已经存在,请输入新的昵称"
        }

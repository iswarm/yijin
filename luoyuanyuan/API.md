# 接口: /user/login
#### 功能：登录
#### 方法：post
#### 输入：{
    userName:xxx,
    password:xxx
}
#### 输出：json对象
#### demo:
```
访问 http://localhost:8080//user/login

参数1 {
    userName:"张三",
    password:"11111"
}
结果1：
{"isSuccess":false,"message":"密码错误"}


参数2：
{
    userName:"asdasdasd",
    pasword:"123456"
}
结果2：{"isSuccess":false,"message":"用户名或密码错误"}

参数3（正确的用户名和密码）
{
    userName:"张三",
    password:"123456"
}
结果3：
{"isSuccess":true,"data":[{"id":1,"username":"张三","password":"123456","email":"3373@qq.com","phone":"13978999009"}]}
```
# 接口：/yijin/chapter/:cid
#### 功能：同通过课程id获得课程的章节列表
#### 输入：{cid:xx}
#### 输出：json数组
#### demo:
```
浏览器访问 http://localhost:8080/yijin/chapters/1

结果：
[ RowDataPacket { id: 1, chaptername: '第一章，环境搭建', courseid: 1 },
  RowDataPacket { id: 2, chaptername: '第二章，HelloWorld', courseid: 1 } ]
```



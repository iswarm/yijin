# [ POST ] /login
#### 功能：登录用户
#### 接口描述：登录界面
#### 参数
| 参数名 | 类型 | 限制 | 描述 |
|:-------:|:-------|--------|--------:|
|username|String|1~50字节|姓名|
|password|varchar|1~50字节|密码|
#### 正向用例：
```
request:
{
	"username":"张三",
	"password":"3345678qq"
}
response:
{
    "success":true,
    "data":{"id":1, "username":"张三"}
}
const express = require('express');
const static = require('express-static');
const bodyParser = require('body-parser');
const userService = require('./service/userService.js');
const courseService = require('./service/courseService.js');

//1.实例化
var server = express();
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
//监听8080端口
server.listen(8080);
//处理登录请求
server.post("/login",(req,res)=>{
	//取出参数username，password
	var username = req.body.username;
	var password = req.body.password;
	//调用业务层login（）方法
	var result = userService.login(username,password,function(result){
		res.status(200).send(result).end();
	});
});
//处理注册请求
server.post("/register",(req,res)=>{
	//取出用户名
	var username = req.body.username;
	//取出密码
	var password = req.body.password;
	//取出电话号码
	var phone = req.body.phone;
	//取出角色id
	var rid = req.body.rid;
	var result = userService.register(username,password,phone,rid,function(result){
		res.status(200).send(result).end();
	});
});
//处理查询课程列表的请求
server.get("/course/:uid",(req,res)=>{
	var uid = req.params.uid;
	var result = courseService.getCourses(uid,(result)=>{
		res.status(200).send(result).end();
	});
});
server.get("/chapter/:cid",(req,res)=>{
	var cid = req.params.cid;
	var result = courseService.getChapters(cid,(result)=>{
		res.status(200).send(result).end();
	});
});
server.get("/node/:chapterid",(req,res)=>{
	var chapterid = req.params.chapterid;
	var result = courseService.getNodes(chapterid,(result)=>{
		res.status(200).send(result).end();
	});
});

//上传录制视频
server.get("/upload/:user_id/:code",(req,res)=>{
	var code = req.params.code;
	var user_id = req.params.user_id;
	userService.upload(user_id,code,(result)=>{
		res.status(200).send(result).end();
	});
});
//获取上传
server.get("/getVideo/:user_id",(req,res)=>{
	var user_id = req.params.user_id;
	userService.getVideo(user_id,(result)=>{
		res.status(200).send(result).end();
	});
});
//检查用户名是否存在
server.get("/checkusername/:username",(req,res)=>{
	var username = req.params.username;
	userService.checkusername(username,(result)=>{
		res.status(200).send(result).end();
	});
});
//static数据1
server.use(static("./static"));
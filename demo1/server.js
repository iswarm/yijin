const express = require('express');
const static = require('express-static');
const bodyParser = require('body-parser');
const userController =require('./controller/userController');
const courseController = require('./controller/courseController');
const recordingController = require('./controller/recordingController');
const userService = require('./service/userService.js');
const courseService = require('./service/courseService.js');

//1.实例化
var server = express();
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
//监听8080端口
server.listen(8080);
//处理登录请求
server.post("/login",userController.login);
//处理注册请求
server.post("/register",userController.register);
//处理查询课程列表的请求
server.get("/user/:user_id/courses",courseController.getCoursesByUser_id);
//处理查询已学课程的请求
server.get("/user/:user_id/courses/state/:statecode",courseController.getCompleteCoursesByUser_id);
//处理获取章节的请求
server.get("/course/:course_id/chapters",courseController.getChaptersByCourse_id);

//处理获取小节的请求
server.get("/node/:chapterid",(req,res)=>{
	var chapterid = req.params.chapterid;
	var result = courseService.getNodes(chapterid,(result)=>{
		res.status(200).send(result).end();
	});
});

//上传录制视频
//recordingController.upload
server.put("/user/:user_id/recording/:hashcode",userController.upload);

//获取上传
server.get("/getVideo/:user_id",(req,res)=>{
	var user_id = req.params.user_id;
	userService.getVideo(user_id,(result)=>{
		res.status(200).send(result).end();
	});
});
//检查用户名是否存在
server.get("/username/:username",userController.checkusername);
//static数据
server.use(static("./static"));
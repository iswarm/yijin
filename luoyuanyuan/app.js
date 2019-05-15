const express=require('express');
const static=require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const mysql=require('mysql');
const couserdao = require("./dao/coursedao.js");
const userdao = require("./dao/userdao.js");
const db=mysql.createPool({host: 'localhost', user: 'root', password: '123456', database: 'db_yijin',multipleStatements: true});
//一级路由
var student=require("./routes/student.js");
var userRouter=require("./routes/user.js");
//实例化
var server = express();
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
//监听8080
server.listen(8080);
//把连接池放到req里面
server.use((req,res,next)=>{
	req.db=db;
	req.couserdao=couserdao;
	req.userdao=userdao;
	next();
});
server.use("/student",student);
server.use("/user",userRouter);
//4.static数据
server.use(static('./static'));
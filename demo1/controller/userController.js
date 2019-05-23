const userService = require('../service/userService.js');
var login = (req,res)=>{
	//取出参数username，password
	var username = req.body.username;
	var password = req.body.password;
	//调用业务层login（）方法
	var result = userService.login(username,password,function(result){
		res.status(200).send(result).end();
	});
}
var register = (req,res)=>{
	//取出用户名
	var username = req.body.username;
	//取出密码
	var password = req.body.password;
	//取出电话号码
	var email = req.body.email;
	//取出角色id
	var rolename = req.body.rolename;
	var result = userService.register(username,password,email,rolename,function(result){
		res.status(200).send(result).end();
	});
}
var checkusername = (req,res)=>{
	var username = req.params.username;
	userService.checkusername(username,(result)=>{
		res.status(200).send(result).end();
	});
}
var upload = (req,res)=>{
	var hashcode = req.params.hashcode;
	var user_id = req.params.user_id;
	userService.upload(user_id,hashcode,(result)=>{
		res.status(200).send(result).end();
	});
}
var userController={
	login:login,
	register:register,
	checkusername:checkusername,
	upload:upload,
};
module.exports = userController;
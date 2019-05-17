const express=require('express');
const dao = require("../dao/userdao.js");
var router=express.Router();
//登录
router.post("/login",(req,res,next)=>{
	dao.selUserByUserName(req,res);
});
//注册
router.post("/register",(req,res)=>{
	
});
module.exports = router;
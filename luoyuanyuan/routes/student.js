const express=require('express');
const dao = require("../dao/coursedao.js");
var router=express.Router();
//查询学生的课程
router.get("/course/:uid",(req,res)=>{
	dao.selCourseByUid(req,res);
});
//查询课程的章节
router.get("/chapter/:cid",(req,res)=>{
	dao.selChapterByCid(req,res);
});
module.exports = router;
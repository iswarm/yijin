
module.exports={
	//根据学生的id查询相关的课程
	selCourseByUid:function(req,res){
		var uid;
		uid= req.params.uid;
		var result={};
		var db = req.db;
		db.query("select * from t_course where id in (select courseid from t_course_user where userId="+uid+")" ,(err,data)=>{
			if(err){
				result={
					isSuccess:false,
					message:err,
				}
			}
			else{
				result={
					isSuccess:true,
					data:data
				};
			}
			res.status(200).send(result).end();
		});
	},
	selChapterByCid:(req,res)=>{
		var cid = req.params.cid;
		var result={};
		var db = req.db;
		db.query("select * from t_chapter where courseid="+cid+"" ,(err,data)=>{
			if(err){
				result={
					isSuccess:false,
					message:err,
				}
			}
			else{
				result={
					isSuccess:true,
					data:data[0]
				};
			}
			res.status(200).send(result).end();
		});
	},
}
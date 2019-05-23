const mysql = require('mysql');
//创建数据库连接
var conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password: '123456',
	database: 'db_yijin',
	port:3306,
	multipleStatements: true
});
conn.connect();
//根据用户id查询课程
var selCourseByUid=(uid,callback)=>{
	var courses=[];
	var sql = "select * from t_course where id in (select courseid from t_course_user where userId=?)";
	conn.query(sql,[uid],(err,data)=>{
		if(err){
			console.log(sql);
			console.log(err);
		}else{
			courses = data; 
		}
		callback(courses);
	});
}
//根据课程号查询该课程的章节
var selChapterBycid=(cid,callback)=>{
	var chaptes=[];
	var sql = "select * from t_chapter where courseid=?";
	conn.query(sql,[cid],(err,data)=>{
		if(err){
			console.log(sql);
			console.log(err);
		}
		else{
			chapters =data; 
		}
		callback(chapters);
	});
}
//根据章节id查询小节信息
var selNodeByChapterId=(chapterId,callback)=>{
	var nodes=[];
	var sql = "select * from t_node where chapterId=?";
	conn.query(sql,[chapterId],(err,data)=>{
		if(err){
			console.log(sql);
			console.log(err);
		}
		else{
			nodes=data; 
		}
		callback(nodes);
	});
}

var selCompleteCourses=(user_id,statecode,callback)=>{
	var courses=[];
	var sql = "select * from t_course where id in (select courseid from t_course_user where userId=? and state=?)";
	conn.query(sql,[user_id,statecode],(err,data)=>{
		if(err){
			console.log(sql);
			console.log(err);
		}else{
			courses = data; 
		}
		callback(courses);
	});
}
module.exports={
	selCourseByUid:selCourseByUid,
	selChapterBycid:selChapterBycid,
	selNodeByChapterId:selNodeByChapterId,
	selCompleteCourses:selCompleteCourses,
}
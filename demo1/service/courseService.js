const courseDao = require('../dao/courseDao.js');
var getCourses= (uid,callback)=>{
	courseDao.selCourseByUid(uid,(courses)=>{
		var result={};
		//用户拥有的课程为0个
		if(courses.length<1){
			result={
				code:0,
				message:'暂时没有课程',
			}
		}
		else{
			result={
				code:1,
				data:courses,
			}
		}
		callback(result);
	});
}
//获取已经学的课程
var getCompleteCourses= (uid,statecode,callback)=>{
	courseDao.selCompleteCourses(uid,statecode,(courses)=>{
		var result={};
		//用户拥有的课程为0个
		if(courses.length<1){
			result={
				code:0,
				message:'暂时没有课程',
			}
		}
		else{
			result={
				code:1,
				data:courses,
			}
		}
		callback(result);
	});
}
//获取章节的方法
var getChapters = (cid,callback)=>{
	courseDao.selChapterBycid(cid,(chapters)=>{
		var result={};
		if(chapters.length<1){
			result={
				code:0,
				message:"没有章节",
			}
		}else{
			result={
				code:1,
				data:chapters,
			}
		}
		callback(result);
	});
}
//获取小节的方法
var getNodes =(chapterId,callback)=>{
	courseDao.selNodeByChapterId(chapterId,(nodes)=>{
		var result={};
		if(nodes.length<1){
			console.log();
		}else{
			result={
			nodes:nodes,
			}
		}
		callback(result);
	});
}
var courseService = {
	getCourses:getCourses,
	getChapters:getChapters,
	getNodes:getNodes,
	getCompleteCourses:getCompleteCourses,
}
module.exports=courseService;
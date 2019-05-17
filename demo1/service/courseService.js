const courseDao = require('../dao/courseDao.js');
var getCourses= (uid,callback)=>{
	courseDao.selCourseByUid(uid,(courses)=>{
		var result={};
		//用户拥有的课程为0个
		if(courses.length<1){
			result={
				message:'暂时没有课程',
			}
		}
		else{
			result={
				courses:courses,
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
			console.log("没有章节");
		}else{
			result={
				chapters:chapters,
			}
		}
		callback(result);
	});
}

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
}
module.exports=courseService;
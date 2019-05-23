const courseService = require('../service/courseService.js');
var  getCoursesByUser_id = (req,res)=>{
	var uid = req.params.user_id;
	var result = courseService.getCourses(uid,(result)=>{
		res.status(200).send(result).end();
	});
}

var getChaptersByCourse_id = (req,res)=>{
	var course_id = req.params.course_id;
	var result = courseService.getChapters(course_id,(result)=>{
		res.status(200).send(result).end();
	});
}
var getCompleteCoursesByUser_id = (req,res)=>{
	var user_id = req.params.user_id;//用户id
	var statecode = req.params.statecode;//是否是已学的标志
	var result = courseService.getCompleteCourses(user_id,statecode,(result)=>{
		res.status(200).send(result).end();
	});

}
var getCourses = (req,res)=>{
	var course_id = req.params.course_id;
	var result = courseService.getCourses((result)=>{
		res.status(200).send(result).end();
	});
}
var courseController={
	getCoursesByUser_id:getCoursesByUser_id,
	getChaptersByCourse_id:getChaptersByCourse_id,
	getCourses:getCourses,
	getCompleteCoursesByUser_id:getCompleteCoursesByUser_id,
};
module.exports = courseController;



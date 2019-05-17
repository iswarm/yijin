const userDao = require('../dao/userDao.js');
const uuid =require('uuid');
//

/*
param1：username(用户名)
param2：password(密码)
 */	
var login = (username,password,callback)=>{
	var result= {};
	userDao.selUserByUserName(username,(user)=>{
		//用户名不存在x
		if(user.length<1){
			result={
				isSuccess:false,
				message:"用户名不存在"
			};
		}
		else{
		//密码不正确
		if(user[0].password!=password){
			result={
				isSuccess:false,
				message:"密码错误"
			};
		}
		//密码正确
		else{
				result={
					isSuccess:true,
					data:user[0]
				};
			}
		}
		callback(result);
		});
	}
	/*
	param1：username(用户名)
	param2：password(密码)
	param3：phone(手机号)
	param4：rid(角色Id)
	param5：callback(回调函数)
 */
var register = (username,password,phone,rid,callback)=>{
	
		//生成用户Id
	 	var uid = uuid.v1();
	 	//调用数据访问层的insUser方法
	 	userDao.insUser(uid,username,password,phone,rid,function(flag){
	 	//说明用户添加成功了
	 	if(flag>0){
	 		result={
	 			isSuccess:true,
	 			message:"注册成功"
	 		};
	 		}else{
	 			//否则失败
	 		result={
	 			isSuccess:false,
	 			message:"注册失败"
	 		}; 
	 	}
	 	callback(result);
	 });
}
var upload = (user_id,code,callback)=>{
	//调用数据访问层
	var result = {};
	userDao.insUpload(user_id,code,(res)=>{
		if(res.flag>0){
			//说明添加成功
			result={
				isSuccess:true,
				message:"上传成功"
			};
		}
		else{
			result={
				isSuccess:false,
				message:res.message
			};
		}
		callback(result);
	});
	
}
var getVideo = (user_id,callback)=>{
	var result = {};
	userDao.selUpload(user_id,(res)=>{
		if(res.flag>0){
			//说明添加成功
			result={
				isSuccess:true,
				message:res.data
			};
		}
		else{
			result={
				isSuccess:false,
				message:res.message
			};
		}
		callback(result);
	});	
}
var checkusername = (username,callback)=>{
	var result={};
	userDao.selUserByUserName(username,(res)=>{
		//说明用户名已经不存在
		if(res.length>0){
			result={
				message:"该用户名已被注册"
				
			};
		}else{
			result={
				message:"该用户名可用"
			};
		}
		callback(result);
	});
}
var userSrvice={
	login:login,
	register:register,
	upload:upload,
	getVideo:getVideo,
	checkusername:checkusername
}
module.exports=userSrvice;
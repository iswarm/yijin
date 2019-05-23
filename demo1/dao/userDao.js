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
//连接数据库
conn.connect();
//根据用户名查询用户信息
var selUserByUserName = (username,callback)=>{
	var sql="select * from t_user where username=?";
	var user;
	var sql1="select * from t_user where username="+username+"";
	console.log(username);
	conn.query(sql,[username],(err,data)=>{
		if(err){
			user=[];
		}
		else{
			user= data;
		}
		
		callback(user);
	});
}
//添加用户
var insUser = (user_id,username,password,email,rolename,callback)=>{
	var sql = "insert into t_user(id,username,password,email) values(?,?,?,?);INSERT INTO t_user_role(user_id,role_id)  VALUE (?,(SELECT id FROM t_role WHERE rolename=?)) ";
	var params = [user_id,username,password,email,user_id,rolename]
	//出错时事务回滚
	//conn.beginTransaction(function(err){
		//if(err){

		//}
	//});
	conn.query(sql,params,(err,data)=>{
		var flag;
		if(err){
			console.log(err);
			flag=0;
		}
		else{
			flag=1;
		}
		console
		callback(flag);
	});
}
var insRecording = (user_id,hashcode,callback)=>{
	var sql = "insert into t_recording(user_id,hashcode) value(?,?)"
	var params = [user_id,hashcode];
	conn.query(sql,params,(err,data)=>{
		var result={};
		if(err){
			console.log(err);
			result={
				flag:0,
				message:err.errno
			};
		}else{
			result={
				flag:1,
			};
		}
		callback(result);
	
	});
}
var selUpload=(user_id,callback)=>{
	conn.query("select code from t_upload where user_id="+user_id+"",(err,data)=>{
		var result={};
		if(err){
			result={
				flag:0,
				message:err.errno
			};
		}else{
			result={
				flag:1,
				data:data
			};
		}
		callback(result);
	});
}

module.exports={
	selUserByUserName:selUserByUserName,
	insUser:insUser,
	insRecording:insRecording,
	selUpload:selUpload,
	
}
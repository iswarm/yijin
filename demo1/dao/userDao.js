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
var insUser = (uid,username,password,phone,rid,callback)=>{
	var sql = "insert into t_user(id,username,password,phone) values(?,?,?,?);insert into t_user_role(user_id,role_id) values(?,?)";
	var params = [uid,username,password,phone,uid,rid]
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
		console.log(data);
		callback(flag);
	});
}
var insUpload = (user_id,code,callback)=>{
	var sql = "insert into t_upload(user_id,code) value(?,?)"
	var params = [user_id,code];
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
	insUpload:insUpload,
	selUpload:selUpload
}
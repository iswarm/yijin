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
var selUserByUserName = (username,callback)=>{
	var sql="select * from t_user where username=?";
	var user;
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
module.exports={
	selUserByUserName:selUserByUserName,
	insUser:insUser
}
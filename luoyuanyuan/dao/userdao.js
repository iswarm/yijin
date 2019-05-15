module.exports={
	selUserByUserName:(req,res)=>{
		var db = req.db;
		var userName = req.body.userName;
		var password= req.body.password;
		console.log(req.body);
		var result;
		var sql='select * from t_user where userName="'+userName+'"';
		db.query(sql,(err,data)=>{
			if(err){
				result={
					isSuccess:false,
					message:"查询出错"
				}
			}
			else{
				if(data.length<1){
					result={
						isSuccess:false,
						message:"用户名或密码错误"
					};
				}
				else{
					var zpwd= data[0].password;
					if(password!=zpwd){
						result={
						isSuccess:false,
						message:"密码错误"
						};
					}
					else{
						result={
							isSuccess:true,
							data:data[0]
						};
					}
				}
			}
			res.status(200).send(result).end();
		}); 
	}

}
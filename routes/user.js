var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'desmay',
	password : 'webtechnology',
	database : 'desmay'
});

connection.connect(function(err){
	if(!err) {
		console.log("Database is connected ... nn");
	} else {
		console.log("Error connecting database ... nn");
	}
});

exports.getData = function(req,res){
  var userid = req.params.userId;
 
  connection.query('SELECT * FROM user WHERE id = ?',[userid], function (error, results, fields) {
	  if (error) {
		console.log("error ocurred",error);
		res.send({
		  "code":400,
		  "failed":"error ocurred"
		})
	  }else{
		console.log('The solution is: ', results);
		res.send({
		  "code":200,
		  "data": results
		});
	  }
  });
}
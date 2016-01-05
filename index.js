var express = require("express");
var mysql = require("mysql");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json()); //body parse user JSON data
/*
* Configure MySQL parameters.
*/
var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "nba_garycomics"
});

/*Connecting to Database*/

connection.connect(function(error){
if(error){
	console.log("Problem with MySQL"+error);
}
else{
	console.log("Connected with Database");
	}
});

/*Start the Server*/

app.get('/',function(req,res){
	res.sendfile('view/index.html');
});

app.get('/addplayer',function(req,res){
	res.sendfile('view/addplayer.html');
});

app.use('/view', express.static(__dirname + '/view'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images'));




// app.get('/about',function(req,res){
//   res.sendFile('/about.html');
// });

// app.get('/sitemap',function(req,res){
//   res.sendFile('/sitemap.html');
// });

/*
* Here we will call Database.
* Fetch news from table.
* Return it in JSON.
*/

// app.get('/load',function(req,res){
// 	connection.query("SELECT * from user_info",function(err,rows){
// 		if(err){
// 				console.log("Problem with MySQL"+err);
// 		}
// 		else{
// 				res.end(JSON.stringify(rows));
// 			}
// 		});
// });


//GET to show all players
app.get('/load', function(req, res){
	
	var data = {
		"error" : 1,
		"response" : ""
	};

	connection.query("SELECT * from user_info", function(err, rows, fields){
		if(rows.length != 0){
			data["response"] = 200;
			data["player"] = rows;
			res.json(data);
		}
		else{
			data["player"] = "No players found";
			res.json(data);
		}
	});

});

//POSt
app.post('/player', function(req, res){

	var user_id = req.body.user_id;
	var player_name = req.body.player_name;
	var profile_picture = req.body.profile_picture;
	var position = req.body.position;
	var team = req.body.team;
	var rank = req.body.rank;
	var data = {
		"response" : "",
		"player" : ""
	}

	if( player_name && profile_picture && position && team && rank ){
		connection.query("INSERT INTO user_info VALUES(?,?,?,?,?,?)", [user_id, profile_picture,player_name, position, team, rank], function(err, rows){
			if(!!err){
				data["response"] = 404;
				data["player"] = "Error adding this player";
			}
			else{
				data["response"] = 200;
				data["player"] = "player added succesfully";
			}
			res.json(data);
		});
	}
	else{
		data["response"] = 202;
		data["player"] = "Provide all require data (.i.e, profile_picture, link, and name)";
		res.json(data);
	}

});

app.listen(9000,function(){
	console.log("It's Started on PORT 9000");
});
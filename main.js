var express = require('express');
var app = express();

app.get('/hello', function(req, res){
	//Get creds from browser
	res.statusCode = 200;
	res.send("Success!")
});

app.listen(process.env.PORT || 8080);

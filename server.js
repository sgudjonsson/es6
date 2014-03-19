var express = require("express"),
	app = express();

app.use(express.static(__dirname + '/public'));
app.get("*", function(req, res) { res.sendfile("public/index.html"); });
app.listen(1337);
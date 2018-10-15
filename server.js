var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	hostname = 'localhost',
	mongoose = require('mongoose'),
	Task = require('./api/models/todoListModel'), 
	bodyParser = require('body-parser');

	// mongoose instance connection url connection
	mongoose.Promise = global.Promise;
	mongoose.connect(`mongodb://${hostname}/tododb`, {useNewUrlParser: true});
	
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	
	app.use((req, res) => {
		res.status(404).send({url: req.originalUrl + ' not found'});
	});
	
var routes = require('./api/routes/todoListRoutes');
routes(app);
	
app.listen(port, hostname, () => {
	console.log(`Server started on http://${hostname}:${port}`);
});
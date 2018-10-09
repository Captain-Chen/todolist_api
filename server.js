var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	hostname = 'localhost';

app.listen(port, hostname, () => {
	console.log(`Server started on http://${hostname}:${port}`);
});
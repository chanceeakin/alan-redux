const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/alan-react');
var db = mongoose.connection;
var Page = require('./models/Page');

db.on('error', function (err) {
	console.log('Mongoose Error: ', err);
});

db.once('open', function () {
	console.log('Mongoose connection successful');
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));


app.get('/syllabus', function (req, res) {
	var file = './public/content/Files/1st9WeeksSchedule.docx';
	res.download(file); // Set disposition and send it.
});

app.get('/sq3rAlt', function (req, res) {
	var file = './public/content/Files/SQ3R-alt.docx';
	res.download(file);
});

app.get('/sq3rAdvanced', function (req, res) {
	var file = './public/content/Files/SQ3RReadingWorksheet-advanced.docx';
	res.download(file);
});

// take incoming requests. send data.
app.get('/api/:path', function (req, res) {
	Page.findOne({path: req.params.path}, function (err, resp) {
		if (err) {
			logger.log(err);
			res.status(400).send(err);
		}
		console.log(resp);
		res.status(200).send(resp);
	});
});


app.use(express.static(process.cwd() + './public'));
app.use(express.static(process.cwd() + './../client/build'));

app.listen(PORT, function () {
	console.log('App listening on PORT: ' + PORT);
});

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3017;

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

const staticHome = path.join(__dirname, '../client/build/')

function home (req, res) {
    res.sendFile(staticHome + 'index.html')
}

// app.get('/downloads/syllabus', function (req, res) {
// 	const file = './files/1st9WeeksSchedule.docx';
// 	res.download(file); // Set disposition and send it.
// });

app.get('/downloads/sq3rAlt', function (req, res) {
	console.log('heyh');
	const file = './files/SQ3R-alt.docx';
	res.status(200).download(file);
});

app.get('/downloads/sq3rAdvanced', function (req, res) {
	const file = './files/SQ3RReadingWorksheet-advanced.docx';
	res.download(file);
});

// take incoming requests. send data.
app.get('/api/:path', function (req, res) {
	Page.findOne({path: req.params.path}, function (err, resp) {
		if (err) {
			logger.log(err);
			res.status(400).send(err);
		}
		res.status(200).send(resp);
	});
});

app.use(express.static(staticHome));

app.get('*', home)

app.listen(PORT, function () {
	console.log('App listening on PORT: ' + PORT);
});

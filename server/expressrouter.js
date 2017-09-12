module.exports = function (app) {
	console.log('express router loaded');

	app.get('/', function (req, res) {
		res.send('./public/index.html');
	});
	// WRITE THE DAMN ROUTES.
	app.get('/syllabus', function (req, res) {
		var file = './public/content/Files/1st9WeeksSchedule.docx';
		res.download(file); // Set disposition and send it.
	});

	app.get('/homework', function (req, res) {
		var file = './public/content/Files/HomeworkSheet.docx';
		res.download(file); // Set disposition and send it.
	});
};

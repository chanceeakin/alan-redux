// require mongoose
const mongoose = require('mongoose');
// create Schema class
const Schema = mongoose.Schema;

const Link = new Schema({
	title: {
		type: String,
		required: false
	},
	path: {
		type: String,
		required: false
	}
});

const Esri = new Schema({
	title: {
		type: String,
		required: false
	},
	path: {
		type: String,
		required: false
	}
});

const Audio = new Schema({
	title: {
		type: String,
		required: false
	},
	path: {
		type: String,
		required: false
	}
});

const Image = new Schema({
	title: {
		type: String,
		required: false
	},
	path: {
		type: String,
		required: false
	}
});

const Page = new Schema({
	title: {
		type: String,
		required: false
	},
	path: {
		type: String,
		required: false
	},
	// this only saves one note's ObjectId. ref refers to the Note model.
	link: [Link],
	audio: [Audio],
	image: [Image],
	esri: [Esri],
	background: {
		type: String
	},
	video: {
		title: {
			type: String,
			required: false
		},
		path: {
			type: String,
			required: false
		}
	}
}, {collection: 'studentpages'});

// Create the Article model with the ArticleSchema

// export the model
module.exports = mongoose.model('Page', Page);

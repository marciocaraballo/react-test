var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

mongoose.connect('mongodb://mqdadmin:MDQadmin2014@ds059887.mongolab.com:59887/proyectomqd');

var FileSchema = new Schema({
	path : {
		type : String,
		required : true
	},
	size : {
		type : Number
	},
	type : {
		type : String
	}
});

var FileModel = mongoose.model('File', FileSchema);
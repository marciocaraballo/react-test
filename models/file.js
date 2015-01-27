var mongoose = require('mongoose');

mongoose.connect('mongodb://marciocaraballo:yosoydelverde1@ds051970.mongolab.com:51970/fileupload');

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

FileSchema.statics.load = function (id, cb) {
	this.findOne({
		_id : id
	}).exec(cb);
};

var FileModel = mongoose.model('File', FileSchema);
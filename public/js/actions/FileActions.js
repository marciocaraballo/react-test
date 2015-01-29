var AppDispatcher = require('../dispatcher/Dispatcher'),
	FileConstants = require('../constants/FileConstants');

var FileActions = {

	create : function (file) {
		AppDispatcher.dispatch({
			actionType : FileConstants.FILE_CREATE
			file : file
		});
	},

	destroy : function (fileName){
		AppDispatcher.dispatch({
			actionType : FileConstants.FILE_DESTROY,
			fileName : fileName
		});
	}

}

module.exports = FileActions;
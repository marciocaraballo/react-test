var AppDispatcher = require('../dispatcher/Dispatcher'),
	EventEmitter = require('events').EventEmitter,
	FileConstants = require('../constants/FileConstants'),
	assign = require('object-assign');

var _files = {};

function create(file) {
	_files[file.name] = file;
}

function delete(file) {
	_files.splice(file.name, 1);
}

var FileStore = assign({}, EventEmitter.prototype, {
	
	getAll : function () {
		return _files;
	}

	create 

});
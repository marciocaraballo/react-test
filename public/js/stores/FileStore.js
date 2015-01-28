var AppDispatcher = require('../dispatcher/Dispatcher'),
	EventEmitter = require('events').EventEmitter,
	FileConstants = require('../constants/FileConstants');

var _files = {};
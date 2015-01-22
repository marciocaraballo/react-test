/** @jsx React.DOM **/

var React = require('react'),
	FilterableTable = require('components/FilterableTable.jsx');

/** Mock data*/
var files = [{
	name : 'Fileclank',
	size: '100kb',
	type: 'php'
},{
	name : 'Filecluc',
	size: '120kb',
	type: 'php'
},{
	name : 'Bojo',
	size: '10kb',
	type: 'php'
},{
	name : 'Riber',
	size: '100000kb',
	type: 'txt'
},{
	name : 'Rasin',
	size: '1067kb',
	type: 'txt'
},{
	name : 'Filecluc',
	size: '0kb',
	type: 'png'
},{
	name : 'Filecluc',
	size: '12kb',
	type: 'js'
}];

React.renderComponent(<FilterableTable files={files} />, document.getElementById('filterableTable'));
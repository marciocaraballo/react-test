/** @jsx React.DOM **/

var React = require('react'),
	FilterableTable = require('./components/FilterableTable.jsx'),
	DropZone = require('./components/DropZone.jsx'),
	FileStore = require('./stores/FileStore')
	assign = require('object-assign');

var App = React.createClass({

	getInitialState : function () {

		return {
			allFiles : FileStore.getAll();
		};
	},

	handleNewFile : function (file) {

		var newFiles = this.state.files.concat(file);

		this.setState({
			files : newFiles
		});
	},

	handleFileDelete : function (fileName) {

		var files = this.state.files.slice(0),
			newFiles = files.filter(function (file){
				return file.name !== fileName;
			});

		this.setState({
			files : newFiles
		});

	},

	render : function () { 

		return (

			<section>
				<DropZone onNewFile={this.handleNewFile} />
				<FilterableTable files={this.state.files} onDeleteFile={this.handleFileDelete} />
			</section>

		);
	}
});

React.renderComponent(<App />, document.getElementById('app'));
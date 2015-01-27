/** @jsx React.DOM **/

var FileRow = require('./FileRow.jsx'),
	React = require('react');

var FilesTable = React.createClass({
	render : function () {

		var props = this.props;

		var rows = this.props.files
		.filter(function (file){
			return file.name.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
		})
		.map(function (file){
			return <FileRow key={file.name} file={file} />;
		});

		return (

			<table id="fileTable" className="table table-grid">
				<thead>
					<tr>
						<th>File name</th>
						<th>Size</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>

		);
	}
});

module.exports = FilesTable;
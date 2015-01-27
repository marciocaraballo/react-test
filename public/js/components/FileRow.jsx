/** @jsx React.DOM **/

var React = require('react');

var FileRow = React.createClass({
	render : function () {
		return (
			<tr>
				<td>{this.props.file.name}</td>
				<td>{this.props.file.size}</td>
				<td>{this.props.file.type}</td>
			</tr>
		)
	}
});

module.exports = FileRow;
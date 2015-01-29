/** @jsx React.DOM **/

var React = require('react');

var FilterBar = React.createClass({

	propTypes : {

		onFilterInput : React.PropTypes.func.isRequired,
		filterText : React.PropTypes.string

	},

	handleTextChange: function () {
		this.props.onFilterInput(this.refs.filterTextInput.getDOMNode().value);
	},
	render : function () {

		return (
			<div className="filter">
				<span>Search by name</span>
				<input ref="filterTextInput" value={this.props.filterText} onChange={this.handleTextChange} type="search" placeholder="Enter file name" />
			</div>
		);

	}
});

module.exports = FilterBar;
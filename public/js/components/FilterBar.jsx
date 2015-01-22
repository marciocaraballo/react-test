/** @jsx React.DOM **/

var FilterBar = React.createClass({
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

module.expots = FilterBar;
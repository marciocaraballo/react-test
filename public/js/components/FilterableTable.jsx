/** @jsx React.DOM **/

var FilterBar = require('./FilterBar.jsx'),
	FilesTable = require('./FilesTable.jsx');

var FilterableTable = React.createClass({
	propTypes : {
		files : React.PropTypes.arrayOf(React.PropTypes.string).isRequired
	},
	getInitialState: function () {
		return {
			filterText : ''
		};
	},
	handleFilterInput : function (filterText){
		this.setState({
			filterText : filterText
		});
	},
	render : function () {
		return (
			<section class="file-list">
				<FilterBar onFilterInput={this.handleFilterInput} filterText={this.state.filterText} />
				<FilesTable filterText={this.state.filterText} files={this.props.files} />
			</section>
		);
	}
});

module.exports = FilterableTable;
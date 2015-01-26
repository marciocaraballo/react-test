var DropZone = React.createClass({

	handleDrop : function (e){

		e.preventDefault();

		this.className = '';

		var multipleFiles = Array.prototype.slice.call(e.dataTransfer.files);

		multipleFiles.map( function (file) {

			var dataFile = {
				name : file.name,
				size: file.size,
				type: file.type
			}

		});

		this.props.onNewFile(multipleFiles);

		return false;
	},

	handleDragOver : function () {

		this.className = 'hover';

		return false;
	},

	handleDragEnd : function () {

		this.className = '';

		return false;
	},

	render : function () {
		return (

			<section id="dragzone" onDragOver= {this.handleDragOver} onDragEnd={this.handleDragEnd} onDrop={this.handleDrop} className="drag-zone">
				<p>Drag your files here</p>
			</section>

		);
	}
});

module.exports = DropZone;
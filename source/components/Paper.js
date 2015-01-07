var $ = require('jquery');
var React = require('react');

var Note = require('./Note.js');

var note_id = 1;

var Paper = React.createClass({
	getInitialState() {
		return {notes: []};
	},
	render() {
		return (
			<div role="main" className="paper" onClick={this.addNote}>
				{this.state.notes.map((note) => <Note {...note} />)}
			</div>
		);
	},
	addNote({clientX, clientY}) {
		var new_note = {
			key: note_id++,
			position: {
				top:  event.clientY + $(window).scrollTop() - 42,
				left: event.clientX + $(window).scrollLeft()
			}
		};
		this.setState({notes: this.state.notes.concat(new_note)});
	},
	
	componentDidMount() {
		console.log('Paper mounted!');
	},
	componentDidUpdate() {
		console.log('Paper updated!');
	}
});

module.exports = Paper;

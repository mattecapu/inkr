var $ = require('jquery');
var React = require('react');
var markdown = require('markdown').markdown;

var Note = React.createClass({
	getInitialState() {
		return {source: ''};
	},
	render() {
		var parsed_markdown = markdown.toHTML(this.state.source);
		return (
			<div className="note" ref="root" style={this.props.position} onClick={this.enterEdit}>
				<textarea className="note-source" ref="source" onBlur={this.exitEdit}></textarea>
				<p className="note-rendered" ref="rendered" dangerouslySetInnerHTML={{__html: parsed_markdown}}></p>
			</div>
		);
	},

	componentDidMount() {
		this.enterEdit();

		console.log('Note', this.props.id, 'mounted!');
	},
	componentDidUpdate() {
		console.log('Note', this.props.id, 'updated!');
	},

	enterEdit(event) {
		$(this.refs.root.getDOMNode()).addClass('selected');
		this.refs.source.getDOMNode().focus();
		event.stopPropagation();

		console.log('Note', this.props.id, 'focused');
	},
	exitEdit() {
		this.setState({
			source: this.refs.source.getDOMNode().value
		});
		$(this.refs.root.getDOMNode()).removeClass('selected');

		console.log('Note', this.props.id, 'blurred');
	}
});

module.exports = Note;

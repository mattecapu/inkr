var React = require('react');
var markdown = require('markdown').markdown;

var Note = React.createClass({
	getInitialState() {
		return {source: ''};
	},
	render() {
		return (
			<div className="note" style={this.props.position} onClick={(e) => e.stopPropagation()}>
				<textarea className="note-source" ref="source"></textarea>
				<p className="note-render" dangerouslySetInnerHTML={markdown.toHTML(this.state.source)}></p>
			</div>
		);
	},
	
	componentDidMount() {
		this.refs.source.getDOMNode().focus();
	}
});

module.exports = Note;

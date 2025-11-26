import React, { Component } from 'react';
import { connect } from "react-redux";
import {setText} from '../features/reducers/markdownReducer.js';
import { marked } from 'marked';
import '../styles/Page.css';

marked.setOptions({
  breaks: true
});

class Page extends Component {
    constructor(props){
        super(props);

    }

    handleChange = (event) => {
        this.props.saveText(event.target.value);
    }

    render() {
        const newText = marked(this.props.text);
        return (
            <div id="main-container">
                <h1>Markdown Previewer</h1>
                <div id="editor-container">
                    <h2>Editor</h2>
                    <textarea id="editor" value={this.props.text} onChange={this.handleChange}></textarea>
                </div>
                <div id="preview-container">
                    <h2>Preview</h2>
                    <div id="preview" dangerouslySetInnerHTML={{ __html: newText }}></div>
                </div>
            </div>
        )
    }

}


const mapStateToProps = (state) => ({
  text: state.markdown.text,
});

const mapDispatchToProps = (dispatch) => ({
  saveText: (input) => dispatch(setText(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);

export { Page };
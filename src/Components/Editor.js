import React, { Component } from "react";
import "./Editor.css";
import CodeMirror from "@uiw/react-codemirror";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEditor: "CodeMirror",
    };
    this.saveState = this.saveState.bind(this);
    this.renderTextEditor = this.renderTextEditor.bind(this);
  }

  saveState(text) {
    this.props.updateCode(text);
  }

  renderTextEditor() {
    return (
      <CodeMirror
        value="console.log('hello world!');"
        height="100%"
        swidth="100"
        className="CodeMirror"
        onChange={(editor, metadata, value) => {
          this.saveState(editor)       
         }}
      />
    );
  }

  render() {
    return (
      <div className="Editor">
        <div className="EditorHeader">
          <button type="button" className="editorButton isActive">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-code"
            >
              <path
                fill-rule="evenodd"
                d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
              ></path>
            </svg>
            Text Editor
          </button>
          <button type="button" className="editorButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-collection-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"></path>
            </svg>
            Drag and Drop
          </button>
        </div>

        {this.renderTextEditor()}
      </div>
    );
  }
}

{
  /* <div className="LineNumber">

</div>
<textarea name="userCode" id="userCode" onChange={this.saveState}></textarea> */
}

export default Editor;

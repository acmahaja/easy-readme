import React, { Component } from "react";
import "./Editor.css";
import CodeMirror from "@uiw/react-codemirror";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEditor: 'CodeMirror'
    }
    this.saveState = this.saveState.bind(this);
  }

  saveState(evt) {
    this.props.updateCode(evt.target.value);
  }

  render() {
    return (

      <div className="Editor">
        <CodeMirror
          value="console.log('hello world!');"
          height="100%"
          swidth="100"
          // maxWidth="35.5em"
          className="CodeMirror"
          option
        />
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

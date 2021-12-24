import React, { Component } from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Editor from './Components/Editor';
import Preview from './Components/Preview';
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userCode: "<h1>This is a heading 1<h1>"
    }
    this.updateCode = this.updateCode.bind(this);
  }

  updateCode(newCode){
    this.setState({
      userCode: newCode
    })
  }

  render(){
    return(
      <div className="App">
        <Navbar />
        
        <div className="Sections">
          <Editor code = {this.state.userCode} updateCode={this.updateCode}/>
          <Preview code = {this.state.userCode} />

        </div>
      </div>
    )
  }
}


export default App;

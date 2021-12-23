import React, { Component } from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Editor from './Components/Editor';
import Preview from './Components/Preview';
class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="App">
              <Navbar />
        
        <div className="Sections">
          <Editor />
          <Preview />

        </div>
      </div>
    )
  }
}


export default App;

import React, { Component } from 'react';
import './Preview.css'

class Preview extends Component{
  render(){
    return(
      <div className="Preview">
        {this.props.code}
      </div>
    )
  }
}


export default Preview;

import React, { Component } from 'react';
import './model.css';
import PropTypes from 'prop-types';
import ModelConnect from './model_connect.js';

class Model extends Component {

  constructor(props){
     super(props);
 } 

  render() {
  // <ModelConnect show={this.state.show} close={this.closeModel} dataItem={data}/>
      
    return (
      
      <div>
       <ModelConnect show={this.props.show} close={this.props.close} dataItem={this.props.dataItem}/>
           
      </div>
    );
  }
}

export default Model;



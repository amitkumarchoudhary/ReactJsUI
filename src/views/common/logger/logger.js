import React, { Component } from 'react';

class Logger extends Component {
  constructor(props){
   super(props);
   console.log('cons call..');
  }

  componentWillMount(){
       console.log('componentWillMount call..');
  }
  componentDidMount(){
       console.log('componentDidMount call..');
  
  }
   componentDidUpdate(oldProps,oldState){
       console.log('oldProps call..'+JSON.stringify(oldProps));
       console.log('oldState call..'+oldState);
  
  }
  componentWillUnmount(){
      console.log('componentWillUnmount trigger.....');
  }
  componentWillReceiveProps(nextProps){
   console.log('componentWillMount nextProps..'+JSON.stringify(nextProps));
  }
  shouldComponentUpdate(nextProps,newState){
    console.log('nextProps call..'+JSON.stringify(nextProps));
    console.log('newState call..'+newState);
      return true;
  }
  componentWillUpdate(nextProps,newState){
      console.log('nextProps call..'+JSON.stringify(nextProps));
      console.log('newState call..'+newState);
  }
  
  render() {
     console.log('render  call..');
    return (
      <div>
      <h1>{this.props.time}</h1>
      </div>
    );
  }
}

export default Logger;

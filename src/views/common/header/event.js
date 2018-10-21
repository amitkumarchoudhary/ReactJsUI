import React, { Component } from 'react';
import Counter from './counter.js';

class MyEvent extends Component {
 constructor(props){
     super(props);
     this.state={
      count : 0
     }
    //  this.countHandle=this.countHandle.bind(this)
    this.incrementCounter=this.incrementCounter.bind(this);
    this.decrementCounter=this.decrementCounter.bind(this);
 }
 
 clickHandle(){
     console.log('button click...');
     alert('click ...');
 }

 countHandle(param,ev){
     console.log('ev',ev);
      console.log('param',param);
    //  this.setState({
    //      count : this.state.count + 1
    //  });
 }

 incrementCounter(){
     console.log('incrementCounter is called..');
      if (this.state.count < 11) {
        
         this.setState({
         count : this.state.count + 1
     });
     } else {
           alert('size is very high');
     }

 }
 decrementCounter(){
     console.log('decrementCounter is called...');
     if (this.state.count===0) {
         alert('size is very low');
     } else {
          this.setState({
         count : this.state.count - 1
     });
     }
     
 }
  render() {
    
    return (
      <div >
         <h1>Hello Event</h1>

          <Counter count={this.state.count}  increment={this.incrementCounter} decrement={this.decrementCounter}/>
      </div>
    );
  }
}

export default MyEvent;

import React, { Component } from 'react';
import{
    Link
} from 'react-router-dom';
class About extends Component {
 constructor(props){
     super(props);
 }
 
 operation(){
   console.log('operation called..');
   this.props.history.push('/');
 }
 contactPage(){
   console.log('operation called..');
   this.props.history.push('/contact/amit');
 }
 
  render() {
    return (
      <div >
        <h1> about is calling..............</h1>
         <button onClick={this.operation.bind(this)}> Home Page</button><br/>
         <button onClick={this.contactPage.bind(this)}>Contact Page</button>

         <ul>
           <li><Link to='/contact/amit'>1</Link> </li>
           <li><Link to='/contact/kc'>2</Link></li>
           <li><Link to='/contact/dc'>3</Link></li>
         </ul>
      </div>
    );
  }
}

export default About;

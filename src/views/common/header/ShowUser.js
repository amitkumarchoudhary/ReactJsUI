import React, { Component } from 'react';
import Counter from './counter.js';
import getEmpDetails from '../../repositary/userrepositary.js'
class ShowUser extends Component {


componentDidMount() {
   let data=getEmpDetails();
   console.log("getEmpDetails :---"+data);
}


render() {
    
    return (
      <div >
         <h1> ShowUser called </h1>
          
      </div>
    );
  }
}

export default ShowUser;

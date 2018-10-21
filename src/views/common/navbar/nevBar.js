import React, { Component } from 'react';

import{
    Link
} from 'react-router-dom';

import '../navbar/navbar.css';
class NavBar extends Component {
 constructor(props){
     super(props);
 }
 
 
  render() {
    return (
      <div className="row marginNav">
      <div className="col-3 menu">
      <ul>
        
        <li><Link to="/about">About</Link></li>
        <li> <Link to="/contact">Contact</Link></li>
        <li> <Link to="/form">UserForm</Link></li>
        
      </ul>
    </div>
    </div>
      // <div >
      //   <Link to="/">Home</Link><br/>
      //   <Link to="/about">About</Link><br/>
      //   <Link to="/contact">Contact</Link>
       
      // </div>
    );
  }
}

export default NavBar;





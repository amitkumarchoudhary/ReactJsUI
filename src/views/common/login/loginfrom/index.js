import React, { Component } from 'react';
import Footer from '../../../common/footer/footer.js';
import Header from '../../../common/header/header.js';
import LoginRegistrationForm from './loginform_connect.js'; 

class LoginForm extends Component {
 constructor(props){
     super(props);
 }
 
 
 
  render() {
  
    return (
      
      <div >

    
    <LoginRegistrationForm/>
    <Footer/>
      </div>
    );
  }
}

export default LoginForm;





import React, { Component } from 'react';
import Footer from '../../../common/footer/footer.js';
import Header from '../../../common/header/header.js';
import LoginForm from './login_connect.js'



class Login extends Component {
 constructor(props){
     super(props);
 }
 
 
 
  render() {
  
    return (
      
      <div >

    <Header/>
    <LoginForm/>
    <Footer/>
      </div>
    );
  }
}

export default Login;





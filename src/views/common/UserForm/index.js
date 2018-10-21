import React, { 
  Component
} from 'react';
import Footer from '../footer/footer.js'
import Header from '../header/header.js';
import UserForm from './user_connect.js';

class Form extends Component {
  render() {
    
    return (
      <div>
      
        <UserForm/>
        <Footer/>
      </div>
    );
  }
}

export default Form;

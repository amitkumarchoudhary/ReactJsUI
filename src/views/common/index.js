import React, { 
  Component
} from 'react';

import Footer from './footer/footer.js';
import Header from './header/header.js';
import Middle from '../common/middle/middle_connect.js'
// import NavBar from '../common/navbar/nevBar.js';

import '../common/styles.css';


class Home extends Component {
  render() {
    
    return (
      <div>
        <Header/>
        <Middle/>
        <Footer/>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import './App.css';
import CustomRoute from '../src/router/Routers.js';
import {Provider} from 'react-redux';
import store from './store/index.js'

class App extends Component {
  render() {
    return (
     
      <Provider store={store}>
        <CustomRoute/>
      </Provider>  
      
    );
  }
}

export default App;

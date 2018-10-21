import React from 'react';
import{
    Router,
    Route,
} from 'react-router-dom';

import Home from '../views/common/index.js';
import About from '../views/common/header/about.js';
import Contact from '../views/common/header/contact.js';
import Login from '../views/common/login/landingpage/index.js';
import history from './history.js';
import Form from '../../src/views/common/UserForm/index.js';
import LoginForm from '../views/common/login/loginfrom/index.js';

const EmptyComponent =()=>(<span/>);
const CustomRoute = () => (

    <Router history={history}>

        <div>
           <Route  exact path="/" component={Login}/>
           <Route path="/home" component={Home}/>
           
           <Route path="/about" component={About}/>
           <Route path="/form" component={Form}/>
            <Route path="/loginform" component={LoginForm}/>
           <Route path="/contact/:id" component={Contact}/>
           <Route path="*" component={EmptyComponent}/>
        </div>
    </Router>

)
export default CustomRoute;
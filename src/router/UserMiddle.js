import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

// import NavBar from '../../common/navbar/nevBar.js';
// import '../middle/middle.css';

import  './usercss.css';
// import Home from '../../common/index.js';



import * as actions from '../action/userActionDetails';

export class UserMiddle extends Component {

    // componentDidMount() {
     
    // }


    render() {


        const { userDetails } = this.props;

        console.log(this.props);

        return (
            <div className="row">
            <h1>Hi</h1>
            // <button className="button" onClick={this.props.fetcUserDetails}>Get Data</button>
            {userDetails.map((user) => {
                     return (
                      <ul key={user.id}>
                      <li>{user.name}</li>
                      </ul>
                    )
                 })}

               
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        userDetails : state.userDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
     fetcUserDetails: () => dispatch(actions.fetcUserDetails())


    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserMiddle);
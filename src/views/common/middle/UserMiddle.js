import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import NavBar from '../../common/navbar/nevBar.js';
import '../middle/middle.css';
import Home from '../../common/index.js';



import * as actions from '../../../action/userActionDetails';

export class UserMiddle extends Component {

    // componentDidMount() {
  
    // }


    render() {


        const { userDetails } = this.props;

        console.log(this.props);

        return (
            <div className="row">
                <div className="col-3">
                    <NavBar />
                </div>
                <div className="col-9">

                    <h1>Details is here</h1>
                    <p>Chania is the capitaltwo parts, the old town and the modern city.</p>
                    <p>Resize the browser window to see how the content respond to the resizing.</p>

                </div>
                <button onClick={this.props.fetcUserDetails}>click the new data</button>
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
     fetcUserDetails: () => dispatch(actions.fetcUserDetails()),


    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserMiddle);
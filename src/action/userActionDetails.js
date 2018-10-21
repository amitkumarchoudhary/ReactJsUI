import * as actionTypes from './actionTypes';
import axios from 'axios';


export const fetcUserDetails = users => dispatch => {
  dispatch(requestUser(users))
     return axios.get('http://localhost:9090/getAllEmployeeDetails')
    .then(response => response.data)
    .then(data => dispatch(receiveUser(users, data)))
    .catch(err => {dispatch(userDetailsFailed(err.response.data.error));
    });
}

export const requestUser = users => {
  return {
    type: actionTypes.REQUEST_USER,
    users
  };
};

export const receiveUser = (users, data) => {
  return {
    type: actionTypes.RECEIVE_USER,
    users,
    data: data
  };
};

export const userDetailsFailed = (error) => {
  return {
      type: actionTypes.USER_DETAILS_FAILED,
      error: error
  };
};

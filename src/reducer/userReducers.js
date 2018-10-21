import * as actionTypes from '../action/actionTypes';

 
export const userDetails = (state = [], action) => {
    switch (action.type) {
      case actionTypes.RECEIVE_USER:
          return action.data;
        
      default:
        return state
    }
  }
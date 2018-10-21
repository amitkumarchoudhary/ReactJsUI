import {
    LOGIN_SIGN_INFO,LOGIN_SIGN_ERROR
} from '../actions.js';


const INITIAL_STATE=[{
    id : '',
    password : ''

}]

 export default function getUserLoginReducer(state ={INITIAL_STATE}, action) {
  switch (action.type) {
    case "LOGIN_SIGN_INFO":
      return({
          ...state,
          INITIAL_STATE : action.payload
      }) 

     case "LOGIN_SIGN_ERROR":
      return({
          ...state,
          INITIAL_STATE : action.payload
      }) 
      
    default:
      return state
  }
}
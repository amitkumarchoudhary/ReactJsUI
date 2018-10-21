import {
    LOGIN_FORM_DATA
} from '../actions.js';


const INITIAL_STATE=[{
    id : '',
    password : '',
    email :'',
    address:'',
    mobile:''

}]

 export default function saveLoginReducer(state ={INITIAL_STATE}, action) {
  switch (action.type) {
    case "LOGIN_FORM_DATA":
      return({
          ...state,
          INITIAL_STATE : action.payload
      }) 
      
    default:
      return state
  }
}
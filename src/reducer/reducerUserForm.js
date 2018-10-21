import {
    SAVE_USER_DATA
} from '../actions.js';


const INITIAL_STATE=[{
    name :'',
    id : '',
    salary :'',
    address : ''
}]

 export default function getUserformReducer(state ={INITIAL_STATE}, action) {
  switch (action.type) {
    case "SAVE_USER_DATA":
      return({
          ...state,
          INITIAL_STATE : action.payload
      }) 
      
    default:
      return state
  }
}
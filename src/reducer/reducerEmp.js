import {
    USER_FETCH_DATA,
    UPDATE_USER_FORM,
    DELETE_FETCH_DATA,
    SAVE_USER_DATA
} from '../actions.js';


const INITIAL_STATE=[{
    name : "amit kumar chodary",
    id : 1,
    salary : 2000,
    address : 'bihar'
}]



 export default function getUserReducer(state ={INITIAL_STATE}, action) {
  switch (action.type) {

     case "SAVE_USER_DATA":
      return({
          ...state,
          INITIAL_STATE : action.payload
      })

      case "USER_FETCH_DATA":
      return({
          ...state,
          INITIAL_STATE : action.payload
      }) 

     case "DELETE_FETCH_DATA":
    //   return({
    //       ...state,
    //       INITIAL_STATE : action.payload
    //   })  

     const newState = state. INITIAL_STATE.filter((announcement) => {
        return action.id !== announcement.anncId;
    });

    return {
        ...state,
        list: newState
    };
      case "UPDATE_USER_FORM":
      return({
          ...state,
          INITIAL_STATE : action.payload
      })  
      
    default:
      return state
  }
}
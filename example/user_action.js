import {USER_FETCH_DATA,DELETE_FETCH_DATA,SAVE_USER_DATA} from '../actions.js';
import getEmpDetailsRepositary from '../repositary/userrepositary.js';
import axios from "axios";



export function saveUserData(data) {
return (dispatch)=> {

         axios.post('http://localhost:9090/saveEmployeeDetails/',data)
         .then((response) => {
         dispatch({type: "SAVE_USER_DATA", payload: response.data})
         }).catch((error) => {
         dispatch({type: "SAVE_USER_ERROR", payload: error});
    
})

};

}

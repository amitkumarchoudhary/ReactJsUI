import {LOGIN_FORM_DATA} from '../actions.js';
import axios from "axios";



export function saveLoginData(data) {
return (dispatch)=> {

         axios.post('http://localhost:9090/saveloginform/',data)
         .then((response) => {
         dispatch({type: "LOGIN_FORM_DATA", payload: response.data})
    })
    .catch((error) => {
    //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
    
})

};

}

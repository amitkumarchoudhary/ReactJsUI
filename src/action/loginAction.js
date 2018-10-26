import {LOGIN_SIGN_INFO,LOGIN_SIGN_ERROR,
    LOGIN_FORM_DATA,LOGIN_SAVE_FORM_ERROR} from '../actions.js';
import axios from "axios";



export function loginSignInfo(data) {
return (dispatch)=> {

         axios.post('http://localhost:9090/validlogin/',data)
         .then((response) => {
            dispatch({type: "LOGIN_SIGN_INFO", payload: response.data});
        }).catch((error) => {
            dispatch({type: "LOGIN_SIGN_ERROR", payload: error});
    
})

};

}

export function saveLoginData(data) {
return (dispatch)=> {

         axios.post('http://localhost:9090/saveloginform/',data)
         .then((response) => {
         dispatch({type: "LOGIN_FORM_DATA", payload: response.data})
    })
    .catch((error) => {
       dispatch({type: "LOGIN_SAVE_FORM_ERROR", payload: error});
    
})

};

}

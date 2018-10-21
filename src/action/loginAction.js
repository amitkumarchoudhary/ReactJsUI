import {LOGIN_SIGN_INFO,LOGIN_SIGN_ERROR} from '../actions.js';
import axios from "axios";
import history from '../router/history.js';



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

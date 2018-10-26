import {
  USER_FETCH_DATA,
  DELETE_FETCH_DATA,
  UPDATE_USER_FORM,
  SAVE_USER_DATA,
  SAVE_USER_ERROR
} from '../actions.js';
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


export function getUserDetailsAction() {

return (dispatch)=> {

         axios.get('http://localhost:9090/getAllEmployeeDetails')
        .then((response) => {
         dispatch({type: "USER_FETCH_DATA", payload: response.data});
        }).catch((error) => {
    //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
    
})

};

}



export function deleteUserDetailsAction(id) {
let data=id;
return (dispatch)=> {

         axios.delete('http://localhost:9090/deleteEmployeeDetails/'+id)
         .then((response) => {
        dispatch({type: "DELETE_FETCH_DATA", payload: response.data})
        .then(response => {
        dispatch(getUserDetailsAction())
      })
    })
    .catch((error) => {
    //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
    
})

};

}


export function updateUserDetailsAction(data) {

return (dispatch)=> {

         axios.put('http://localhost:9090/updateEmployeeDetails/',data)
        .then((response) => {
      dispatch({type: "UPDATE_USER_FORM", payload: response.data});
    })
    .catch((error) => {
    //   dispatch({type: "FETCH_USERS_REJECTED", payload: error});
    
})

};

}




//         dispatch({
//             type: BEFORE_FETCH_ANNOUNCEMENT
//         });

//         return getEmpDetailsRepositary()
//             .catch(() => {
//                 return null;
//             })
//             .then((data) => {
//                 data=data ? data:[];
                
//                     dispatch({
//                         data,
//                         type: USER_FETCH_DATA
//                     });
                
//             });
//    }

//}   


// export function getUserDetailsAction() {
    
//     return dispatch=>{
//         dispatch({
//           type: USER_FETCH_DATA,
//           data : getEmpDetailsRepositary()
//         })
           
//     };
// }
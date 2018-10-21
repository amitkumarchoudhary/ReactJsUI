import axios from "axios";

export default function getEmpDetailsRepositary(){
let endpoint='http://localhost:9090/getAllEmployeeDetails';

axios.get(endpoint)
.then((response)=> response)
.catch((response)=>{
    return response.json().then((json) => {
        throw JSON;
    }
    
    );
})
// axios.get(endpoint)
//   .then((response=> response.json())
//   .catch((response)=> {
//       return response.json().then((json) => {
//        throw json;
//   });
//   });
}
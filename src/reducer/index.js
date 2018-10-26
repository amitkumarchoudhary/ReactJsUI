import EmpReducer from './reducerEmp.js'
import LoginUserFromReducer from './loginUserForm.js';
import loginFromReducer from './loginform';
import {combineReducers} from 'redux';

export default combineReducers({
    EmpReducerDetails:EmpReducer,
    loginUserFrom : LoginUserFromReducer,
    loginFrom : loginFromReducer
})


import EmpReducer from './reducerEmp.js'
import UserFormReducer from './reducerUserForm.js'
import LoginUserFromReducer from './loginUserForm.js';
import loginFromReducer from './loginform';
import {combineReducers} from 'redux';

export default combineReducers({
    EmpReducerDetails:EmpReducer,
    UserSaveForm :UserFormReducer,
    loginUserFrom : LoginUserFromReducer,
    loginFrom : loginFromReducer
})


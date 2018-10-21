import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginSignInfo} from '../../../../action/loginAction.js';
import LoginForm from './login.js';


function mapStateToProps(state) {
    return{
       saveList : state.loginUserFrom.INITIAL_STATE
    }
   
}

function mapDispatchToProps(dispatch) {
   
   return({

      loginInfo : (data)=>{
          dispatch(loginSignInfo(data))
      }
   })

//  return bindActionCreators({getUserDetailsAction : getUserDetailsAction},dispatch);

}
   

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);

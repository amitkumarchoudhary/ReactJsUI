import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveLoginData} from '../../../../action/loginAction.js';
import LoginRegistrationForm from './loginregfrom.js';


function mapStateToProps(state) {
    return{
       saveList : state.loginFrom.INITIAL_STATE
    }
   
}

function mapDispatchToProps(dispatch) {
   
   return({

      loginData : (data)=>{
          dispatch(saveLoginData(data))
      }
   })

//  return bindActionCreators({getUserDetailsAction : getUserDetailsAction},dispatch);

}
   

export default connect(mapStateToProps,mapDispatchToProps)(LoginRegistrationForm);

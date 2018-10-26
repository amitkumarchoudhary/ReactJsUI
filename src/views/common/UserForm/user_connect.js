import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveUserData} from '../../../action/useraction.js';
import UserForm from './userform.js';


function mapStateToProps(state) {
    return{
       saveList : state.EmpReducerDetails.INITIAL_STATE
    }
   
}

function mapDispatchToProps(dispatch) {
   
   return({

      saveData : (data)=>{
          dispatch(saveUserData(data))
      }
   })

//  return bindActionCreators({getUserDetailsAction : getUserDetailsAction},dispatch);

}
   

export default connect(mapStateToProps,mapDispatchToProps)(UserForm);

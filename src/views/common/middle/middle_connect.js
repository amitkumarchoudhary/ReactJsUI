import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Middle from './middle.js';
import {getUserDetailsAction,deleteUserDetailsAction} from '../../../action/useraction.js'


function mapStateToProps(state) {
    return{


       nameList : state.EmpReducerDetails.INITIAL_STATE


    }
   
}

function mapDispatchToProps(dispatch) {
   
   return({

      fetchData : ()=>{
          dispatch(getUserDetailsAction())
      },

      deleteData : (id)=>{
          dispatch(deleteUserDetailsAction(id))
      }
   })

//  return bindActionCreators({getUserDetailsAction : getUserDetailsAction},dispatch);

}
   

export default connect(mapStateToProps,mapDispatchToProps)(Middle);

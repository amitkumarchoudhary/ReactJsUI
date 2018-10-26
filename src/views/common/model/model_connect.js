import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ModelEditForm from './model_edit_from.js';
import {updateUserDetailsAction} from '../../../action/useraction.js'


function mapStateToProps(state,ownProps) {
    return{
        dataItem : ownProps.dataItem,
        show : ownProps.show,
        close: ownProps.close,
        nameModelData : state.EmpReducerDetails.INITIAL_STATE


    }
   
}

function mapDispatchToProps(dispatch) {
   
   return({

    //   fetchData : ()=>{
    //       dispatch(getUserDetailsAction())
    //   },

      updateData : (data)=>{
          dispatch(updateUserDetailsAction(data))
      }
   })

//  return bindActionCreators({getUserDetailsAction : getUserDetailsAction},dispatch);

}
   

export default connect(mapStateToProps,mapDispatchToProps)(ModelEditForm);

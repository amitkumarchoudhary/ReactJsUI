import React, { Component } from 'react';
import NavBar from '../../common/navbar/nevBar.js';
import '../middle/middle.css';
import Home from '../../common/index.js';
import {connect} from 'react-redux';
import{
    Router,
    Route,
} from 'react-router-dom';

import Model from '../model/index.js'

// import {getUserDetailsAction} from '../../../action/useraction.js'

class Middle extends Component {
 constructor(props){
     super(props);
     this.state={
        show: false,
        actualData :this.props.nameList
     }
    //  this.delteUser=this.delteUser.bind(this);
 }
 componentDidMount(){
   this.props.fetchData();  
 }
 
 
//  delteUser(id){
//    alert('delet the data'+id);
//  }

showModel=()=>{
  this.setState({
  show : true
  })
}

closeModel=()=>{
  this.setState({
  show : false
  })
}
 
  render() {
      const sidebar = (
            this.state.actualData.map((userData,index) =>
            <ul className="a" key={userData.userId} >
            <tr>
                  <li>
                 <td style={{width:"800px"}}> 
                   <h4>ID: {userData.userId}    Name:  {userData.name}  Salary :  {userData.salary}     Address:  {userData.address} </h4></td>
                 <td> 
                  <button name="delete" style={{marginRight:"30px"}} value="delete" onClick={()=>this.props.deleteData(userData.id)}> delete </button>
                  <button name="edit"  value="edit" onClick={this.showModel}> EDIT </button></td>
                  </li>
              </tr> 
                <Model show={this.state.show} close={this.closeModel} dataItem={userData} index={index}> 
                this is th ModelUser data
               </Model> 
            </ul>
            )
        );


    return (
      
      <div className="row" style={{height:"200px"}}>
            <div className="col-3">
              <NavBar/>
            </div>

            <div className="col-9" style={{overflow:"auto",height:"500px",width:"1030px"}}>
  
        
                <h2> Welcome the Home Page</h2>
         
           
                <h5> User Details is here : {sidebar}</h5>
        

               
              </div>
          
      </div>
    );
  }
}

// function mapStateToProps(state){
// return({
//   nameList : state.rootReducer.INITIAL_STATE.name
// })
// }

// function mapDispatchProps(dispatch){
// return({
      
// })
// }
// export default connect(mapStateToProps,mapDispatchProps)(Middle);

export default Middle;



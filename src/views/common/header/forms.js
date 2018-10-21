import React, { Component } from 'react';
import Counter from './counter.js';

class Forms extends Component {
 constructor(props){
     super(props);
     this.state={
     username: '',
     allUsers:[],
     allUserDat:{
      id:'',
      name:'',
      salary:'',
      status :''

     }
    }
   this.changeState=this.changeState.bind(this);
   this.handleSaveData=this.handleSaveData.bind(this);
   this.saveData=this.saveData.bind(this);

 }

 changeState(event){
     console.log(event.target.value,'event',event);
     this.setState({
      username : event.target.value
     });
 }

 handleSaveData(event){
   let currentdata=this.state.allUsers;

   currentdata.push(this.state.username);    
   this.setState({
    
    allUsers : currentdata,
    username : ''
     
   });
 }
 saveData(){

 }
 
 
  render() {
    
    return (
      <div >
         <h1>Hello Form</h1>
         <label>ID:  <input type="text" name="id" value={this.state.allUserDat.id} onChange={this.changeState}/></label><br/>
         <label>NAME:  <input type="text" name="name" value={this.state.allUserDat.name} onChange={this.changeState}/></label><br/>
         <label>SALARY:  <input type="text" name="salary" value={this.state.allUserDat.salary} onChange={this.changeState}/></label><br/>
        Status: <label>  
                Male<input type="radio" name="male" value={this.state.allUserDat.male} onChange={this.changeState}/>
                Female<input type="radio" name="female" value={this.state.allUserDat.female} onChange={this.changeState}/>
        </label><br/>
         NATIONALITY: <label>  
                INDIAN<input type="checked" name="INDIAN" value={this.state.allUserDat.salary} onChange={this.changeState}/>
                OHTERS<input type="checked" name="OHTERS" value={this.state.allUserDat.salary} onChange={this.changeState}/>
        </label><br/>
         <button onClick={this.saveData}> Save Data</button>
          
      </div>
    );
  }
}

export default Forms;

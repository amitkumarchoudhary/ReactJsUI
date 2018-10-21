import React, { Component } from 'react';
import '../../../common/login/landingpage/login.css';
import{
    Link
} from 'react-router-dom';
import history from '../../../../router/history.js';

class LoginForm extends Component {
 constructor(props){
     super(props);
     this.state ={
       loginData:{}
     }
     this.onChangeData=this.onChangeData.bind(this);
     this.handleSubmit=this.handleSubmit.bind(this);
 }
 
 
    onChangeData(e){
    const state=this.state.loginData;
    state[e.target.name]=e.target.value;
    this.setState(
        {
            loginData:state

        });
        
    }
    handleSubmit(){

      this.props.loginInfo(this.state.loginData);
      history.push('/home');
    }

      render() {
      
        return (
          
          <div class="row datamargin">
          <h3>Don,t have Account please login <a href="/loginform">create your accout</a></h3>
          <form onSubmit={this.handleSubmit}>
              <div class="col-3 menu ">
                  <label for="fname">User Name</label>
                  <input type="text" id="id" name="id" required="required" value={this.state.id} onChange={this.onChangeData} placeholder="enter user ...."/>

                  <label for="lname">PassWord</label>
                  <input type="text" id="password" name="password"  required="required" value={this.state.password} onChange={this.onChangeData} placeholder="enter password ...."/>

                  <input type="submit" value="Login"/>        

              </div>
           </form>
          </div>
        );
      }
}

export default LoginForm;





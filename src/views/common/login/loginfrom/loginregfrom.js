import React, { Component } from 'react';
import{
    Link
} from 'react-router-dom';
import history from '../../../../router/history.js';

class LoginRegistrationForm extends Component {
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

      this.props.loginData(this.state.loginData);
      alert('loginform data is added');
       history.push('/');
    }
      render() {
      
        return (
          
    <div style={{height:"100px",width:"500px",marginLeft:"350px"}}>
     <div className="container">
                <form onSubmit={this.handleSubmit}>
                     <div className="row">
                        <div className="col-25">
                            <label for="username">UserName</label>
                        </div>

                        <div className="col-75">
                            <input type="text" name="id"  value={this.state.id} onChange={this.onChangeData} required="required"   placeholder="Your name.."/>
                        </div>
                    </div>

                    <div className="row">
                            <div className="col-25">
                                <label for="password">Password</label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="password" value={this.state.password} onChange={this.onChangeData}  required="required"  placeholder="Your password.."/>
                            </div>
                    </div>

                    <div className="row">
                            <div className="col-25">
                                <label for="email">Email</label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="email"  value={this.state.email} onChange={this.onChangeData} required="required" placeholder="Your email.."/>
                            </div>
                    </div>

                    


                        <div className="row">
                                <div className="col-25">
                                    <label for="Address">Address</label>
                                </div>
                                <div className="col-75">
                                    <textarea id="address" name="address" value={this.state.address} onChange={this.onChangeData} required="required"  placeholder="Your address......" style={{height:"50px"}}></textarea>
                                </div>
                        </div>
                         <div className="row">
                                <div className="col-25">
                                    <label for="mobile">Mobile</label>
                                </div>
                                <div className="col-75">
                                    <textarea id="mobile" name="mobile"  value={this.state.mobile} onChange={this.onChangeData} required="required"  placeholder="Your mobile ......" style={{height:"50px"}}></textarea>
                                </div>
                        </div>
                    <div className="row">
                    <input type="submit" value="Submit"/>
                    </div>

                </form>
        
        </div>
        </div>
        );
      }
}

export default LoginRegistrationForm;





import React, { Component } from 'react';
import './model.css';
import PropTypes from 'prop-types';

class ModelEditForm extends Component {
 constructor(props){
     super(props);
     this.state={
        show: false,
        userData:{}
     }
     this.handleChange=this.handleChange.bind(this);
     this.handleSubmit=this.handleSubmit.bind(this);
 }
 handleChange(e) {
    console.log('event form ...'+e);
    const state=this.state.userData;
    state[e.target.name]=e.target.value;
    this.setState(
        {
            userData:state

        });
  }
  handleSubmit(event) {
    event.preventDefault();
    // this.props.saveData(this.state.userData);
    //  alert('User Data is submitted');
    //  this.resetdata();
    //  history.push('/home');
    console.log(this.state.userData);
    this.props.updateData(this.state.userData);
    this.props.close();
      
  }


 
  render() {
  
      if(!this.props.show){
        return null;
      }
    return (
      
      <div className="backdrop">
       
            <div className="model">
                
                
                <form>
                     <div className="row">
                        <div className="col-25">
                            <label for="fname">ID</label>
                        </div>

                        <div className="col-75">
                            <input type="text" name="id" ref={(value)=>{this.input=value}} defaultValue={this.props.dataItem.id}    onChange={this.handleChange}  placeholder="Your name.."/>
                        </div>
                    </div>

                    <div className="row">
                            <div className="col-25">
                                <label for="lname">Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="name" ref={(value)=>{this.input=value}} defaultValue={this.props.dataItem.name}   onChange={this.handleChange}  placeholder="Your last name.."/>
                            </div>
                    </div>

                    <div className="row">
                            <div className="col-25">
                                <label for="country">Salary</label>
                            </div>
                            <div className="col-75">
                                <select id="salary" name="salary" ref={(value)=>{this.input=value}} name="salary"  onChange={this.handleChange}  defaultValue={this.props.dataItem.salary}>
                                    <option >Select</option>
                                    <option value="10000" >L1</option>
                                    <option value="20000" >L2</option>
                                    <option value="300000">L3</option>
                                </select>
                            </div>
                    </div>


                        <div className="row">
                                <div className="col-25">
                                    <label for="Address">Address</label>
                                </div>
                                <div className="col-75">
                                    <textarea id="address" name="address" ref={(value)=>{this.input=value}} value={this.props.dataItem.address}  onChange={this.handleChange}  placeholder="address......" style={{height:"50px"}}></textarea>
                                </div>
                        </div>
                        <div className="footerBody">
                              <button onClick={this.props.close} style={{marginLeft:"50px"}}>Close</button>
                              <button style={{marginLeft:"50px"}} onClick={this.handleSubmit} >Update</button>
                              
                        </div>
                   

                </form>
                
                  
            </div>
      </div>
    );
  }
}

ModelEditForm.propTypes= {
close :PropTypes.func.isRequired
}
export default ModelEditForm;



import React, { 
  Component
} from 'react';
import Footer from '../footer/footer.js'
import Header from '../header/header.js';
import './userform.css';
import history from '../../../router/history.js';

class UserForm extends Component {
 
 constructor(props) {
    super(props);
    this.state = {
        userData:{}
    
};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  resetdata(){
      let emptyData=[];
   this.setState({
       userData : emptyData
   })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveData(this.state.userData);
     alert('User Data is submitted');
    //  this.resetdata();
     history.push('/home');
      
  }
  render() {
    
    return (
     <div>
     <div className="container">
                <form onSubmit={this.handleSubmit}>
                     <div className="row">
                        <div className="col-25">
                            <label for="fname">ID</label>
                        </div>

                        <div className="col-75">
                            <input type="text" name="id" value={this.state.id} onChange={this.handleChange}    placeholder="Your name.."/>
                        </div>
                    </div>

                    <div className="row">
                            <div className="col-25">
                                <label for="lname">Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}  placeholder="Your last name.."/>
                            </div>
                    </div>

                    <div className="row">
                            <div className="col-25">
                                <label for="country">Salary</label>
                            </div>
                            <div className="col-75">
                                <select id="salary" name="salary" name="salary" value={this.state.salary}>
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
                                    <textarea id="address" name="address" value={this.state.address} onChange={this.handleChange}  placeholder="address......" style={{height:"50px"}}></textarea>
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

export default UserForm;

import React, { Component } from 'react';

class Contact extends Component {
 constructor(props){
     super(props);
 }
 
 
  render() {

    let users={
      amit:{
        name :'akc1',
        salary: '2000'
      },
      kc:{
        name :'akc2',
        salary: '4000'
      },
      dc:{
        name :'akc3',
        salary: '6000'
      }
    }
    let requireUser=users[this.props.match.params.id]
    
    return (
      <div >
        <h1> Contact is calling..............</h1>
       
       User Name :{requireUser.name}
       <br/>
        User Salary :{requireUser.salary}
      </div>
    );
  }
}

export default Contact;

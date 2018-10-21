import React, { Component } from 'react';
import DigitalClock from './digitalclock.js';
import AnalogClock from './analogclock.js'
import Logger from '../logger/logger.js'

class Clock extends Component{

    constructor(props){
        super(props);
        this.state= {
            currentTime: new Date().toLocaleString(),
            count:0
        }
        this.updateTime();
    }

updateTime(){
    setInterval(()=>{
        this.setState({
            currentTime: new Date().toLocaleString(),
            count : this.state.count + 1
        })
    },1000)
}
    render(){
         console.log('Clock render call..');
        return(
            <div>
            {
                (this.state.count < 10 )? 
                ( <Logger time={this.state.currentTime}/>):
                (<div/>)
            }
                    
                   
            </div>
        );
    }

}

export default Clock;
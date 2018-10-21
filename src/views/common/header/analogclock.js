import React, { Component } from 'react';

function AnalogClock(props){
    console.log(props);
    let time=new Date(props.time);

   let clockContainer={
       position:'relative',
       top : 0,
       left: 0,
       width : 200,
       height: 200,
       borderRadius:20000,
       borderStyle: 'solid',
       borderColor : 'black'


   }

    let secondData={

       position:'relative',
       top : 100,
       left: 100,
       width : '40%',
       height: 2,
       transform : 'rotate('+((time.getSeconds()/60)*360 - 90).toString()+'deg)',
       transformOrigin : '0% 0%',
       backgroundColor: 'red'
    }

    let minuteData={
       position:'relative',
       top : 100,
       left: 100,
       width : '40%',
       height: 1,
       transform : 'rotate('+((time.getMinutes()/60)*360 - 90).toString()+'deg)',
       transformOrigin : '0% 0%',
       backgroundColor: 'red'
    }

    let hourData={
       position:'relative',
       top : 92,
       left: 106,
       width : '20%',
       border :'1px  solid grey',
       height: 7,
       transform : 'rotate('+((time.getHours()/12)*360 - 90).toString()+'deg)',
       transformOrigin : '0% 0%',
       backgroundColor: 'grey'
    }
    return(
        
    <div style={clockContainer}>
      <div style={secondData}/>
      <div style={minuteData}/>
      <div style={hourData}/>
    </div>

    ) 
}

export default AnalogClock;
import React, { Component } from 'react';

function DigitalClock(props){
    console.log(props);
    return <div>{props.time}</div>
}

export default DigitalClock;
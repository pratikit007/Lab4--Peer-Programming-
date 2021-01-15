import React, { Component } from 'react';

function LogItem (props){
    return(
        <>
        <button className="container-item">{props.duration}</button>
        </>
    )
}

export default LogItem;
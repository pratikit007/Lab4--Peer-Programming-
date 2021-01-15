import React, { Component } from 'react';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }    
    tick = () => {
        if(this.props.timerFlag){
        this.setState({
            date: new Date()
          });
        }
      }  
      
      componentDidMount() {
        this.timerID = setInterval(
        () => this.tick(),
        1000
        );
      }
    
    render(){
     
        return( 
            <>
            {this.props.timerFlag && <p>Current Clock time: {this.state.date.toLocaleTimeString()}</p>}
            </>
        )
    }
}


export default Clock;

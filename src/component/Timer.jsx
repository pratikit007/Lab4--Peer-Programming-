import React, { Component } from 'react';
import LogItem from './LogItem';
import Clock from './Clock';
import '../timerStyle.css';

class Timer extends React.Component {
    state = {
        start:"",
        startTime:"",
        duration:"",
        stopTime:"",
        timerFlag:false,
        timeStamps:[]
      }

    handleStart = (e) => {
        const startTime = new Date();
        this.setState({
            start: startTime,
            startTime: startTime.toLocaleTimeString(),
            timerFlag:true
        })
        
    }
    
    handleStop = (e) => {
        const timeStamp = new Date();
        
        var duration = this.calculateDuration(timeStamp);
        this.setState({
            stopTime: timeStamp.toLocaleTimeString(),
            timerFlag:false,
            timeStamps: this.state.timeStamps.concat(duration)
        })
         
    }

    calculateDuration = (timeStamp) => {
        var millisec = Math.abs(timeStamp - this.state.start);
        var seconds = Math.floor((millisec / 1000).toFixed(2));
        var minutes = Math.floor((millisec / (1000 * 60)).toFixed(1));
    
        if(minutes > 0) // calculate offset
            seconds = Math.abs(seconds - (minutes * 60));
        const duration = "Duration => minutes: " + minutes + " " + "seconds: " + seconds;
        console.log(duration);
       return duration;
    }
    
    handleReset = (e) => {
        this.setState({
            start:"",
            startTime:"",
            duration:"",
            stopTime:"",
            timerFlag:false,
            timeStamps:[]
        })
        
    }
    render() { 
        return (
            <div>
                <div className="container"> 
                    <table id="timerTable">
                        <thead></thead>
                        <tbody>
                        <tr><td><span>Start Time:</span></td></tr>
                        <tr><td><input id="txtStartTime" type="text" value={this.state.startTime} readOnly /></td></tr>
                        <tr>
                            <td>
                                <span>End Time:</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input id="txtEndTime" type="text" value={this.state.stopTime} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button id="btnStart" type="button" onClick={this.handleStart} >Start</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button id="btnStop" type="button" onClick={this.handleStop} >Stop</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button id="btnReset" type="button" onClick={this.handleReset}  >Reset</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div id="timer"> 
                    {this.state.timeStamps.map((stamp,i) => (
                    <LogItem  key={i}  duration={stamp}></LogItem>
                    ))}
                </div>
                <div >
                    <Clock timerFlag={this.state.timerFlag}></Clock>
                </div>
            </div> 
          );
    }
}
 
export default Timer;
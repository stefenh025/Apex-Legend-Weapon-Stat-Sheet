import React from 'react';
import './custombutton.css';

export default class DmgTableMain extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }

    }
    //Load in data from Json here, pass in data as props for child component, sort function done here
    render(){
        return(
            <div className="container">
                <div className="float-right">
                    <button className="btn btn-sm btn-light rounded-pill">Light</button>
                    <button className="btn btn-sm btn-heavy rounded-pill">Heavy</button>
                    <button className="btn btn-sm btn-energy rounded-pill">Energy</button>
                    <button className="btn btn-sm btn-shotgun rounded-pill">Shotgun</button>
                    <button className="btn btn-sm btn-sniper rounded-pill">Sniper</button>
                </div>
            </div>
        )
    }
};
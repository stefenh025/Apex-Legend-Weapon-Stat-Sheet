import React from 'react';


export default class DmgTableMain extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }

    }
    //Load in data from Json here, pass in data as props for child component, sort function done here
    render(){
        return(
            <div className="">
                <button className="btn btn-success">Light</button>
                <button className="btn-group btn">Heavy</button>
                <button className="btn-group btn">Energy</button>
                <button className="btn-group btn">Shotgun</button>
                <button className="btn=group btn">Sniper</button>
            </div>
        )
    }
};
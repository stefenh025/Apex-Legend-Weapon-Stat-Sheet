import React from 'react';
import './custombutton.css';

export default class DmgTableMain extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggleButton:"light",
        }
        this.handleonChange = this.handleonChange.bind(this);
    }
    handleonChange(e){
        this.setState({
            toggleButton: e.target.value,
        });
        console.log(this.state.toggleButton);
        console.log(this.state.toggleButton === "light");
    }
    //Load in data from Json here, pass in data as props for child component, sort function done here
    render(){
        return(
            <div className="container">
                <div className="btn-group btn-group-toggle float-right" data-toggle="buttons">
                    <label className={"btn btn-sm btn-dark rounded-pill " + (this.state.toggleButton === "light" ? "active" : "")}>
                        {/* <span className="lightwep icon"></span> */}
                        <input 
                        type="radio" 
                        name="options" 
                        id="light" 
                        autoComplete="off" 
                        value="light"
                        checked={this.state.toggleButton === "light"}
                        onChange={e => this.handleonChange(e)}
                        ></input>Light
                    </label>
                    <label className={"btn btn-sm btn-success rounded-pill " + (this.state.toggleButton === "heavy" ? "active" : "")}>
                        {/* <span className="lightwep icon"></span> */}
                        <input 
                        type="radio" 
                        name="options" 
                        id="heavy" 
                        autoComplete="off" 
                        value="heavy"
                        checked={this.state.toggleButton === "heavy"}
                        onChange={e => this.handleonChange(e)}
                        ></input>Heavy
                    </label>
                    <label className={"btn btn-sm btn-warning rounded-pill " + (this.state.toggleButton === "energy" ? "active" : "")}>
                        {/* <span className="lightwep icon"></span> */}
                        <input 
                        type="radio" 
                        name="options" 
                        id="energy" 
                        autoComplete="off" 
                        value="energy"
                        checked={this.state.toggleButton === "energy"}
                        onChange={e => this.handleonChange(e)}
                        ></input>Energy
                    </label>
                </div>
                {/* <Table /> */}
            </div>
        )
    }
};
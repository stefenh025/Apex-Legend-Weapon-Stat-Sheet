import React from 'react';
import './customButton.css';
export default class SortButtons extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        let capitalType = this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1);
        return(
            <label className={"btn btn-padding rounded-pill " + (this.props.toggleButton === this.props.type ? "btn-active" : "btn-" + this.props.type + "w")}>
            {/* <span className="lightwep icon"></span> */}
            <input 
            type="radio" 
            name="options" 
            id="light" 
            autoComplete="off" 
            value={this.props.type}
            onChange={e => this.props.handleonChange(e)}
            ></input>{capitalType}
        </label>
        )
    }
};
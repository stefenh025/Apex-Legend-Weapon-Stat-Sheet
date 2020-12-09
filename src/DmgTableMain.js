import React from 'react';
import './customButton.css';
import SortButtons from './sortButtons.js';
import WeaponTable from './weaponTable.js';

export default class DmgTableMain extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggleButton:"all",
        }
        this.handleonChange = this.handleonChange.bind(this);
    }
    handleonChange(e){
        this.setState({
            toggleButton: e.target.value,
        });
    }
    //Load in data from Json here, pass in data as props for child component, sort function done here
    render(){
        return(
            <div className="container">
                <div className="btn-group btn-group-toggle">
                    <SortButtons type="all" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                    <SortButtons type="light" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                    <SortButtons type="heavy" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                    <SortButtons type="energy" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                    <SortButtons type="shotgun" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                    <SortButtons type="sniper" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                    <SortButtons type="special" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                </div>
                {/* Decide on a layout method, either page break, grid, flex box etc to structure */}
                <WeaponTable toggleButton={this.state.toggleButton} />
            </div>
        )
    }
};
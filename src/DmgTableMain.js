import React from 'react';
import './customButton.css';
import SortButtons from './sortButtons.js';
import WeaponTable from './weaponTable.js';
const json = require('./stats.json');


export default class DmgTableMain extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggleButton:"all",
        }
        this.handleonChange = this.handleonChange.bind(this);
        this.filterType = this.filterType.bind(this);
    }
    handleonChange(e){
        this.setState({
            toggleButton: e.target.value,
        });
    }
    filterType(){
      let filteredJson = [];
      for (var ammo in json) {
        if (ammo === this.state.toggleButton) {
          filteredJson.push(json[ammo]);
        }
      }
      return filteredJson;
    }
    //Load in data from Json here, pass in data as props for child component, sort function done here
    render(){
      // let dataTable = [];
      // for (var typeOfAmmo in json){
      //   console.log("type Of Ammo: " + typeOfAmmo);
      //   for (var gunName in json[typeOfAmmo]){
      //     console.log("Gun name: " + gunName);
      //     for (var weaponStats in json[typeOfAmmo][gunName]){
      //       console.log("weaponStats: " + weaponStats);
      //       console.log("weapon statValues: " + json[typeOfAmmo][gunName][weaponStats]);
            
      //     }
      //   }
      // }
        let stats;
        if (this.state.toggleButton === "all"){
          stats = json;
        }
        else {
          stats = this.filterType();
        }
        return(
            <div className="container-fluid">
                <div className="btn-group btn-group-toggle d-flex flex-wrap justify-content-center">
                    <SortButtons type="all" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                    <SortButtons type="light" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                    <SortButtons type="heavy" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                    <SortButtons type="energy" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                    <SortButtons type="shotgun" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                    <SortButtons type="sniper" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                    <SortButtons type="special" toggleButton={this.state.toggleButton} handleonChange={this.handleonChange} />
                </div>
                {/* Decide on a layout method, either page break, grid, flex box etc to structure */}
                <WeaponTable statData={stats} />
            </div>
        )
    }
};
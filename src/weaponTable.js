import React from 'react';

export default class WeaponTable extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.getTableBody = this.getTableBody.bind(this);
        this.createTableBody = this.createTableBody.bind(this);
    };
    createTableBody(arr, tableBody, key){
      tableBody.push(
        <tr key={key}>
          {arr}
        </tr>
      );
    };
    getTableBody(){
      let tableBody = [];
      let tempStatHolder = [];
      for (var ammo in this.props.statData){
        for (var gunName in this.props.statData[ammo]){
          tempStatHolder = [];
          tempStatHolder.push(
            <td key={gunName}>{gunName}</td>
          );
          tempStatHolder.push(
            <td key={ammo + "" + gunName}>{ammo.charAt(0).toUpperCase() + ammo.slice(1)}</td>
          );
        // Solution 1 w Object entries Causes a warning because it references a variable declared outside of the loop's scope
        // Object.entries(this.props.statData[ammo][gunName]).forEach(key => {
        //     typeof(key[1] === "object") ? 
        //     tempHolder.push(<td key={key[0] + "" + key[1]}>{key[1] + ""}</td>) :
        //     tempHolder.push(<td key={key[0] + "" + key[1]}>{key[1]}</td>);
        // });
          for (var weaponStats in this.props.statData[ammo][gunName]){
            (typeof(this.props.statData[ammo][gunName][weaponStats]) === "object") ?
              tempStatHolder.push(
                <td key={gunName + "" + weaponStats}>{this.props.statData[ammo][gunName][weaponStats] + ""}</td>) :
              tempStatHolder.push(
                <td key={gunName + "" + weaponStats}>{this.props.statData[ammo][gunName][weaponStats]}</td>)
          };
          //Create a function to creat Table Row for readability
          this.createTableBody(tempStatHolder,tableBody, gunName);
        }
      }
      return tableBody;
    };
    render(){
      //Trial Data
        let tableHead = (
          <tr key="Header">
          <th>Gun Name</th>
          <th>Ammo Type</th>
          <th>Body Damage</th>
          <th>Head Damage</th>
          <th>Leg Damage</th>
          <th>DPS</th>
          <th>RPM</th>
          <th>Fire Modes</th>
          <th>Mag Size</th>
          </tr>
        );
      
        return(
            <div>
                <table className="table-responsive table-bordered table-dark">
                  <thead className="thead-dark">
                    {tableHead}
                  </thead>
                  <tbody>
                    {this.getTableBody()}
                  </tbody>
                </table>
            </div>
        )
    }
};
import React from 'react';

export default class WeaponTable extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.addTableBody = this.addTableBody.bind(this);
    }
    //Attempt to add data into table
    addTableBody(arr){
      let temp = "";
      for(var i = 0; i < arr.length; i++){
        temp = temp + "<tr>" + arr[i] + "</tr>";
      }
      return temp;
    }
    render(){
      //Trial Data
        let tableHead = (
          <tr>
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
        
        let tableBody = [];        
        let tempStatHolder;
        for (var ammo in this.props.statData){
          for (var gunName in this.props.statData[ammo]){
            //Could use object entries here to skip a loop
            tempStatHolder = [];
            for (var weaponStats in this.props.statData[ammo][gunName]){
              tempStatHolder.push(this.props.statData[ammo][gunName][weaponStats]);
            }
            // tableBody.push(
            //   <tr>
            //     {this.addTableBody(tempStatHolder)}
            //   </tr>
            // );
            tempStatHolder = [];
          }
        }
        return(
            <div>
                Hi
                <table className="table table-dark">
                  <thead>
                      {tableHead}
                  </thead>
                  <tbody>
                    {tableBody}
                  </tbody>
                </table>
            </div>
        )
    }
};
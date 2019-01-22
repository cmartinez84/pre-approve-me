import React, { Component } from 'react';
import {CheckboxGroup, Checkbox} from 'react-checkbox-group';
// import  from 'react-checkbox-group';
import './hawaii.css';


class Step2 extends Component{
 state ={

 }
 // islands =  ["Hawaii", "Naui", "Oahu", "Kauai", "Molokai", "Niihau", "Kahoolawe", "Lanai"];

 render(){
   return(
     <div className="">
       <h1>Location</h1>
       {
         <CheckboxGroup
           className="select-islands"
           checkboxDepth={2}
           name="islands"
           value={this.props.islands}
           onChange={this.props.handleSelectIslands}>
             <label><Checkbox value="Hawaii"/>Hawaii(The Big Island)</label>
             <label><Checkbox value="Naui"/>Naui</label>
             <label><Checkbox value="Oahu"/>Oahu</label>
             <label><Checkbox value="Kauai"/>Kauai</label>
             <label><Checkbox value="Molokai"/>Molokai</label>
             <label><Checkbox value="Nihau"/>Nihau</label>
             <label><Checkbox value="Kahoolawe"/>Kahoolawe</label>
             <label><Checkbox value="Lanai"/>Lanai</label>
         </CheckboxGroup>
       }
     </div>
   )
 }
}



//
//
// {this.islands.map((island, i)=>
//   <label key={i} class="btn btn-success active">
//     <input type="checkbox"  autocomplete="off" onChange={()=>{this.props.handleSelectLocatin(island)}}/> {island}
//    </label>
// )}

export default Step2;

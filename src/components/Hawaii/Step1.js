import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBell } from '@fortawesome/free-solid-svg-icons'
// import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
// import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

import './hawaii.css';


// library.add(faBell)
// library.add(faStickyNote)
// library.add(faExclamationTriangle)


class Step1 extends Component{
 state ={
  //  correction:
 }
 render(){
   return(
     <div className="step1">
       <h1>Select Type of Alert</h1>
       <div className="row">
         <div className="type-option-outer col-sm-4">
           <div
             className={`type-option ${this.props.selectedAlertType === 'correction'?'type-option-selected' :null}`}     onClick={()=>{this.props.handleSelectAlertType("correction")}}>
              <p>Correction</p>
             <FontAwesomeIcon className="type-option-icon" icon="sticky-note" />
           </div>
         </div>
         <div className="type-option-outer col-sm-4">
           <div
             className={`type-option ${this.props.selectedAlertType === 'test'?'type-option-selected' :null}`}     onClick={()=>{this.props.handleSelectAlertType("test")}}>
                          <p>Test</p>
             <FontAwesomeIcon
               className="type-option-icon"
               icon="bell" />
           </div>
         </div>
         <div className="type-option-outer col-sm-4">
           <div
             className={`type-option ${this.props.selectedAlertType === 'warning'?'type-option-selected' :null}`}     onClick={()=>{this.props.handleSelectAlertType("warning")}}>
                          <p>Warning (REAL THREAT!)</p>
             <FontAwesomeIcon className="type-option-icon" icon="exclamation-triangle" />
           </div>
         </div>
       </div>
     </div>
   )
 }
}

export default Step1;

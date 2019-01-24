import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './hawaii.css';

const Tracker =(props)=> {

   const alertTypeEnum = {
    "test": <FontAwesomeIcon icon="bell" />,
    "correction": <FontAwesomeIcon icon="sticky-note" />,
    "warning":  <FontAwesomeIcon icon="exclamation-triangle" />
   }

   return(
     <div className="form-step tracker">
       <div
         onClick={()=>props.handleChangeStep(0)}
          className={  props.currentStepIndex === 0 ? 'current-form-step': null }>
         <div className="h3">Type</div >
       </div>
       <div
         onClick={()=>props.handleChangeStep(1)}
          className={props.currentStepIndex === 1 ? 'current-form-step': null }>
         <div className="h3" >Location</div >
       </div>
       <div
         onClick={()=>props.handleChangeStep(2)}
          className={props.currentStepIndex === 2 ? 'current-form-step': null }>
         <div className="h3" >Message</div >
       </div>
       <div
         onClick={()=>props.handleChangeStep(3)}
          className={props.currentStepIndex === 3 ? 'current-form-step': null }>
         <div className="h3" >Review</div >
       </div>
       <p className={`tracker-alert-icon ${props.selectedAlertType ==='warning'? 'tracker-warning-icon' :null}`}> {alertTypeEnum[props.selectedAlertType]}
      </p>
      <span className="tracker-alert-type">{props.selectedAlertType}</span>
     </div>
   )
}

export default Tracker;

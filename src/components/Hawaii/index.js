import React, { Component } from 'react';


import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

import Tracker from './Tracker';

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBell } from '@fortawesome/free-solid-svg-icons'
// import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
// import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

import seal from './seal.png';

import './hawaii.css';

// library.add(faBell)
// library.add(faStickyNote)
// library.add(faExclamationTriangle)

class Hawaii extends Component {
  state={
    selectedAlertType: null,
    currentStepIndex: 0,
    alertType: null,
    alertText:[],
    islands: [],
    message: ""
  }

  defaultAlertsEnum = {
    test: "THIS IS ONLY A TEST. HAWAII EMERGENCY MANAGEMENT IS TESTING OUT A NEW SYSTEM FOR SENDING ALERTS. FOR MORE INFO, VISIT HAWAII.GOV/PREPAREDNESS",
    correction: "THERE IS NO MISSLE THREAT TO HAWAII. PLEASE SPREAD THE WORD. WE REGRET THE ERROR AND ARE WORKING TO PREVENT FUTURE ERRORS",
    warning: "THIS IS NOT A DRILL. BALLISTIC MISSILE INBOUND TO HAWAII. PLEASE SEEK SHELTER!"
  }

  handleAdvance=(value)=>{
    var newIndex = this.state.currentStepIndex+= value;
    if(newIndex > 3){
      newIndex = 3
    }
    else if (newIndex < 0) {
      newIndex = 0
    }
    this.setState({currentStepIndex: newIndex});
  }

  handleSelectIslands=(newIslands)=>{
    this.setState({islands: newIslands})
  }

  handleChangeStep=(value)=>{
    this.setState({currentStepIndex: value})
  }
  handleSelectAlertType=(value)=>{
    this.setState({
      selectedAlertType: value,
      message: this.defaultAlertsEnum[value]
    });
  }
  onMessageChange=(e)=>{
    this.setState({message: e.target.value});
  }

  render() {
    const steps = [
      <Step1
        selectedAlertType={this.state.selectedAlertType}
        handleSelectAlertType={this.handleSelectAlertType} />,
      <Step2
          islands={this.state.islands}
          handleSelectIslands={this.handleSelectIslands}/>,
        <Step3
          message={this.state.message}
          onMessageChange={this.onMessageChange}
          />,
        <Step4
          handleChangeStep={this.handleChangeStep}
          islands={this.state.islands}
          selectedAlertType={this.state.selectedAlertType}
          message={this.state.message}/>
    ];


    return (
      <div className="container hawaii">
        <h1><img className="state-seal" src={seal}></img> HAWAII MISSILE DEFENSE ALERT SYSTEM</h1>

        <div className="row">
          <div className="col-sm-3">
            <Tracker
              selectedAlertType={this.state.selectedAlertType}
              handleChangeStep={this.handleChangeStep}
              currentStepIndex={this.state.currentStepIndex}>
            </Tracker>
          </div>
          <div className="col-sm-8 form-step">
            <div className="hawaii-right-col-top">
              {steps[this.state.currentStepIndex]}
            </div>
            <div className="hawaii-step-nav ">
              {this.state.currentStepIndex !== 0 ?
                <button
                  className="step-nav-button btn btn-info "
                  onClick={()=>this.handleAdvance(-1)}>Go Back
                </button>: null
              }
              {this.state.currentStepIndex !== 3 ?
                <button
                  className="step-nav-button btn btn-info "
                  onClick={()=>this.handleAdvance(1)}>Next
                </button>
                :
                null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hawaii;

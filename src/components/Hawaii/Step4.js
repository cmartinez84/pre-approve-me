import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './hawaii.css';


class step4 extends Component{
  state = {
    password: '',
    confirmPassword:'',
    signature: '',
    warnings: [],
    isModalOpen: false,
  }
  onOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  onFormValueChange=(e)=>{
    this.setState({[  e.target.name]: e.target.value});
  }

  validate=()=>{
    var warnings = [];
    if(this.state.password !== this.state.confirmPassword){
      warnings.push("Passwords do not match.");
    }
    if(this.state.signature.length < 1 ){
      warnings.push("Please sign.");
    }
    if(!warnings.length < 0){
      this.onCloseModal();
      alert("Alert sent!")
    }
  }

  render(){

    const alertHeaderEnum = {
      test:<span className="alert-header">"THIS IS ONLY A test". <FontAwesomeIcon icon="bell" /></span>,
      correction:<span className="alert-header"> "ALERT CORRECTION!".<FontAwesomeIcon icon="sticky-note" /></span>,
      warning:<span className="alert-header"> "WARNING!". <FontAwesomeIcon icon="exclamation-triangle"/></span>
    }

     return(
       <div className="">
         <h1>Review</h1>
         <p >Please review all information carefully!</p>
         <p className="step4-message">
           {alertHeaderEnum[this.props.selectedAlertType]}
           {this.props.message}
            <span
              className="hawaii-step4-change"
              onClick={()=>this.props.handleChangeStep(2)}>
              [change]
            </span>
          </p>
         <p>
           <span>{`You have schedueld a ${this.props.selectedAlertType}`}</span>
           <span
             className="hawaii-step4-change"
             onClick={()=>this.props.handleChangeStep(0)}>
             [change]
           </span>
           <span>{` to be sent containing the following message to the Hawaiin citizens of the following islands:  ${this.props.islands.join(" ")}`}</span>
             <span
               className="hawaii-step4-change"
               onClick={()=>this.props.handleChangeStep(1)}>
               [change]
             </span>
             </p>
             <p>If everything looks ok, click ENTER CREDENTIALS for your final screen. And then click SEND</p>
             <button
               onClick={this.onOpenModal}
               class="btn btn-info"> Enter Credentials
             </button>
            <Modal
              open={this.state.isModalOpen}
              onClose={this.onCloseModal}
              center
              classNames={{modal: "step4-modal"}}>
              <h1>Confirm and Send</h1>
              <p>I,
                  <input
                    classname="electronic-signature"
                    onChange={this.onFormValueChange}
                    name="signature" type="text"
                    placeholder="electronic signature">
                  </input>,
                  hereby take full responsiblity for the sending of this form.
              </p>
              <label>Password: </label>
              <input
                onChange={ this.onFormValueChange}
                name="password"
                type="password"
                placeholder="password" ></input>
              <label>Confirm Password:</label>
              <input
                onChange={ this.onFormValueChange}
                name="confirmPassword"
                type="password"
                placeholder="confirm password" ></input>
              <div><button className="btn btn-info" onClick={this.validate}>Send {this.props.selectedAlertType}!</button></div>
              {this.state.warnings.map(warning=><span>{warning}</span>)}
          </Modal>
       </div>
     )
 }
}

export default step4;

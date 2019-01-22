import React, { Component } from 'react';
import './hawaii.css';


class Step3 extends Component{
 state ={
   canEdit: false
 }


 handleToggleEdit=()=>{
   this.setState({canEdit: !this.state.canEdit});
 }
 handleChangeMessage=(e)=>{
   this.setState({message: e.target.value});
 }

 render(){
   return(
     <div className="">
       <h1>Step3</h1>
       <div className="step3-message-box">
         {this.state.canEdit ?
           null
           :
           <span className="message-sheild"> </span>
         }
         <textarea
           className="step3-message"
           type="text"
           value={this.props.message}
           onChange={this.props.onMessageChange}/>
         <button
           className="btn btn-info"
           onClick={this.handleToggleEdit}>Edit Message
         </button>
       </div>
     </div>
   )
 }
}

export default Step3;

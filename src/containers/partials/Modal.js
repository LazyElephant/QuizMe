import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  
  captureClick = (event) => {
    if (this.ref !== event.target) return;

    this.props.closeModal();
  }

  render() {
    const { open, children } = this.props;
    return (
      <div className={"Modal" + (open ? ' open': '')} 
        aria-hidden={open}
        onClick={this.captureClick} 
        ref={(r) => {this.ref = r}}>
        {children}
      </div>
    );
  }
} 

export default Modal;
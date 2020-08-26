import React from 'react';
import ModalStyles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
  return (
    <>
      <Backdrop emailSent={props.emailSent}/>
      <div 
        className={ModalStyles.Modal}
        style={{
          transform: props.emailSent ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.emailSent ? '1' : '0' }}>
            {props.children}
      </div>
    </>
  );
}

export default Modal;

import React, { useState, useContext } from "react";
import Modal from 'react-modal';
import "./Popup.css"
import { PopupContent } from "./PopupContent";
import { MyContext } from "../../screens/Controller"
Modal.setAppElement('#root');

const customPopupStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    padding: '0px'
  }
};

const Popup = (props) => { 
  const { popupIsOpen, popupType, setAuthenticated } = useContext(MyContext)    
  const { closePopup } = props
    return (
      <div>
        <Modal
          isOpen={popupIsOpen}
          onRequestClose={closePopup}
          style={customPopupStyles}
          shouldCloseOnOverlayClick={true}
        >
           <PopupContent 
                    popupType={popupType}
                    setAuthenticated={setAuthenticated}
                  />        
        </Modal>
      </div>
    );
  }
  
export default Popup
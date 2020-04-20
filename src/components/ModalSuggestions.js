import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import '../style/modalsuggestions.css';

const SmileysPopover = (props) => {
  return (
    <div className='smileys-popover'>
      <div>
        <span onClick={props.onClick} ><i className='far fa-angry iconsPopover' /></span>
        <span onClick={props.onClick}><i className='far fa-frown iconsPopover' /></span>
        <span onClick={props.onClick}><i className='far fa-meh iconsPopover' /></span>
        <span onClick={props.onClick}><i className='far fa-smile iconsPopover' /></span>
        <span onClick={props.onClick}><i className='far fa-grin-hearts iconsPopover' /></span>
      </div>
      {props.openTextArea ? 
      <form className="text-area">
        <textarea className='input-textarea' placeholder='Tell us about your experience...' id='story' name='story' rows='6' cols='30' />
        <a href="mailto:nathan.guillaumin@outlook.com"><span className='close-textArea'><input type='submit' htmlFor  className='input-textarea' href='#' value='Send !' /></span></a>
      </form> : ''}
      
    </div>
  );
};

function ModalSuggestions () {
  const [secondModal, setSecondModal] = useState(false);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleSecondModal = () => {
    setSecondModal(!secondModal);
  };

  return (
    <div className='modal_Suggestions' ref={ref}>
      <Button className='btn_Suggestions' onClick={handleClick}><div className='icon_OpenModal'>{show ? <i className='fas fa-times' /> : <i class='far fa-grin' />}</div></Button>

      <Overlay
        show={show}
        target={target}
        placement='top'
        container={ref.current}
        containerPadding={20}
      >
        <Popover id='popover-contained' className='popover_Container'>
          <Popover.Title as='h3' className='title_Popover'>How would you rate your experience ?</Popover.Title>
          <Popover.Content className='paragraph_Popover'>
            <SmileysPopover onClick={handleSecondModal} openTextArea={secondModal} closeTextArea={handleClick} />
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}

export default ModalSuggestions;

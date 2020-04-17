import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import '../style/modalsuggestions.css';

const TextArea_Popover = (props) => {
  return (
    <div className='text-area open' action='mailto: xxx@gmail.com'>
      <i className='fas fa-times' onClick={props.handleClick} />
      <label for='story' className='input-textarea'>Tell us your experience:</label>
      <textarea className='input-textarea' id='story' name='story' rows='10' cols='4' />
      <span className='close-textArea'><input type='submit' className='input-textarea' href='#' value='Send !' /></span>
    </div>
  );
};

const Smileys_Popover = (props) => {
  return (
    <div>
      <div>
        <span onClick={props.onClick}><i className='far fa-angry iconsPopover' /></span>
        <span onClick={props.onClick}><i className='far fa-frown iconsPopover' /></span>
        <span onClick={props.onClick}><i className='far fa-meh iconsPopover' /></span>
        <span onClick={props.onClick}><i className='far fa-smile iconsPopover' /></span>
        <span onClick={props.onClick}><i className='far fa-grin-hearts iconsPopover' /></span>
      </div>
      <div>
        <label for='story' className='input-textarea'>Tell us your experience:</label>
        <textarea className='input-textarea' id='story' name='story' rows='4' cols='4' />
        <span className='close-textArea'><input type='submit' className='input-textarea' href='#' value='Send !' /></span>
      </div>
    </div>

  );
};

function ModalSuggestions () {
  const [secondModal, setSecondModal] = useState(false);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const textAreaOpen = 'text-area open';

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleSecondModal = () => {
    setSecondModal(!secondModal);
    console.log(secondModal);
  };

  return (
    <div className='modal_Suggestions' ref={ref}>
      <Button className='btn_Suggestions' onClick={handleClick}><div className='icon_OpenModal'><i class='far fa-grin' /></div></Button>

      <Overlay
        show={show}
        target={target}
        placement='top'
        container={ref.current}
        containerPadding={20}
      >
        <Popover id='popover-contained' className='popover_Container'>
          <Popover.Title as='h3' className='title_Popover'>How would you rate your experience ? <i className='fas fa-times' /></Popover.Title>
          <Popover.Content className='paragraph_Popover'>
            <Smileys_Popover onClick={handleSecondModal} />
          </Popover.Content>
        </Popover>
      </Overlay>
      {secondModal ? <TextArea_Popover /> : ''}
    </div>
  );
}

export default ModalSuggestions;

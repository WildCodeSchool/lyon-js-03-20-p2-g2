import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import '../style/modalsuggestions.css';

const SmileysPopover = (props) => {
  const [angryClass, setAngryClass] = useState(false);
  const [sadClass, setSadClass] = useState(false);
  const [neutralClass, setNeutralClass] = useState(false);
  const [smilingClass, setSmilingClass] = useState(false);
  const [lovingClass, setLovingClass] = useState(false);

  const angryClick = () => {
    setAngryClass(!angryClass);
    setSadClass(false);
    setNeutralClass(false);
    setSmilingClass(false);
    setLovingClass(false);
  };

  const sadClick = () => {
    setSadClass(!sadClass);
    setAngryClass(false);
    setNeutralClass(false);
    setSmilingClass(false);
    setLovingClass(false);
  };

  const neutralClick = () => {
    setNeutralClass(!neutralClass);
    setSadClass(false);
    setAngryClass(false);
    setSmilingClass(false);
    setLovingClass(false);
  };

  const smilingClick = () => {
    setSmilingClass(!smilingClass);
    setSadClass(false);
    setNeutralClass(false);
    setAngryClass(false);
    setLovingClass(false);
  };

  const lovingClick = () => {
    setLovingClass(!lovingClass);
    setSadClass(false);
    setNeutralClass(false);
    setSmilingClass(false);
    setAngryClass(false);
  };

  return (
    <div className='smileys-popover'>
      <div>
        <span className={angryClass ? 'icon-clicked' : ''} onClick={angryClick}><span onClick={props.onClick}><i className='far fa-angry iconsPopover' /></span></span>
        <span className={sadClass ? 'icon-clicked' : ''} onClick={sadClick}><span onClick={props.onClick}><i className='far fa-frown iconsPopover' /></span></span>
        <span className={neutralClass ? 'icon-clicked' : ''} onClick={neutralClick}><span onClick={props.onClick}><i className='far fa-meh iconsPopover' /></span></span>
        <span className={smilingClass ? 'icon-clicked' : ''} onClick={smilingClick}><span onClick={props.onClick}><i className='far fa-smile iconsPopover' /></span></span>
        <span className={lovingClass ? 'icon-clicked' : ''} onClick={lovingClick}><span onClick={props.onClick}><i className='far fa-grin-hearts iconsPopover' /></span></span>
      </div>
      {props.openTextArea
        ? <form id='gform' className='text-area'>
          <label htmlFor='message' />
          <textarea className='input-textarea' placeholder='Tell us about your experience...' id='name' name='message' rows='6' cols='30' />
          <a href='mailto:weathersuggest@gmail.com'><input type='submit' className='input-textarea' value='Send !' /></a>
        </form> // eslint-disable-line
        : ''}

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
      <Button className='btn_Suggestions' onClick={handleClick}><div className='icon_OpenModal'>{show ? <i className='fas fa-times' /> : <i className='far fa-grin' />}</div></Button>

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

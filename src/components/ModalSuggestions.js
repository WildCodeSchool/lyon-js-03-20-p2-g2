import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import '../style/modalsuggestions.css';

const SmileysPopover = (props) => {
  const [clickedSmiley, setClickedSmiley] = useState(null);
  const body = 'bla bla';

  return (
    <div className='smileys-popover'>
      <div>
        <span className={clickedSmiley === 'angry' ? 'icon-clicked' : ''} onClick={() => clickedSmiley !== 'angry' ? setClickedSmiley('angry') : setClickedSmiley(null)}><span onClick={clickedSmiley === 'angry' ? () => {} : props.onClick}><i className='far fa-angry iconsPopover' /></span></span>
        <span className={clickedSmiley === 'sad' ? 'icon-clicked' : ''} onClick={() => clickedSmiley !== 'sad' ? setClickedSmiley('sad') : setClickedSmiley(null)}><span onClick={clickedSmiley === 'sad' ? () => {} : props.onClick}><i className='far fa-frown iconsPopover' /></span></span>
        <span className={clickedSmiley === 'meh' ? 'icon-clicked' : ''} onClick={() => clickedSmiley !== 'meh' ? setClickedSmiley('meh') : setClickedSmiley(null)}><span onClick={clickedSmiley === 'meh' ? () => {} : props.onClick}><i className='far fa-meh iconsPopover' /></span></span>
        <span className={clickedSmiley === 'smile' ? 'icon-clicked' : ''} onClick={() => clickedSmiley !== 'smile' ? setClickedSmiley('smile') : setClickedSmiley(null)}><span onClick={clickedSmiley === 'smile' ? () => {} : props.onClick}><i className='far fa-smile iconsPopover' /></span></span>
        <span className={clickedSmiley === 'loving' ? 'icon-clicked' : ''} onClick={() => clickedSmiley !== 'loving' ? setClickedSmiley('loving') : setClickedSmiley(null)}><span onClick={clickedSmiley === 'loving' ? () => {} : props.onClick}><i className='far fa-grin-hearts iconsPopover' /></span></span>
      </div>
          <form id='gform' className='text-area'> { /* eslint-disable-line */ }
            <label htmlFor='message' /> { /* eslint-disable-line */ }
            <textarea className='input-textarea' placeholder='Tell us about your experience...' id='name' name='message' rows='6' cols='30' /> { /* eslint-disable-line */ }
            <a href={'mailto:weathersuggest@gmail.com?body=' + encodeURI(body)}><span className='close-textArea'><input type='submit' className='input-textarea' value='Send !' /></span></a> { /* eslint-disable-line */ }
        </form> { /* eslint-disable-line */ }
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

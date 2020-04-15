import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import '../style/modalsuggestions.css';

function ModalSuggestions () {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div className="modal_Suggestions" ref={ref}>
      <Button className="btn_Suggestions" onClick={handleClick}><div className="icon_OpenModal"><i class="far fa-grin"></i></div></Button>

      <Overlay
        show={show}
        target={target}
        placement='top'
        container={ref.current}
        containerPadding={20}
      >
        <Popover id='popover-contained' className="popover_Container">
          <Popover.Title as='h3' className='title_Popover'>How would you rate your experience ?</Popover.Title>
          <Popover.Content className="paragraph_Popover">
          <i className="far fa-angry iconsPopover"></i>
          <i className="far fa-frown iconsPopover"></i>
          <i className="far fa-meh iconsPopover"></i>
          <i className="far fa-smile iconsPopover"></i>
          <i className="far fa-grin-hearts iconsPopover"></i>
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}

export default ModalSuggestions;

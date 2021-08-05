import React, { useState , useEffect } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

import CustomButton from '../CustomButton/CustomButton';

export default function ModalBase(props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
      if (props.open) {
        setOpen(true);

      }
      if (props.close) {
        handleClose();
        props.resetClose();
      }
  });

  function handleClose () {
      setOpen(false);
      props.closeModals();
  };

  return (
    <Modal
      basic
      onClose={handleClose}
      onOpen={() => setOpen(true)}
      open={props.open || open}
      size='small'
    >
      <Header>
        {props.title}
      </Header>
      <Modal.Content>
        {props.children}
      </Modal.Content>
    </Modal>
  )
};
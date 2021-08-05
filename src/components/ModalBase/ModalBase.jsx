import React, { useState , useEffect } from 'react';
import { Header, Modal } from 'semantic-ui-react';

export default function ModalBase({ open, close, resetClose, closeModals, title, children }) {
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
      if (open) {
        setOpenModal(true);

      }
      if (close) {
        handleClose();
        resetClose();
      }
  }, [ open, close, handleClose, resetClose ]);

  function handleClose () {
      setOpenModal(false);
      closeModals();
  }

  return (
    <Modal
      basic
      onClose={handleClose}
      onOpen={() => setOpenModal(true)}
      open={open || openModal}
      size='small'
    >
      <Header>
        {title}
      </Header>
      <Modal.Content>
        {children}
      </Modal.Content>
    </Modal>
  )
};
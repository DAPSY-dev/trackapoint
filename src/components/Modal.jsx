import { useEffect, useRef } from 'react';
import { XLg } from 'react-bootstrap-icons';
import Button from '@/components/Button.jsx';

export default function Modal({ isOpen = false, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [isOpen]);

  useEffect(() => {
    modalRef.current?.addEventListener('cancel', handleOnCloseCb);
    return () => {
      modalRef.current?.removeEventListener('cancel', handleOnCloseCb);
    };
  }, [onClose]);

  const handleOnCloseCb = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const handleClose = () => {
    handleOnCloseCb();
    modalRef.current.close();
  };

  return (
    <dialog className="modal" ref={modalRef}>
      <Button variant="no-styles" className="modal__close" onClick={() => handleClose()}>
        <XLg />
        <span className="visually-hidden">Close</span>
      </Button>

      {children}
    </dialog>
  );
}

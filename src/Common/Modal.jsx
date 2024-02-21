import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({ children, isOpen }) => {
    if (!isOpen) return null;
    return createPortal(
        <div>{children}</div>,
        document.getElementById("modal-root")
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
    isOpen: false,
    handleClose: () => {},
};

export default Modal;

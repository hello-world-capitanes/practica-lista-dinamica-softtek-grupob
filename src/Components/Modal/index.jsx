import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null; 

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="close-x" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <button className="btn-close" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default Modal;
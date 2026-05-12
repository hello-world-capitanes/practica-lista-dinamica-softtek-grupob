import React from 'react';
import './Modal.css';

function Modal({ item, onClose }) {
    if (!item) return null; 

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>Detalles del Elemento</h2>
                <p><strong>ID:</strong> {item.id}</p>
                <p><strong>Nombre:</strong> {item.name}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default Modal;
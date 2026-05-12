import React from 'react';
import { useItems } from './Hooks/useItems'; 
import FormContainer from './Components/Form/FormContainer';
import List from './Components/List/List';
import Modal from './Components/Modal/index';
import './App.css';

function App() {
  const { 
    items, 
    selectedItem, 
    addItem, 
    deleteItem, 
    moveItem, 
    selectItem, 
    closeModel 
  } = useItems();

  return (
    <div className="app-container">
      <h1> Mi Lista Dinámica</h1>

      <section className="form-section">
        <FormContainer onAdd={addItem} />
      </section>

      <hr />

      <section className="list-section">
        <List 
          items={items} 
          onRemove={deleteItem} 
          onMove={moveItem} 
          onSelect={(item) => selectItem(item.id)} 
        />
      </section>

      <Modal 
        isOpen={!!selectedItem} 
        onClose={closeModel} 
        title="Detalles del Elemento"
      >
        {selectedItem && (
          <div className="info-detail">
            <p><strong>Nombre:</strong> {selectedItem.nombre}</p>
            <p><strong>Categoría:</strong> {selectedItem.tipo}</p>
            <p><strong>ID Técnico:</strong> {selectedItem.id}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;
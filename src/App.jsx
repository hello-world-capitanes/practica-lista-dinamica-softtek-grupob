import React from 'react';
import { useItems } from './Hooks/useItems'; 
import FormContainer from './Components/Form/FormContainer';
import List from './Components/List/List';
import Modal from './Components/Modal/Modal';
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
      <h1>Gestión de Elementos Dinámicos</h1>

      <section>
        <FormContainer onAdd={addItem} />
      </section>

      <hr />

      <section>
        <List 
          items={items} 
          onRemove={deleteItem} 
          onMove={moveItem} 
          onSelect={selectItem} 
        />
      </section>

      
      <Modal 
        item={selectedItem} 
        onClose={closeModel}
      >
      </Modal>
    </div>
  );
}

export default App;
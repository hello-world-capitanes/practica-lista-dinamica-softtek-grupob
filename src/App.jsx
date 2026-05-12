import React, { useState } from 'react';
// Importamos el hook y los componentes según tu estructura de carpetas
import { useItems } from './Hooks/useItems'; 
import FormContainer from './Components/Form/FormContainer';
import List from './Components/List/List';
import Modal from './Components/Modal/Modal';
import './App.css';

function App() {
  // Lógica del Hook (Integrante 3/Arquitecto)
  const { items, addItem, removeItem, moveItem } = useItems();
  
  // Estado para controlar el Modal
  const [selectedItem, setSelectedItem] = useState(null);

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
          onRemove={removeItem} 
          onMove={moveItem} 
          onSelect={(item) => setSelectedItem(item)} 
        />
      </section>

      
      <Modal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)}
        title="Detalles del Registro"
      >
        {selectedItem && (
          <div className="detail-view">
            <p><strong>Nombre:</strong> {selectedItem.nombre}</p>
            <p><strong>Tipo/Categoría:</strong> {selectedItem.tipo}</p>
            <p><strong>Estado:</strong> {selectedItem.esUrgente ? "Urgente" : "Normal"}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;
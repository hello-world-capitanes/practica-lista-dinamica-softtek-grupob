import React from 'react';
import { useItems } from './Hooks/useItems'; 
import FormContainer from './Components/Form/FormContainer';
import List from './Components/List/List';
import Modal from './Components/Modal/index';

function App() {
  // Extraemos todo del hook con los nombres exactos que escribiste
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

      {/* Formulario para añadir items */}
      <section>
        <FormContainer onAdd={addItem} />
      </section>

      <hr />

      {/* Lista para mostrar, mover y borrar items */}
      <section>
        <List 
          items={items} 
          onRemove={deleteItem} 
          onMove={moveItem} 
          onSelect={(item) => selectItem(item.id)} 
        />
      </section>

      {/* Modal que se abre cuando selectedItem no es null */}
      <Modal 
        isOpen={!!selectedItem} 
        onClose={closeModel}
        title="Detalles del Registro"
      >
        {selectedItem && (
          <div className="detail-view">
            <p><strong>Nombre:</strong> {selectedItem.nombre}</p>
            <p><strong>Tipo:</strong> {selectedItem.tipo}</p>
            <p><strong>Prioridad:</strong> {selectedItem.esUrgente ? "⚠️ Urgente" : "Normal"}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;
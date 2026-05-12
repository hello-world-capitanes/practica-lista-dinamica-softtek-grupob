import React from 'react';
import ListItem from './ListItem';

function List({ items, onRemove, onMove, onSelect }) {
    // Si no hay items, mostramos un mensaje
  if (items.length === 0) return <p>La lista está vacía. Añade algo arriba.</p>;

  return (
    <div className="list-container">
      <h3>Lista de Elementos</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <ListItem 
            key={item.id} 
            item={item} 
            index={index}
            onRemove={onRemove}
            onMove={onMove}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
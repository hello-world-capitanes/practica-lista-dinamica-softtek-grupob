import React from 'react';

function ListItem({ item, onRemove, onMove, onSelect }) {
  return (
    <li 
      onDoubleClick={() => onSelect(item)} 
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '10px', 
        margin: '5px 0',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: '#fff',
        cursor: 'pointer' 
      }}
      title="Doble clic para ver detalles"
    >
      <div>
        <strong>{item.nombre}</strong> 
        <span style={{ marginLeft: '10px', fontSize: '0.8em', color: '#666' }}>
          ({item.tipo})
        </span>
      </div>

      <div style={{ display: 'flex', gap: '5px' }}>
        <button 
          onClick={(e) => { e.stopPropagation(); onMove(item.id, 'up'); }}
          style={{ padding: '2px 8px', cursor: 'pointer' }}
        >
          up
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); onMove(item.id, 'down'); }}
          style={{ padding: '2px 8px', cursor: 'pointer' }}
        >
          down
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); onRemove(item.id); }}
          style={{ 
            padding: '2px 8px', 
            cursor: 'pointer', 
            backgroundColor: '#ff4d4d', 
            color: 'white', 
            border: 'none', 
            borderRadius: '3px' 
          }}
        >
          Borrar
        </button>
      </div>
    </li>
  );
}

export default ListItem;
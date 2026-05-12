import React from 'react';

// Recibimos el item, y las funciones para borrar, mover y seleccionar
function ListItem({ item, index, onRemove, onMove, onSelect }) {
  return (
    <li 
      className="list-item"
      onDoubleClick={() => onSelect(item)} 

      style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}
    >
      <div className="item-info">
        <strong>{item.nombre}</strong> - <span>{item.tipo}</span>

        {/* Muestra el chexbox como texto o icono si existe */}
        {item.esUrgente && <span> (Urgenteeeee)</span>}
      </div>

      <div className="item-actions">
        {/* Botones para mover y borrar */}
        <button onClick={(e) => { e.stopPropagation(); onMove(index, 'up'); }}>↑</button>
        <button onClick={(e) => { e.stopPropagation(); onMove(index, 'down'); }}>↓</button>
        <button onClick={(e) => { e.stopPropagation(); onRemove(item.id); }} style={{color: 'red'}}>Borrar</button>
      </div>
    </li>
  );
}

export default ListItem;
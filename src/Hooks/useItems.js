import { useState } from 'react';

export function useItems() {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    function addItem(newItem) {
        const itemConId = { ...newItem, id: Date.now() };
        setItems(prevItems => [...prevItems, itemConId]);
    }

    function deleteItem(id) {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    function moveItem(id, direction) {
        setItems(prevItems => {
            const index = prevItems.findIndex(item => item.id === id);
            if (index === -1) return prevItems;
            const newItems = [...prevItems];
            const item = newItems.splice(index, 1)[0];
            if (direction === 'up' && index > 0) {
                newItems.splice(index - 1, 0, item);
            } else if (direction === 'down' && index < prevItems.length - 1) {
                newItems.splice(index + 1, 0, item);
            } else {
                newItems.splice(index, 0, item);
            }
            return newItems;
        });
    }

    function selectItem(id) {
        const item = items.find(i => i.id === id);
        setSelectedItem(item);
    }

    function closeModel() {
        setSelectedItem(null);
    }

    return { items, selectedItem, addItem, deleteItem, moveItem, selectItem, closeModel };
}
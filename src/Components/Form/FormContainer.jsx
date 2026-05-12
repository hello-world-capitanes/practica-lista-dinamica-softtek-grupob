import { useState } from "react";
import "./FormContainer.css";

import Input from "./Input";
import Selector from "./Selector";

function FormContainer({ onAdd }) {
  const [formData, setFormData] = useState({
    nombre: "", 
    tipo: "Personal", 
    esUrgente: false 
  });

  const categories = [
    "Trabajo",
    "Personal",
    "Estudios"
  ];

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // nuevo nombre 'nombre' para la validación
    if (formData.nombre.trim() === "") {
      alert("Introduce un título");
      return;
    }

    // objeto debe tener las propiedades en español para que List y Modal las entiendan
    const newItem = {
      nombre: formData.nombre,
      tipo: formData.tipo,
      esUrgente: formData.esUrgente
    };

    // 4. Llamamos a la función correcta
    onAdd(newItem);

    // 5. Limpiamos con los nombres nuevos
    setFormData({
      nombre: "",
      tipo: "Personal",
      esUrgente: false
    });
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Añadir elemento</h2>

      <form onSubmit={handleSubmit}>
        <Input
          label="Título"
          type="text"
          name="nombre" // Debe coincidir con el estado
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Escribe algo"
        />

        <Selector
          label="Categoría"
          name="tipo" // Debe coincidir con el estado
          value={formData.tipo}
          onChange={handleChange}
          options={categories}
        />

        <Input
          label="Importante"
          type="checkbox"
          name="esUrgente" // Debe coincidir con el estado
          value={formData.esUrgente}
          checked={formData.esUrgente}
          onChange={handleChange}
        />

        <button type="submit" className="submit-button">
          Añadir
        </button>
      </form>
    </div>
  );
}

export default FormContainer;
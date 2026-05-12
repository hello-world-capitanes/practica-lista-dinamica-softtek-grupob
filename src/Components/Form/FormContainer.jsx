import { useState } from "react";
import "./FormContainer.css";

import Input from "./Input";
import Selector from "./Selector";

function FormContainer({ onAddItem }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    important: false
  });

  const categories = [
    "Trabajo",
    "Personal",
    "Estudios"
  ];

  function handleChange(event) {
    const { name, value, type, checked } =
      event.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.title.trim() === "") {
      alert("Introduce un título");
      return;
    }

    const newItem = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      important: formData.important
    };

    onAddItem(newItem);

    setFormData({
      title: "",
      category: "",
      important: false
    });
  }

  return (
    <div className="form-container">
      <h2 className="form-title">
        Añadir elemento
      </h2>

      <form onSubmit={handleSubmit}>
        <Input
          label="Título"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Escribe algo"
        />

        <Selector
          label="Categoría"
          name="category"
          value={formData.category}
          onChange={handleChange}
          options={categories}
        />

        <Input
          label="Importante"
          type="checkbox"
          name="important"
          checked={formData.important}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="submit-button"
        >
          Añadir
        </button>
      </form>
    </div>
  );
}

export default FormContainer;
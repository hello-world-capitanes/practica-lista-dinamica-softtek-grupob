import { useState } from "react";
import "./FormContainer.css";

import Input from "./Input";
import Selector from "./Selector";

const FormContainer = ({ onAddItem }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Trabajo",
    important: false,
  });

  const categories = [
    "Trabajo",
    "Personal",
    "Estudios",
    "Compras",
  ];

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("El título no puede estar vacío");
      return;
    }

    const newItem = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      important: formData.important,
    };

    onAddItem(newItem);

    setFormData({
      title: "",
      category: "Trabajo",
      important: false,
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">
        Añadir elemento
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>

          <Input
            type="text"
            value={formData.title}
            onChange={(e) =>
              handleChange("title", e.target.value)
            }
            placeholder="Introduce un título"
          />
        </div>

        <div className="form-group">
          <label>Categoría</label>

          <Selector
            options={categories}
            value={formData.category}
            onChange={(e) =>
              handleChange("category", e.target.value)
            }
          />
        </div>

        <div className="checkbox-group">
          <Input
            type="checkbox"
            checked={formData.important}
            onChange={(e) =>
              handleChange(
                "important",
                e.target.checked
              )
            }
          />

          <span>Importante</span>
        </div>

        <button
          type="submit"
          className="submit-button"
        >
          Añadir
        </button>
      </form>
    </div>
  );
};

export default FormContainer;
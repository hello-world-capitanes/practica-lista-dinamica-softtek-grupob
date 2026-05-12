function Selector({
  label,
  name,
  value,
  onChange,
  options = []
}) {
  return (
    <div className="form-group">

      <label htmlFor={name}>
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Selecciona una opción</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}

          </option>
          
        ))}
      </select>
    </div>
  );
}

export default Selector;
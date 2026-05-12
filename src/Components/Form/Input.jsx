function Input({
  label,
  type = "text",
  name,
  value,
  checked,
  onChange,
  placeholder
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        value={type === "checkbox" ? undefined : value}
        checked={type === "checkbox" ? checked : undefined}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
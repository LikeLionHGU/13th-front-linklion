import "../components/styles/Radio.css";

function Radio({ children, value, name, defaultChecked, disabled }) {
  return (
    <label className="track">
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      {children}
    </label>
  );
}

export default Radio;

import RadioContext from "./RadioContext";

function RadioGroup({ label, value, onChange, children }) {
  return (
    <div>
      <legend>{label}</legend>
      <RadioContext.Provider value={{ value, onChange }}>
        {children}
      </RadioContext.Provider>
    </div>
  );
}

export default RadioGroup;

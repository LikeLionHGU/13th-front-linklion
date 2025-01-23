function RadioGroup({ label, children }) {
  return (
    <div>
      <legend>{label}</legend>
      {children}
    </div>
  );
}
export default RadioGroup;

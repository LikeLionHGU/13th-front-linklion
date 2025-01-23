import "../components/styles/RadioGroup.css";

function RadioGroup({ label, children }) {
  return (
    <div>
      <legend className="track-box">{label}</legend>
      <div className="track">{children}</div>
    </div>
  );
}
export default RadioGroup;

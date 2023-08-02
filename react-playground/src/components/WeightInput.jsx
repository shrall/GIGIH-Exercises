function WeightInput({ kilograms, handleKilogramsChange }) {
  return (
    <input
      type="number"
      name="weight"
      id="weight"
      value={kilograms}
      onChange={handleKilogramsChange}
      className="border border-black"
    />
  );
}
export default WeightInput;

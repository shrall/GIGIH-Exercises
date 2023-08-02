import { useState } from "react";
import WeightInput from "./WeightInput";
function Converter() {
  const [kilograms, setKilograms] = useState(0);
  const [pounds, setPounds] = useState(0);

  function handleKilogramsChange(e) {
    setKilograms(e.target.value);
    setPounds(e.target.value * 2.205);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-x-2">
        <label htmlFor="weight">Kilograms:</label>
        <WeightInput
          kilograms={kilograms}
          handleKilogramsChange={handleKilogramsChange}
        />
      </div>
      <div>Weight in Pounds: {pounds}</div>
    </div>
  );
}
export default Converter;

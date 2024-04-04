//2. Create a temperature converter component that allows users to enter a
//temperature in Celsius and converts it to Fahrenheit when a button is clicked.
//Use useState to manage the temperature input and output.

import { useState } from "react";

function TemperatureConverter() {
  const [temperatureFahrenheit, setTemperatureFahrenheit] = useState<
    number | null
  >(null);

  const convertToFahrenheit = (celsius: number) => {
    return (celsius * 9 / 5 )+ 32;
  };

  const handleConvertClick = () => {
    const celsius = parseInt(
      (document.getElementById("inputId") as HTMLInputElement).value
    );
    if (celsius) {
      const convertedTemperature = convertToFahrenheit(celsius);
      setTemperatureFahrenheit(convertedTemperature);
    }
  };

  return (
    <>
      {temperatureFahrenheit !== null && (
        <p>{temperatureFahrenheit}°F</p>
      )}
      <input id="inputId" placeholder="Enter temperature in °C" type="text" />
      <button onClick={handleConvertClick}>
        Convert Celsius To Fahrenheit
      </button>
    </>
  );
}
export default TemperatureConverter;

// function TempratureConverter() {
//   let [temprature, setTemprature] = useState<number | null>(null);
//   const inputChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
//     setTemprature(+e.currentTarget.value)
//   };
//   const tempratureCoverterHandler = (e:MouseEvent<HTMLButtonElement>) => {
//     const convertedTemperature = temprature?((temprature*9/5)+32):null
//     setTemprature(convertedTemperature)
//   };
//   return (
//     <>
//       {temprature !== null && temprature.toFixed(2)} <br />
//       <input id="inputId" placeholder="Enter temperature in Celsius" type="text" onChange={inputChangeHandler} /> <br /> <br />
//       <button onClick={tempratureCoverterHandler}>
//         Convert Celsius To Fahrenheit
//       </button>
//     </>
//   );
// }

//3. Build a component that generates a random number between 1 and 100 when a button is clicked.
//Display the generated number using useState.

import { useState } from "react";

function RandomNumber() {
  const [randomNumber, getRandomNumber] = useState<number | null>(null);
  const randomNumberHandler = () => {
    getRandomNumber(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <>
      <h2>{randomNumber}</h2>
      <button onClick={randomNumberHandler}>Get Random Number</button>
    </>
  );
}
export default RandomNumber;

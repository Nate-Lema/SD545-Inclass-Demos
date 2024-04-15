import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

function App() {
  
  const handleClickOnDiv = (e: MouseEvent<HTMLDivElement>) => {
      console.log(`Target: ${e.target}`); //the html element you clicked on 
      console.log(`currentTarget: ${e.currentTarget}`); // the element you attach the listener
  }

  return (
    <div onClick={handleClickOnDiv}>
      <div>Hello</div>
      <button>Click Me</button>
      <div>World</div>
    </div>
  );
}

export default App;

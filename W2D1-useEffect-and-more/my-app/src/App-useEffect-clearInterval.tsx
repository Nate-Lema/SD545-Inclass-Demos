import React, { useEffect, useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      console.log('inside setInterval: ', counter);
      setCounter(counter + 1);
    }, 1000);
    return () => {
      clearTimeout(id);
    }
  }, [counter])
 

  return (
    <div>{counter}</div>
  )
}


export default function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && <Counter />}
      <button onClick={() => setShow(!show)}>Toggle Counter Component</button>
    </>

  )
}

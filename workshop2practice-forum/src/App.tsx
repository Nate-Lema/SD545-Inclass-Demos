import { useEffect, useState } from "react";

import React from 'react'

function Time() {
  const [time,setTime] = useState(new Date().toLocaleTimeString());
  useEffect(()=>{
    console.log('object')
    const intervalId = setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    },1000)
    clearInterval(intervalId)
    
  },[time])
  return (
    <div>
      Current Time:{time}
    </div>
  )
}


export default  function App() {

  return (
   <>
   <Time/>
   </>
  );
}


import React, { createContext, useState } from 'react'

function Component1() {
  return (
    <>
      <div>Component1</div>
      <Component2/>
    </>
  )
}
function Component2() {
  return (
    <>
    <div>Component2</div>
      <Component3/>
    </>
  )
}

function Component3() {
  return (
    <UserContext.Consumer>
      {
        user=>(
          <>
          <div>Component3</div>
          <div>This is the user fro App {user}</div>
          </>
        )
      }
    </UserContext.Consumer>
  )
}
const UserContext = createContext<string |  null>(null)//creating

export default  function App() {
  const [user,setUser] = useState('Natnael')
  // const [show,setShow] = useState(true)


  return (
    <>
    <UserContext.Provider value={user}>
    <Component1/>
    <button onClick={()=>{setUser('Henok')}}></button>
    </UserContext.Provider>
  
    </>
  );
}


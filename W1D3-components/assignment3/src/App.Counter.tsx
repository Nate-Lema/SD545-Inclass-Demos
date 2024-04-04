//1. Create a simple React component called Counter that displays a counter value 
//initialized to 0. Include two buttons: one for incrementing the counter and 
//another for decrementing it. Use useState to manage the counter state.

import { useState } from "react"

function Counter(){
    const [count,setCount] = useState(0)
    const incrementingCountHandler = ()=>{
        setCount(count+1)
    }
    const decrementingCountHandler = ()=>{
        setCount(count-1)
    }
    return (
        <>
        <h2>{count}</h2>
        <button style={{fontSize:'30px'}} onClick={incrementingCountHandler}>+</button> <br />
        <button style={{fontSize:'50px'}} onClick={decrementingCountHandler}>-</button>
        </>
    )
}
export default Counter
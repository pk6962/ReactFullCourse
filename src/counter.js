import React from "react"
import { useState } from "react"

const Counter = () => {
    const [value,setValue ] = useState(0)
    const increment = ()=> {
        setValue(value+1)
    }
    const decrement = ()=> {
       if (value >= 1) {
        setValue(value-1)
       }
    }
return (
    <div>
        <center>
            <h1> Counter Value  : <span> {value} </span></h1>
            <button onClick={increment}>  + Increment </button>
            { <button onClick={decrement /*() => setValue(value-2)*/}> - Decrement </button> }
        </center>
    </div>
    )
}

export default Counter
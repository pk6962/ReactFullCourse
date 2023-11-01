import React, { useMemo, useState } from 'react'

const UseMemoBasics = () => {
    const [number,setNumber] = useState(0)
    const [dark,setDark] = useState(false)
    const themeChange = {
        backgroundColor: dark ? "black" : "white" ,
        color: dark ?  "white" : "black",
    }
    const slowFunc = (number) => {
      return number * number
    }
    const doubleNumber = useMemo((number) => {
      return slowFunc(number)
    },[number])

    return (
        <>
        <h1> Prasanna's Counter </h1>
          <div>
            <input
              type="number"
              name="number"
              id="number"
              value={number}
              onChange={(e) => setNumber(Number(e.target.value))}
            />
          </div>
          <br />
          <div>
            <button onClick={() => setDark(!dark)}> change theme </button>
          </div>
          <div>
            <h2 style={themeChange}>the number : {slowFunc(number)}</h2>
          </div>
        </>
      );
    };

export default UseMemoBasics
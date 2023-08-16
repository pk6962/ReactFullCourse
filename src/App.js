import React ,{useState} from "react";


function App() {
  const arr = (useState(0)) ;
  const count = arr[0]
  const setCount = arr[1]
  const CountIncrement = ()  => {
    // setCount((prev)   => {
    //   return prev + 1 ;
    // });
    setCount((prev) => prev + 1) 
  }
  const CountDecrement = ()  => {
    setCount(count - 1)
  }

  return (
    <div className="cardsMainContainer">
      <h1> Prasannas Counter React.js </h1>
      <div>
        <button onClick={CountDecrement}>  Decrement </button>
        <span> {count} </span>
        <button onClick = {CountIncrement}> Increment  </button>

      </div>
    </div>
  )
}


export default App;

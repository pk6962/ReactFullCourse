import React, { useState } from "react" ;

const App = () => {
  console.log(useState(10))
  const [condition, setCondition] =  useState(false)

  const handlingBtn = () => {
    setCondition(!condition)
  }
  return (
    <div> 
      <button onClick={() => handlingBtn()}> {condition ? " hide "  :"show "}</button>
      { condition ? (
      <div> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
      </div>
       ) : "Content Hidden click to SHow"}
    </div>
  )
}

export default App ;
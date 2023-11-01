import React, { useState, useEffect, useRef } from "react";

const UseRefBasic = () => {
  const [firstName, setFirstName] = useState("");
  const renderCount = useRef(1);
  // const [count,setCount] = useState(1)

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    // setCount((prevCount) => setCount( prevCount+ 1))
    console.log("Testing....")
  });

  return (
    <>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <h5>Typing: {firstName}</h5>
      <h5>Component renderd {renderCount.current} times</h5>
    </>
  );
};

export default UseRefBasic;
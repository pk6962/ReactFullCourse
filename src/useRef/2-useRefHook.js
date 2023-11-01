import React, { useState , useEffect, useRef} from "react" ;

const UseRefHook = () => {
    const [firstName,setFirstName] = useState("")
    const inputDom = useRef("Button")
    useEffect(() =>{
        console.log("inputdom :", inputDom)
    })
    console.log(inputDom)

    const focus = () => {
        inputDom.current.focus()
    }
    return <>
        <div> 
            <h1> UseRefHook </h1>
            <div>
                <input ref={inputDom}  name="Name" type="text" id="IDName" onChange={(e) => setFirstName(e.target.value)}
                />
                <h3> Typing...{firstName}</h3>
                <button onClick={focus}>Focus</button>
            </div>
        </div>
    </>
}
export default UseRefHook;
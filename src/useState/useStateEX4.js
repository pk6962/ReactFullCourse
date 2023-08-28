import React, {useState} from 'react'

    const useStateEX4 = () => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [password,setPassword] = useState("")


  // const changeFirstName = (e) => {
  // setFirstName(e.target.value)
  // }
  // const  changePassword = (e) => {
  //   setPassword(e.target.value)
  // }
  // const changeLastName = (e) => {
  //    setLastName (e.target.value)
  // }

const handleInput = (e, input) => {
if (input === "firstName"){
  setFirstName(e.target.value)
  }else if(input === "password"){
    setPassword(e.target.value)
  }else if(input === "lastName"){
      setLastName(e.target.value)
  }
}

  const handleSubmit = (event) => {
  event.preventDefault()
  console.log(firstName,password,lastName)
  }

  return (
    <div className='cardsMainContainer'>
      <form > 
        <div className='fromContent'> 
          <input type='text' name='firstName' id='firstName' value= {firstName} onChange={(e) => handleInput(e,"firstName")} placeholder='Enter Your Name'/>
        </div>
        <div className='fromContent'> 
          <input type='password' name='password' id='password' value= {password} onChange={(e) => handleInput(e,"password")} placeholder='Enter Your Pwd'/>
        </div>
        <div className='fromContent'> 
          <input type='text' name='lastName' id='lastName' value= {lastName} onChange={(e) => handleInput(e,"lastName")} placeholder='Enter Your lastName'/>
        </div>
        <button onClick={handleSubmit} > Submit </button>
      </form>
    </div>
  )
} 

export default useStateEX4
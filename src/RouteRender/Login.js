import React from 'react'

function Login  () {
  return (
    <div>
        <h1> Login Page  </h1>
        <label> UserName </label>
        <input type='text' placeholder='Enter Name' id='name' name='name' />
        <button onClick={()=>2*2}> Login </button>
    </div>
  )
}

export default Login
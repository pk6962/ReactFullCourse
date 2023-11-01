import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home () {
  const navigate = useNavigate()
  const navigateToSuccessPage = () => {
    navigate("/success")
  }
  return (
    <div>
      <center>
      <h1> Home </h1>
      <form>
        <p> Email </p>
        <input type='email'/>
        <br/>
        <p> password </p>
        <input type='password' />
        <br/>
        <button onClick={navigateToSuccessPage}> Submit </button>
      </form>
      </center>
    </div>
  )
}

export default Home
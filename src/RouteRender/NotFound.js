import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound () {
    const navigate = useNavigate()
    const navigateToHomePage = () => {
        navigate("/")
    }
  return (
    <div>
        <h1> 404 Error Found  </h1>
        <button onClick={ () => navigate("/")}> Back to Home</button>
        <button onClick={navigateToHomePage}> Back 2 Home</button>
    </div>
  )
}

export default NotFound
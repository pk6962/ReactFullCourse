import React from 'react'
import { useNavigate } from 'react-router-dom'

function  Success () {
    const navigate = useNavigate()
    const navigateToHomePage = () => {
    navigate("/home")
  }
  return (
    <div>
        <h1>Form Successfully Submitted </h1>
        <button onClick={navigateToHomePage}> Back to home </button>
    </div>
  )
}

export default Success
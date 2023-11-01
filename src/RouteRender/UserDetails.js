import React from 'react'
import { useParams } from 'react-router-dom'
import usersData from './usersData'

function UserDetails () {
  const params = useParams()
  const {userId} = params ;
  console.log(userId)
  const clickedUserData = usersData.find((eachuser) => eachuser.id == userId) ;
  console.log(clickedUserData)
  console.log(clickedUserData.name)
  return (
    <div className='card'>
        <h1> ClickedUserData </h1>
        <h2> {clickedUserData.name} </h2>
        <h3> {clickedUserData.username}</h3>
        <h4> {clickedUserData.email}</h4>
        <p> {clickedUserData.phone}</p>
    </div>
  )
}

export default UserDetails
import React from "react"
import usersData from "./usersData"
import {Link} from "react-router-dom"

function Users () {

    return (
        <div> 
            <h1> Users </h1>
            <div className="card-container">
            {
                usersData.map((eachItem) => {
                    const { id, name, email} = eachItem ;
                    return (
                        <Link to={`/users/${id}`} key={id} >
                            <article className="card" >
                                <h3> {name}</h3>
                                <h5> {email} </h5>
                            </article>
                        </Link>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Users
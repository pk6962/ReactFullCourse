import React from "react"
import { Link,Outlet } from "react-router-dom"

function Projects () {

    return (
        <div>
            <h1> Projects </h1>
            <Link to="/projects/featuredprojects"> Featured Projects </Link>
            <br></br>
            <Link to="/projects/new"> New Projects </Link>
            <Outlet />
        </div>
    )
}

export default Projects
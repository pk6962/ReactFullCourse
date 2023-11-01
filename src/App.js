import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./RouteRender/Home"
import Navbar from "./RouteRender/Navbar"
import About from "./RouteRender/About"
import NotFound from "./RouteRender/NotFound"
import Contact from "./RouteRender/Contact"
import FeaturedProjects from "./RouteRender/FeaturedProjects"
import Projects from "./RouteRender/Projects"
import Success from "./RouteRender/Success"
import Users from "./RouteRender/users"
import UserDetails from "./RouteRender/UserDetails"


function App () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/home" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/projects" element={ <Projects />}>
          <Route index element={<FeaturedProjects/>} />
            <Route path="featuredprojects" element={ <FeaturedProjects />} />
        </Route>
        <Route path="/success" element={ <Success />} />
        <Route path="/users" element={ <Users />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </div>
  )
}
export default App
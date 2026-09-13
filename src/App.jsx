import React from 'react'
import Navber from './Pages/Navber'
import Home from './Pages/Home'
import Skil from './Pages/Skil'
import Project from './Pages/Project'
import Abouts from './Pages/Abouts'
import Service from './Pages/Service'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <>
      <Navber />
      <Home />
      <Skil />
      <Project/>
      <Service/>
      <Abouts/>
      <Contact/>
    </>
  )
}

export default App
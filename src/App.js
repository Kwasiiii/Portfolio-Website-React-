import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="site-wrapper"><Navbar /><About /> <Projects />  <Contact /> <Footer/></div>
  )
}

export default App

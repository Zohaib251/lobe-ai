import React from 'react'
import Navbar from '../../components/header/navbar'
import Footer from '../../components/footer/footer'
import Video from './video'
import About from './About'
import Section from './section'
import ExportAnywhere from './ExportAnywhere'
import Testimonials from './testimonials'
import Example from './Example'
import "../../image/icomoon/style.css"

const overview = () => {
  return (
    <div>
        <Navbar/>
        <Video />
        <About />
        <Section/>
        <ExportAnywhere />
        <Testimonials/>
        <Example />
        <Footer/>
    </div>
  )
}

export default overview

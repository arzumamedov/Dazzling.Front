import React from 'react'
import Slider from '../components/Slider'
import Section1 from '../components/Section1'
import { Helmet } from 'react-helmet-async'

function Homepage() {
  return (
    <>
    <Helmet><title>Home</title></Helmet>
     <Slider/> 
     <Section1/>
    </>
  )
}

export default Homepage
import React from 'react'
import {Cra, Footer, Hero, LandingImages, SectionTitle, Service} from '../components'
import Featured from '../components/landing/Featured'

const Landing = () => {
  return (
    <>
    <Hero />
    <div className='align-element pt-12'>
    <SectionTitle text ={"Featured Products"} className="mx-auto max-w-6xl px-8"/>
    </div>
    <Featured />
    <Service />   
    <Cra />
    <LandingImages />
    <Footer />
    
    </>
  )
}

export default Landing
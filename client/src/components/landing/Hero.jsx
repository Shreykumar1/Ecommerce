import React from 'react'
import image from "./hero-banner.png"

const Hero = () => {
  return (
    <>
       <section  style={{backgroundImage: "url('./hero-banner.png')"}}></section>
    <img src={image} alt="" />
    {/* <img src={image} alt="" srcset="" /> */}
    </>
//     <div className="container">

//       <h2 className="h1 hero-title">
//         New Summer <strong>Shoes Collection</strong>
//       </h2>

//       <p className="hero-text">
//         Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage
//         existing an
//         expanded array of leadership.
//       </p>

//       <button className="btn btn-primary">
//         <span>Shop Now</span>
//       </button>

//     </div>
//   </section>
  )
}

export default Hero
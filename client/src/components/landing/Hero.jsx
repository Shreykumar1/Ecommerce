import React from 'react'
import image from "./hero-banner.png"
import cta1 from "./cta-1.jpg"
import cta2 from "./cta-2.jpg"
// import "./style.css"
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
       <section className="section " style={{backgroundImage: `url(${image})`,height : "648px"}} >
    {/* <img src={image} alt="" /> */}
    {/* <img src={image} alt="" srcset="" /> */}
   
     <div className="w-[32rem] text-black pt-44 pl-24">
       <h2 className="font-light text-5xl">
         New Summer 
       </h2>
       <h1 className='font-dark tracking-wider text-5xl pt-4 pb-6'>
        <strong>Shoes Collection</strong>
        </h1>
       <p className="hero-text">
         Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage
         existing an
         expanded array of leadership.
       </p>
       <Link to= '/products' className="btn btn-primary mt-4">
         <span>Shop Now</span>
         <FaArrowRight />
       </Link>
     </div>
   </section>
   {/* CRA */}
         <section className="section  ">
        <div className="container">

          <ul className="flex w-full justify-center gap-x-8 py-12">

            <li>
              <div className="pt-12 pl-10"  style={{backgroundImage: `url(${cta1})`,height : "273px",width : "612px",backgroundRepeat : "no-repeat"}}>
                <p className="text-lg">Adidas Shoes</p>

                <h3 className=" py-4  font-bold tracking-wider text-4xl">The Summer Sale<br/> Off 50%</h3>

                <Link to={'/products'} className="btn btn-link text-white text-lg font-light" style={{paddingLeft : "0px"}}>
                  <span>Shop Now</span>

                  <FaArrowRight />
                </Link>
              </div>
            </li>

            <li>
              <div className="pt-12 pl-10"  style={{backgroundImage: `url(${cta2})`,height : "273px",width : "612px",backgroundRepeat : "no-repeat"}}>
                <p className="text-lg">Nike Shoes</p>

                <h3 className=" py-4  font-bold tracking-wider text-4xl">Makes Yourself <br/> Keep Sporty </h3>

                <Link to={'/products'} className="btn btn-link text-white text-lg font-light" style={{paddingLeft : "0px"}}>
                  <span>Shop Now</span>

                  <FaArrowRight />
                </Link>
              </div>
            </li>


          </ul>

        </div>
      </section>
   </>

 
  )
}

export default Hero
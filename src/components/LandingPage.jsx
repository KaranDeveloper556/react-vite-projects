import React from 'react'
import Hero_img from '/heroImg.jpg'

function LandingPage() {
  return (
    <section className="Hero_sec py-6 relative flex justify-center items-center object-cover bg-no-repeat" style={{background:`url(${Hero_img})`, height:'32rem'}}>
        <div className="text_area text-center">
          <p className=' text-8xl font-bold'>WELCOME TO MY WORLD</p>
          <p className='text-l text-xl font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero odio incidunt quos cumque </p>
        </div>
    </section>
  )
}

export default LandingPage

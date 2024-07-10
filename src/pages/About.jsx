import React from 'react'

const About = () => {
  return (
    <section className="projects w-full flex flex-col justify-center items-center">
      <h1 className='flex justify-center items-center text-gray-800 p-10 font-extrabold text-center sm:text-8xl text-6xl'>About Us</h1>
      <div className="text-img-div p-4 flex justify-center items-center flex-wrap gap-6">
        <div className="text-areas flex justify-center items-center flex-col gap-2 max-w-2xl">
          <h3 className=' font-bold sm:text-6xl text-5xl'>React Practice..</h3>
          <p className=' font-semibold sm:text-lg text-sm'>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nulla, doloribus repellendus laboriosam impedit at natus voluptatum illum eaque, delectus itaque modi facere repellat obcaecati eum cum, perferendis dolore inventore. sit amet consectetur adipisicing elit. Blanditiis omnis libero minima, voluptas quam molestias laboriosam, rem velit sequi maxime minus provident maiores aliquid asperiores, placeat similique consectetur? Vitae, asperiores.</p>
        </div>
        <img className='hero-img sm:h-96 h-72' src={"/hero-graphics.png"} alt="hero-img" />
      </div>
    </section>
  )
}

export default About

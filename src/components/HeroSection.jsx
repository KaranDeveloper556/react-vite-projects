import React from 'react'

const HeroSection = () => {
    return (
        <section className="hero_area sm:py-[10vh] py-[6vh] bg-slate-800 text-white w-full px-[1vw] flex justify-center gap-16 items-center flex-wrap">
            <div className="text-areas flex flex-col gap-2 max-w-3xl">
                <div className="flex flex-col gap-4">
                    <h1 className=' font-bold sm:text-8xl text-5xl'>Welcome to</h1>
                    <h3 className=' font-bold sm:text-6xl text-4xl'>React Practice and,</h3>
                    <h4 className=' font-semibold sm:text-5xl text-3xl'>Projects World</h4>
                </div>
                <p className=' font-light sm:text-lg text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis omnis libero minima, voluptas quam molestias laboriosam, rem velit sequi maxime minus provident maiores aliquid asperiores, placeat similique consectetur? Vitae, asperiores.</p>
            </div>
            <img className='hero-img sm:h-96 h-72' src={"/hero-graphics.png"} alt="hero-img" />
        </section>
    )
}

export default HeroSection

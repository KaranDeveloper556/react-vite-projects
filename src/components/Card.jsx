import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <div className="relative z-[10] p-6 m-1 flex flex-col text-gray-400 hover:text-white hover:scale-110 gap-4 bg-gray-700 rounded-lg max-w-[25rem] transition-all">
        <h1 className='font-bold text-3xl underline'>{props.heading}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea velit eveniet quasi accusantium ab vero? Eius nemo </p>
      </div>
    </div>
  )
}

export default Card

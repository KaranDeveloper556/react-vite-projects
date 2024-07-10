import React from 'react'

const Contact = () => {
  return (
    <section className="contact p-6 bg-slate-800 flex justify-center flex-col items-center">
      <h1 className='flex justify-center items-center text-gray-200 p-10 font-extrabold text-center sm:text-8xl text-6xl'>Contact Us</h1>
      <div className="contact-form-wapper relative">
        <form action="" className='relative bg-gray-600 z-[10] p-6 m-2 rounded-md'>
          <div className="fields flex flex-col gap-4 mb-4">
            <div className="field flex flex-col">
              <label htmlFor="name-input" className=' capitalize font-semibold text-gray-400'>full name:</label>
              <input type="text" id='name-input' className=' p-2 outline-2 outline-white border w-[60vw] rounded-md bg-transparent text-gray-50' placeholder='Enter Your Full Name' />
            </div>
            <div className="field flex flex-col">
              <label htmlFor="contact-input" className=' capitalize font-semibold text-gray-400'>Contact number:</label>
              <input type="number" id='contact-input' className=' p-2 border w-[60vw] outline-2 outline-white rounded-md bg-transparent text-gray-50' placeholder='Enter Mobile Number' />
            </div>
            <div className="field flex flex-col">
              <label htmlFor="email-input" className=' capitalize font-semibold text-gray-400'>E-mail:</label>
              <input type="email" id='email-input' className=' p-2 border w-[60vw] outline-2 outline-white rounded-md bg-transparent text-gray-50' placeholder='Enter E-mail' />
            </div>
            <div className="field flex flex-col">
              <label htmlFor="passward-input" className=' capitalize font-semibold text-gray-400'>Passward:</label>
              <input type="passward" id='passward-input' className=' p-2 border w-[60vw] outline-2 outline-white rounded-md bg-transparent text-gray-50' placeholder='Enter Passward' />
            </div>
            <div className="field flex flex-col">
              <label htmlFor="confirm-pass-input" className=' capitalize font-semibold text-gray-400'>Confirm Passward:</label>
              <input type="passward" id='confirm-pass-input' className=' p-2 border w-[60vw] outline-2 outline-white rounded-md bg-transparent text-gray-50' placeholder='Enter Confirm Passward' />
            </div>
          </div>
          <div className="form-btns text-center">
            <button className=' text-white py-3 px-20 font-extrabold text-xl bg-slate-400 rounded-md m-2'>Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

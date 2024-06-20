import React, { useState } from 'react';
import logo from '/logo.png'
import { NavLink } from 'react-router-dom';

// {SetisOpen?'py-14 px-10 absolute top-0 right-0 w-11/12 h-lvh bg-orange-600 gap-3 flex items-end flex-col z-40':'flex items-center justify-between gap-3'}
function Navigation() {
    let [isOpen, SetisOpen] = useState(false);

    return (
        <section className="Navigation">
            <nav className=' bg-orange-800 flex items-center justify-between px-6 py-4' >
                <img src={logo} alt="logo" className=' h-12' />
                <div className="links">
                    <div className={`ul_wapper ${isOpen?'block':'hidden'} lg:block`}>
                        <ul className={isOpen ? ' py-16 px-10 absolute top-0 right-0 w-11/12 h-lvh bg-orange-600 gap-3 flex items-end flex-col z-40' : 'flex items-center justify-between gap-3'}>
                            <li className={`px-3 py-2.5 rounded-xl hover:bg-orange-700 ${isOpen?'w-11/12 text-right':''}`}><NavLink to={'/'} className='text-amber-50 font-bold'>HOME</NavLink></li>
                            <li className={`px-3 py-2.5 rounded-xl hover:bg-orange-700 ${isOpen?'w-11/12 text-right':''}`}><NavLink to={'/BgChnager'} className='text-amber-50 font-bold'>BG CHANGER</NavLink></li>
                            <li className={`px-3 py-2.5 rounded-xl hover:bg-orange-700 ${isOpen?'w-11/12 text-right':''}`}><NavLink to={'/Passward_generator'} className='text-amber-50 font-bold'>PASSWARD GENERATER</NavLink></li>
                            <li className={`px-3 py-2.5 rounded-xl hover:bg-orange-700 ${isOpen?'w-11/12 text-right':''}`}><NavLink to={'/CWH_api_prac'} className='text-amber-50 font-bold'>CWH Parctice</NavLink></li>
                            <li className={`px-3 py-2.5 rounded-xl hover:bg-orange-700 ${isOpen?'w-11/12 text-right':''}`}><NavLink to={'/todo'} className='text-amber-50 font-bold'>TODO</NavLink></li>
                            <li className={`px-3 py-2.5 rounded-xl hover:bg-orange-700 ${isOpen?'w-11/12 text-right':''}`}><NavLink to={'/hooks_mini_project01'} className='text-amber-50 font-bold'>Mini Project</NavLink></li>
                            <li className={`px-3 py-2.5 rounded-xl hover:bg-orange-700 ${isOpen?'w-11/12 text-right':''}`}><NavLink to={'/understanding_useContext'} className='text-amber-50 font-bold'>Understanding useContext</NavLink></li>
                        </ul>
                    </div>
                    <button onClick={() => SetisOpen(!isOpen)} className='block lg:hidden z-50 relative'>
                        <div className="space-y-2 px-3 py-2.5 rounded-xl hover:bg-orange-700">
                            <span className="block w-8 h-0.5 bg-gray-200"></span>
                            <span className="block w-8 h-0.5 bg-gray-200"></span>
                            <span className="block w-5 h-0.5 bg-gray-200"></span>
                        </div>
                    </button>
                </div>
            </nav>
            <div className="hero_container"></div>
        </section>
    )
}

export default Navigation;
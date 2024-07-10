import React, { useState } from 'react';
import logo from '/logo.png'
import { NavLink } from 'react-router-dom';

function Navigation() {
    const NavLinksArr = ['about', 'projects', 'practice', 'contact']
    let [isOpen, SetisOpen] = useState(false);

    return (
        <nav className='w-full px-[2vw] py-[2.5vh] bg-gray-800 flex justify-between items-center gap-4 ' >
            <NavLink to='/'><img src={logo} alt="logo" className=' sm:h-12 h-8 z-[99]' /></NavLink>
            <div className="links_button w-full flex justify-end lg:justify-between items-center gap-3">
                <div className={`ul_wapper ${isOpen ? 'bg-gray-900 pt-20 py-10 px-10 absolute top-0 right-0 w-11/12 h-full gap-3 flex items-end justify-normal flex-col z-[98]' : 'w-full items-center flex-row justify-between hidden'} lg:flex`}>
                    <ul className={isOpen ? 'flex justify-center flex-col gap-2' : 'flex items-center justify-between gap-3'}>
                        {
                            NavLinksArr.map(
                                (link, index) => {
                                    return <NavLink to={`/${link}`} onClick={()=>SetisOpen(false)} className={`text-gray-400 font-bold text-lg uppercase px-3 py-2.5 rounded-l hover:text-white`} key={index}>{link}</NavLink>
                                }
                            )
                        }
                    </ul>
                    <div className={isOpen ? 'flex justify-center flex-col gap-2' : "button text-gray-200 flex items-center justify-center gap-4"}>
                        <button className=' capitalize px-7 py-2 border-[2.5px] font-extrabold rounded-xl bg-slate-500'>Sign In</button>
                        <button className=' capitalize px-7 py-2 border-[2.5px] font-extrabold rounded-xl bg-slate-500'>Sign Up</button>
                    </div>
                </div>
                <div className={`block lg:hidden z-[99]`}>
                    <button className=' capitalize px-3 py-2 border-[2px] flex justify-center items-center gap-1 font-extrabold rounded-xl bg-slate-500' onClick={() => SetisOpen(!isOpen)}>
                        <img src="/menu.png" alt="menu" className='h-5' />Menu
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
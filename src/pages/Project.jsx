import React from 'react'
import { NavLink } from 'react-router-dom';
import Card from '../components/Card.jsx';

const Project = () => {
    return (
        <section className="projects w-full flex flex-col justify-center items-center">
            <h1 className='flex justify-center items-center text-gray-800 p-10 font-extrabold text-center sm:text-8xl text-6xl'>Projects</h1>
            <div className="projects-cards flex justify-center items-center flex-wrap gap-8 max-w-[82rem]">
                <button>
                    <NavLink to='/projects/bgChanger'><Card heading='Background Changer' /></NavLink>
                </button>
                <button>
                    <NavLink to='/projects/passwardGenerator'><Card heading='Passward Generator' /></NavLink>
                </button>
                <button>
                    <NavLink to='/projects/hooks_mini_project01'><Card heading='Hooks Mini Project' /></NavLink>
                </button>
                <button>
                    <NavLink to='/projects/understanding_useContext'><Card heading='Understanding Context' /></NavLink>
                </button>
                <button>
                    <NavLink to='/projects/web_zoofari'><Card heading='Website Zoofari' /></NavLink>
                </button>
                <button>
                    <NavLink to='/projects/defult'><Card heading='Default' /></NavLink>
                </button>
                <button>
                    <NavLink to='/projects/defult'><Card heading='Default' /></NavLink>
                </button>
                <button>
                    <NavLink to='/projects/defult'><Card heading='Default' /></NavLink>
                </button>
                <button>
                    <NavLink to='/projects/defult'><Card heading='Default' /></NavLink>
                </button>
            </div>
        </section>
    )
}

export default Project

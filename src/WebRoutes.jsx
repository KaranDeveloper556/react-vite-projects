import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';

//Practice
import CWH_api_prac from "./Practice/CWH_api_prac";

//Pages
import HeroSection from './components/HeroSection';
import Project from './pages/Project';
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx';

//Projects
import BgChanger from "./Project02_BgColorChnager/Main.jsx";
import Passward_generator from "./Project01_passwardGeneretor/index";
import Mini_Project01 from './Project00_All_About_Hooks/Mini_Project01';
import Login_page from './Project04_UnderStanding_useContext/Login_page';
import Profile_page from './Project04_UnderStanding_useContext/Profile_page';

//Context
import UserContextProvider from './Context/UserContextProvider'
import TextMarque from './components/TextMarque.jsx';
import { TodoProvider } from './Context/Todo.js';


const WebRoutes = () => {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <TodoProvider>
                    <Navigation />
                    <Routes>
                        <Route path='/' element={<><HeroSection /><TextMarque /></>} />
                        <Route path='/about' element={<About />} />

                        {/* Projects Routes */}
                        <Route path='/projects' element={<Project />} />
                        <Route path='/projects/passwardGenerator' element={<Passward_generator />} />
                        <Route path='/projects/bgChanger' element={<BgChanger />} />
                        <Route path='/projects/hooks_mini_project01' element={<Mini_Project01 />} />
                        <Route path='/projects/understanding_useContext' element={<><Login_page /> <Profile_page /></>} />

                        {/* Practice Routes */}
                        <Route path='/practice' element={<CWH_api_prac />} />

                        {/* Contact Routes */}
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </TodoProvider>
            </UserContextProvider>
        </BrowserRouter>
    )
}

export default WebRoutes

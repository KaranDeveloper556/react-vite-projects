import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import CWH_api_prac from "./Practice/CWH_api_prac";
import BgChnager from "./Project02_BgColorChnager/Main";
import Passward_generator from "./Project01_passwardGeneretor/index";
import Todo from './Project04_TodoList/Todo';
import Mini_Project01 from './Project00_All_About_Hooks/Mini_Project01';
import Login_page from './Project04_UnderStanding_useContext/Login_page';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<><LandingPage /><BgChnager /><Passward_generator /></>} />
          <Route path='/BgChnager' element={<BgChnager />} />
          <Route path='/Passward_generator' element={<Passward_generator />} />
          <Route path='/CWH_api_prac' element={<CWH_api_prac />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/hooks_mini_project01' element={<Mini_Project01 />} />
          <Route path='/understanding_useContext' element={<Login_page />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

import React, { useState } from 'react';
import logo from './logo.svg';
import './assets/css/style.scss'
import './App.css';
import DemoPage from './component/page/DemoPage';
import Navbar from './component/Layout/Navbar';
import useLocalStorage from "use-local-storage";
import Sidebar from './component/Layout/Sidebar';

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const [sidebarOpen,setSidebarOpen]=useState(false)

  const hadnleThemeChange=()=>{
    setIsDark(!isDark)
  }

  return (
    <div className='mainPage' data-theme={isDark ? "dark" : "light"}>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <Navbar hadnleThemeChange={hadnleThemeChange} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          <Sidebar/>
          <DemoPage />
        </div>
      </div>
    </div>
  );
}

export default App;

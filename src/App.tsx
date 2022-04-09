import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import logo from '../src/assets/logo.png'
import './App.css'

function App() {
  return (
    <body id='container' className="p-3 mb-2 bg-dark text-white">
    <div className='bg-gray-900 m-auto'>
      <link rel='stylesheet' href='App.css'/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
      rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
      <div className="p-3 mb-2 bg-gray text-white">
        <img id='logo' src={logo} alt='space-x-logo'/>
      </div>
      <div>
      <nav id='nav' className='border-b-4 p-4 border-sky-700'>
        <Link to='/dragons'>
          Dragons
        </Link>
        <Link to='/rockets'>
          Rockets
        </Link>
        <Link to='/ships'>
          Ships
        </Link>
      </nav>
      </div>
      <div id='outletX'>
        <Outlet/>
      </div>
    </div>
    </body>
  );
};

export default App;

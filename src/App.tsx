import React from 'react';
import { Outlet } from 'react-router-dom'
import logo from '../src/assets/logo.png'

function App() {
  return (
    <body id="app">
      <link
        rel="stylesheet" href="./App.css"
      />
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
      </head>
      <div>
        <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
          <div className="container">
            <a href="/" className="navbar-brand">
              <img src={logo} width="200" alt="" className="d-inline-block align-middle mr-2"/>
              <span className="text-uppercase font-weight-bold"></span>
            </a>

            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

            <div id="navbarSupportedContent" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><a href="/" className="nav-link">Home <span></span></a></li>
                <li className=""><a href="dragons" className="nav-link">Dragons</a></li>
                <li className="nav-item"><a href="rockets" className="nav-link">Rockets</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <Outlet/>
      </div>
    </body>
  );
};


export default App;

// npm install react-router-dom
// npm i bootstrap-icons
// npm i google-map-react

import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import Loginmodule from './components/Loginmodule';
import Contactus from './components/Contactus';
import Careers from './components/Careers';

export default function App() {
  return (
    <BrowserRouter>
      <div className='fixed-top'>
        <div className='row justify-content-end'>
          <div className='col-1 m-2 text-start'>
            <Link to='/careers'>Careers</Link>
          </div>
          <div className='col-1 m-2 text-start'>
            <Link to='/contactus'>Contact Us</Link>
          </div>
          <div className='col-1 m-2 text-start'>
            <Link to='/login'>Log In</Link>
          </div>
          <div className='col-1 m-2 text-start'>
            <Link to='/register'>Register</Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path='/careers' element={<Careers />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path="/login" element={<Loginmodule id={"#login"} />} />
        <Route path="/register" element={<Loginmodule id={"#register"} />} />
      </Routes>

    </BrowserRouter>
  )
}
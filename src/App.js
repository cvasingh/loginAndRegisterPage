import * as React from 'react';
// npm install react-router-dom
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import './bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import Loginmodule from './components/Loginmodule';
import Contactus from './components/Contactus';

export default function App() {
  return (
    <BrowserRouter>
    <Loginmodule />
      {/* <Routes>
        <Route path="/Loginmodule" element={<Loginmodule />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes> */}
    </BrowserRouter>
  )
}
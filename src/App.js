import * as React from 'react';
import bgimage from './components/img/bg.png';
import logoimage from './components/img/logo.png';
import './bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function Copyright() {
  return (
    <p className='text-center'>
      Copyright ©
      <a href='#'> Skillark </a>
      {new Date().getFullYear()}.
    </p>
  );
}


export default function App() {

  return (
    <div className='container-fluid' style={{ backgroundColor: '#e8fff7', minHeight: '100vh', }}>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-md-9 col-sm-10 d-none d-lg-block'
          style={{
            height: '100vh',
            backgroundImage: `url(${bgimage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '50% 100%',
            borderTopRightRadius: '8%',
            borderBottomRightRadius: '8%',
          }}>
          <div className='py-4' style={{
            background: 'linear-gradient(315deg,rgba(224, 224, 224,.4),rgba(255, 255, 255,.6))',
            boxShadow: '0 0 24px -1px rgb(53 101 224 / 25%)',
            width: '70%',
            minHeight: '70%',
            overflow: 'hidden',
            backdropFilter: 'blur(120px)',
            margin: '80px auto',
            borderRadius: '35px',
          }}>
            <div className='row align-items-center'>
              <div className='col-5 ps-5'>
                <img src={logoimage} className='img-fluid' alt='logo'
                  style={{ height: '100px', marginBottom: '10%' }}></img>
              </div>
              <div className='col-6'>
                <div className='h1 text-start fw-bold' style={{ color: '#333' }}>
                  Skillark</div>
              </div>
            </div>

            <div className='h2 text-start ms-5 mt-4 fw-bold'>Hey There, Welcome!</div>
            <div className='h6 text-start ms-5 my-3 text-success'>We are Skillark Technology</div>
            <div className='h4 fw-bolder mt-5 text-center m-3'>
              "Courage is going from failure to failure without losing enthusiasm."
            </div>
            <div className='h3 text-end me-5 fw-bold'>~someone</div>
          </div>
        </div>
        <div className='col-lg-6 col-sm-12'>
          <div className=' d-block d-lg-none'>
            <div className='row align-items-center'>
              <div className='col-5 text-end'>
                <img src={logoimage} className='img-fluid'
                  style={{ height: '100px'}}></img>
              </div>
              <div className='col-7'>
                <div className='display-3 text-start fw-bold' style={{ color: '#444' }}>
                  Skillark</div>
              </div>
            </div>
          </div>

          {/* <Login /> */}
          
          <Register/>

          <Copyright />
        </div>
      </div>
    </div>
  );
}
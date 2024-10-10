import './App.css';
import React from 'react';
import { HashRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import MeetingRoom1 from './components/MeetingRoom1';
import MeetingRoom2 from './components/MeetingRoom2';
import Majlis from './components/Majlis';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className='G42'>
      <HashRouter>
        <nav className='navbar navbar-expand-lg navbar-light bg-light light-green'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-center'
            id='navbarNav'
          >
            <ul className='navbar-nav gap-4'>
              <li className='nav-item'>
                <Link className='nav-link' to='/meeting-room-1'>
                  Meeting Room 1
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/meeting-room-2'>
                  Meeting Room 2
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/majlis'>
                  Majlis
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Navigate to='/meeting-room-1' />} />
          <Route path='/meeting-room-1' element={<MeetingRoom1 />} />
          <Route path='/meeting-room-2' element={<MeetingRoom2 />} />
          <Route path='/majlis' element={<Majlis />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

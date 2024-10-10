// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
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
            <Link className='nav-link' to='/meeting-room-3'>
              Meeting Room 3
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
  );
}

export default Navbar;

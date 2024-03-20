import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../index.css'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <>
          <div className=' bg-black shadow-2xl rounded-2xl m-4'>
            <hearder className='text-white'>
              <nav className=' container mx-auto px-6 py-3 flex justify-between items-center'>
                <div>
                <Link to="/" className='flex items-center'>
                <h1 className=' '>MoveMate</h1>
                </Link>
                </div>
                <div className='hidden md:flex space-x-4'>
                <Link to="/">Company</Link>
                <Link to="/">About</Link>
                <Link to="/">Team</Link>
                <Link to="/">Contact</Link>
                </div>
                <div className='hidden md:flex space-x-4'>
                  <Link to='/' className=''>Login</Link>
                  <Link to='/'>Register</Link>
                </div>
                <div className='md:hidden flex justify-center' >
                <button type='button'>
                  <GiHamburgerMenu />
                </button>
                </div>
              </nav>
              </hearder>
          </div>
    </>
  );
}
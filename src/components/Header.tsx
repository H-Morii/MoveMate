
import { Link } from 'react-router-dom';
import '../index.css'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <>
          <div className=' bg-black shadow-2xl rounded-2xl m-1 md:m-4'>
            <header className='text-white '>
              <nav className=' container mx-auto px-6 py-3 flex justify-between items-center'>
                <div>
                <Link to="/" className='flex items-center'>
                <h1 className=' text-2xl '>MoveMate</h1>
                </Link>
                </div>
                <div className='hidden md:flex space-x-10 '>
                <Link to="/" className=' hover:underline'>Company</Link>
                <Link to="/" className=' hover:underline'>About</Link>
                <Link to="/" className=' hover:underline'>Team</Link>
                <Link to="/" className=' hover:underline'>Contact</Link>
                </div>
                <div className='hidden md:flex space-x-4'>
                  <Link to='/login' className='hover:underline'>Login</Link>
                  <Link to='/' className='hover:underline'>Register</Link>
                </div>
                <div className='md:hidden flex justify-center' >
                <button type='button'>
                  <GiHamburgerMenu />
                </button>
                </div>
              </nav>
              </header>
          </div>
    </>
  );
}
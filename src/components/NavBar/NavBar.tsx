
import { useState } from "react";

//Icons
import { GoHome } from "react-icons/go";
import { BiMapPin } from "react-icons/bi";
import {CgSearch } from 'react-icons/cg'
import { BsChat } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const NavBar:React.FC = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);


  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize= () => setIsSmallScreen(mediaQuery.matches)
    
    mediaQuery.addEventListener('change', handleResize)
    handleResize()
    return () => mediaQuery.removeEventListener('change', handleResize) 
  },[])
  return (
    <>
    {/* Phone Navbar */}
    { isSmallScreen ? (
    <nav className="fixed inset-x-0 bottom-0 bg-black h-[4rem] rounded-3xl m-5 opacity-80 ">
      <div className=" w-full h-full flex justify-center items-center space-x-10">
        <div className="" >
        <GoHome size="2em" color="white"/>
        </div>
        <div className=" hover:cursor-pointer"><BiMapPin size="2em" color="white"/></div>
        <div className=" hover:cursor-pointer"><CgSearch size="2em" color="white"/></div>
        <div className=" hover:cursor-pointer"><BsChat size="2em" color="white"/></div>
        <div className=" hover:cursor-pointer"><CgProfile size="2em" color="white"/></div>
      </div>
      </nav> )
      :
      // Webpage Navbar
      (
        <div className=' bg-black shadow-2xl rounded-2xl '>
        <header className='text-white '>
          <nav className=' container mx-auto px-6 py-3 flex justify-between items-center'>
            <div>
            <Link to="/" className='flex items-center'>
            <h1 className=' text-2xl '>MoveMate</h1>
            </Link>
            </div>
            <div className='hidden md:flex space-x-20 '>
            <Link to="/" className=' hover:underline'>Home</Link>
            <Link to="/" className=' hover:underline'>Find</Link>
            <Link to="/" className=' hover:underline'>Search</Link>
            <Link to="/" className=' hover:underline'>Profile</Link>
            </div>
            <div className='md:flex space-x-4'>
              <Link to='/homepage' className='hover:underline'>Logout</Link>
            </div>
          </nav>
          </header>
      </div>
      )}
    </>
  )
}

export default NavBar

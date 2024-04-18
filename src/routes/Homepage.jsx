import React from 'react'
import Header from '../components/Header'
import Git from "../assets/github-mark.png"
import Photo from "../assets/frontPagePhoto.jpg"
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
      <Header/>
      <figure className='md:m-4 shadow-lg m-1 rounded-3xl overflow-hidden '>
        <img src={Photo} alt="Moving Photo" className=' border-hidden w-full'/>
      </figure>
      <div>
      <div className=' flex m-5 p-4'>
        <div className=' container mx-auto'>
          <h2 className='text-2xl font-bold md:text-3xl p-5'>Send Items Efficient, Reliable, Simple</h2>
        <div className='grid grid-cols-1 gap-2 m-1 md:grid-cols-3 md:grid-rows-2'>
              <div className=' justify-center'>
                <div className='p-6 md:h-[250px] text-white bg-black rounded-2xl shadow-2xl'>
                  <h3 className=' font-semibold'>Swift and Streamlined</h3>
                  <p className=' max-sm:text-sm md:max-w-[300px] justify-self-center'>Schedule deliveries in real-time. Our platform offers instant booking so you can dispatch as soon as you're ready.</p>
                </div>
          </div>
          <div className='md:col-span-2'>
              <div className='p-6 md:h-[250px] text-white bg-black rounded-2xl shadow-2xl  '>
                <h3 className=' font-semibold md:max-w-[200px]'>Empowering Local Drivers</h3>
                <p className=' max-sm:text-sm md:max-w-[300px]'>Connect with local drivers in your community for a more personalized delivery experience and faster service.</p>
              </div>
            </div>
            <div className=' md:col-span-2'>  
              <div className='p-6 text-white bg-black rounded-2xl shadow-2xl '>
                <h3 className=' font-semibold'>Unbeatable Flexibility</h3>
                <p className=' max-sm:text-sm md:max-w-[300px]'>From small parcels to large hauls, our network adapts to your needs. Get the capacity you need, when you need it.</p>
              </div>
            </div>
            <div className=''>
              <div className='p-6 text-white bg-black rounded-2xl shadow-2xl '>
                <h3 className=' font-semibold'>Hassle-Free Logistics</h3>
                <p className=' max-sm:text-sm md:max-w-[300px]'>We handle the complexities of routing and logistics, giving you the freedom to focus on what matters — your customers.</p>
              </div>
            </div>
        </div>
        </div>
      </div>
      </div>
      <footer>
        <div className='h-[300px] bg-black'>
          <div className=' pl-10 md:pl-32'>
            <div className=' bg-[#A15A2A] h-[300px] w-[200px] flex justify-center' >
              <div className=' flex flex-col space-y-6 m-6'>
              <a href='/' className='font-semibold'>Contact</a>
              <Link to='/' className='font-semibold'>Location</Link>
              <img src={Git} alt="" className='w-8'/>
              <small>
                Copyright © 2023 Haruki History Archives. All Rights Reserved.
              </small>
              </div>
            </div>
            </div>
        </div>
      </footer>
     
    </>
  )
}

export default Homepage

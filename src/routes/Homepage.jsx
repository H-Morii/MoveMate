import React from 'react'
import Header from '../components/Header'
import Photo from '../assets/frontPagePhoto.jpg'

const Homepage = () => {
  return (
    <>
      <Header/>
      <div className='md:m-4 shadow-lg m-1 '>
        <img src={Photo} alt="Moving Photo" className=' rounded-3xl border-hidden'/>
      </div>
      <body>
      <div className=' flex h-auto m-5 border-dotted border-2 p-4'>
        <div className=' container mx-auto'>
          <h2 className='text-2xl font-bold md:text-3xl p-5'>Send Items Efficient, Reliable, Simple</h2>
        <div className='grid grid-cols-1 gap-2 m-1 md:grid-cols-2 md:grid-rows-2'>
            <div className='p-6  text-white bg-black rounded-2xl shadow-2xl'>
                <h3 className=' font-semibold'>Swift and Streamlined</h3>
                <p className=' max-sm:text-sm'>Schedule deliveries in real-time. Our platform offers instant booking so you can dispatch as soon as you're ready.</p>
            </div>
            <div>
              <div className='p-6 text-white bg-black rounded-2xl shadow-2xl'>
                <h3 className=' font-semibold'>Empowering Local Drivers</h3>
                <p className=' max-sm:text-sm'>onnect with local drivers in your community for a more personalized delivery experience and faster service.</p>
              </div>
            </div>
            <div>
              <div className='p-6 text-white bg-black rounded-2xl shadow-2xl'>
                <h3 className=' font-semibold'>Unbeatable Flexibility</h3>
                <p className=' max-sm:text-sm'>From small parcels to large hauls, our network adapts to your needs. Get the capacity you need, when you need it.</p>
              </div>
            </div>
            <div>
              <div className='p-6 text-white bg-black rounded-3xl'>
                <h3 className=' font-semibold'>Hassle-Free Logistics</h3>
                <p className=' max-sm:text-sm'>We handle the complexities of routing and logistics, giving you the freedom to focus on what matters — your customers.</p>
              </div>
            </div>
        </div>
        </div>
      </div>
      </body>
    </>
  )
}

export default Homepage

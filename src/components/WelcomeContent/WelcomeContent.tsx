import Map from "../Map/Map"



const WelcomeContent: React.FC = () => {
  return (
      <div className=" relative  flex flex-col md:flex-row md:w-full md:h-full">
        <div className=" z-10 flex flex-col md:mx-4">
                <div className=" bg-black rounded-b-2xl md:rounded-2xl md:w-[400px] md:my-4 shadow-2xl">
                  <div className=' p-10 text-white'>
                    <h2 className=" text-[2.5em]">Welcome Back, <span className=" font-bold">Haruki !</span></h2>
                </div>
            </div>  
            <div>
              <div className=" bg-black my-4 rounded-2xl h-[200px] text-white p-6 shadow-2xl">
                <h3>Pick route</h3>
                <div className=" text-black">
                   <input className="w-full my-4 p-2 rounded-sm" placeholder="Pick-up location" type="text" />
                   <input className="w-full p-2 rounded-sm" placeholder="Drop-off location" type="text" />
                </div>
              </div>
            </div >
            </div>
            <div className=" absolute">
              <Map/>  
            </div>
        </div>
        
  )
}

export default WelcomeContent



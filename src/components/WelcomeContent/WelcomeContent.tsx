
import { CiDeliveryTruck } from "react-icons/ci";


const WelcomeContent: React.FC = () => {
  return (
      // <div className=" relative  flex flex-col md:flex-row md:w-full md:h-full">
      //   <div className=" z-10 flex flex-col md:mx-4">
      //           <div className=" bg-black rounded-b-2xl md:rounded-2xl md:w-[400px] md:my-4 shadow-2xl">
      //             <div className=' p-10 text-white'>
      //               <h2 className=" text-[2.5em]">Welcome Back, <span className=" font-bold">Haruki !</span></h2>
      //           </div>
      //       </div>  
      //       <div>
      //         <div className=" bg-black my-4 rounded-2xl h-[200px] text-white p-6 shadow-2xl">
      //           <h3>Pick route</h3>
      //           <div className=" text-black">
      //              <input className="w-full my-4 p-2 rounded-sm" placeholder="Pick-up location" type="text" />
      //              <input className="w-full p-2 rounded-sm" placeholder="Drop-off location" type="text" />
      //           </div>
      //         </div>
      //       </div >
      //       </div>
      //       <div className=" absolute">
      //         <Map/>  
      //       </div>
      //   </div>
        <>
        <div className="">
          <header className="flex w-full justify-center items-center bg-black text-white h-[100px]">
            <h2 className=" text-2xl">
              Welcome Back, Jessa Tot.
            </h2>
          </header>
          <div className="flex justify-center items-center">
            <div className="p-5">
              <h3 className="p-5 flex justify-center text-2xl"><CiDeliveryTruck size={"30"}/>Find driver</h3>
            <input type="text" placeholder="Driver or location" className="border-2 w-[300px] p-2" />
            <div className="pt-5 flex justify-center">
              <button className=" border py-3 px-6 hover:bg-black hover:text-white rounded-2xl">Find</button>
            </div>
            </div>
          </div>
          <section>
            <div className="p-4">
              <h2 className="text-2xl">Suggestion</h2>
            </div>

          </section>
        </div>
        </>
  )
}

export default WelcomeContent



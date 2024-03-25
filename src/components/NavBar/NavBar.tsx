import { GoHome } from "react-icons/go";
import { BiMapPin } from "react-icons/bi";


interface SidebarInterface {
  
}


const NavBar:React.FC = () => {

  return (
    <>
    <nav className="fixed inset-x-0 bottom-0 bg-black h-[4rem] rounded-3xl m-5 opacity-80 ">
      <div className=" w-full h-full flex justify-center items-center space-x-4">
        <div className="">
        <GoHome size="2em" color="white"/>
        </div>
        <div><BiMapPin size="2em" color="white"/></div>
        <div></div>
        <div></div>
      </div>
      </nav>
    </>
  )
}

export default NavBar

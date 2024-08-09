import { RiBasketballLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
    <div className="navbar p-5 text-white">
  <div className="flex-1 gap-2">
    <a className="text-2xl lg:mr-5">Uber</a>
    <div className="hidden md:flex">
    <button className='btn btn-sm border-none   hover:bg-[#282828] text-white rounded-none bg-transparent  hover:rounded-full'>Ride</button>
    <button className='btn btn-sm border-none   hover:bg-[#282828] text-white rounded-none bg-transparent  hover:rounded-full'>Drive</button>
    <button className='btn btn-sm border-none   hover:bg-[#282828] text-white rounded-none bg-transparent  hover:rounded-full'>Uber Eats</button>
    <details className="dropdown">
  <summary className=" m-1 btn btn-sm border-none   hover:bg-[#282828] text-white rounded-none bg-transparent  hover:rounded-full">About</summary>
  <ul className="menu dropdown-content mt-3 bg-base-100 rounded-t-sm text-[#757575]  rounded-b-lg  z-[1] w-52 p-2 shadow">
    <li className=''><a className='hover:text-black '>About us</a></li>
    <li><a className='hover:text-black'>Our Offerings</a></li>
  </ul>
</details>
</div>
  </div>
  <div className="flex-none gap-2 md:gap-3">
  <button className='btn btn-sm border-none hidden md:flex  hover:bg-[#282828] text-white rounded-none bg-transparent  hover:rounded-full'>
  <RiBasketballLine className='text-lg'/> EN
    </button>
  <button className='btn btn-sm border-none   hover:bg-[#282828] hidden md:flex text-white rounded-none bg-transparent  hover:rounded-full'>Help</button>
     <button className='btn btn-sm border-none   hover:bg-[#282828]  text-white rounded-none bg-transparent  hover:rounded-full'>Log in</button>
     <button className='btn btn-sm  border-none bg-[#ffffff]  text-black rounded-full'>Sign up</button>
  </div>
</div>
    </>
  )
}

export default Navbar
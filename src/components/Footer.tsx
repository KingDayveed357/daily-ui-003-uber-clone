import { RiBasketballLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import  googlePlay  from "../assets/img/app-store-google-4d63c31a3e.svg";
import  appleStore  from "../assets/img/app-store-apple-f1f919205b.svg";

const Footer = () => {
  return (
    <>
    <footer className="text-white min-h-screen   py-24  bg-[#000000] ">
     <div className='max-w-[75rem] md:mx-auto mx-7'>
   <p className='text-xl py-6'>Uber</p>
   <p className='text-lg py-6'>Visit Help Center</p>
   <nav className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12'>
    <div className='flex flex-col gap-4'>
    <h6 className="font-semibold text-lg mb-4">Company</h6> 
        <p className="text-sm">About us</p>
        <p className="text-sm">Our offerings</p>
        <p className="text-sm">Newsroom</p>
        <p className="text-sm">Investors</p>
        <p className="text-sm">Blog</p>
        <p className="text-sm">Careers</p>
        <p className="text-sm">Autonomous</p>
        <p className="text-sm">Uber AI</p>
        <p className="text-sm">Gift Cards</p>
    </div>

    <div className='flex flex-col gap-4'>
    <h6 className="font-semibold text-lg mb-4">Prdoucts</h6> 
        <p className="text-sm">Ride</p>
        <p className="text-sm">Drive</p>
        <p className="text-sm">Eat</p>
        <p className="text-sm">Uber Freight</p>
    </div>

    <div className='flex flex-col gap-4'>
    <h6 className="font-semibold text-lg mb-4">Global citizenship</h6> 
        <p className="text-sm">Safety</p>
        <p className="text-sm">Diversity and Inclusion</p>
        <p className="text-sm">Sustainability</p>
    </div>

    <div className='flex flex-col gap-4'>
    <h6 className="font-semibold text-lg mb-4">Travel</h6> 
        <p className="text-sm">Reserve</p>
        <p className="text-sm">Airports</p>
        <p className="text-sm">Cities</p>
    </div>
   </nav>

   <div className='flex flex-col md:flex-row md:justify-between'>
    <div className='social-media flex gap-7 md:gap-10'>
    <button className='btn btn-sm h-[2.2rem] border-none   hover:bg-[#282828] text-white  bg-transparent  hover:rounded-md'>
  <ImFacebook2  className='text-lg'/> 
    </button>
    <button className='btn btn-sm h-[2.2rem] border-none   hover:bg-[#282828] text-white  bg-transparent  hover:rounded-md'>
  <FaXTwitter  className='text-lg'/> 
    </button>
    <button className='btn btn-sm h-[2.2rem] border-none   hover:bg-[#282828] text-white  bg-transparent  hover:rounded-md'>
  <FaYoutube  className='text-lg'/> 
    </button>
    <button className='btn btn-sm h-[2.2rem] border-none   hover:bg-[#282828] text-white  bg-transparent  hover:rounded-md'>
  <FaLinkedin  className='text-lg'/> 
    </button>
    <button className='btn btn-sm h-[2.2rem] border-none   hover:bg-[#282828] text-white  bg-transparent  hover:rounded-md'>
  <FaInstagram  className='text-lg'/> 
    </button>
    </div>
    <div className='flex my-12 text-left  flex-col md:flex-md md:gap-3'>
    <button className='btn btn-sm h-[2.2rem] border-none   hover:bg-[#282828] text-white bg-transparent  hover:rounded-md'>
  <RiBasketballLine className='text-lg'/> English
    </button>
    <button className='btn btn-sm h-[2.2rem] border-none   hover:bg-[#282828] text-white  bg-transparent  hover:rounded-md'>
  <MdLocationOn  className='text-lg'/> Port Harcourt
    </button>
    </div>

 <div className="flex lg:flex-row gap-3 flex-col mt-5 justify-center ">
  <img src={googlePlay} className="lg:max-w-xl w-48" alt=""  />
  <img src={appleStore} className="lg:max-w-xl w-48" alt=""  />
 </div>

   </div>
   <div className="flex md:flex-row gap-7 md:gap-0 flex-col justify-between text-sm pt-16  text-[#98A4A4]">
   <p className="lg: text-center">© 2024 Uber Technologies Inc.</p>
   <div className="flex justify-center lg:justify-end  gap-7 text-sm  ">
    <p>Privacy</p>
    <p>Accessibility</p>
    <p>Terms</p>
   </div>
   </div>
  </div>
</footer>
    </>
  )
}

export default Footer

import Navbar from './components/Navbar'
import  heroImg  from "../src/assets/img/Ride-with-Uber.png";
import  man  from "../src/assets/img/earner-illustra.png";
import  img3  from "../src/assets/img/u4b-square.png";
import  QrCode1  from "../src/assets/img/QR_https___t.uber.com_download-driver-app.png";
// import  QrCode2  from "../src/assets/img/QR_https___t.uber.com_download-driver-app.png";
import { BsFillSendFill } from "react-icons/bs";
import { VscCircle } from "react-icons/vsc";
import { IoIosSquare } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";
import Footer from './components/Footer';

function App() {
  

  return (
    <>
    <div className=''>
      <div className=' min-h-screen bg-[#000000]'>
        <div className='max-w-[1300px] mx-auto'>
     <Navbar/>
     <div className="hero-content gap-[8rem] max-w-[75rem] mt-12 text-white mx-auto flex-col  lg:flex-row-reverse">
    <img
      src={heroImg}
      className="md:max-w-xl w-auto rounded-lg " />
    <div className=''>
      <h1 className="text-5xl md:leading-[4rem] font-bold">Go anywhere with Uber</h1>
      <div className="py-6 max-w-sm flex flex-col gap-5"> 
      <p> Request a ride, hop in, and go. </p>
       <form action="" className='text-black'>
       <label className="input input-bordered flex items-center gap-2 mb-3">
       <VscCircle />
  <input type="text" className="grow" placeholder="Enter location" />
  <BsFillSendFill />
</label>
<label className="input input-bordered flex items-center gap-2">
<IoIosSquare  className='text-sm'/>
  <input type="text" className="grow" placeholder="Enter destination" />
</label>
       </form>
      </div>
      <button className="btn w-32 h-[3.5rem] btn-[#ffffff] text-[16px] text-black">See prices</button>
    </div>
  </div>
     </div>
      </div>


      <section className="hero-content gap-[8.4rem] max-w-[75rem] mt-12 text-black mx-auto flex-col lg:flex-row">
    <img
      src={man}
      className="md:max-w-xl w-auto rounded-lg " />
    <div className=''>
      <h1 className="text-4xl md:text-[3.3rem] md:leading-[4rem] font-bold">Drive when you want, make what you need</h1>
      <div > 
      <p className="py-6 max-w-[28rem] flex flex-col gap-5"> Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber. </p>
      
      </div>
      <div className='flex gap-5'>
      <button className="btn w-[8.5rem] h-[3.5rem] btn-[#ffffff] bg-black text-[16px] text-white">Get Started</button>
     <p className='my-auto underline  text-[1.1rem]'>Already have an account? Sign in</p>
      </div>
    </div>
      </section>


      <section className="hero-content gap-[8.4rem] max-w-[75rem] mt-12  mx-auto flex-col lg:flex-row-reverse">
    <img
      src={img3}
      className="md:max-w-xl w-auto rounded-lg " />
    <div className=''>
      <h1 className="text-4xl md:text-[3.3rem] md:leading-[4rem] font-bold">The Uber you know, reimagined for business</h1>
      <div > 
      <p className="py-6  flex flex-col gap-5"> Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size. </p>
      
      </div>
      <div className='flex gap-5'>
      <button className="btn w-[8.5rem] h-[3.5rem] btn-[#ffffff] bg-black text-[16px] text-white">Get Started</button>
     <p className='my-auto underline  text-[1.1rem]'> Check out our solutions</p>
      </div>
    </div>
      </section>
      
      <section className="bg-[#F6F6F6] py-16 mt-10" >
        <div className=' max-w-[75rem] text-black  mx-5  md:mx-auto'>
        <h1 className="md:text-4xl text-2xl   font-bold">It’s easier in the apps</h1>
        <div className='flex flex-col  md:flex-row gap-10 mt-10'>
        
        <div className="card rounded-none h-[12.5rem] card-side bg-base-100 ">
    <img
      src={QrCode1}
      alt="Qr-code"
      className='p-6 max-w-sm max-h-sm'  
       />
  <div className="  my-auto">
   <p className='font-bold text-2xl'>Download the Uber app </p>
   <p>Scan to download</p>
  </div>
  <div className='my-auto lg:pl-10 lg:p-5'>  
    <FiArrowRight className='text-2xl' />
    </div>
</div>

<div className="card rounded-none h-[12.5rem] card-side bg-base-100 ">
    <img
      src={QrCode1}
      alt="Qr-code"
      className='p-6 max-w-sm max-h-sm'  
       />
  <div className="mx-2 my-auto">
   <p className='font-bold text-2xl'>Download the Driver app </p>
   <p>Scan to download</p>
  </div>
  <div className='my-auto lg:pl-10 lg:p-5'>  
    <FiArrowRight className='text-2xl' />
    </div>
</div>

     </div>
        </div>
      </section>

      <Footer/>
    </div>
    </>
  )
}

export default App

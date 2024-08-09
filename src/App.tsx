
import Navbar from './components/Navbar'
import  heroImg  from "../src/assets/img/Ride-with-Uber.png";
import { BsFillSendFill } from "react-icons/bs";
import { VscCircle } from "react-icons/vsc";
import { IoIosSquare } from "react-icons/io";

function App() {
  

  return (
    <>
    <div className=''>
      <div className=' min-h-screen bg-[#000000]'>
        <div className='max-w-[1300px] mx-auto'>
     <Navbar/>
     <div className="hero-content gap-[2rem] max-w-[75rem] mt-12 text-white mx-auto flex-col lg:flex-row-reverse">
    <img
      src={heroImg}
      className="max-w-xl rounded-lg shadow-2xl" />
    <div className=''>
      <h1 className="text-[3.3rem] leading-[4rem] font-bold">Go anywhere with Uber</h1>
      <div className="py-6 max-w-[28rem] flex flex-col gap-5"> 
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
      <section className=''>
     
      </section>
    </div>
    </>
  )
}

export default App

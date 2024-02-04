import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { GiCoffeeCup } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6"



function ArrowRight(props) {
    const { className, style, onClick } = props;
    return (
       
      <div
        className="relative "
        
        onClick={onClick}
      >
        <div className="absolute -top-80 right-0 bg-white rounded-full w-10 h-10 p-1 "><FaArrowRightLong  className="h-8 w-7 text-gray-600" /></div> 
      </div>
    );
  }
  
  function ArrowLeft(props) {
    const { className, style, onClick } = props;
    return (
       
        <div
        className="relative overflow-visible"
        
        onClick={onClick}
      >
        <div className="absolute z-10 top-36 left-0 bg-white rounded-full w-10 h-10 p-1 "><FaArrowLeftLong  className="h-8 w-7 text-gray-600" /></div> 
      </div>
    );
  }

const Mexico = () => {


    const items = [
        {
            icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"> <path
              d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
          </svg>
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
      };

    return ( 
        <div>
            <div className="sticky top-0 z-50 bg-white border-b flex justify-between items-center p-5">
                {/* left */}
              <div>
             <h1 className="font-semibold text-2xl m-3 flex items-center justify-between ">
             <Link to="/AA">  <FaArrowLeft className="h-5 w-5 text-blue-400 flex mr-8" /> </Link> Mexico, Addis Ababa</h1>
              </div>

                {/* right */}
                <div>
              <Link to="/">  <MdOutlineClose className="h-7 w-7 hover:text-red-600" /></Link>
                </div>

            </div>

            <div>
 <img class="h-96 w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
   src="https://img.freepik.com/free-photo/cup-coffee-with-roasted-coffee-beans_23-2150698823.jpg?t=st=1705137111~exp=1705140711~hmac=26efa01dfe2c164667a083865da8f69e2f43c3f53ab97525a708d31e45b2bc2a&w=996"
   alt="" />
</div>

<div className='border rounded-lg mt-16 bg-gray-50'>
<form className=" ">
           <div className="flex items-center justify-center p-5">
             <h1 className='font-bold text-3xl'>It's not just Food, It's an <span className='text-[#ffc000]'>Experiance</span> </h1>
<div className="rounded-lg bg-transparent p-5">
 <div className="flex ml-72">
   <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
     <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
       <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
     </svg>
   </div>
   <input type="text" className=" w-80  bg-white pl-2  text-base border-none  outline-0" placeholder="Restaurant name" id=""/>
   <input type="button" value="Search" className="bg-[#ffc000] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-yellow-600 transition-colors"/>
 </div>
</div>
</div>
           </form>
</div>

<div className='mt-16 m-2 flex items-center justify-around'>
   <div className='border p-3 relative'>
   <FaIceCream className='absolute -top-6 z-0 left-64 h-8 w-8 bg-[#ffc000] text-white p-1 rounded-3xl' />
   <GiCoffeeCup className='absolute -top-6 z-40 left-56 h-10 w-10 bg-[#ffc000] text-white p-1 rounded-3xl' />
   <TbToolsKitchen2 className='absolute -top-6 z-0 left-48 h-8 w-9 bg-[#ffc000] text-white p-1 rounded-3xl' />
   <h1 className='font-bold text-[#ffc000] text-3xl p-5'>Find the best places to eat</h1>
   <p className='pl-5 pr-5 text-lg'>20,000 restaurants - everything from street food to dining</p>
   </div>

   <div className='border p-3 relative'>
   <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='absolute -top-6 z-0 left-64 h-10 w-10   p-1 rounded-3xl' />
   <img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='absolute -top-6 z-40 left-56 h-12 w-12   p-1 rounded-3xl' />
   <img src='https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='absolute -top-6 z-0 left-48 h-10 w-10   p-1 rounded-3xl' />
   <h1 className='font-bold text-[#ffc000] text-3xl p-5'>See the latest reviews</h1>
   <p className='pl-5 pr-5 text-lg'>Cafe reviews and photos from our community</p>
   </div>
   
 </div>

 <div className="mt-16 m-5">
    <h1 className="flex justify-between font-semibold text-3xl">Coffee Shops in Mexico <span className="font-semibold text-xl underline cursor-pointer">see all</span></h1>
   <div className="flex">
   <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-96 h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/hot-chocolate-served-with-cookies_140725-1153.jpg?w=740&t=st=1705137933~exp=1705138533~hmac=5803dcb38c71224dd3f19817e3e87712cb41b7c6fa2411d7585ad6dec1a24acd" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">Smiley<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near Y</h1>
           </div>
    </div>
    </div>

    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-96 h-72 hover:opacity-80" src="https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">Coffee <span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near X</h1>
           </div>
    </div>
    </div>
    <Link to="/kaldis">
    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-96 h-72 hover:opacity-80" src="https://img.freepik.com/free-vector/top-view-cup-coffee-with-roasted-beans_52683-32340.jpg?w=996&t=st=1705138251~exp=1705138851~hmac=280140bcb7f98262e6eb1c7d645feb4cb85a50b1cfd5daf6b4849edcfdfc5122" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">Kaldi's coffee<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near Z</h1>
           </div>
    </div>
    </div>
    </Link>

   

   </div>
 </div>

 <div className="mt-16 m-5">
    <h1 className="flex justify-between font-semibold text-3xl">Cafe in Mexico <span className="font-semibold text-xl underline cursor-pointer">see all</span></h1>
   <div className="flex">
   <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-96 h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/hot-chocolate-served-with-cookies_140725-1153.jpg?w=740&t=st=1705137933~exp=1705138533~hmac=5803dcb38c71224dd3f19817e3e87712cb41b7c6fa2411d7585ad6dec1a24acd" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">Smiley<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near Y</h1>
           </div>
    </div>
    </div>

    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-96 h-72 hover:opacity-80" src="https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">Coffee <span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near X</h1>
           </div>
    </div>
    </div>
    <Link to="/kaldis">
    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-96 h-72 hover:opacity-80" src="https://img.freepik.com/free-vector/top-view-cup-coffee-with-roasted-beans_52683-32340.jpg?w=996&t=st=1705138251~exp=1705138851~hmac=280140bcb7f98262e6eb1c7d645feb4cb85a50b1cfd5daf6b4849edcfdfc5122" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">Kaldi's coffee<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near Z</h1>
           </div>
    </div>
    </div>
    </Link>

   

   </div>
 </div>

 <div className="mt-8 bg-gray-50">
            <Slider {...settings}>

            <div className="">
            <div className="m-4 shadow-sm p-1">
           <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18751.jpg?w=996&t=st=1704384960~exp=1704385560~hmac=4f5a2c552e4b16d69ab5874c714add44994feee464fa19af23b7609cae244f5d" alt=""/>
           
           <Link to="/AA"> <h1 className="font-bold text-2xl p-2 flex items-center justify-between"> Hotel </h1> </Link>

           <div className="flex justify-between items-center pb-6">

           </div>
          </div>
          </div>

          <div className="">
            <div className="m-4 shadow-sm p-1">
           <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18751.jpg?w=996&t=st=1704384960~exp=1704385560~hmac=4f5a2c552e4b16d69ab5874c714add44994feee464fa19af23b7609cae244f5d" alt=""/>
          <Link to="/AA"> <h1 className="font-bold text-lg p-2 flex items-center justify-between">Restaurant </h1> </Link>
           <div className="flex justify-between items-center pb-6">

           </div>
          </div>
          </div>

          <div className="">
            <div className="m-4 shadow-sm p-1">
           <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18751.jpg?w=996&t=st=1704384960~exp=1704385560~hmac=4f5a2c552e4b16d69ab5874c714add44994feee464fa19af23b7609cae244f5d" alt=""/>
          <Link to="/travel"> <h1 className="font-bold text-lg p-2 flex items-center justify-between">Top Destinations</h1> </Link>

           <div className="flex justify-between items-center pb-6">

           </div>
          </div>
          </div>


              </Slider>


            </div>
        </div>
     );
}
 
export default Mexico;
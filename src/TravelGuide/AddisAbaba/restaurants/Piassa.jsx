import { motion } from "framer-motion";
import { TbToolsKitchen2 } from "react-icons/tb";
import { GiCoffeeCup } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

 
const Piassa = () => {

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

    return ( 
        <div className="bg-white">

<div className="sticky top-0 z-50 bg-white border-b flex justify-between items-center p-5">
                {/* left */}
              <div>
             <h1 className="font-semibold text-2xl m-3 flex items-center justify-between ">
             <Link to="/AA">  <FaArrowLeft className="h-5 w-5 text-blue-400 flex mr-8" /> </Link> Piassa, Addis Ababa</h1>
              </div>

                {/* right */}
                <div>
              <Link to="/">  <MdOutlineClose className="h-7 w-7 hover:text-red-600" /></Link>
                </div>

            </div>

        <div class="grid gap-4">
<div>
 <img class="h-80 w-full max-w-full rounded-lg object-cover object-center md:h-[380px]"
   src="https://img.freepik.com/free-photo/food-mix-salad-noodles-grillea-chicken-garlic-greena-top-view_141793-15488.jpg?w=996&t=st=1705130149~exp=1705130749~hmac=995cf6f3dddf2f5d00e4a290de36edba1e91e94212589bd65e50d109e9b1d27e"
   alt="" />
</div>


<div class="grid grid-cols-6 gap-2 ">
 <motion.div whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.8 }}
            >
   <img
     src="https://images.unsplash.com/photo-1484325881845-65073528922e?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     class="hover:hover:scale-125 transition-all duration-500 object-cover object-center h-20 w-64 rounded-lg cursor-pointer" alt="gallery-image" />
 </motion.div>

 

 <motion.div whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
   <img
     src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     class="object-cover object-center h-20 w-64 rounded-lg cursor-pointer" alt="gallery-image" />
 </motion.div>
 <motion.div whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
   <img
     src="https://images.unsplash.com/photo-1564683214965-3619addd900d?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     class="object-cover object-center h-20 w-64 rounded-lg cursor-pointer" alt="gallery-image" />
 </motion.div>
 <div>
   <img
     src="https://images.unsplash.com/photo-1565895405140-6b9830a88c19?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     class="object-cover object-center h-20 w-64 rounded-lg cursor-pointer" alt="gallery-image" />
 </div>
 <div>
   <img
     src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     class="object-cover object-center h-20 w-64 rounded-lg cursor-pointer" alt="gallery-image" />
 </div>
 <div>
   <img
     src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     class="object-cover object-center h-20 w-64 rounded-lg cursor-pointer" alt="gallery-image" />
 </div>
</div>
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
   <p className='pl-5 pr-5 text-lg'>Restaurant reviews and photos from our community</p>
   </div>
   
 </div>

 <div className="mt-16 m-5">
    <h1 className="flex justify-between font-semibold text-3xl">New and trending restaurants in Piassa <span className="font-semibold text-xl underline cursor-pointer">see all</span></h1>
   <div className="flex">
   <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">2000 Habesha<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near minilik square</h1>
           </div>
    </div>
    </div>

    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">Habesha restaurant<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near minilik square</h1>
           </div>
    </div>
    </div>
    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">123 restaurant<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near minilik square</h1>
           </div>
    </div>
    </div>

   

   </div>
 </div>

 <div className="mt-16 m-5">
    <h1 className="font-semibold text-3xl flex justify-between items-center">Dinner in Piassa <Link to="/see"> <span className="text-xl font-semibold underline cursor-pointer">see all</span></Link></h1>
    <div className="flex ">
    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">Ethiopian restaurant<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near minilik square</h1>
           </div>
    </div>
    </div>

    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/high-angle-shot-delicious-traditional-ethiopian-food-with-vegetables-wooden-surface_181624-35933.jpg?w=996&t=st=1705130696~exp=1705131296~hmac=e46dff1660ba6e110ce447141ec5db336a126a4508b91614a6f8b4132bd4d100" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
          <Link to="/habesha"> <h1 className="font-bold text-lg p-2 flex items-center justify-between cursor-pointer ">Yod Abyssinia<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1></Link>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near minilik square</h1>
           </div>
    </div>
    </div>

    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">2000 Habesha<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near minilik square</h1>
           </div>
    </div>
    </div>
    </div>

 </div>


 <div className="mt-16 m-5">
    <h1 className="font-semibold text-3xl flex justify-between items-center">Lunch in Piassa <span className="text-xl font-semibold underline cursor-pointer">see all</span></h1>
    <div className="flex ">
    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">2000 Habesha<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near minilik square</h1>
           </div>
    </div>
    </div>

    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">2000 Habesha<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near minilik square</h1>
           </div>
    </div>
    </div>

    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">2000 Habesha<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near minilik square</h1>
           </div>
    </div>
    </div>
    </div>

 </div>

 <div className="mt-16 m-5">
    <h1 className="font-semibold text-3xl flex justify-between items-center">Breakfast in Piassa <span className="text-xl font-semibold underline cursor-pointer">see all</span></h1>
    <div className="flex ">
    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">2000 Habesha<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near minilik square</h1>
           </div>
    </div>
    </div>

    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">2000 Habesha<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near minilik square</h1>
           </div>
    </div>
    </div>

    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">2000 Habesha<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01</h1>
           <div className=" pb-2 pt-2">
          <h1 className="text-md pl-5 cursor-pointer">Near minilik square</h1>
           </div>
    </div>
    </div>
    </div>

 </div>

        </div>
     );
}
 
export default Piassa;
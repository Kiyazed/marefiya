import React from 'react';
import { Image } from 'antd';
import { motion } from "framer-motion";
import { TbToolsKitchen2 } from "react-icons/tb";
import { GiCoffeeCup } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";



const Restaurants = () => {


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
           <div class="grid gap-4">
  <div>
    <img class="h-80 w-full max-w-full rounded-lg object-cover object-center md:h-[380px]"
      src="https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="" />
  </div>


  <div class="grid grid-cols-6 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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

   <div className='border rounded-lg mt-16 bg-gray-50 w-full md:shrink'>
   <form className="md:shrink-1 ">
              <div className="flex items-center justify-center p-5">
                <h1 className='font-bold text-3xl sm:text-balance'>It's not just Food, It's an <span className='text-[#ffc000]'>Experiance</span> </h1>
  <div className="rounded-lg bg-transparent p-5">
    <div className="flex ml-72">
      <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
        <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
      <input type="text" className=" w-80 md:w-72 sm:w-32 bg-white pl-2  text-base border-none  outline-0" placeholder="Restaurant name" id=""/>
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

    <h1 className='font-semibold text-3xl m-5 mt-10 flex justify-between items-center'>Restaurants in Addis Ababa <span className='text-xl underline hover:text-yellow-400 cursor-pointer'>see all</span></h1>

    <div className='flex bg-white'>
    <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">Habesha restaurant<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Kirkos,Addis Ababa</h1>
           <div className="flex justify-between items-center pb-6">
           <p className="flex items-center pt-1 "><FaWalking className="mr-2 text-gray-900 h-4 w-4"/> 3hr from A/A center </p>
           <p className="flex items-center pt-1 "><FaCarSide className="mr-2 text-gray-900 h-4 w-4 " /> 1hr from A/A center</p>
           </div>
    </div>
    </div>
  
    <div className=" ">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between "> Totot restaurant<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Kirkos,Addis Ababa</h1>
           <div className="flex justify-between items-center pb-6">
           <p className="flex items-center pt-1 "><FaWalking className="mr-2 text-gray-900 h-4 w-4"/> 3hr from A/A center </p>
           <p className="flex items-center pt-1 "><FaCarSide className="mr-2 text-gray-900 h-4 w-4 " /> 1hr from A/A center</p>
           </div>
    </div>
    </div>

    <div className=" ">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">Addis restaurant<span className=""> 
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
          </span>
           </h1>

           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Kirkos,Addis Ababa</h1>
           <div className="flex justify-between items-center pb-6">
           <p className="flex items-center pt-1 "><FaWalking className="mr-2 text-gray-900 h-4 w-4"/> 3hr from A/A center </p>
           <p className="flex items-center pt-1 "><FaCarSide className="mr-2 text-gray-900 h-4 w-4 " /> 1hr from A/A center</p>
           </div>
    </div>
    </div>

    </div>

    <div className='mt-10'>
      <h1 className='font-semibold text-3xl m-5 flex justify-between items-center'>Restaurants in Top Destinations <span className='text-xl underline hover:text-yellow-400 cursor-pointer'>see all</span></h1>
      <div className='flex justify-between '>
       <Link to="/piassa"> <div className='relative'>
        <img className="rounded-lg hover:opacity-95 h-64 w-72" src='https://images.unsplash.com/photo-1626598442658-ea6a1a5943df?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        <h1 className='text-[#ffc000]  top-52 p-3 absolute font-semibold text-2xl hover:underline cursor-pointer hover:text-yellow-300 '>Piassa</h1>
        </div></Link>
        
        <div className='relative'>
        <img className="rounded-lg hover:opacity-95 h-64 w-72" src='https://images.unsplash.com/photo-1624314138470-5a2f24623f10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        <h1 className='text-[#ffc000]  top-52 p-3 absolute font-semibold text-2xl hover:underline cursor-pointer hover:text-yellow-300 '>Mexico</h1>
        </div>
        
        <div className='relative'>
        <img className="rounded-lg hover:opacity-95 h-64 w-72" src='https://images.unsplash.com/photo-1588264111780-aff0aee30e55?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        <h1 className='text-[#ffc000]  top-52 p-3 absolute font-semibold text-2xl hover:underline cursor-pointer hover:text-yellow-300 pl-10  '>6 killo</h1>
        </div>
        
        <div className='relative'>
        <h1 className=' text-[#ffc000] top-52 p-3 absolute font-semibold text-2xl hover:underline cursor-pointer hover:text-yellow-300 pl-10 '>AU</h1> 
        <img className="rounded-lg hover:opacity-85 h-64 w-72" src='https://images.unsplash.com/photo-1594663582551-5f3c037cd587?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>

        </div>
       
        
      </div>
    </div>

  
    <div className="bg-gray-100 mt-5 pt-5 pb-2 pl-3 ">
                            <ul className="flex space-x-5 cursor-pointer">
                                <li className="hover:underline hover:text-yellow-500"> . privacy</li>
                               <Link to='/contact'> <li className="hover:underline hover:text-yellow-500">. contact us</li> </Link>
                            <Link to='/help'> <li className="hover:underline hover:text-yellow-500">.help</li></Link>   
                            <Link to='/about'>   <li className="hover:underline hover:text-yellow-500">. about</li></Link>
                            </ul>

                        </div>
                       

        </div>
     );
}
 
export default Restaurants;
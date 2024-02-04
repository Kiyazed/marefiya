import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { BiFoodMenu } from "react-icons/bi";
import { IoTime } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GiKnifeFork } from "react-icons/gi";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdCleanHands } from "react-icons/md";
import AccordionIcon from "../../../AccordionComponent/Accordion";

const Habesha = () => {

   

    const data = [
        {
          imageLink:
            "https://plus.unsplash.com/premium_photo-1670445287762-372300cdcb77?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1587734361993-0033759da68b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1548848221-0c2e497ed557?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1559622214-f8a9850965bb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1610562275255-03b7fa0d4655?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];

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
             <Link to="/piassa">  <FaArrowLeft className="h-5 w-5 text-blue-400 flex mr-8" /> </Link> Piassa, Addis Ababa</h1>
              </div>

                {/* right */}
                <div>
              <Link to="/">  <MdOutlineClose className="h-7 w-7 hover:text-red-600" /></Link>
                </div>

            </div>
            <div className="m-5">
            <h1 className="font-semibold text-3xl">Yod Abysinnia</h1> 
            <h1 className="mt-5">
             {items.map((items)=>(
                <h1 className="flex">{items.icon} {items.icon} {items.icon} {items.icon} {items.icon} <span className="pl-5 text-md font-semibold">250 reviews</span></h1>
             ))}
             </h1>
             
             <div className="flex items-center pt-2 gap-10">
             <h1 className="font-mono  text-base   flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01, Near x , behind y building</h1>
             <h1 className="flex gap-1 items-center font-mono text-base"><IoIosCall /> +251 999 000 1111</h1>
            <Link to="/menu"><h1 className="flex gap-1 items-center font-mono text-base"><BiFoodMenu /> Menu</h1>  </Link> 
             </div>

             <h1 className="flex items-center gap-1 font-mono text-base"><IoTime /> <span className="font-semibold text-lg">Open:</span> 09:00 AM - 12:00 AM</h1>
            </div>

            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
      {data.map(({ imageLink }, index) => (
         <div key={index}>
          <img
            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>

    <div className="flex mt-16 m-5 justify-between ">
        <div className="border shadow-sm p-4 w-96 h-96 ">
            <h1 className="font-semibold text-xl">Ratings and Reviews</h1>
            <h1 className="flex gap-2 font-medium items-center mt-5 border-b">5.0 {items.map((items)=>(
                <h2 className="flex items-center">{items.icon} {items.icon} {items.icon} {items.icon} {items.icon} <span className="font-semibold text-lg ml-2 ">200 reviews</span></h2>
            ))}
            </h1>
            <div className="mt-5">
                <h1 className="font-semibold text-xl mb-5">Ratings</h1>
               <p className="flex justify-between items-center"><span className="flex items-center gap-2"> <GiKnifeFork /> Food</span>  {items.map((item)=>(
                    <span className="flex items-center">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon}</span>

                ))} </p>
                <p className="flex justify-between items-center"><span className="flex items-center gap-2"><BiSolidFoodMenu /> Service</span> {items.map((item)=>(
                    <span className="flex items-center">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon}</span>

                ))} </p>
                <p className="flex justify-between items-center"><span className="flex items-center gap-2"> <MdCleanHands /> Cleanliness</span>  <div className='flex '>
           <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-yellow-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-yellow-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
           </div> </p>
            </div>

        </div>

        <div className="border shadow-sm w-96 h-96 p-5">
            <h1 className="font-semibold text-xl">Details</h1>
            <p className=" text-xl mt-3"> <span className="font-semibold">Special dishs</span>
                <ul className="font-mono text-base ml-2 mt-2">
                    <li>Doro wet</li>
                    <li>Salad</li>
                    <li>Tibs</li>
                </ul>
            </p>
            <p className=" mt-5"><span className="font-semibold text-xl">Meals</span>
             <ul className="flex">
                <li className="text-base font-mono mt-2 ">tibs firfr, doro wet, agelgil, special kitfo</li>
                </ul></p>

               <h1 className="font-semibold text-base underline mr-0 mt-16 cursor-pointer">view all</h1> 
        </div>

        <div className="border shadow-sm w-96 h-96 p-5">
            <h1 className="font-semibold text-xl">Location and Contacts</h1>
           <img className="mt-5" src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/> 
           <h1 className="font-mono  text-base   flex items-center mt-2"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Werede 01, Near x , behind y building</h1>
          <h1 className="flex items-center gap-2 mb-2"><HiOutlineBuildingOffice2 /> Y building, near to X </h1> 
            <h1 className="flex gap-1 items-center font-mono text-base"><IoIosCall /> +251 999 000 1111</h1>
        </div>

    </div>

    <div className="mt-16 m-5">
        <h1 className="font-semibold text-3xl">Review</h1>

        

<div class="flex items-center mb-5">
    <p class="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">8.7</p>
    <p class="ms-2 font-medium text-gray-900 dark:text-white">Excellent</p>
    <span class="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">376 reviews</p>
    <a href="#" class="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read all reviews</a>
</div>
<div class="gap-8 sm:grid sm:grid-cols-2">
    <div>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Staff</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width:88}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Comfort</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width:89}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Free WiFi</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: 88}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Food</dt>
            <dd class="flex items-center">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: 54}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">5.4</span>
            </dd>
        </dl>
    </div>
    <div>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Service</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: 89}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Cleanliness</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: 70}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">7.0</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Location</dt>
            <dd class="flex items-center">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width: 89}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
            </dd>
        </dl>
    </div>
</div>


  <div className="mt-10">
    

<article className="border-b pb-3 p-4" >
    <div class="flex items-center mb-4">
        <img class="w-10 h-10 me-4 rounded-full" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=""/>
        <div class="font-medium dark:text-white">
            <p>John Doe <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
        </div>
    </div>
    <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 class="ms-2 text-xl font-semibold text-gray-900 dark:text-white">The Best Breakfast!!</h3>
    </div>
    <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos distinctio aut deserunt fuga atque, architecto in vero et fugiat tenetur ipsam id modi velit dicta minima laudantium, accusantium sunt at?</p>
    <p class="mb-3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et hic cupiditate distinctio molestiae, eum cum quibusdam, consequatur debitis, eveniet iste corrupti eos illo voluptatibus! Nemo sit itaque error at quam.</p>
    <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
    <aside>
        <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
        <div class="flex items-center mt-3">
            <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>

        </div>
    </aside>
</article>

<article className="border-b pb-3 p-4">
    <div class="flex items-center mb-4">
        <img class="w-10 h-10 me-4 rounded-full" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=""/>
        <div class="font-medium dark:text-white">
            <p>John Doe <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
        </div>
    </div>
    <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 class="ms-2 text-xl font-semibold text-gray-900 dark:text-white">The Best Breakfast!!</h3>
    </div>
    <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos distinctio aut deserunt fuga atque, architecto in vero et fugiat tenetur ipsam id modi velit dicta minima laudantium, accusantium sunt at?</p>
    <p class="mb-3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et hic cupiditate distinctio molestiae, eum cum quibusdam, consequatur debitis, eveniet iste corrupti eos illo voluptatibus! Nemo sit itaque error at quam.</p>
    <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
    <aside>
        <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
        <div class="flex items-center mt-3">
            <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
            
        </div>
    </aside>
</article>

<article className="border-b pb-3 p-4">
    <div class="flex items-center mb-4">
        <img class="w-10 h-10 me-4 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
        <div class="font-medium dark:text-white">
            <p>John Doe <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
        </div>
    </div>
    <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h1 class="ms-2 text-xl  font-semibold text-gray-900 dark:text-white">The Best Breakfast!!</h1>
    </div>
    <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos distinctio aut deserunt fuga atque, architecto in vero et fugiat tenetur ipsam id modi velit dicta minima laudantium, accusantium sunt at?</p>
    <p class="mb-3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et hic cupiditate distinctio molestiae, eum cum quibusdam, consequatur debitis, eveniet iste corrupti eos illo voluptatibus! Nemo sit itaque error at quam.</p>
    <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
    <aside>
        <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
        <div class="flex items-center mt-3">
            <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>

        </div>
    </aside>
</article>

<article className="border-b pb-3 p-4">
    <div class="flex items-center mb-4">
        <img class="w-10 h-10 me-4 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
        <div class="font-medium dark:text-white">
            <p>John Doe <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
        </div>
    </div>
    <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 class="ms-2 text-xl font-semibold text-gray-900 dark:text-white">The Best Breakfast!!</h3>
    </div>
    <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos distinctio aut deserunt fuga atque, architecto in vero et fugiat tenetur ipsam id modi velit dicta minima laudantium, accusantium sunt at?</p>
    <p class="mb-3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et hic cupiditate distinctio molestiae, eum cum quibusdam, consequatur debitis, eveniet iste corrupti eos illo voluptatibus! Nemo sit itaque error at quam.</p>
    <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
    <aside>
        <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
        <div class="flex items-center mt-3">
            <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>

        </div>
    </aside>
</article>

<article className="border-b pb-3 p-4">
    <div class="flex items-center mb-4">
        <img class="w-10 h-10 me-4 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
        <div class="font-medium dark:text-white">
            <p>John Doe <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
        </div>
    </div>
    <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 class="ms-2 text-xl font-semibold text-gray-900 dark:text-white">The Best Breakfast!!</h3>
    </div>
    <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos distinctio aut deserunt fuga atque, architecto in vero et fugiat tenetur ipsam id modi velit dicta minima laudantium, accusantium sunt at?</p>
    <p class="mb-3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et hic cupiditate distinctio molestiae, eum cum quibusdam, consequatur debitis, eveniet iste corrupti eos illo voluptatibus! Nemo sit itaque error at quam.</p>
    <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
    <aside>
        <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
        <div class="flex items-center mt-3">
            <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
           
        </div>
    </aside>
</article>

<article className="border-b pb-3 p-4">
    <div class="flex items-center mb-4">
        <img class="w-10 h-10 me-4 rounded-full" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'alt=""/>
        <div class="font-medium dark:text-white">
            <p>John Doe <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
        </div>
    </div>
    <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 class="ms-2 text-sm font-semibold text-gray-900 dark:text-white">The Best Breakfast!!</h3>
    </div>
    <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos distinctio aut deserunt fuga atque, architecto in vero et fugiat tenetur ipsam id modi velit dicta minima laudantium, accusantium sunt at?</p>
    <p class="mb-3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et hic cupiditate distinctio molestiae, eum cum quibusdam, consequatur debitis, eveniet iste corrupti eos illo voluptatibus! Nemo sit itaque error at quam.</p>
    <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
    <aside>
        <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
        <div class="flex items-center mt-3">
            <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>

        </div>
    </aside>
</article>


  </div>
    </div>

    <div>
        <div>
            <h1 className="font-semibold p-5 border-b text-4xl">Best Nearby</h1>
            <img className="h-72 w-10/12 ml-10 mt-5 m-3" src="https://th.bing.com/th/id/R.caf6ae72543eaee2599552d00704983c?rik=GatD%2bl%2fAmV0dzA&pid=ImgRaw&r=0" alt="map"/>
            </div>

         <h1 className="font-semibold text-3xl mt-10 m-5">Best nearby hotels</h1>
         <div className="grid grid-cols-3 gap-1 border-b">
        <div className="flex m-5  sh">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/beautiful-girl-sitting-rock-james-bond-island-phang-nga-thailand_335224-1224.jpg?w=996&t=st=1705057362~exp=1705057962~hmac=a59a0c7fdb694abdd488f8531d3d89a9f3c9d1da31c22dd02e6e472dec935c91" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">John Hotel</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">80 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.9 miles away</p>
            </div>
        </div>

        <div className="flex m-5  sh">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/beautiful-girl-sitting-rock-james-bond-island-phang-nga-thailand_335224-1224.jpg?w=996&t=st=1705057362~exp=1705057962~hmac=a59a0c7fdb694abdd488f8531d3d89a9f3c9d1da31c22dd02e6e472dec935c91" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">John Hotel</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">80 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.9 miles away</p>
            </div>
        </div>

        <div className="flex m-5  sh">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/beautiful-girl-sitting-rock-james-bond-island-phang-nga-thailand_335224-1224.jpg?w=996&t=st=1705057362~exp=1705057962~hmac=a59a0c7fdb694abdd488f8531d3d89a9f3c9d1da31c22dd02e6e472dec935c91" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">John Hotel</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">80 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.9 miles away</p>
            </div>
        </div>

        <div className="flex m-5  sh">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/beautiful-girl-sitting-rock-james-bond-island-phang-nga-thailand_335224-1224.jpg?w=996&t=st=1705057362~exp=1705057962~hmac=a59a0c7fdb694abdd488f8531d3d89a9f3c9d1da31c22dd02e6e472dec935c91" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">John Hotel</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">80 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.9 miles away</p>
            </div>
        </div>

        <div className="flex m-5  sh">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/beautiful-girl-sitting-rock-james-bond-island-phang-nga-thailand_335224-1224.jpg?w=996&t=st=1705057362~exp=1705057962~hmac=a59a0c7fdb694abdd488f8531d3d89a9f3c9d1da31c22dd02e6e472dec935c91" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">John Hotel</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">80 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.9 miles away</p>
            </div>
        </div>

        <div className="flex m-5  sh">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/beautiful-girl-sitting-rock-james-bond-island-phang-nga-thailand_335224-1224.jpg?w=996&t=st=1705057362~exp=1705057962~hmac=a59a0c7fdb694abdd488f8531d3d89a9f3c9d1da31c22dd02e6e472dec935c91" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">John Hotel</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">400 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.6 miles away</p>
            </div>
        </div>

        </div>
     
     <h1 className="font-semibold text-3xl mt-10 m-5">Best nearby Restaurant</h1>
        <div className="grid grid-cols-3 gap-1 border-b">
        <div className="flex m-5  sh">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce_90220-1266.jpg?t=st=1705059494~exp=1705060094~hmac=56abd08af53e2fe29df85fd449d22fdaf9e924dad7cdaaecebd1d3d9ff10aade" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">Friends restaurant</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">80 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.9 miles away</p>
            </div>
        </div>

        <div className="flex m-5  ">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce_90220-1266.jpg?t=st=1705059494~exp=1705060094~hmac=56abd08af53e2fe29df85fd449d22fdaf9e924dad7cdaaecebd1d3d9ff10aade" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">Sisters restaurant</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">50 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.9 miles away</p>
            </div>
        </div>

        <div className="flex m-5 ">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce_90220-1266.jpg?t=st=1705059494~exp=1705060094~hmac=56abd08af53e2fe29df85fd449d22fdaf9e924dad7cdaaecebd1d3d9ff10aade" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">Friends restaurant</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">100 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.8 miles away</p>
            </div>
        </div>

       
        </div>

        <h1 className="font-semibold text-3xl mt-10 m-5 mb-0"> Nearby Shop</h1>
        <div className="grid grid-cols-3 gap-1 border-b">
        <div className="flex m-5 ">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/lanes-shelves-with-goods-products-inside-supermarket-variety-preserves-pasta-shelves-full-tidy_123827-27553.jpg?w=996&t=st=1705059454~exp=1705060054~hmac=5732cef2e9f942522f1b6e2ada89e10184dfd21aeee065105740d95a8725c6f7" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">AbC Shopping center</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">70 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.3 miles away</p>
            </div>
        </div>

        <div className="flex m-5  ">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/lanes-shelves-with-goods-products-inside-supermarket-variety-preserves-pasta-shelves-full-tidy_123827-27553.jpg?w=996&t=st=1705059454~exp=1705060054~hmac=5732cef2e9f942522f1b6e2ada89e10184dfd21aeee065105740d95a8725c6f7" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">AbC Shopping center</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">100 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.7 miles away</p>
            </div>
        </div>

        <div className="flex m-5 ">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/lanes-shelves-with-goods-products-inside-supermarket-variety-preserves-pasta-shelves-full-tidy_123827-27553.jpg?w=996&t=st=1705059454~exp=1705060054~hmac=5732cef2e9f942522f1b6e2ada89e10184dfd21aeee065105740d95a8725c6f7" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">AbC Shopping center</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">80 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.9 miles away</p>
            </div>
        </div>

       
        </div>

        <h1 className="font-semibold text-3xl mt-10 m-5 mb-0">Best nearby Attractions</h1>
        <div className="grid grid-cols-3 gap-1 border-b">
        <div className="flex m-5 ">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/tender-african-woman-smiling-enjoying-massage-with-closed-eyes-spa-resort_176420-13956.jpg?w=996&t=st=1705060401~exp=1705061001~hmac=441f26efff7ca0866c33274185ece6e7bb0caf811b32e679701a2b858c2191df" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">Spa at hk</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">70 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.3 miles away</p>
            </div>
        </div>

        <div className="flex m-5  ">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/interior-shot-museums-vatican-city_181624-12883.jpg?w=996&t=st=1705060349~exp=1705060949~hmac=8837330873711f2a3c680f8f292628c9a9aeea7ced4ec80b4d3395436024a314" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">Museum</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">100 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.7 miles away</p>
            </div>
        </div>

        <div className="flex m-5 ">  
            <img className="h-24 w-24" src="https://img.freepik.com/free-photo/footpath-beautiful-arch-flowers-plants_181624-16890.jpg?t=st=1705060196~exp=1705060796~hmac=9af5b56da53df9f84566a0135c0d91873db531cd25029c50ee36b9c615c29614" alt=""/>
            <div className="ml-3">
                <h1 className="font-semibold text-xl">Central Park</h1>
                {items.map((item)=>(
                    <h1 className="flex font-mono text-gray-700">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon} <span className="pl-3">80 reviews </span> </h1>
                ))}
                <p className="font-mono mt-3">.2 miles away</p>
            </div>
        </div>

       
        </div>


    </div>

    <AccordionIcon/>

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
 
export default Habesha;
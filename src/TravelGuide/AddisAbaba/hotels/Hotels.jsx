import { FaSearch } from "react-icons/fa";
import React, { Component } from "react";
import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import {   Link} from "react-router-dom";


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

const Hotels = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 568,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      
      };

    

    return ( 
        <div className="bg-white">
            <div className="relative">
                <img className="h-96 w-full blure" src="https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497283.jpg?t=st=1704365665~exp=1704369265~hmac=0c4f4acb96b0e93f29e010a96aab8e8fe8de7fa678b87b5775fe72d82f660c18&w=826" alt=""/>
                
               <h1 className="font-bold text-5xl absolute  text-[#ffc000] pl-10 top-20 left-5">Enjoy your Dream <span className="block">Vacation</span></h1>
              <form className="top-40 left-5 absolute mt-16">
              <div className="flex items-center justify-center p-5">
  <div className="rounded-lg bg-transparent p-5">
    <div className="flex">
      <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
        <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
      <input type="text" className=" w-80  bg-white pl-2  text-base border-none  outline-0" placeholder="Hotel name" id=""/>
      <input type="button" value="Search" className="bg-[#ffc000] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-yellow-600 transition-colors"/>
    </div>
  </div>
</div>
              </form>
                 
              <div className="mt-16">
                <h1 className="font-semibold text-3xl ml-10">You might like these</h1>
                <h2 className="text-xl font-mono mt-2 ml-10"> Hotels in Addis Ababa</h2>

                <div className="m-8 bg-white">
       
        <Slider {...settings}>
          <div className="">
            <div className=" m-4 shadow-sm p-1">
            <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/glass-red-wine-bottle-bar-counter_107420-65845.jpg?w=826&t=st=1704379483~exp=1704380083~hmac=9970bbe36dd7cb93657d4b930029adf71dcdb913431058319ba634458678c793" alt=""/>
           <button className="-top-72 translate-x-72  relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between ">Sheraton Addis Hotel<span className=""> 
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
          <div className="">
            <div className="m-4 shadow-sm p-1">
           <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?w=826&t=st=1704379545~exp=1704380145~hmac=74b1da116d6b9ce9cd57b70a420ec9f392094d8d5e0484bb4188afe733f27b3a" alt=""/>
           <button className="-top-72 translate-x-72 relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between">Ghion Hotel
            <span>
            <div className='flex '>
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
           </div>
            </span>
           </h1>
           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Stadium,Addis Ababa</h1>

           <div className="flex justify-between items-center pb-6">
           <p className="flex items-center pt-1 "><FaWalking className="mr-2 text-gray-900 h-4 w-4"/> 3hr from A/A center </p>
           <p className="flex items-center pt-1 "><FaCarSide className="mr-2 text-gray-900 h-4 w-4 " /> 1hr from A/A center</p>
           </div>
          </div>
          </div>
          <div className="">
            <div className="m-4 shadow-sm p-1">
           <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/hotel-meal-table-with-sandwich-hamburger-cocktails-others-bedroom-side-view_176474-3658.jpg?w=740&t=st=1704379589~exp=1704380189~hmac=5cb857e5bbb6e122b6bf605828189bb9d6b7929237a3f5eb7c9eeae418752503" alt=""/>
           <button className="-top-72 translate-x-72 relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between">Jupiter International Hotel
            <span>
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
            </span>
           </h1>
           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Bole,Addis Ababa</h1>

           <div className="flex justify-between items-center pb-6">
           <p className="flex items-center pt-1 "><FaWalking className="mr-2 text-gray-900 h-4 w-4"/> 3hr from A/A center </p>
           <p className="flex items-center pt-1"><FaCarSide className="mr-2 text-gray-900 h-4 w-4 " /> 1hr from A/A center</p>
           </div>
          </div>
          </div>

          
          <div className="">
            <div className="m-4 shadow-sm p-1">
           <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18751.jpg?w=996&t=st=1704384960~exp=1704385560~hmac=4f5a2c552e4b16d69ab5874c714add44994feee464fa19af23b7609cae244f5d" alt=""/>
           <button className="-top-72 translate-x-72 relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between">Ethiopian Skylight Hotel
            <span>
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
            </span>
           </h1>
           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/> Bole,Addis Ababa</h1>

           <div className="flex justify-between items-center pb-6">
           <p className="flex items-center pt-1 "><FaWalking className="mr-2 text-gray-900 h-4 w-4"/> 3hr from A/A center </p>
           <p className="flex items-center pt-1"><FaCarSide className="mr-2 text-gray-900 h-4 w-4 " /> 1hr from A/A center</p>
           </div>
          </div>
          </div>

          <div className="">
            <div className="m-4 shadow-sm p-1">
           <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/fine-cuisine-luxury-lounge-breast-duck-with-red-wine_482257-10378.jpg?w=826&t=st=1704385127~exp=1704385727~hmac=9c8b04bb3e774e802fdf1e8e1022a970099872ccb505f16cca5a71768335d1b8" alt=""/>
           <button className="-top-72 translate-x-72 relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between">Haile Grand Hotel
            <span>
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
            </span>
           </h1>
           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>yeka,Addis Ababa</h1>

           <div className="flex justify-between items-center pb-6">
           <p className="flex items-center pt-1 "><FaWalking className="mr-2 text-gray-900 h-4 w-4"/> 3hr from A/A center </p>
           <p className="flex items-center pt-1 "><FaCarSide className="mr-2 text-gray-900 h-4 w-4 " /> 1hr from A/A center</p>
           </div>
          </div>
          </div>

          <div className="">
            <div className="m-4 shadow-sm p-1">
           <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/banquet-table-with-snacks_144627-18361.jpg?w=826&t=st=1704385223~exp=1704385823~hmac=6a828d3a5e3af300f2f8b54ea6ae1fc26dd29b6bc6dd518e1ea4eff311062983" alt=""/>
           <button className="-top-72 translate-x-72 relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between">Hilton Hotel
            <span>
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
            </span>
           </h1>
           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"> <FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>kirkos,Addis Ababa</h1>

           <div className="flex justify-between items-center pb-6">
           <p className="flex items-center pt-1"><FaWalking className="mr-2 text-gray-900 h-4 w-4"/> 3hr from A/A center </p>
           <p className="flex items-center pt-1 "><FaCarSide className="mr-2 text-gray-900 h-4 w-4 " /> 1hr from A/A center</p>
           </div>
          </div>
          </div>

          <div className="">
            <div className="m-4 shadow-sm p-1">
           <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?w=826&t=st=1704385282~exp=1704385882~hmac=44a85a7a2975f237df7dce1f5e8daf29a6223d9ecea5dd02f75d79a1cadd434b" alt=""/>
           <button className="-top-72 translate-x-72 relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between">Capital Hotel and Spa
            <span>
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
            </span>
           </h1>
           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>yeka,Addis Ababa</h1>

           <div className="flex justify-between items-center pb-6">
           <p className="flex items-center pt-1 "><FaWalking className="mr-2 text-gray-900 h-4 w-4"/> 3hr from A/A center </p>
           <p className="flex items-center pt-1 "><FaCarSide className="mr-2 text-gray-900 h-4 w-4 " /> 1hr from A/A center</p>
           </div>
          </div>
          </div>

          <div className="">
            <div className="m-4 shadow-sm p-1">
           <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg?w=826&t=st=1704385338~exp=1704385938~hmac=094aa4404864593e8a92689f5703740e24ce2184066a5066d95ba4a53d28c872" alt=""/>
           <button className="-top-72 translate-x-72 relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between">Grand Eliana Hotel
            <span>
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
                </span>
           </h1>
           <h1 className="font-mono text-base  hover:underline hover:text-blue-400 flex items-center"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Arada,Addis Ababa</h1>

           <div className="flex justify-between items-center pb-6">
           <p className="flex items-center pt-1 "><FaWalking className="mr-2 text-gray-900 h-4 w-4"/> 3hr from A/A center </p>
           <p className="flex items-center pt-1 "><FaCarSide className="mr-2 text-gray-900 h-4 w-4 " /> 1hr from A/A center</p>
           </div>
          </div>
          </div>

          <div className="">
            <div className="m-4 shadow-sm p-1">
           <img className="rounded-lg w-full h-72 hover:opacity-80" src="https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2276.jpg?w=826&t=st=1704385431~exp=1704386031~hmac=757a287c81e11fc6245b861aa79e766e38c125a96f8d7e9fa5e84963bd3c7b1c" alt=""/>
           <button className="-top-72 translate-x-72 relative"><FaRegHeart className="absolute h-10 w-10 text-red-600 rounded-full bg-white  p-2" /></button> 
           <h1 className="font-bold text-lg p-2 flex items-center justify-between">Miracle Hotel
            <span>
            {items.map((item,i)=>(
                 <div className='flex '>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}

                    </div>
            ))}
            </span>
           </h1>
           <h1 className="font-mono  hover:underline hover:text-blue-400 flex items-center text-base"><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>Mexico,Addis Ababa</h1>
           <div className="flex justify-between items-center pb-6">
           <p className="flex items-center pt-1 "><FaWalking className="mr-2 text-gray-900 h-4 w-4"/> 3hr from A/A center </p>
           <p className="flex items-center pt-1"><FaCarSide className="mr-2 text-gray-900 h-4 w-4 " /> 1hr from A/A center</p>
           </div>
          </div>
          </div>

        </Slider>
      </div>
            </div>
            </div>

            <div className="pt-24  ml-10 m-5">
                <h1 className="font-semibold text-3xl flex items-center justify-between">Hotels in top destinations <span className=" text-xl underline">see all</span></h1>
                <div className="flex items-center justify-between">
                <div className="w-96 h-auto mt-10 shadow-sm ">
                    <img className="rounded-lg hover:opacity-85 w-full " src="https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-working-table_105762-2154.jpg?w=826&t=st=1704396222~exp=1704396822~hmac=fc985637b2362b5da7acf4cc63a886074c44f9923c04195c16212145958e4495" alt=""/>
                    <h1 className="pt-5 font-bold text-lg p-2">4 killo</h1>
                    <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam dignissimos quae totam aspernatur fuga est ipsa ex magni, earum placeat aliquam cum mollitia beatae non ea fugit eaque corrupti.</p>
                    <p className="p-2 text-[#ffc000] pt-6 hover:underline cursor-pointer">Read more</p>
                </div>

                <div className="w-96 h-auto mt-10 shadow-sm">
                    <img className="rounded-lg hover:opacity-85 h-64 " src="https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683403.jpg?t=st=1704397161~exp=1704400761~hmac=12e0ea9d959f7976ae60e8c3027b364cbb9135e98771bf40518c1a68fd33ec73&w=996" alt=""/>
                    <h1 className="pt-5 font-bold text-lg p-2">Mexico</h1>
                    <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam dignissimos quae totam aspernatur fuga est ipsa ex magni, earum placeat aliquam cum mollitia beatae non ea fugit eaque corrupti.</p>
                    <p className="p-2 text-[#ffc000] pt-6 hover:underline cursor-pointer">Read more</p>
                </div>

                <div className="w-96 h-auto mt-10 shadow-sm">
                    <img className="rounded-lg hover:opacity-85 h-64 w-full " src="https://images.unsplash.com/photo-1629995015838-ea0e985d8d1a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                    <h1 className="pt-5 font-bold text-lg p-2">Biherawi </h1>
                    <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam dignissimos quae totam aspernatur fuga est ipsa ex magni, earum placeat aliquam cum mollitia beatae non ea fugit eaque corrupti.</p>
                    <p className="p-2 text-[#ffc000] pt-6 hover:underline cursor-pointer">Read more</p>
                </div>
                </div>
            </div>

            <div className="bg-gray-100 mt-5 pt-5 pb-2 pl-3">
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
 
export default Hotels;
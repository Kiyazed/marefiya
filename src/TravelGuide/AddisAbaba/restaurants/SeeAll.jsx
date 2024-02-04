import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import React, { Component } from "react";
import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6"


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

const SeeAll = () => {


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

            <h1 className="font-semibold text-2xl m-5 mb-5">List of Restaurants</h1>
 
            <div className="m-2 flex gap-5 shadow-sm w-6/7 h-40 ">
                <img className="w-80 h-auto" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
              <div className="">
                <h1 className="font-semibold text-xl">1. Plan B Burger</h1>
             <h1 className="flex items-center pl-5"> <FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>   Arada,piassa</h1>
              <p className="text-balance pl-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere similique sed quaerat placeat illum asperiores deserunt provident possimus eum porro eaque, ratione pariatur harum nesciunt omnis nihil reiciendis ab voluptate?</p>
             
              </div>
            
            </div>

            <div className="m-2 flex gap-5 mt-5 shadow-sm w-6/7 h-40">
                <img className="w-80 h-auto" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
              <div>
                <h1 className="font-semibold text-xl">2. Habesha restaurant</h1>
             <h1 className="flex items-center pl-5"> <FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>   Arada,piassa</h1>
              <p className="text-balance pl-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere similique sed quaerat placeat illum asperiores deserunt provident possimus eum porro eaque, ratione pariatur harum nesciunt omnis nihil reiciendis ab voluptate?</p>
             
              </div>
            
            </div>

            <div className="m-2 flex gap-5 mt-5 shadow-sm w-6/7 h-40 ">
                <img className="w-80 h-auto" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
              <div>
                <h1 className="font-semibold text-xl">3.Plan B Burger</h1>
             <h1 className="flex items-center pl-5"> <FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>   Arada,piassa</h1>
              <p className="text-balance pl-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere similique sed quaerat placeat illum asperiores deserunt provident possimus eum porro eaque, ratione pariatur harum nesciunt omnis nihil reiciendis ab voluptate?</p>
             
              </div>
            
            </div>

            <div className="m-2 flex gap-5 mt-5 shadow-sm w-6/7 h-40 ">
                <img className="w-80 h-auto" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
              <div>
                <h1 className="font-semibold text-xl">4. Arabian restaurant</h1>
             <h1 className="flex items-center pl-5"> <FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>   Arada,piassa</h1>
              <p className="text-balance pl-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere similique sed quaerat placeat illum asperiores deserunt provident possimus eum porro eaque, ratione pariatur harum nesciunt omnis nihil reiciendis ab voluptate?</p>
             
              </div>
            
            </div>

            <div className="m-2 flex gap-5 mt-5 shadow-sm w-6/7 h-40 ">
                <img className="w-80 h-auto" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
              <div>
                <h1 className="font-semibold text-xl">5. Arabian restaurant</h1>
             <h1 className="flex items-center pl-5"> <FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>   Arada,piassa</h1>
              <p className="text-balance pl-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere similique sed quaerat placeat illum asperiores deserunt provident possimus eum porro eaque, ratione pariatur harum nesciunt omnis nihil reiciendis ab voluptate?</p>
             
              </div>
            
            </div>

            <div className="m-2 flex gap-5 mt-5 shadow-sm w-6/7 h-40 ">
                <img className="w-80 h-auto" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
              <div>
                <h1 className="font-semibold text-xl">6. Plan B Burger</h1>
             <h1 className="flex items-center pl-5"> <FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>   Arada,piassa</h1>
              <p className="text-balance pl-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere similique sed quaerat placeat illum asperiores deserunt provident possimus eum porro eaque, ratione pariatur harum nesciunt omnis nihil reiciendis ab voluptate?</p>
             
              </div>
            
            </div>

            <div className="m-2 flex gap-5 mt-5 shadow-sm w-6/7 h-40 ">
                <img className="w-80 h-auto" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
              <div>
                <h1 className="font-semibold text-xl">7. Arabian restaurant</h1>
             <h1 className="flex items-center pl-5"> <FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>   Arada,piassa</h1>
              <p className="text-balance pl-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere similique sed quaerat placeat illum asperiores deserunt provident possimus eum porro eaque, ratione pariatur harum nesciunt omnis nihil reiciendis ab voluptate?</p>
             
              </div>
            
            </div>

            <div className="m-2 flex gap-5 mt-5 shadow-sm w-6/7 h-40 ">
                <img className="w-80 h-auto" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
              <div>
                <h1 className="font-semibold text-xl">8. Homely restaurant</h1>
             <h1 className="flex items-center pl-5"> <FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>   Arada,piassa</h1>
              <p className="text-balance pl-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere similique sed quaerat placeat illum asperiores deserunt provident possimus eum porro eaque, ratione pariatur harum nesciunt omnis nihil reiciendis ab voluptate?</p>
             
              </div>
            
            </div>

            <div className="m-2 flex gap-5 mt-5 shadow-sm w-6/7 h-40 ">
                <img className="w-80 h-auto" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
              <div>
                <h1 className="font-semibold text-xl">9. Arabian restaurant</h1>
             <h1 className="flex items-center pl-5"> <FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>   Arada,piassa</h1>
              <p className="text-balance pl-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere similique sed quaerat placeat illum asperiores deserunt provident possimus eum porro eaque, ratione pariatur harum nesciunt omnis nihil reiciendis ab voluptate?</p>
             
              </div>
            
            </div>
            <div className="m-2 flex gap-5 mt-5 shadow-sm w-6/7 h-40 ">
                <img className="w-80 h-auto" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
              <div>
                <h1 className="font-semibold text-xl">10. Plan B Burger</h1>
             <h1 className="flex items-center pl-5"> <FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/>   Arada,piassa</h1>
              <p className="text-balance pl-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere similique sed quaerat placeat illum asperiores deserunt provident possimus eum porro eaque, ratione pariatur harum nesciunt omnis nihil reiciendis ab voluptate?</p>
             
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
 
export default SeeAll;
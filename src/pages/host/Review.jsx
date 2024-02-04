import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Rating } from "@material-tailwind/react";
import  Navbar  from "../../component/Nav";
import { Progress } from 'antd';
import { FaRegCopy } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";




const Review = () => {

  const [rated, setRated] = useState(4);
  const [next,setNext] = useState(4);
  const [rule,setRule] = useState(4);

  const star = [{
    icon:<svg xmlns="http://www.w3.org/2000/svg" fill=" #facc15" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2  text-yellow-500 ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg> 
 },];
    
        
    const [guestReviews, setGuestReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [selectedGuest, setSelectedGuest] = useState('');
  
    const handleGuestSelect = (guestName) => {
      setSelectedGuest(guestName);
    };
  
    const handleReviewSubmit = (e) => {
      e.preventDefault();
  
      // Create a new guest review object
      const review = {
        id: Date.now(),
        guest: selectedGuest,
        content: newReview,
        
      };
  
      // Add the new review to the guestReviews state
      setGuestReviews([...guestReviews, review]);
  
      // Clear the review input field
      setNewReview('');
      setSelectedGuest('');
    };
  
    const handleReviewChange = (e) => {
      setNewReview(e.target.value);
      setCount(e.target.value.length);
    };

    const [count,setCount] = useState(0);
    const recalculate = (e) => {
      console.log('event value:',e);
      setCount(e.target.value.length);
    }  
  
  
    return (
      <div>
       <Navbar/>


      <div className=" mx-auto p-4 sm:px-10 md:px-10  bg-white  ">
        <div className='flex bg-white sticky top-16 z-50 w-full mb-6 sm:px-6 justify-between border-b'>
          <div className='flex relative items-center'>
            <h3 className=' border rounded-full h-10 bg-yellow-50 hover:bg-[#ffc000] active:bg-[#ffc000]  font-semibold p-5 flex items-center '> All reviews  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3b82f6" className="w-6 h-6 ml-5">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
             </svg>
           </h3>
          
            <p className="font-gray-100 m-3 ">34 Total</p>

          </div>

          <div className='flex m-3 items-center '>
          <div className=' flex space-x-5'>
           <Link to="/latest"> <h3 className=' flex  items-center w-32 h-10 p-5 mr-5 bg-yellow-50 hover:bg-[#ffc000] border rounded-full shadow-sm'>Latest 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3b82f6" className="w-6 h-6 ml-8 ">
             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
           </h3>
           </Link>
           </div>
             <div className=' p-3'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2563eb" className="w-6 h-6  ">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
               </svg>
               </div>

            
          </div>


        </div>
        
        
        <div className="text-3xl flex  ml-3 font-bold m-5 place-items-center mb-10">
          <h1>Rating & Reviews</h1> 
         
        
        </div>
<div className='flex'>

  <div>
  <h1 className='font-bold text-3xl mr-8 ml-9 flex items-center'>3.4</h1>
  {star.map((item)=>(
            <h3 className='flex mr-5 text-start  '>
               {item.icon}
              {item.icon}
              {item.icon}
              {item.icon}
              {item.icon}
              
            </h3>
          ))}
  <p className='ml-9'>(24)</p>
  </div>
        <div className='text-yellow-500 mb-10 '
    style={{
      width: 600,
      
    }}
  >
    <Progress percent={30} size={[480,10]} />
    <Progress percent={50} size={[480,10]} />
    <Progress percent={70} size={[480,10]} status="active" />
    <Progress percent={100} size={[480,10]}  />
    <Progress percent={20} size={[480,10]} />
  </div>

  </div>
  
        
<h1 className='mt-10 text-3xl font-semibold ml-5 mb-5 border-t pt-5'>Guests reviews  </h1>
<article class="md:gap-8 md:grid md:grid-cols-3 mb-10 border-b  p-5">
  
    <div className=' ml-10 ' >
        <div class="flex items-center mb-6">
            <img class="w-16 h-16 rounded-full" src="https://img.freepik.com/free-photo/portrait-happy-woman_186202-621.jpg?w=360&t=st=1703520080~exp=1703520680~hmac=58262fc5a547579fa817c4738987e192e8cf3c800e7a7be2602ac45aab582733" alt=""/>
            <div class="ms-4 font-medium dark:text-white">
                <p>Angila Leos</p>
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    
                    United States
                </div>
            </div>
        </div>
        <ul class="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li class="flex items-center"><svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15V9m4 6V9m4 6V9m4 6V9M2 16h16M1 19h18M2 7v1h16V7l-8-6-8 6Z"/>
  </svg>Apartament with city view</li>
            <li class="flex items-center"><svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
  </svg>3 nights December 2021</li>
            <li class="flex items-center"><svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
    <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
    <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"/>
  </svg>Family</li>
        </ul>
    </div>

    <div class="col-span-2 mt-9  md:mt-0 ">
        <div class="flex justify-between mb-5">
            <div class="pe-4">
                <footer>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Reviewed: <time datetime="2022-01-20 19:00">January 20, 2022</time></p>
                </footer>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white">Great Experiance!</h4>
            </div>
            <div className='flex'>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-yellow-200"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        </div>
        </div>
        <p class="mb-2  ">The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting New York city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure.</p>
        <p class="mb-5  ">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
        <aside class="flex items-center mt-3">
            <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                <svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                </svg>
                Helpful
            </a>
            <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 group ms-5">
                <svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M11.955 2.117h-.114C9.732 1.535 6.941.5 4.356.5c-1.4 0-1.592.526-1.879 1.316l-2.355 7A2 2 0 0 0 2 11.5h3.956L4.4 16a1.779 1.779 0 0 0 3.332 1.061 24.8 24.8 0 0 1 4.226-5.36l-.003-9.584ZM15 11h2a1 1 0 0 0 1-1V2a2 2 0 1 0-4 0v8a1 1 0 0 0 1 1Z"/>
                </svg>
                Not helpful
            </a>
        </aside>
    </div>
    
</article>


<article class="md:gap-8  md:grid md:grid-cols-3  mb-10 border-b  p-5 ">
  
    <div className='mr-0 ml-10 ' >
        <div class="flex items-center mb-6">
            <img class="w-16 h-16 rounded-full" src="https://img.freepik.com/free-photo/handsome-young-african-american-with-khaki-tshirt_176420-32042.jpg?w=826&t=st=1703522149~exp=1703522749~hmac=d20f69e6e16708de01ddf3625cf0d896c3799e18f6dd75f3fce6c689518a50c4" alt=""/>
            <div class="ms-4 font-medium dark:text-white">
                <p>Chris Jack</p>
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    
                    Kenya
                </div>
            </div>
        </div>
        <ul class="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li class="flex items-center"><svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15V9m4 6V9m4 6V9m4 6V9M2 16h16M1 19h18M2 7v1h16V7l-8-6-8 6Z"/>
  </svg>Condominum</li>
            <li class="flex items-center"><svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
  </svg>5 nights November 2022</li>
            <li class="flex items-center"><svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
    <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
    <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"/>
  </svg>Family</li>
        </ul>
    </div>

    <div class="col-span-2 mt-9  md:mt-0 ">
        <div class="flex justify-between mb-5">
            <div class="pe-4">
                <footer>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Reviewed: <time datetime="2022-01-20 19:00">January 20, 2022</time></p>
                </footer>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white"> Heart warming hospitality</h4>
            </div>
           <div className='flex '>
           <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-yellow-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-yellow-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>
           </div>
        </div>
        <p class="mb-2 text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quisquam voluptas atque esse dolorum molestias tempore, sunt, eligendi iusto quod dicta numquam quia reprehenderit, nemo sequi illo recusandae nobis. Facere.</p>
        <p class="mb-5  text-sm">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
        <aside class="flex items-center mt-3">
            <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                <svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                </svg>
                Helpful
            </a>
            <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 group ms-5">
                <svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M11.955 2.117h-.114C9.732 1.535 6.941.5 4.356.5c-1.4 0-1.592.526-1.879 1.316l-2.355 7A2 2 0 0 0 2 11.5h3.956L4.4 16a1.779 1.779 0 0 0 3.332 1.061 24.8 24.8 0 0 1 4.226-5.36l-.003-9.584ZM15 11h2a1 1 0 0 0 1-1V2a2 2 0 1 0-4 0v8a1 1 0 0 0 1 1Z"/>
                </svg>
                Not helpful
            </a>
        </aside>
    </div>
    <a href="#" class=" mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 grid place-items-center ml-48">Show more</a>
    
</article>
     

        <div>
          <h1 className='mb-3 mt-5 text-lg font-medium'>Select your guest name</h1>
        <select
            className="bg-white w-96 border  shadow-md rounded px-3 py-2 mb-4"
            value={selectedGuest}
            onChange={(e) => handleGuestSelect(e.target.value)}
          >
            <option value="">Select a Guest</option>
            <option value="John Doe">John Doe</option>
            <option value="Will Smith">Will Smith</option>
            <option value="Jane">Jane</option>
          </select>
          <div className='mb-3 border-b'>
          <h3 className='font-semibold mb-3 mt-5 '>Communication</h3>
          <p>How clearly did guest communicate their plans,questions and concerns?</p>
          
            <div className="flex items-center gap-2 font-bold text-blue-gray-500 mt-7 mb-3">
                {rated}.7
                <Rating className='flex' value={4} onChange={(value)=>setRated(value)} unratedColor="yellow" ratedColor='blue'/>
            </div>
          
          </div>
          <div className='mb-3 border-b'>
            <h3 className='font-semibold mb-3 mt-5'>Cleanliness</h3>
            <p>Did guest leave your place clean?</p>
            <div className=" flex items-center gap-2 font-bold text-blue-gray-500 mt-7 mb-3">
                  {next}.7
                  <Rating className='flex' value={4} onChange={(value)=>setNext(value)} unratedColor="yellow" ratedColor='blue'/>
            </div>
          </div>
          <div className='mb-3 border-b'>
            <h3 className='font-semibold mb-3 mt-5 '>Observance of house rules</h3>
            <p>Did guest observe your house rules?</p>
            <div className=" flex items-center gap-2 font-bold text-blue-gray-500 mt-7 mb-3">
                  {rule}.7
                  <Rating className='flex' value={4} onChange={(value)=>setRule(value)} unratedColor="yellow" ratedColor='blue'/>
            </div>
          </div>

        </div>

        
        <div className='pt-16 mb-3'>
          <h3 className='font-bold text-2xl'>Your public review</h3>
        <ul className=" block mt-10  mb-10 p-5 w-1.5/2 ">
          
          {guestReviews.map((review) => (
            <div className='mb-3 bg-gray-50 border rounded-2xl p-5'>
            <li key={review.id} className='mb-0'>
              <div className='flex items-center justify-between'>
                <h3 className="font-semibold flex items-center"><img className='w-10 h-10 mr-3 rounded-full  ' src="https://img.freepik.com/free-photo/black-man-posing_23-2148171639.jpg?w=360&t=st=1702106413~exp=1702107013~hmac=5e282c7bbab726e006db61274f8550ab6afb39038d13135bbd3031c80a9f50e2" alt=""/>{review.guest}</h3>
              <time datetime="2022-01-20 19:00" class="ml-10 mt-0 mb-3 text-sm text-gray-500 dark:text-gray-400">Jan 1,2024</time>
               </div>
              
              <p className='ml-14 w-96 break-all mt-3 '>{review.content} </p>
              <h5 className='flex text-blue-500  pr-3  pb-0 pt-5 '><FaRegCopy />
              <p className='pl-5'><IoShareOutline  /></p></h5>
            </li>
            </div>
            ))}
            
        </ul>

        <form onSubmit={handleReviewSubmit} className="flex-col">
         
           <p className='flex justify-end px-32 m-3'>{count} <span className='text-blue-500'>/</span> 1000</p>
          <div className='flex'>
          <img className='w-10 h-10 mr-3 rounded-full' src="https://img.freepik.com/free-photo/pleasant-looking-caucasian-female-with-long-hair-wearing-yellow-casual-shirt-having-good-mood-looking-happily-camera_176532-11558.jpg?w=1060&t=st=1702126009~exp=1702126609~hmac=20880da3ad23f71a4b04dac260dcad76f22ffd1ed1e81204173e743e1de6e5a5" alt=""/>
            
          <textarea type='text'
            className="bg-white w-full h-10 text-sm  border-gray-300 border rounded outline:none px-4 py-2 mb-4 "
            value={newReview}
            onChange={handleReviewChange}
            placeholder="Write your review..."
            maxLength='1000'
            

          />

             <button
            type="submit"
            disabled={!selectedGuest || !newReview.trim()}
            className="bg-[#ffc000] w-32 h-10 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Respond

          </button>
          </div>
          
        </form>

        </div>
       
        </div>
        </div>
     );
}
 
export default Review;
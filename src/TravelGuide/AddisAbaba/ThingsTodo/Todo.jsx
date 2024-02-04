import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Tabs } from 'antd';
import Art from './art/Art';
import Sport from './sport/Sport';
import { Link } from 'react-router-dom'




  
  
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Art & Culture',
      children: <Art/>,
    },
    {
      key: '2',
      label: 'Sports',
      children: <Sport/>,
    },
    {
      key: '3',
      label: 'Events',
      children: 'mn',
    },
    {
      key: '4',
      label: 'Relax & Wellness',
      children: 'bc',
    },
    {
      key: '5',
      label: 'Luxury experiences',
      children: 'Attractions',
    },
    {
      key: '6',
      label: 'Nature',
      children: 'sd',
    },
  
  ];


const Todo = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return ( 
        <div>
        <div className='w-full h-96'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className=''>
            <img src='https://images.unsplash.com/photo-1512654458600-cf5387bd9428?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://images.unsplash.com/photo-1588264111780-aff0aee30e55?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://images.unsplash.com/flagged/photo-1575297809485-d72fe6e19fc1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://images.unsplash.com/photo-1649956203753-5081d64446f9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://images.unsplash.com/photo-1604462001953-53e371a22935?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://images.unsplash.com/photo-1456086272160-b28b0645b729?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      
        </div>
 
        <div className='pt-5 p-10 bg-gray-100'>
        <h1 className='text-3xl font-semibold pl-20'>A selection of the most interesting ideas for<br/> your holidays and how to spend your free <br/> time</h1>
        <p className='pl-20 text-gray-600 mt-3'>New cultures, new foods, and unique destinations to discover: choose what to visit and the type of trip you’d like. Let yourself be guided by your curiosity and enjoy a myriad of experiences while in Italy. From nature to sport, with food, wine and art along the way. Get ready for some enjoyment and start planning your next trip to ADDIS ABABA </p>
       </div>

       <div className='mt-20 grid place-content-center'>
        <h1 className='text-gray-500 text-lg pl-10 p-2'>TO BE INSPIRED</h1>
        <h1 className='text-3xl font-semibold'>By millions of experiences</h1>
       </div>

       <div className='grid grid-cols-4 mt-10 m-5 gap-5'>
        <div className='w-72 h-60 '>
          <img className='h-52 w-full rounded-t-2xl ' src="https://images.unsplash.com/photo-1498955472675-532cdee9d6b4?q=80&w=1785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
          <h1 className='bg-green-500 rounded-b-2xl flex place-content-center p-1 h-8 text-white'>Nature</h1>
        </div>
        <div className='w-72 h-60 '>
          <img className='h-52 w-full rounded-t-2xl' src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
          <h1 className='bg-pink-500 flex rounded-b-2xl place-content-center p-1 h-8 text-white'>Events</h1>
        </div>
        <div className='w-72 h-60'>
          <img className='h-52 w-full rounded-t-2xl' src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
          <h1 className='bg-[#ffc000] rounded-b-2xl flex place-content-center p-1 h-8 text-white'>Art and Culture</h1>
        </div>

        <div className='w-72 h-60 '>
          <img className='h-52 w-full rounded-t-2xl' src="https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
          <h1 className='bg-orange-400 flex rounded-b-2xl place-content-center p-1 h-8 text-white'>Relax & wellness</h1>
        </div>

        <div className='w-72 h-60 '>
          <img className='h-52 w-full rounded-t-2xl' src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
          <h1 className='bg-blue-500 flex rounded-b-2xl place-content-center p-1 h-8 text-white'>Luxury experiences</h1>
        </div>
        <div className='w-72 h-60 '>
          <img className='h-52 w-full rounded-t-2xl' src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
          <h1 className='bg-purple-500 flex rounded-b-2xl place-content-center p-1 h-8 text-white'>Hiking</h1>
        </div>
        <div className='w-72 h-60 '>
          <img className='h-52 w-full rounded-t-2xl' src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
          <h1 className='bg-gray-400 flex rounded-b-2xl place-content-center p-1 h-8 text-white'>Book club</h1>
        </div>
      <Link to="/sport">  <div className='w-72 h-60 '>
          <img className='h-52 w-full rounded-t-2xl' src="https://images.unsplash.com/photo-1489730955284-365747312681?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
          <h1 className='bg-blue-700 flex rounded-b-2xl place-content-center p-1 h-8 text-white'>Sports</h1>
        </div> </Link>

       </div>

       <div className='border rounded-2xl m-10 mt-20 w-auto h-60'>
        <div className='flex'>
          <div className='w-1/2 p-10 pl-20 pt-16'>
            <p className='text-gray-500 text-xl'>ART & CULTURE</p>
            <h1 className='text-3xl font-semibold pb-5'>Tobia </h1>
            <button className='w-40 text-white  bg-[#ffc000] p-2 rounded-3xl'>Find more</button>
           
          </div>
          <img className='w-1/2 h-60 rounded-r-2xl' src='https://images.unsplash.com/photo-1553687334-0161f3d4aca9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </div>
         
      </div>  
       
       <div className='mt-20'>
        <h1 className='text-gray-500 text-xl flex place-content-center'>NOT TO BE MISSED</h1>
        <h1 className='text-2xl font-semibold p-2 flex place-content-center'>What do you want to do</h1>
        <div className='m-2 mt-8 pl-48'>
         <Tabs className='' defaultActiveKey="1" items={items} onChange={onChange} />

         </div>
       </div>
        </div>
     );
}
 
export default Todo;
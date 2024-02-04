import { Link } from "react-router-dom";
import React, { useRef } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Accordion from "../AccordionComponent/Accordion";
import AccordionIcon from "../AccordionComponent/Accordion";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm
    ('service_yga9vll', 'template_8zsvn0i',
     form.current, 'Nz2_rDFr-ScZqHdYo')
      .then((result) => {
          console.log(result.text);
          alert( "message sent successfully");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert('error')
      });
  };

    return (  
        <div className="bg-white">
             <div className="sticky top-0 z-50 bg-white border-b flex justify-between items-center p-5">
                {/* left */}
              <div>
             <h1 className="font-semibold text-2xl m-3 flex items-center justify-between ">
             <Link to="/notification">  <FaArrowLeft className="h-5 w-5 text-blue-400 flex mr-8" /> </Link> Contact us</h1>
              </div>

                {/* right */}
                <div>
              <Link to="/">  <MdOutlineClose className="h-7 w-7 hover:text-red-600" /></Link>
                </div>

            </div>
            <div className="flex  m-5 mt-4 items-center justify-between space-x-6">
                {/*left */}
                <div className="ml-20 block ">
                 <h1 className="text-4xl font-black ">Get in touch</h1>
                 <p className="text-gray-700 mt-1 texl-xl p-2">Leave us a message</p>
                  <div className="block space-y-3 mt-4">
                  <form className="space-y-3" ref={form} onSubmit={sendEmail}>
                 <label>
                    <input className="border rounded-lg w-96 h-10 px-4 py-2" type="text" name="user_name" placeholder="Name"/>
                 </label>
                 
                 <label className="block">
                    <input className="border rounded-lg w-96 h-10 px-4 py-2" type="email" name="user_email" placeholder="Email"/>
                 </label>

                 <textarea className=" bg-white w-96 h-48   border-gray-300 border rounded-lg  px-4 py-2 mb-4 " name="message" placeholder="Message" maxLength='1000'></textarea>
                 
                 <input  className="w-64 h-10 bg-white cursor-pointer rounded-xl border-2 border-[#ffc000] shadow-[inset_0px_-2px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out" type="submit" value="Send" />
                
                </form>
                </div>
                
                </div>

                {/*right */}
                <div>
                 <img className="w-full h-96 " src="https://img.freepik.com/free-vector/flat-illustration-secretary-s-day-celebration_52683-108362.jpg?w=826&t=st=1703925846~exp=1703926446~hmac=fd93db1c6506bf14ea8730cca43222b876cb1b55dd16d550928d85ad1d96a928" alt=""/>
                 
                </div>
            </div>

            <div className=" mt-20 ml-24 border-t pt-5 ">
              <h1 className="font-semibold text-3xl">Quick Support</h1>
              <p className="text-gray-700 mt-1 p-2 texl-xl">You can get all the contact information.</p>
              <div className="flex space-x-16 m-3 mt-10">
                <div className="border p-5 rounded-md w-80">
                <FaLocationDot className="fill-red-600 h-6 w-6"/>
                  <h1 className="font-semibold mt-3 text-2xl mb-5">Visit Us</h1>
                  <p>22 behind golagol tower,Hanan K plaza</p>
                  <p>Addis Ababa,Ethiopia</p>
                </div>

                <div className="border p-5 rounded-md w-80">
                <IoCall className="fill-yellow-600 h-6 w-6"/>
                  <h1 className="font-semibold mt-3 text-2xl mb-5">Call Us</h1>
                  <p>+251 123 456 789</p>
                  <p>+251 000 000 000</p>
                </div>

                <div className="border p-5 rounded-md w-80" >
                <MdEmail className="fill-yellow-600 h-6 w-6"/>
                  <h1 className="font-semibold mt-3 text-2xl mb-5">Email Us</h1>
                  <p> example@example.com</p>
                  <p>support@support.com</p>
                </div>
                
              </div>
            </div>

            <AccordionIcon/>

            
            <div className="bg-gray-100 mt-5 pt-5 pb-2 pl-3">
                            <ul className="flex space-x-5 cursor-pointer">
                                <li className="hover:underline hover:text-yellow-500"> . privacy</li>
                              <Link to='/community'>  <li className="hover:underline hover:text-yellow-500">. community</li></Link>
                            <Link to='/help'> <li className="hover:underline hover:text-yellow-500">.help</li></Link>   
                            <Link to='/travel'>   <li className="hover:underline hover:text-yellow-500">. travel guide</li></Link>
                            </ul>

                        </div>
        </div>
    );
}
 
export default Contact;
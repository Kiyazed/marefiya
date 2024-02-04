import Navbar from "../../component/Nav";
import BarchartComponent from "../../Data";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React,{ useState, useEffect } from "react";
import Datepicker from 'flowbite-datepicker/Datepicker';
import DatePicker from "react-datepicker";
import { TfiBarChartAlt } from "react-icons/tfi";
import { RiArrowUpSFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { FcPieChart } from "react-icons/fc";
import Card from "../card";




const Finance  = () => {

    const [startDate, setStartDate] = useState(new Date());

    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(()=>{
       const animation = animate(count, 567450, {duration:2})

             return animation.stop;
    }, []);
       
   

    return (  
        <div className="bg-gray-100">
            
                <Navbar/>
            

            <h1 className="font-bold flex items-center text-4xl text-start p-4 m-5">Welcome,back </h1>

            <div className="relative max-w-sm flex  ml-96 mb-3 ">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input type='date' datepicker datepicker-orientation="bottom right" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>


</div>
      
      

            <div className="flex space-x-2 gap-8 w-full">
        {/* left side */}

          <div className="space-y-3 w-full ">
            <div className="flex shadow-md border-r bg-white border m-3 w-full">

                <div >
  
                 <h3 className="font-bold text-lg  m-3 flex gap-80">Property Revenue Overview <span className=" text-gray-500 text-base">
                    
                    </span></h3>
                 <p className="m-5 text-base">show overview from Jan 2022 - Dec 2023</p>
                 <div className="flex justify-between  border-b mt-5 pr-5 pl-5 space-x-3">
                  <ul className="flex justify-around items-center p-0 space-x-3 text-gray-700 text-base ">
                    <li >overview</li>
                    <li>leasing</li>
                  </ul>
                  <ul className="flex space-x-3 items-center  text-gray-700 text-base">
                    <li>week</li>
                    <li>months</li>
                    <li>year</li>
                  </ul>
                  </div>
                     <div className="flex space-x-20 items-center mt-8 m-3 ml-7 mb-10">
                        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}
                          className="w-72 rounded shadow-lg border">
                            <div className="flex justify-between items-center">
                            <div className="px-6 py-4">
                                 <h1 className="font-bold text-2xl text-yellow-600 mb-2 ">$7890</h1>
                                 <p className="text-gray-700 text-base flex items-center justify-between"><RiArrowUpSFill className="fill-green-500 h-5 w-5" /><span className="text-sm mr-3 text-green-600">5.9%</span>Income </p>

                            </div>
                            <div className="mr-5 " >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ca8a04" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                              </svg>
                            </div>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}
                         className="w-72 rounded border shadow-lg ">
                            <div className="flex justify-between items-center">
                            <div className="px-6 py-4">
                                <h1 className="font-bold text-xl mb-2 text-blue-600">$6034</h1>
                                 <p className="text-gray-700 text-base flex items-center "><IoMdArrowDropdown className="text-red-500 h-5 w-5"/> <span className="text-sm text-red-500 mr-3" >2.3%</span>Expense </p>

                            </div>
                            <div className="mr-5">
                            <FcPieChart className="h-10 w-10 fill-blue-500" />
                            </div>
                            </div>
                        </motion.div>

                     </div>
                

                  <div className="m-3 mt-5"><BarchartComponent /></div>
                   
           
        
                  
                </div>
                
            </div>

            <div className="flex">
                <div className=" shadow-md border-r bg-white border m-3 p-3 px-5 mt-3 w-1/2">
                     <h1 className="text-lg font-bold ">Recent Tasks <span className="ml-24 font-normal text-sm text-blue-700">See all tasks</span></h1>
                     <div className="border-b mt-5">
                       <ul className="flex space-x-16" >
                          <li>Income Requests</li>
                          <li>Assigned to me</li>
                       </ul>
                    </div>
                    <div className="">
                        <h1 className="font-semibold text-lg flex mt-5 ">Bedroom... <span className="ml-36 text-gray-500 text-base ">1d ago</span></h1>
                        
                        <div className="flex space-x-10 mt-1 mb-3 "> <p className="text-green-600 p-2 text-xs ">New</p>
                         <p className="text-blue-800 p-2 text-sm ">Resident request</p>
                         </div>
                          <div className="flex items-center">
                             <img className='h-10 w-10 mr-5 rounded-full' src='https://img.freepik.com/free-photo/pleasant-looking-caucasian-female-with-long-hair-wearing-yellow-casual-shirt-having-good-mood-looking-happily-camera_176532-11558.jpg?w=1060&t=st=1702126009~exp=1702126609~hmac=20880da3ad23f71a4b04dac260dcad76f22ffd1ed1e81204173e743e1de6e5a5' alt=""/>
                             <span className=" flex items-center text-gray-600 text-base "> Juliya Friedman</span>
                           </div>
                    </div>
                
                </div>

                <div className="p-2 bg-white mt-3 w-1/2 mb-2">
                    <h1 className="font-bold mb-2 text-2xl">$6,678 </h1>
                    <p className="font-bold text-lg">Average Booking Revenue </p>
                    <p className="flex items-center mb-2 text-gray-500  ">All properties <IoMdArrowDropdown className="text-red-500 h-5 w-5"/> </p>
                    <div className="flex mb-1 ">
                        <img className=" h-32 w-1/3" src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?w=996&t=st=1702989028~exp=1702989628~hmac=aec8078517d878eb9e56f47b1afa67e7ff1da02e38424b539749606c369e1d93" alt=""/>
                        <div className="w-2/3 ml-5 ">
                        <h1 className="mb-3 font-bold">Garden Row Hotel</h1>
                        <p className="flex gap-2"><img className="rounded-full h-10 w-10 flex gap-5" src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?w=996&t=st=1702989178~exp=1702989778~hmac=9dc0ff2368117aada770ba6039fb985c86d395daf57582d634236d07454877a2" alt=""/> Amanda Rawles</p>
                        <h1 className="mt-2 text-green-400 font-bold text-2xl ml-12">$490</h1>
                        </div>
                    </div>
                </div>


           





             </div>

               <div className="bg-white m-3 mt-3 mb-3 w-full p-3">
                <h1 className="border-b mt-3 mb-5 text-xl font-bold  items-center flex gap-x-96">Last Transactions <span className=" text-sm text-blue-700 font-normal">see all</span></h1>
                <table className="table-auto space-x-3 w-full">
                    <thead >
                        <tr className="font-bold text-base">
                            <td>Status</td>
                            <td>Guest</td>
                            <td>Date</td>
                            <td>Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-red-300   p-1">pending..</td>
                            <td>John Doe</td>
                            <td>Dec 4,2023</td>
                            <td>$10,000</td>
                            
                        </tr>
                        <tr>
                        <td className="text-green-300  p-1">paid</td>
                        <td>Juliya K.</td>
                        <td>Nov 23,2023</td>
                        <td>$5000</td>
                        </tr>
                        <tr>
                            <td className="text-green-300 p-1">paid</td>
                            <td>Alex Smith</td>
                            <td>Nov 29,2023</td>
                            <td>$10,000</td>
                        </tr>
                        <tr>
                            <td className="text-red-300   p-1">pending..</td>
                            <td>Cris Croop</td>
                            <td>Dec 8,2023</td>
                            <td>$2300</td>
                        </tr>
                        <tr>
                        <td className="text-green-300 p-1">paid</td>
                        <td>Juliya K.</td>
                        <td>Nov 23,2023</td>
                        <td>$5000</td>
                        </tr>
                        <tr>
                        <td className="text-green-300  p-1">paid</td>
                        <td>Juliya K.</td>
                        <td>Nov 23,2023</td>
                        <td>$5000</td>
                        </tr>
                    </tbody>
                </table>

               </div>

             </div>

            




        {/* Right side */}  

         <div className=" bg-gray-100 w-full ">
             <div className="top-10  fixed shadow-sm rounded-md p-0 w-96 mb-12 mt-8">
                 <h1 className="font-bold text-md p-1"> My Cards </h1>
                  <Card/>

                <div className="flex gap-x-5 mb-3 p-2">
                    <h2 className="text-base text-white bg-yellow-600 rounded-md w-36  h-7 flex pl-7 mt-2">Top Up</h2>
                    <h2 className="text-base rounded-md text-white bg-blue-500 flex w-36 h-7 pl-7 mt-2">Transfer</h2>
                </div>

                <div className="bg-white shadow-sm p-2 mt-1 ">
                    <h1 className="font-bold text-xl" >Last 30 Days</h1>
                    <p className="flex justify-between p-2  font-semibold text-green-300">$36,840 <span className=" ml-24 text-red-400 font-semibold">$8,420</span></p>
                    <p className="flex justify-between p-2 font-normal text-gray-400 mb-5">paid invoices <span className="text-gray-400 ml-16 "> open invoices</span></p>
                    <h1 className="flex justify-between p-1  rounded  text-blue-600 border-t">Receive Payment <span className="text-blue-500 font-medium">View all</span></h1>

                </div>

                <div className=" shadow-md border-r bg-white px-5 p-1 border h-28 mt-1 ">
                     <h1 className="flex justify-between p-2 text-base font-bold  w-full pt-2 ">Total Balance<span className="ml-12  text-sm text-blue-700 font-normal">See details</span></h1>
                     
                    <div className="px-7  ">
                        <h1 className="font-bold text-yellow-600 text-2xl ml-16 ">$67,989</h1>
                    </div>
                
                </div>

             </div>
         </div> 

    </div>   
    </div>
    );
}
 
export default Finance;
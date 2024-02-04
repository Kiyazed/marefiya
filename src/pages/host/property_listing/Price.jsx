import { Link } from "react-router-dom";
import React from 'react';
const Price = () => {
  
    return ( 
        <div>
           <div className="bg-gray-100 items-center flex justify-center m-3  ">
       

       <div className="text-left border-2 bg-white shadow-lg p-8 inline-block justify-center w-1.5/2">

      
       
           <div className="mt-8 mx-5">

    <div className="border-b shadow-sm p-5">
             <h2 className="font-bold text-lg mx-5"> Step 5: Price </h2>
        
             <div className="my-5 mx-5 border-b mb-5">
               <h2 className="font-medium py-3 text-lg "> What is your base price per night?</h2>  
               <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
             </div>

             <div className="my-5 mx-5 border-b mb-5">
                <h2 className="font-medium py-3 text-lg "> Do you want to set different rates for weekends and weekdays?</h2>  
                 <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
                 <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
              </div>

              <div className="my-5 mx-5 border-b mb-5">
                <h2 className="font-medium py-3 text-lg "> Will you charge extra fees for additional guests?</h2>  
                 <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
                 <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
              </div>

              <div className="my-5 mx-5 border-b mb-5">
                <h2 className="font-medium py-3 text-lg "> Do you charge a cleaning fee?</h2>  
                 <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
                 <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
              </div>

              <div className="my-5 mx-5 border-b mb-5">
                <h2 className="font-medium py-3 text-lg "> What minimum and maximum stay requirements do you have?</h2>  
                 <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
                 <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
              </div>

             </div>

             <div className="ml-20  m-5 mb-5 mt-10 space-x-96">
      <Link to='/image'>
                    <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-blue-500 shadow-[inset_0px_-2px_0px_1px_blue] group hover:bg-blue-500 transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Back</span>
                   </button>
                </Link>
                <Link to='/availability'>
                    <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#ffc000] shadow-[inset_0px_-2px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Next</span>
                   </button>
                </Link>
      </div>
             </div>
                   
               
              
                    
             </div>
             </div> 
        </div>
     );
}
 
export default Price;
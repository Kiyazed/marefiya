import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

const Availability = () => {

  const { scrollYProgress } = useScroll();

    return ( 
        <div>
           <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-3 bg-yellow-500 origin-top-left" />  
          <div>
           <div className="bg-gray-100 items-center flex justify-center m-3  ">
       

       <div className="text-left border-2 bg-white shadow-lg inline-block justify-center w-1.5/2">
       
           <div className="mt-8 mx-5">

    <div className="border-b shadow-sm p-5">
             <h2 className="font-bold text-lg mx-5"> Step 6: Availability and Booking preferences </h2>
        
             <div className="my-5 mx-5 border-b mb-5">
               <h2 className="font-medium py-3 text-lg "> How often is your space available?</h2>  
               <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
             </div>

             <div className="my-5 mx-5 border-b mb-5">
                <h2 className="font-medium py-3 text-lg "> Which dates are currently available to guests?</h2>  
                 <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
                 <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
              </div>

              <div className="my-5 mx-5 border-b mb-5">
                <h2 className="font-medium py-3 text-lg "> Do you have any blocked or unavailable dates?</h2>  
                 <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
                 <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
              </div>

              <div className="my-5 mx-5 border-b mb-5">
                <h2 className="font-medium py-3 text-lg "> Are there any minimum and maximum stay requirements?</h2>  
                 <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
                 <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
              </div>

              <div className="my-5 mx-5 border-b mb-5">
                <h2 className="font-medium py-3 text-lg "> Are there any specific check-in and check-out times?</h2>  
                 <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
                 <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
              </div>

             </div>


             <div>
             <h2 className="font-bold text-lg mx-5 m-7"> Step 7: House Rules  </h2>
        
        <div className="my-5 mx-5 mb-5">
          <h2 className="font-medium py-3 text-lg "> Are pets allowed?</h2>  
          <div class="dark:bg-black/10 space-x-10 text-start">
             <label class="text-black" for='yes'>
               <input name='choice' id='yes' value='yes'  class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox"  /> Yes 
              
              </label>
              <label class="text-black" for='no'>
               <input name='choice' id='no' value='no' class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" /> No 
              
              </label>
              
           </div>
          </div>


        <div className="my-5 mx-5  mb-5">
           <h2 className="font-medium py-3 text-lg "> Is smoking allowed?</h2>  
           <div class="dark:bg-black/10 space-x-10 text-start">
             <label class="text-black">
               <input class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" /> Yes 
              
              </label>
              <label class="text-black">
               <input class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" /> No 
              
              </label>
              
           </div>
         </div>

         <div className="my-5 mx-5 mb-5">
           <h2 className="font-medium py-3 text-lg "> Are parties or events allowed?</h2>  
           <div class="dark:bg-black/10 space-x-10 text-start">
             <label class="text-black">
               <input class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" /> Yes 
              
              </label>
              <label class="text-black">
               <input class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" /> No 
              
              </label>
              
           </div>
         </div>

         <div className="my-5 mx-5 border-b mb-5">
           <h2 className="font-medium py-3 text-lg "> Are there any quite hours?</h2>  
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
         </div>

         <div className="my-5 mx-5 border-b mb-5">
           <h2 className="font-medium py-3 text-lg "> Are there any specific rules regarding guests or visitors?</h2>  
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
         </div>

         <div className="my-5 mx-5 border-b mb-5">
           <h2 className="font-medium py-3 text-lg "> Are there any specific rules regarding cleanliness or housekeeping?</h2>  
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
         </div>

         <div className="my-5 mx-5 border-b mb-5">
           <h2 className="font-medium py-3 text-lg "> Are there any specific rules regarding amenities or facilities?</h2>  
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
         </div>
            </div> 

             <div className="border-t p-4 mb-5 mt-10 space-x-96">
      <Link to='/price'>
                    <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-blue-500 shadow-[inset_0px_-2px_0px_1px_blue] group hover:bg-blue-500 transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Back</span>
                   </button>
                </Link>
                <Link to='/verify'>
                    <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#ffc000] shadow-[inset_0px_-2px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Next</span>
                   </button>
                </Link>
               
      </div>
       
             </div>
            
             </div>
             
             </div> 
            
        </div>

        </div>
     );
}
 
export default Availability;
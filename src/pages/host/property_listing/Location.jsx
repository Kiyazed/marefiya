import { Link } from 'react-router-dom';
import {motion, useScroll } from "framer-motion";

const Location = () => {
    const { scrollYProgress } = useScroll();
    return (
        <>

    <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-3 bg-yellow-500 origin-top-left" />  
            <div className="bg-gray-100 items-center flex justify-center m-3  ">
                <div className="text-left border-2 bg-white shadow-lg inline-block justify-center w-1.5/2">
                    <div className="p-5 m-5 border-b">
                    <h3 className="font-bold text-lg mx-5"> Step 3: Location </h3>
                     <div>
                    <h3 className="font-medium text-lg mx-5"> Address</h3>
                     <form>
                      <h5 className="py-3 font-medium mx-5 text-lg"> Street Address</h5>
                        <label className="mx-5">
                            <input className="w-96 h-10 p-2  bg-gray-50  border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" type="text" placeholder="Street address"/>
                         </label>
                         <h5 className="py-3 font-medium mx-5 text-lg"> City</h5>
                        <label className="mx-5">
                            <input className="w-96 h-10 p-2  bg-gray-50 border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" type="text" placeholder="City"/>
                         </label>
                         <h5 className="py-3 font-medium mx-5 text-lg"> Kebele</h5>
                        <label className="mx-5">
                            <input className="w-96 h-10 p-2  bg-gray-50 border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" type="text" placeholder="Kebele"/>
                         </label>
                         <h5 className="py-3 font-medium mx-5 text-lg"> Region</h5>
                        <label className="mx-5">
                            <input className="w-96 h-10 p-2  bg-gray-50  border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" type="text" placeholder="Region"/>
                         </label>
                         <h5 className="py-3 font-medium mx-5 text-lg"> Postal code</h5>
                        <label className="mx-5">
                            <input className="w-96 h-10 p-2  bg-gray-50  border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" type="text" placeholder="postal code"/>
                         </label>

                     </form>
                     <div className="my-5 mx-5 mb-5" >
                      <h3 className="font-medium py-3 text-lg">What is the nearest landmark or point of interest to your property?</h3>
                       <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here</label>
                         <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
        
                     </div>
                     <div className="my-5 mx-5 mb-5" >
                      <h3 className="font-medium py-3 text-lg">Is your property easily accessible by public transportation? If yes, provide details</h3>
                       <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here</label>
                         <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
        
                     </div>
                     <div className="my-5 mx-5 ">
                        <h3 className="font-medium py-3 text-lg">What type of property location do you have?</h3>
                        <select placeholder="Type of property location" className="w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-indigo-500">
                            <option>Urban</option>
                            <option>Suburban</option>
                            <option>Rural</option>
                        </select>
                     </div>
                        
                     </div>
                    </div>

                    <div className=' ml-10 mb-5 mt-10 space-x-96'>
                 <Link to='/list'>
                    <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-blue-500 shadow-[inset_0px_-2px_0px_1px_blue] group hover:bg-blue-500 transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Back</span>
                   </button>
                </Link>
                 
                 <Link to='/image'>
                      <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#ffc000] shadow-[inset_0px_-2px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                                <span className="font-medium text-[#333] group-hover:text-white">Next</span>
                      </button>
                 </Link>      
              </div> 

                </div>

            </div>
        </>
      );
}
 
export default Location;
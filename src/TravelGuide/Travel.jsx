import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";



const Travel = () => {
    return ( 
        <div className="bg-white">
            <div className="sticky top-0 z-50 bg-white border-b flex justify-between items-center p-5">
                {/* left */}
              <div>
             <h1 className="font-semibold text-2xl m-3 flex items-center justify-between ">
             <Link to="/help">  <FaArrowLeft className="h-5 w-5 text-blue-400 flex mr-8" /> </Link> Travel Guide</h1>
              </div>

                {/* right */}
                <div>
              <Link to="/">  <MdOutlineClose className="h-7 w-7 hover:text-red-600" /></Link>
                </div>

            </div>

           <div className="flex space-x-4 mb-10">
             <div className="w-1/2 p-5 pl-16 pt-16">
                <h1 className="font-bold text-5xl  ">Let Us Find </h1>
                <h1 className="text-4xl font-semibold pt-2">Some Wonderful Places</h1> 
                <p className="pt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis qui voluptatibus ullam, et a natus quia velit culpa, asperiores nihil debitis inventore quidem laboriosam neque quod. Aliquid praesentium amet iusto.</p>
                
             </div>
             <div className="w-1/2 mb-2 mt-3 md:shrink-0">
                <img className="h-96 w-full rounded-md " src="https://img.freepik.com/free-vector/trip-concept-illustration_114360-6321.jpg?w=740&t=st=1704136434~exp=1704137034~hmac=eb0c2aa27e2793a6da1d42b6281446dd93b8c96b64b6d160660b60cc81d72594" alt=""/>
             </div>
           </div>
           <div className="bg-white mt-20 border-t">
            <h1 className="font-semibold text-4xl  p-5 pl-16">Top Destinations</h1>
             <div className="space-x-1 pl-14 grid grid-cols-3  md:grid-cols-2 lg:grid-cols-3">
             <div className="w-96 h-auto border shadow-sm mt-5  rounded-lg">
              <img className="rounded h-48 w-full" src="https://img.freepik.com/free-photo/aerial-shot-hong-kong-night_181624-46678.jpg?w=826&t=st=1704140002~exp=1704140602~hmac=e2c4b14657523faaf252657c089632155334520422b9242ad2b565073d92c086" alt=''/>
              <div className="p-2 mt-2">
              <p className="flex items-center gap-2 font-black"><FaLocationDot className="fill-red-600 h-5 w-5"/> Addis Ababa</p>
              <p className="pl-2 pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sit voluptate impedit corrupti facere quo, sapiente itaque. Debitis veniam consequatur, pariatur nostrum expedita aliquam aliquid qui animi. Eos, exercitationem velit.</p>
             <Link to='/AA'><button className="text-[#ffc000] flex items-center gap-1 hover:underline"><IoIosArrowForward />find more</button></Link> 
              </div>

             </div>

             <div className="w-96 h-auuto border shadow-sm mt-5  rounded-lg">
              <img className="rounded h-48 w-full" src="https://i.pinimg.com/564x/d2/ae/ce/d2aecec3096f762174eb137e3b87759f.jpg" alt=''/>
              <div className="p-2 mt-2">
              <p className="flex items-center gap-2 font-black"><FaLocationDot className="fill-red-600 h-5 w-5"/> Harari</p>
              <p className="pl-2 pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sit voluptate impedit corrupti facere quo, sapiente itaque. Debitis veniam consequatur, pariatur nostrum expedita aliquam aliquid qui animi. Eos, exercitationem velit.</p>
              <button className="text-[#ffc000] flex items-center gap-1 hover:underline"><IoIosArrowForward />find more</button>
              </div>

             </div>

             <div className="w-96 h-auuto border shadow-sm mt-5  rounded-lg">
              <img className="rounded h-48 w-full" src="https://i.pinimg.com/564x/d9/f5/a1/d9f5a11e5643031e51ab7dbcaef88826.jpg" alt=''/>
              <div className="p-2 mt-2">
              <p className="flex items-center gap-2 font-black"><FaLocationDot className="fill-red-600 h-5 w-5"/> Arbaminch</p>
              <p className="pl-2 pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sit voluptate impedit corrupti facere quo, sapiente itaque. Debitis veniam consequatur, pariatur nostrum expedita aliquam aliquid qui animi. Eos, exercitationem velit.</p>
              <button className="text-[#ffc000] flex items-center gap-1 hover:underline"><IoIosArrowForward />find more</button>
              </div>

             </div>

             <div className="w-96 h-auto border shadow-sm mt-8  rounded-lg">
              <img className="rounded h-48 w-full" src="https://images.unsplash.com/photo-1630861412229-67e2acb44b7a?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
              <div className="p-2 mt-2">
              <p className="flex items-center gap-2 font-black"><FaLocationDot className="fill-red-600 h-5 w-5"/> Jimma</p>
              <p className="pl-2 pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sit voluptate impedit corrupti facere quo, sapiente itaque. Debitis veniam consequatur, pariatur nostrum expedita aliquam aliquid qui animi. Eos, exercitationem velit.</p>
              <button className="text-[#ffc000] flex items-center gap-1 hover:underline"><IoIosArrowForward />find more</button>
              </div>

             </div>

             <div className="w-96 h-auto border shadow-sm mt-8  rounded-lg">
              <img className="rounded h-48 w-full" src="https://i.pinimg.com/564x/57/34/fc/5734fcb579a97c087719cb448b24daf2.jpg" alt=''/>
              <div className="p-2 mt-2">
              <p className="flex items-center gap-2 font-black"><FaLocationDot className="fill-red-600 h-5 w-5"/> Afar</p>
              <p className="pl-2 pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sit voluptate impedit corrupti facere quo, sapiente itaque. Debitis veniam consequatur, pariatur nostrum expedita aliquam aliquid qui animi. Eos, exercitationem velit.</p>
              <button className="text-[#ffc000] flex items-center gap-1 hover:underline"><IoIosArrowForward />find more</button>
              </div>

             </div>

             <div className="w-96 h-auto border shadow-sm mt-8  rounded-lg">
              <img className="rounded h-48 w-full" src="https://images.unsplash.com/photo-1608634193723-1865aa4416ce?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
              <div className="p-2 mt-2">
              <p className="flex items-center gap-2 font-black"><FaLocationDot className="fill-red-600 h-5 w-5"/> Gonder</p>
              <p className="pl-2 pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sit voluptate impedit corrupti facere quo, sapiente itaque. Debitis veniam consequatur, pariatur nostrum expedita aliquam aliquid qui animi. Eos, exercitationem velit.</p>
              <button className="text-[#ffc000] flex items-center gap-1 hover:underline"><IoIosArrowForward />find more</button>
              </div>

             </div>

             <div className="w-96 h-auto border shadow-sm mt-8  rounded-lg">
              <img className="rounded h-48 w-full" src="https://images.unsplash.com/photo-1623038455007-891466ff6016?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
              <div className="p-2 mt-2">
              <p className="flex items-center gap-2 font-black"><FaLocationDot className="fill-red-600 h-5 w-5"/> Gambela</p>
              <p className="pl-2 pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sit voluptate impedit corrupti facere quo, sapiente itaque. Debitis veniam consequatur, pariatur nostrum expedita aliquam aliquid qui animi. Eos, exercitationem velit.</p>
              <button className="text-[#ffc000] flex items-center gap-1 hover:underline"><IoIosArrowForward />find more</button>
              </div>

             </div>

             <div className="w-96 h-auto border shadow-sm mt-8  rounded-lg">
              <img className="rounded h-48 w-full" src="https://i.pinimg.com/564x/3d/f7/a3/3df7a385771f5cc2182413c233928653.jpg" alt=''/>
              <div className="p-2 mt-2">
              <p className="flex items-center gap-2 font-black"><FaLocationDot className="fill-red-600 h-5 w-5"/> Bahirdar</p>
              <p className="pl-2 pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sit voluptate impedit corrupti facere quo, sapiente itaque. Debitis veniam consequatur, pariatur nostrum expedita aliquam aliquid qui animi. Eos, exercitationem velit.</p>
              <button className="text-[#ffc000] flex items-center gap-1 hover:underline"><IoIosArrowForward />find more</button>
              </div>

             </div>

             <div className="w-96 h-auto border shadow-sm mt-8  rounded-lg">
              <img className="rounded h-48 w-full" src="https://i.pinimg.com/564x/ff/ae/ba/ffaeba97fa170a421dbc6001a5682cc1.jpg" alt=''/>
              <div className="p-2 mt-2">
              <p className="flex items-center gap-2 font-black"><FaLocationDot className="fill-red-600 h-5 w-5"/> Axum</p>
              <p className="pl-2 pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sit voluptate impedit corrupti facere quo, sapiente itaque. Debitis veniam consequatur, pariatur nostrum expedita aliquam aliquid qui animi. Eos, exercitationem velit.</p>
              <button className="text-[#ffc000] flex items-center gap-1 hover:underline"><IoIosArrowForward />find more</button>
              </div>

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
 
export default Travel;

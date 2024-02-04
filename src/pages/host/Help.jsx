import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";


const Help = () => {
    return ( 
        <div className="bg-white">
            <div className="sticky top-0 z-50 bg-white border-b flex justify-between items-center p-5">
                {/* left */}
              <div>
             <h1 className="font-semibold text-2xl m-3 flex items-center justify-between ">
             <Link to="/notification">  <FaArrowLeft className="h-5 w-5 text-blue-400 flex mr-8" /> </Link> Help center</h1>
              </div>

                {/* right */}
                <div>
              <Link to="/">  <MdOutlineClose className="h-7 w-7 hover:text-red-600" /></Link>
                </div>

            </div>
            <div>
                <h1 className="font-bold text-3xl  grid place-content-center mt-9">Hi, how can we help?  </h1>
                <div className="flex border rounded-lg p-5 px-5 m-10 justify-between items-center ">
                    <div>
                    <h1 className="font-semibold text-xl">We are here for you </h1>
                    <p>Log in to get help with your reservations, account, and more. </p>
                    </div>
                    <div>
                    <Link to='/register'>
                    <button className="w-64 h-12 bg-white cursor-pointer rounded-xl border-2 border-[#ffc000] shadow-[inset_0px_-2px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Log in</span>
                   </button>
                </Link>
                    </div>
                    </div>
                    <div>
                       
                        <h1 className="font-semibold text-2xl m-5 ml-10 flex justify-between items-center">Guides for getting started <span className="text-gray-500 text-xl hover:text-blue-500 cursor-pointer mr-5 flex justify-between items-center">browse all <IoIosArrowForward className="text-gray-700 ml-3"/></span></h1>
                        <div className="flex space-x-10 m-10">
                            <div className="">
                            <img className="h-52 w-64 shadow-md rounded-lg" src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2149300643.jpg?w=996&t=st=1703695824~exp=1703696424~hmac=ba2de3e70c3049d724174b0fa8dee57e1fe6578bef544e1844628ecdf022511d" alt=""/>
                            <h1 className="text-balance text-base font-medium mt-3">Access and manage your account</h1>
                            </div>
                            <div className="h-30 w-30">
                            <img className="h-52 w-64 shadow-md rounded-lg" src="https://img.freepik.com/free-photo/business-man-counting-dollar-banknote-online-business-concept_1150-6406.jpg?w=996&t=st=1703695925~exp=1703696525~hmac=10988fe5166f8f172e438ae73eb20693accbbd7096fd66cd57dd07d95501204e" alt=""/>
                            <h1 className="text-balance text-base font-medium mt-3">Getting paid</h1>
                            </div>
                            <div className="h-30 w-30">
                            <img className="h-52 w-64 shadow-md rounded-lg" src="https://img.freepik.com/free-photo/happy-man-with-house_1154-113.jpg?w=996&t=st=1703696050~exp=1703696650~hmac=0cb82f9a6d6eb8f430230c5103cc2578070a978af352a1e49df9aaf933734dd6" alt=""/>
                            <h1 className="text-balance text-base font-medium mt-3">Help with hosting</h1>
                            </div>
                            <div className="h-30 w-30">
                            <img className="h-52 w-64 shadow-md rounded-lg" src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2149300643.jpg?w=996&t=st=1703695824~exp=1703696424~hmac=ba2de3e70c3049d724174b0fa8dee57e1fe6578bef544e1844628ecdf022511d" alt=""/>
                            <h1 className="text-balance text-base font-medium mt-3">Getting protected</h1>
                            </div>
                        </div> 

                    </div>

                    <div className="m-5 p-2">
                        <h1 className="font-semibold text-2xl border-t  pt-5 mb-3">Top articles</h1>
                        <div>
                            <ul className="flex space-x-5">
                                <li className="border-b  p-2">
                              <h1 className="font-semibold text-lg  text mb-2">If your guest cancels</h1>
                              <p className="text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum fugit enim repellat. Expedita obcaecati officia vel magni! Quaerat, a repudiandae cepturi.</p>
                            </li>
                            <li className="border-b shadow-sm p-2">
                             <h1  className="font-semibold text-lg  text mb-2">Refund</h1>
                              <p className="text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum fugit enim repellat. Expedita obcaecati officia vel magni! Quaerat, a repudiandae cepturi.</p>

                            </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-50 text-black p-5">
                        
                        <h1 className="font-bold text-3xl text-black mb-5">Explore more</h1>
                        <div className="flex space-x-5">
                        <div>
                            <img className="h-64 w-72 rounded-lg" src="https://images.unsplash.com/photo-1623038455007-891466ff6016?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                            <h1 className="mt-3 font-bold">Our community policies</h1>
                            <p>How we build a foundation of trust</p>
                        </div>
                        <div>
                            <img  className="h-64 w-72 rounded-lg"src="https://images.unsplash.com/photo-1490197415175-074fd86b1fcc?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                            <h1 className="font-bold mt-3">Host resource and inspiration</h1>
                            <p>Find trip,place</p>
                        </div>
                        <div className="pl-10">
                            
                            <h1 className="font-bold text-2xl">Need to get in touch?</h1>
                            <p>We'll start with some questions and get you to the right place.</p>
                          
                         <Link to='/contact'><button className="p-2 px-5 font-medium text-black bg-[#ffc000] w-48 border mt-5 mb-3 rounded hover:bg-white">Contact us </button></Link>  
                           <p>You can also give us feedback</p>
                        </div>
                        </div>
                        

                    </div>

                    <div className="bg-gray-100 mt-2 pt-5 pb-2 pl-3">
                            <ul className="flex space-x-5 cursor-pointer">
                                <li className="hover:underline hover:text-yellow-500"> . privacy</li>
                                <li className="hover:underline hover:text-yellow-500">. contact us</li>
                            <Link to='/community'> <li className="hover:underline hover:text-yellow-500">. community forum</li></Link>   
                              <Link to='/travel'>  <li className="hover:underline hover:text-yellow-500">. travel guide</li></Link>
                            </ul>

                        </div>
            </div>
        </div>
     );
}
 
export default Help;
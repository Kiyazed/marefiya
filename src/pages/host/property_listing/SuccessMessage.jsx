import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const  SuccessMessage= () => {
    const [showMessage, setShowMessage] = useState(true);

    useEffect (()=> {
        setTimeout(()=> {
            setShowMessage(false);
        },3000);
    },[]);
   

    return ( 
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {showMessage ? (
                <div class="flex flex-row gap-2 ">
                <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
              </div>

              ): (

                <div>
                     <img className="w-84 h-64 m-5" src='https://img.freepik.com/free-vector/birthday-cap-with-confetti-serpentine-explosion_1017-17924.jpg?t=st=1701695330~exp=1701695930~hmac=fdb43fe792b1441d5d2cb762dc2e75817f2fd9997745be847b0aaf323f0485a9' alt=''/>
                    <p className="text-green-500 text-2xl mb-4"> Success!</p>
                    <p className="text-gray-500">Your properties have been uploaded successfully</p>
                       
                 <div className=' mt-10 space-x-20'>
                 
                 <Link to='/'>
                      <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#ffc000] shadow-[inset_0px_-2px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                                <span className="font-medium text-[#333] group-hover:text-white">Done</span>
                      </button>
                 </Link>      
              </div>   
            </div>
                    
              )}
               
                    
                 
            </div>

        </div>
     );
}
 
export default SuccessMessage;
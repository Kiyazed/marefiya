import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Unesco = () => {
    return ( 
        <div className="bg-white">
            <div className="sticky top-0 z-50 bg-white border-b flex justify-between items-center p-5">
                {/* left */}
              <div>
             <h1 className="font-semibold text-2xl m-3 flex items-center justify-between ">
             <Link to="/AA  ">  <FaArrowLeft className="h-5 w-5 text-blue-400 flex mr-8" /> </Link> Addis Ababa, Ethiopia</h1>
              </div>

                {/* right */}
                <div>
              <Link to="/">  <MdOutlineClose className="h-7 w-7 hover:text-red-600" /></Link>
                </div>

            </div>
            <div className='mt-10 ml-32 mr-20 mb-5 border-b'>
            <h1 className="text-white bg-[#ffc000] p-1 w-28 pl-5 rounded-md">UNESCO</h1>
            <h1 className='text-gray-500 mt-3 text-lg'>ADDIS ABABA</h1>
             <h1 className='font-semibold text-3xl mt-3'>Discovering the archaeological <br/> and spiritual area of Addis Ababa</h1>
            <p className='text-gray-500 mt-3 text-pretty'>There is only one place in the world where you can relive the everyday life of ancient Rome: <br/>the spectacular archaeological area of Pompeii, Herculaneum and Torre Annunziata, <br/>where time has stood still since 79 AD.</p>
             <div className='mt-10'>
                <img className='h-96 w-full rounded-3xl' src='https://images.unsplash.com/photo-1680465807843-26df24efae4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
              <p className='mt-5 text-gray-600 p-5'>This jewel near Naples, in Campania, which lets you travel back in time, has long held the record as the most visited place in the world. The archaeological area of Pompeii, Herculaneum and Torre Annunziata is among the 58 Italian UNESCO sites in the World Heritage List. It never ceases to amaze, giving you the opportunity to explore the extent of the commercial city of Pompeii, the fewer but better-preserved remains of the ancient town of Herculaneum and the frescoes of the Villa Oplontis in Torre Annunziata, which portray the opulent lifestyle of the wealthy classes at the beginning of the Roman Empire.</p>
             </div>

             <div className='mt-10'>
                <img className='h-96 w-full rounded-3xl' src='https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg' alt=''/>
             </div>

             <div className='mb-10 border-b'>
                <h1 className='font-semibold text-3xl mt-16 pb-5'>Why the archaeological site of Addis Ababa, became a UNESCO World Heritage Site</h1>
               <img className='h-96 w-full rounded-3xl' src='https://images.unsplash.com/photo-1593199901861-84ed1c0f4b13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
               <p className='mt-5 text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quos id cum, minima quidem culpa esse excepturi beatae officiis laudantium nisi. Porro pariatur animi odit illum repudiandae quia id aperiam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, magni! Nostrum sit id aliquam dolor aliquid, delectus, ex possimus neque recusandae consequatur alias aperiam totam a ratione voluptate explicabo voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita esse illum mollitia nulla repudiandae natus quidem fugit voluptas distinctio repellendus eos beatae id dignissimos in placeat voluptatum, totam laboriosam.</p>
               <p className='mt-5 text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi molestias ipsa laudantium perferendis, facere quas nihil molestiae aperiam excepturi! Ipsum omnis ad necessitatibus, magni dignissimos facilis est autem! Voluptate, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. At in nulla perferendis quidem maxime laboriosam adipisci pariatur laborum nesciunt, optio fugiat error a ab quae veniam voluptate laudantium ex dignissimos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore soluta placeat similique modi rerum eligendi nihil a dignissimos aut culpa laboriosam, molestiae ea sit nisi excepturi. Animi adipisci incidunt debitis!</p>
             </div>

             <div className='flex gap-8'>
                <div className='flex h-48 w-80 shadow-sm rounded-3xl '>
                    <img className='h-full w-40 rounded-3xl' src='https://images.unsplash.com/photo-1674739261064-49b1d5057925?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                    <div className='m-2 rounded-3xl '>
                    <h1 className="text-white bg-[#ffc000] mt-1 m-2 p-1 w-28 pl-5 rounded-md">UNESCO</h1> 
                    <h1 className='font-semibold text-xl mt-3 mb-20 ml-3'>Epiphany</h1>
                    <p className='flex items-center text-gray-400'>  <FaLocationDot className='text-gray-400 pr-1'/> Mexico,Addis Ababa</p>
                    </div>
                </div>
                <div className='flex h-48 w-80 shadow-sm rounded-3xl '>
                    <img className='h-full w-40 rounded-3xl' src='https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                    <div className='m-2 rounded-3xl '>
                    <h1 className="text-white bg-[#ffc000] mt-1 m-2 p-1 w-28 pl-5 rounded-md">UNESCO</h1> 
                    <h1 className='font-semibold text-xl mt-3 mb-20 ml-3'>Museum</h1>
                    <p className='flex items-center text-gray-400'>  <FaLocationDot className='text-gray-400 pr-1'/> 4killo,Addis Ababa</p>
                    </div>
                </div>
                <div className='flex h-48 w-80 shadow-sm rounded-3xl '>
                    <img className='h-full w-40 rounded-3xl' src='https://images.unsplash.com/photo-1650831491104-e5699c56baec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                    <div className='m-2 rounded-3xl '>
                    <h1 className="text-white bg-[#ffc000] mt-1 m-2 p-1 w-28 pl-5 rounded-md">UNESCO</h1> 
                    <h1 className='font-semibold text-xl mt-3 mb-20 ml-3'>lorem</h1>
                    <p className='flex items-center text-gray-400'>  <FaLocationDot className='text-gray-400 pr-1 '/> 6killo,Addis Ababa</p>
                    </div>
                </div>
             </div>
            </div>  
        </div>
     );
}
 
export default Unesco;
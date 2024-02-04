import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaLocationArrow } from "react-icons/fa6";

const Community = () => {

  const item=[
    {
        title:"Finding a new place",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam facilis aut voluptatum minus? Minus, asperiores vitae. Eligendi, id sed iusto voluptate suscipit rerum consequuntur aperiam reprehenderit quaerat, iste ut voluptates!",
        name:'Veronica A.',
        date:'Jan 1,2024',
        location:'Paris,France',
        image:'https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title:"Booking issue",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam facilis aut voluptatum minus? Minus, asperiores vitae. Eligendi, id sed iusto voluptate suscipit rerum consequuntur aperiam reprehenderit quaerat, iste ut voluptates!",
        name:'Addis Alemayhu',
        date:'Dec 2,2022',
        location:'Bahirdar,Ethiopia',
        image:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title:"Question about house rules",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam facilis aut voluptatum minus? Minus, asperiores vitae. Eligendi, id sed iusto voluptate suscipit rerum consequuntur aperiam reprehenderit quaerat, iste ut voluptates!",
        name:'Bewketu Siyum',
        date:'Jul 10,2023',
        location:'Addis Ababa,Ethiopia',
        image:'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title:"New reservation ",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam facilis aut voluptatum minus? Minus, asperiores vitae. Eligendi, id sed iusto voluptate suscipit rerum consequuntur aperiam reprehenderit quaerat, iste ut voluptates!",
        name:'Alemayehu Wasse',
        date:'Feb 23,2019',
        location:'Gonder,Ethiopia',
        image:'https://images.unsplash.com/photo-1630567598693-999d1d740ec8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }

  ]

    return ( 
        <div className="bg-white">
            <div className="sticky top-0 z-50 bg-white border-b flex justify-between items-center p-5">
                {/* left */}
              <div>
             <h1 className="font-semibold text-2xl m-3 flex items-center justify-between ">
             <Link to="/help">  <FaArrowLeft className="h-5 w-5 text-blue-400 flex mr-8" /> </Link> Community center</h1>
              </div>

                {/* right */}
                <div>
              <Link to="/">  <MdOutlineClose className="h-7 w-7 hover:text-red-600" /></Link>
                </div>

            </div>

            <div className="ml-10 grid place-items-center mt-10">
               <h1 className="font-bold text-4xl mb-4">Join and involve in community </h1>
               <p className="text-xl font-semibold mb-10">Get involved in marefiya's host forum</p>

            </div>
            <div className="flex space-x-3 mt-6 ml-32">
                <div className="shadow-sm  w-64 h-64">
                    <img className="h-40 w-full rounded-lg" src="https://img.freepik.com/free-photo/young-psychotherapist-explaining-psychological-issues-people-couple-therapy-using-laptop-take-psychoanalysis-notes-listening-conflict-finding-solution-save-marriage_482257-47514.jpg?w=360&t=st=1703792227~exp=1703792827~hmac=f60feef226ab5859d66d8bcee8d90077a4a5953637a8e979ffc2b832ae141ce0" alt=""/>
                    <h1 className="mt-2 p-2 font-semibold ">Advice on your space</h1>
                    <Link to='/register'>
                    <button className="w-32 h-9 p-0 ml-3 bg-white cursor-pointer rounded-xl border-2 border-[#ffc000] shadow-[inset_0px_-1px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Get more</span>
                   </button>
                </Link>

                 </div>
                 <div className="shadow-sm  w-64 h-64">
                    <img className="h-40 w-full rounded-lg" src="https://images.unsplash.com/photo-1701025034666-a0d6c55cc84f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                    <h1 className="mt-2 p-2 font-semibold ">Ask about your listing</h1>
                    <Link to='/register'>
                    <button className="w-32 h-9 p-0 ml-3 bg-white cursor-pointer rounded-xl border-2 border-[#ffc000] shadow-[inset_0px_-1px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Get more</span>
                   </button>
                </Link>

                 </div>

                 <div className="shadow-sm  w-64 h-64">
                    <img className="h-40 w-full rounded-lg" src="https://images.unsplash.com/photo-1692519722922-45fbbd3978ba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                    <h1 className="mt-2 p-2 font-semibold ">Support with your booking</h1>
                    <Link to='/register'>
                    <button className="w-32 h-9 p-0 ml-3 bg-white cursor-pointer rounded-xl border-2 border-[#ffc000] shadow-[inset_0px_-1px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Get more</span>
                   </button>
                </Link>

                 </div>

                 <div className="shadow-sm  w-64 h-64">
                    <img className="h-40 w-full rounded-lg" src="https://images.unsplash.com/photo-1588264111780-aff0aee30e55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                    <h1 className="mt-2 p-2 font-semibold ">Ask about the area</h1>
                    <Link to='/register'>
                    <button className="w-32 h-9 p-0 ml-3 bg-white cursor-pointer rounded-xl border-2 border-[#ffc000] shadow-[inset_0px_-1px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Get more</span>
                   </button>
                </Link>

                 </div>
            </div>

            <div className="mt-24 m-9">
               <h1 className="mt-7 grid place-items-center font-bold text-3xl">What others are saying</h1>
               {item.map((items,i)=>(
               <div key={i} className="flex m-2 mt-14 border-b p-2 ">
                <div className="h-30 w-30  mr-9  ">
                <img className="h-24 w-36 rounded-full " src={items.image} alt=""/>
                 </div>
                <div>
                    <h1 className="font-semibold text-lg ">{items.title}</h1>
                    <p>{items.description}</p>
                    <div className="flex justify-between items-center">
                      <ul className="flex gap-8 m-2 pb-6 mt-5">
                        <li className="underline">{items.name}</li>
                        <li className="flex items-center gap-2"> <MdOutlineAccessTime /> {items.date}</li>
                        <li className="flex items-center gap-2"><FaLocationDot className="fill-red-600"/>  {items.location}</li>
                      </ul>

                      <ul className="flex gap-8 m-2 pb-6 mt-5">
                        
                        <li className="flex items-center gap-2"><FcLike className="h-5 w-5"/> </li>
                        <li className="flex items-center gap-2"><IoMdShare  className="h-5 w-5"/></li>
                      </ul>

                      </div>

                      
                      
                    
                </div>

                
               
               
               </div>
                ))}
                 <div className="mb-24">
                  <h1 className="hover:text-blue-500 cursor-pointer text-xl text-yellow-500 font-semibold flex items-center place-items-center ml-5">Show more <FaLocationArrow className="ml-2 mt-2 h-7 w-7"/></h1>
                </div>
                
            </div>
            <div className="flex space-x-20  justify-between mt-5 m-3">
            <div className=" p-1 ml-3">
                <h1 className="font-bold text-2xl mb-2">What is in your mind?</h1>
               <p className=" text-xl mb-5">Start conversation with others. Discuss everthing </p>
               <Link to='/conversation'>
                    <button className=" w-96 h-12 bg-white cursor-pointer rounded-xl border-2 border-[#ffc000] shadow-[inset_0px_-2px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Start conversation</span>
                   </button>
                </Link>
            </div>

            
                <img className="h-72 w-1/2 rounded-lg ml-5" src="https://img.freepik.com/free-vector/hand-drawn-people-asking-questions-illustration_23-2148906555.jpg?w=826&t=st=1703934136~exp=1703934736~hmac=0ba29676427629a40c77c74e6becf3b3cacaeab60c74a25d71a296430b44d4fc" alt=""/>
                
            
            </div>

            <div className="bg-gray-200 mt-5 pt-5 pb-2 pl-3">
                            <ul className="flex space-x-5 cursor-pointer">
                                <li className="hover:underline hover:text-yellow-500"> . privacy</li>
                               <Link to='/contact'> <li className="hover:underline hover:text-yellow-500">. contact us</li> </Link>
                            <Link to='/help'> <li className="hover:underline hover:text-yellow-500">.help</li></Link>   
                            <Link to='/travel'>   <li className="hover:underline hover:text-yellow-500">. Travel Guide</li></Link>
                            </ul>

                        </div>

        </div>
     );
}
 
export default Community;
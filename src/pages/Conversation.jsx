import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const Conversation = () => {
    return ( 
        <div className="bg-white">
         <div className="sticky top-0 z-50 bg-white border-b flex justify-between items-center p-5">
                {/* left */}
              <div>
             <h1 className="font-semibold text-2xl m-3 flex items-center justify-between ">
             <Link to="/community">  <FaArrowLeft className="h-5 w-5 text-blue-400 flex mr-8" /> </Link> Community center</h1>
              </div>

                {/* right */}
                <div>
              <Link to="/">  <MdOutlineClose className="h-7 w-7 hover:text-red-600" /></Link>
                </div>

            </div>

            <div className="bg-white ml-10">
                <h1 className="text-4xl font-semibold m-5 p-5 mt-7 ">What do you want to share with others?</h1>
                <div className="ml-12">
                <textarea type='text'
            className=" bg-white w-1/2 h-64 text-sm  border-gray-300 border rounded outline:none px-4 py-2 mb-4 "
            placeholder="Type here..."
            maxLength='1000'
            

          />
  
    <div className="flex space-x-5 ">
             <button
            type="submit"
            className=" bg-[#ffc000] opacity-70 hover:opacity-100 w-56 h-10 text-white px-4 py-2 rounded"
          >
            Post
          </button>

          <button
            type="submit"
            className=" bg-red-500 opacity-70 hover:opacity-100 w-56 h-10 text-white px-4 py-2 rounded "
          >
            Cancle
          </button>
          
    </div>
          </div>
            </div>

        </div>
     );
}
 
export default Conversation;
import { Link } from 'react-router-dom';

const Latest = () => {
    return ( 
        <div className="bg-white ">
            <div className=" flex justify-around items-center ">
                <div className='ml-24'>
                <h1 className='font-bold text-7xl text-gray-500 mb-10'>Oops! </h1>
                <p className='text-xl text-gray-400 font-bold ml-1'>It's empty in here...</p>
                <Link to="/review"> 
                    <button className="mt-7 w-64 h-12 bg-white cursor-pointer rounded-xl border-2 border-[#ffc000] shadow-[inset_0px_-2px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                      <span className=" font-medium text-[#333] group-hover:text-white">Go back</span>
                   </button>
                   </Link>
                </div>

                <div>
                    <img className="h-96 mt-24 w-full" src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?size=626&ext=jpg&ga=GA1.2.593808536.1703664983&semt=ais" alt=""/>
                </div>
              

            </div>
            

        </div>
     );
}
 
export default Latest;
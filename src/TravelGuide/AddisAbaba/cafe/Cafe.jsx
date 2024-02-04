import { Link } from "react-router-dom";

const Cafe = () => {

    const data = [
        {
          imageLink:
            "https://plus.unsplash.com/premium_photo-1670445287762-372300cdcb77?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           name:"",
        
          },
        {
          imageLink:
            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:" ",
          },
        {
          imageLink:
            "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1587734361993-0033759da68b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1548848221-0c2e497ed557?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1559622214-f8a9850965bb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1610562275255-03b7fa0d4655?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];

    return ( 
        <div className="bg-white">
            <div className="relative">
            <img className="h-screen w-full" src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
            <h1 className="absolute top-20 m-10 text-white font-semibold text-6xl ">Drink, Eat  <span className="block ml-5">&</span> <span className="block text-[#ffc000]"> Enjoy</span></h1>
            <form className="bottom-0 left-5 absolute mt-16">
              <div className="flex items-center justify-center p-5">
  <div className="rounded-lg bg-transparent p-5">
    <div className="flex">
      <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
        <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
      <input type="text" className=" w-80  bg-white pl-2  text-base border-none  outline-0" placeholder="Hotel name" id=""/>
      <input type="button" value="Search" className="bg-[#ffc000] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-yellow-600 transition-colors"/>
    </div>
  </div>
</div>
              </form>
            </div>



            <div className="mt-16">
      <h1 className="font-semibold text-3xl mb-5">Popular Cafe's in Addis</h1> 
  
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
      {data.map(({ imageLink, name }, index) => (
         <div key={index} className="relative">
          <img
            className="cursor-pointer hover:opacity-80 h-40 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
          <h1 className="top-10 absolute left-20 text-white font-semibold text-xl p-2  hover:visible">{name}</h1>
        </div>
      ))}
    </div>
  

 

            </div>

            <div className=" ">
               
    <div className='mt-10'>
      <h1 className='font-semibold text-3xl m-5 flex justify-between items-center'>Cafe's in Top Destinations <span className='text-xl underline hover:text-yellow-400 cursor-pointer'>see all</span></h1>
      <div className='flex justify-between '>
        <div className='relative'>
        <img className="rounded-lg hover:opacity-95 h-64 w-72" src='https://images.unsplash.com/photo-1626598442658-ea6a1a5943df?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        <h1 className='text-[#ffc000]  top-52 p-3 absolute font-semibold text-2xl hover:underline cursor-pointer hover:text-yellow-300 '>Piassa</h1>
        </div>
        
       <Link to="/mexico"><div className='relative'>
        <img className="rounded-lg hover:opacity-95 h-64 w-72" src='https://images.unsplash.com/photo-1624314138470-5a2f24623f10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        <h1 className='text-[#ffc000]  top-52 p-3 absolute font-semibold text-2xl hover:underline cursor-pointer hover:text-yellow-300 '>Mexico</h1>
        </div></Link> 
        
        <div className='relative'>
        <img className="rounded-lg hover:opacity-95 h-64 w-72" src='https://images.unsplash.com/photo-1588264111780-aff0aee30e55?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        <h1 className='text-[#ffc000]  top-52 p-3 absolute font-semibold text-2xl hover:underline cursor-pointer hover:text-yellow-300 pl-10  '>6 killo</h1>
        </div>
        
        <div className='relative'>
        <h1 className=' text-[#ffc000] top-52 p-3 absolute font-semibold text-2xl hover:underline cursor-pointer hover:text-yellow-300 pl-10 '>AU</h1> 
        <img className="rounded-lg hover:opacity-85 h-64 w-72" src='https://images.unsplash.com/photo-1594663582551-5f3c037cd587?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>

        </div>
       
        
      </div>
    </div>
            </div>

            <div className="bg-gray-100 mt-5 pt-5 pb-2 pl-3 ">
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
 
export default Cafe;
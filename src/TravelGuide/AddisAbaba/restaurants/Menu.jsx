
import { PiForkKnifeFill } from "react-icons/pi";

const Menu = () => {
    return ( 
        <div className="bg-white">
            <div className="flex m-5 p-5 bg-slate-900 justify-between items-center">
                {/* left side */}
                <div className=" w-3/5">
                    <h1 className="font-semibold text-white grid place-items-center ">MENU</h1> <span className="block pl-7 grid place-items-center text-white font-semibold underline decoration-yellow-500 decoration-4 p-1 mb-8">OF THE WEEK</span>
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                         <h1 className="text-white flex gap-10 items-center pb-2">Food Name 01 <span className="text-yellow-500">$112.5</span></h1>
                         <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                        </div>
                        <div>
                         <h1 className="text-white flex gap-20 items-center pb-2">Food Name 02 <span className="text-yellow-500">$112.5</span></h1>
                         <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                        </div>
                        <div>
                         <h1 className="text-white flex gap-20 items-center pb-2">Food Name 03 <span className="text-yellow-500">$112.5</span></h1>
                         <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                        </div>
                        <div>
                         <h1 className="text-white flex gap-20 items-center pb-2">Food Name 04 <span className="text-yellow-500">$112.5</span></h1>
                         <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                        </div>
                        <div>
                         <h1 className="text-white flex gap-20 items-center pb-2">Food Name 05 <span className="text-yellow-500">$112.5</span></h1>
                         <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                        </div>
                        <div>
                         <h1 className="text-white flex gap-20 items-center pb-2">Food Name 06 <span className="text-yellow-500">$112.5</span></h1>
                         <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                        </div>


                        
                    </div>
                </div>

                {/* right side */}
                <div className="w-1/2">
                <PiForkKnifeFill className="h-7 w-7 text-yellow-500"/>
                <p className="text-gray-400 font-lobster mb-10">Yod Abysinnia restaurant</p>
                
                <h1 className=" text-yellow-500 font-lobster text-5xl pl-10">Menu</h1>
                 <h2 className="text-gray-400 pl-28  font-lobster">Breakfast & Dinner</h2>
                <img className="h-64  mt-20 rounded-lg" src="https://images.unsplash.com/photo-1516684542079-927175cedbb0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="food"/>
                </div>
                
            </div>
              
              <div className="bg-slate-900 mt-5  m-5 p-5">
               
            <div className="flex">
                <div>
            <h1 className="font-semibold mb-10 text-white grid place-items-center underline decoration-yellow-500 decoration-4 ">APPETIZER</h1>
            <div className="grid grid-cols-2 gap-10 m-3">
               
                <div>
                         <h1 className="text-white flex gap-10 items-center pb-2">Food Name 01 <span className="text-yellow-500">$112.5</span></h1>
                         <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                        </div>
                        <div>
                         <h1 className="text-white flex gap-10 items-center pb-2">Food Name 02 <span className="text-yellow-500">$112.5</span></h1>
                         <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                        </div>
                        <div>
                         <h1 className="text-white flex gap-10 items-center pb-2">Food Name 03 <span className="text-yellow-500">$112.5</span></h1>
                         <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                        </div>
           
            </div>
            </div>

             <div>
                <h1 className="font-semibold mb-10 text-white grid place-items-center underline decoration-yellow-500 decoration-4 ">SOUP</h1>
            <div className="grid grid-cols-2 gap-10 m-3">
               
               <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Food Name 01 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
                       <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Food Name 02 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
                       <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Food Name 03 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
          
           </div>
           </div>
           
           </div>

           <div className="flex mt-16">
                <div>
            <h1 className="font-semibold mb-10 text-white grid place-items-center underline decoration-yellow-500 decoration-4 ">MAIN COURSE</h1>
            <div className="grid grid-cols-2 gap-10 m-3">
               
                      <div>
                        <img className="h-28 w-48 mb-3" src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                         <h1 className="text-white flex gap-10 items-center pb-2">Food Name 01 <span className="text-yellow-500">$112.5</span></h1>
                         <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                        </div>
                        <div>
                        <img className="h-28 w-48 mb-3" src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                         <h1 className="text-white flex gap-10 items-center pb-2">Food Name 02 <span className="text-yellow-500">$112.5</span></h1>
                         <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                        </div>
                        <div>
                        <img className="h-28 w-48 mb-3" src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                         <h1 className="text-white flex gap-10 items-center pb-2">Food Name 03 <span className="text-yellow-500">$112.5</span></h1>
                         <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                        </div>
           
            </div>
            </div>

             <div>
                <h1 className=" font-semibold mb-10 text-white grid place-items-center underline decoration-yellow-500 decoration-4  ">SALADS</h1>
            <div className="grid grid-cols-2 gap-10 m-3">
               
               <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Food Name 01 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
                       <img className="h-28 w-48 rounded-3xl" src="https://img.freepik.com/free-photo/closeup-delicious-roasted-meat-with-vegetables-lights_181624-43643.jpg?w=996&t=st=1705131197~exp=1705131797~hmac=398be0153bf8f66f1b42a86eb4df7fe377d94ab5db2444527ea80dd2eab96d9a" alt=""/>
                       <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Food Name 02 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
                       <img className="h-28 w-48 rounded-3xl" src="https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34705.jpg?w=996&t=st=1705131416~exp=1705132016~hmac=4b08d5e5b79b10fbd2f4b1299e86ab8f0ecb033a91c99da38a941420fb993618" alt="" />
                       <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Food Name 03 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
                       <img className="h-28 w-48 rounded-3xl" src="https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34705.jpg?w=996&t=st=1705131416~exp=1705132016~hmac=4b08d5e5b79b10fbd2f4b1299e86ab8f0ecb033a91c99da38a941420fb993618" alt="" />
          
           </div>
           </div>
           
           </div>

           <div className="mt-16">
                <h1 className="font-semibold mb-10 text-white grid place-items-center underline decoration-yellow-500 decoration-4 ">SPECIAL OFFERS</h1>
            <div className="grid grid-cols-2 gap-10 m-3">
               
               <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Food Name 01 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
                       <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Food Name 01 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
                       <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Food Name 01 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
                       <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Food Name 01 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
                      
          
           </div>
           </div>
           <div className="flex mt-16">
           <div className="w-1/2">
                <h1 className="font-semibold mb-10 text-white grid place-items-center underline decoration-yellow-500 decoration-4 ">DRINKS & TEA</h1>
            <div className="grid grid-cols-2 gap-10 m-3">
               
               <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Coctail Name 01 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
                       <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Coctail Name 02 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
                       <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Coctail Name 03 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
                       <div>
                        <h1 className="text-white flex gap-10 items-center pb-2">Coctail Name 04 <span className="text-yellow-500">$112.5</span></h1>
                        <p className="text-balance text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint mollitia distinctio natus quis.</p>
                       </div>
                      
          
           </div>
           </div>

           <div className="w-1/2 mt-5">
            
            <img className="h-80 w-96  rounded-xl" src="https://images.unsplash.com/photo-1576505944072-9d22786cb600?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
           </div>
            </div>
           
            </div>
            

        </div>
     );
}
 
export default Menu;
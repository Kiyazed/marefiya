import { Link } from "react-router-dom";

const Sport = () => {
    return (  
        <div className="mt-10">
        <div className=" flex gap-5">
            <div className="space-y-5">
              <div className="h-auto w-80 rounded-3xl border ">
                <img className="relative h-96 w-80 rounded-t-3xl" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                 <h1 className="absolute top-5 left-5 p-1 w-20 rounded-md pl-5 bg-[#ffc000]">running</h1>
                <h1 className="font-semibold pl-4 text-xl mt-3">Lorem ipsum is altyhd</h1>
                <p className="p-4 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quod incidunt, rerum autem, soluta laudantium obcaecati mollitia hic dicta exercitationem eligendi eius illo qui? Ipsum tenetur a optio fugiat voluptates.</p>
              </div>
              <div className="h-96 w-80 relative border rounded-3xl">
                <img className=" h-56 w-80 rounded-t-3xl" src="https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                 <h1 className="absolute top-5 left-5 p-1 w-20 rounded-md pl-5 bg-[#ffc000]">Cycling</h1>
                <h1 className="font-semibold pl-4 text-xl mt-3 p-1">Lorem ipsum is altyhd</h1>
                <p className="pl-3 pr-3 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quod incidunt, rerum autem, soluta laudantium obcaecati mollitia hic dicta exercitationem eligendi eius illo qui?</p>
              </div>

            </div>
            <div className="space-y-5">
               <Link to="/unesco"><div className="h-96 w-80 relative border rounded-3xl">
                <img className=" h-56 w-80 rounded-t-3xl" src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                 <h1 className="absolute top-5 left-5 p-1 w-24 rounded-md pl-5 bg-blue-600">Basketball</h1>
                <h1 className="font-semibold pl-4 text-xl mt-3 p-1">Lorem ipsum is altyhd</h1>
                <p className="pl-3 pr-3 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quod incidunt, rerum autem, soluta laudantium obcaecati mollitia hic dicta exercitationem eligendi eius illo qui?</p>
               </div></Link>
              <div className="h-auto w-80 rounded-3xl border relative">
                <img className=" h-96 w-80 rounded-t-3xl" src="https://images.unsplash.com/photo-1510925758641-869d353cecc7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                 <h1 className="absolute top-5 left-5 p-1 w-28 rounded-md pl-5 bg-[#ffc000]"> </h1>
                <h1 className="font-semibold pl-4 text-xl mt-3">Lorem ipsum is altyhd</h1>
                <p className="p-4 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quod incidunt, rerum autem, soluta laudantium obcaecati mollitia hic dicta exercitationem eligendi eius illo qui? Ipsum tenetur a optio fugiat voluptates.</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="h-auto w-80 relative  rounded-3xl border ">
                <img className="h-96 w-80 rounded-t-3xl" src="https://images.unsplash.com/photo-1560089000-7433a4ebbd64?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                 <h1 className="absolute top-5 left-5 p-1 w-32 rounded-md pl-5 bg-purple-500">Swimming</h1>
                <h1 className="font-semibold pl-4 text-xl mt-3">Lorem ipsum is altyhd</h1>
                <p className="p-4 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quod incidunt, rerum autem, soluta laudantium obcaecati mollitia hic dicta exercitationem eligendi eius illo qui? Ipsum tenetur a optio fugiat voluptates.</p>
              </div>
              <div className="h-96 w-80 relative border rounded-3xl">
                <img className=" h-56 w-80 rounded-t-3xl" src="https://images.unsplash.com/photo-1489730955284-365747312681?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                 <h1 className="absolute top-5 left-5 p-1 w-20 rounded-md pl-5 bg-pink-500">Cycling</h1>
                <h1 className="font-semibold pl-4 text-xl mt-3 p-1">Lorem ipsum is altyhd</h1>
                <p className="pl-3 pr-3 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quod incidunt, rerum autem, soluta laudantium obcaecati mollitia hic dicta exercitationem eligendi eius illo qui?</p>
              </div>

            </div>
            </div>
            
          

        </div>
    );
}
 
export default Sport;
import { Link } from "react-router-dom";
const Verify = () => {
    return ( 
        <div>
            <div class="bg-gray-100 items-center flex justify-center m-3 ">
               <div class="text-left border-2 bg-white shadow-lg inline-block justify-center p-8 w-1.5/2">
                  <h2 class="text-2xl font-bold text-gray-900 mb-4">Verification</h2>

                <form class="flex flex-col">
                <input type="text" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-[#ffc000] transition ease-in-out duration-150" placeholder="Full Name" />
                <input type="email" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-[#ffc000] transition ease-in-out duration-150" placeholder="Email" />
                <input type="date"  class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-[#ffc000] transition ease-in-out duration-150" placeholder="Date of birth" onfocus="(this.type='date')" onblur="(this.type='text')" id='date'  />
      <div>
        <h3 className="font-medium py-3 text-lg"> Are you legal owner or authorized property manager of listings?</h3>
         <div class="dark:bg-black/10 space-x-10 text-start">
             <label class="text-black">
               <input class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" /> Yes 
              </label>
              <label class="text-black">
               <input class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" /> No 
              </label>
      </div>
      </div>

      <div>
        <h3 className="font-medium py-3 text-lg"> Have you provided valid and accurate identification information?</h3>
         <div class="dark:bg-black/10 space-x-10 text-start">
             <label class="text-black">
               <input class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" /> Yes 
              
              </label>
              <label class="text-black">
               <input class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" /> No 
              
              </label>
         </div>
              
         </div>

         <div>
        <h3 className="font-medium py-3 text-lg"> Have you provided acceptable proof of address?</h3>
         <div class="dark:bg-black/10 space-x-10 text-start">
             <label class="text-black">
               <input class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" /> Yes 
              
              </label>
              <label class="text-black">
               <input class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" /> No 
              
              </label>
         </div>
              
         </div>

         <div>
        <h3 className="font-medium py-3 text-lg"><a href='#'className="text-black hover:text-blue-500 hover:underline" > Have you agreed to Terms of services and Comminity standards? </a></h3>
         <div class="dark:bg-black/10 space-x-10 text-start">
             <label class="text-black">
               <input class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" /> Yes 
              
              </label>
              <label class="text-black">
               <input class="m-2 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" /> No 
              
              </label>
         </div>
              
         </div>

         <div className="border-t p-4 mb-5 mt-10 space-x-96">
      <Link to='/availability'>
                    <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-blue-500 shadow-[inset_0px_-2px_0px_1px_blue] group hover:bg-blue-500 transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Back</span>
                   </button>
                </Link>
                <Link to='/success'>
                    <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#ffc000] shadow-[inset_0px_-2px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Next</span>
                   </button>
                </Link>
      </div>

    </form>

   
  </div>
</div>

        </div>
     );
}
 
export default Verify;
import React from "react";
import { Link } from 'react-router-dom';

const Register = () => {
    const onDateFocus = (e) => (e.target.type = "date");
     const onDateBlur = (e) => (e.target.type = "text");
    return ( 
        <section className="flex justify-between min-h-screen items-center ">

            {/* form  */}
            <div className=" max-w-3xl p-5 bg-white sm:w-1/2 w-screen h-screen">
            <div class="flex flex-col m-10 items-center justify-center h-screen">
              <div class="w-full m-6 max-w-md bg-white rounded-lg shadow-md p-6"> 
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
    <form class="flex flex-col">
      <input placeholder="First Name" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
      <input placeholder="Last Name" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
      <input placeholder="Email" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />
      <input placeholder="Password" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
      <input placeholder="Confirm Password" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
      <label class="text-sm mb-2 text-gray-900 cursor-pointer" for="gender">
        Gender
      </label>
      <select class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender" >
        <option value="male">Male</option>
        <option value="female">Female</option>
        
      </select>
      <label class="text-sm mb-2 text-gray-900 cursor-pointer" for="dbo">
        Date of birth
      </label>
      <input class="bg-gray-100 text-gray-900 border-0 rounded-md p-2" id="age" type="date" />
      <p class="text-gray-900 mt-4"> Already have an account? <a class="text-sm text-blue-500 -200 hover:underline mt-4" href="#">Login</a></p>
      <Link to='/login'>
                      <button className="w-96 mt-3 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#ffc000] shadow-[inset_0px_-2px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                                <span className="font-medium text-[#333] group-hover:text-white">Sign Up</span>
                      </button>
                 </Link>
    </form>
  </div>
</div>
</div>








            {/* image */}
            <div className=" w-1/2 sm:block hidden ">
              <img className="h-screen" src="https://img.freepik.com/free-photo/3d-view-house-model_23-2150761168.jpg?t=st=1701355892~exp=1701359492~hmac=b59ac1825619a6d60df0ffa1fcfb3a12a8264dfceb57bcf33195aee6349d81c9&w=740" alt=""/>
                
            </div>
        </section>
     );
}
 
export default Register;
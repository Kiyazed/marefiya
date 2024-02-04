import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { FaBuildingColumns } from "react-icons/fa6";
import { BsBuildings } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaHotel } from "react-icons/fa";
import { BiCaretDownCircle } from "react-icons/bi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { motion, useScroll } from "framer-motion";
import Typewriter from 'typewriter-effect';




const propertyTypes = [
  { id: 1, name: 'Apartment', icon:<GiFamilyHouse className="h-5 w-5"/> },
  { id: 2, name: 'House', icon:<FaHouse className="h-5 w-5"/>},
  { id: 3, name: 'Villa', icon:<FaBuildingColumns className="h-5 w-5"/> },
  { id: 4, name: 'Realstate', icon:<BsBuildings className="h-5 w-5"/> },
  { id: 5, name: 'Codominium', icon:<HiOutlineBuildingOffice2 className="h-5 w-5"/>},
  { id: 6, name: 'Hotel', icon:<FaHotel className="h-5 w-5"/> },


];

const amenities = [
  {"type":"Kitchen",
  icon: ""
 },
 {type:"Fireplace",
 icon: ""
 },
 {type:"Wifi",
  icon:""
 },
 {type:"Private balcony",
  icon:""
 },
 {type:"Swimming pool",
  icon:""
 },
{type:"Fitness center",
  icon:""
 },
 {type:"Laundry",
  icon:""
 },
 {"type":"Parking",
  "icon":""
 },
 {"type":"Garden",
  "icon":""
 },
 {"type":"Cafe",
  "icon":""
 }
]
const Listing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedType, setSelectedType] = useState('');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const selectType = (type) => {
      setSelectedType(type);
      setIsOpen(false);
    };

    const { scrollYProgress } = useScroll();
    
    return ( 
      
        <>
           <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-3 bg-yellow-500 origin-top-left" />  
           
       <div className="bg-gray-100 items-center flex justify-center m-3  ">
       

        <div className="text-left border-2 bg-white shadow-lg inline-block justify-center w-1.5/2">
        <h2 className="font-bold text-2xl my-5 ml-16 text-yellow-500 m-5 items-center">
        <Typewriter  onInit={(typewriter)=>{
        typewriter
        .typeString("Marefiya is your gateway to hassle-free renting")
        .pauseFor(1000)
       
        .start();
      }}/>
          </h2>
            <div className="mt-8 mx-5">

              <div className="border-b shadow-sm p-5">
              <h2 className="font-bold text-lg mx-5"> Step 1: Property Information</h2>
         
              <h5 className="py-3 font-medium mx-5 text-lg"> What is your property type?</h5>
        <div className="relative  inline-block text-left">

        <div>
          <span className="relative rounded-md shadow-sm ml-5">
            <button
              type="button"
              className="inline-flex justify-between w-96 px-10 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              id="property-type-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={toggleDropdown}
            >
              <span className="mr-2 ">{selectedType ? selectedType.icon : ''}</span>
              {selectedType ? selectedType.name : 'Select Property Type'}
              <BiCaretDownCircle className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </button>
          </span>
        </div>

        {isOpen && (
          <div
            className="absolute z-10 origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="property-type-menu"
            tabindex='-1'
          >
            <div className="py-1" role="none">
              {propertyTypes.map((type) => (
                <button
                  key={type.id}
                  className="inline-flex px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400 hover:text-gray-900 w-full text-left"
                  role="menuitem"
                  onClick={() => selectType(type)}
                >
                  <span className="mr-20">{type.icon}</span>
                  {type.name}
                </button>
              ))}
            </div>
          </div>
        )}
        </div>

        <div>
            <h5 className="py-3 font-medium mx-5 text-lg"> How many bedrooms guests can use?</h5>
             <label className="mx-5">
                <input className="w-96 bg-white  border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" type="text" placeholder="Number of bedrooms"/>
             </label>
             <h5 className="py-3 font-medium mx-5 text-lg"> How many bathrooms guests can use?</h5>
             <label className="mx-5">
             <input className="w-96 bg-white  border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" type="text" placeholder="Number of bathrooms"/>
             </label>

             <h5 className="py-3 font-medium mx-5 text-lg"> Number of guests allowed to stay?</h5>
             <label className="mx-5">
             <input className="w-96 bg-white  border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" type="text" placeholder="Number of guests"/>
             </label>
              

        </div>
       
        </div>



       <div className="my-5 mx-5 border-b mb-5">
        <h2 className="font-bold text-lg mx-5"> Step 2: Amenities</h2>
        <h5 className="py-3 font-medium mx-5 text-lg"> Which amenities do you provide for your guests?</h5>
        <div className="grid grid-cols-3">
            {amenities.map((item,index)=>(
              
                  <ul key={index} className=" mx-5 flex gap-5 bg-white m-3 max-w-[300px] rounded-xl hover:bg-gray-100 hover:scale-110 duration-700 p-5 ">
                    <li className="my-1 p-2 gap-y-3 border-2 flex shadow-md w-40 h-20  bg-white  border-gray-300 rounded-md hover:border-2 hover:border-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                      <span className="space-x-5">{item.type}</span>  {item.icon} </li>
                    
                
                  </ul>
                  
            
))}
            
        </div>
        <div className="my-5 mx-5 mb-5" >
          <h3 className="font-medium py-3 text-lg">Are there any additional amenities you offer that are not listed above?</h3>
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here</label>
           <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
        
        </div>
         
        <div className="my-5 mx-5 border-b mb-5">
        <h2 className="font-medium py-3 text-lg "> Are there any restrictions or limitations on the use of amenities?</h2>
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here</label>
           <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
        
        </div>

        <div className="my-5 mx-5 border-b mb-5">
        <h2 className="font-medium py-3 text-lg "> Is there any extra cost associated with any of the amenities?</h2>  
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here </label>
           <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
        </div>

        <div className="my-5 mx-5 border-b mb-5">
        <h2 className="font-medium py-3 text-lg"> Is there any specific guidelines or rules guests should follow regarding the use of amenities?</h2>
        
          
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type here</label>
           <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your description here..."></textarea>
        
        </div>


         
        </div>
        
       


      </div>
      <div className="ml-20 mb-5 mt-10 space-x-96">
      <Link to='/'>
                    <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-blue-500 shadow-[inset_0px_-2px_0px_1px_blue] group hover:bg-blue-500 transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Back</span>
                   </button>
                </Link>
                <Link to='/location'>
                    <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#ffc000] shadow-[inset_0px_-2px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out">
                      <span className="font-medium text-[#333] group-hover:text-white">Next</span>
                   </button>
                </Link>
      </div>
      </div>
      </div>
      </>
     );
}
 
export default Listing;
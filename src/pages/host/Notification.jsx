
import { BsHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom"; 
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";


const Notification = () => {

  const [menuOpen,setMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setMenuOpen(!menuOpen);
  };

const items = [
    {
        title:'Notification title',
        description:'Lorem ipsum ',
        image:'https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?w=740&t=st=1703683925~exp=1703684525~hmac=f4700884ef4fcc987998033216c372c6ea229e2f0ae19cf2cd6d3bb9e6c6b13e',
        icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
        <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>  ,
      time:'1h' 
    },
    {
        title:'Notification title',
        description:'Lorem ipsum ',
        image:'https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?w=996&t=st=1703684923~exp=1703685523~hmac=4d747c69a5d14fd2c5cfbd8fc68c181792542eb10ded88f7ad23783b0cc9c3a2'
      , icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
      <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
    </svg>  ,
    time:'3m'          
    },
    {
        title:'Notification title',
        description:'Lorem ipsum',
        image:'https://img.freepik.com/free-photo/african-american-student-walking-street-talking-phone_1303-12696.jpg?t=st=1703683907~exp=1703684507~hmac=5d343ebc58593aaf0156c9c6c685fd7cc596feb2242cd7444b247ba18ad929f8'
       , icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
       <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
     </svg> ,
     time:'45m'  
    },
    {
        title:'Notification title',
        description:'Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        image:'https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?w=996&t=st=1703685032~exp=1703685632~hmac=fc17c8d3f7a75a5fe3467df570b09e622445df88d8f2f37dfe2cf2a0bddcab76'
    ,  icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
    <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
  </svg>  ,
  time:'2h' 
    },
    {
        title:'Transfer to you',
        description:'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        image:'https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?w=740&t=st=1703683925~exp=1703684525~hmac=f4700884ef4fcc987998033216c372c6ea229e2f0ae19cf2cd6d3bb9e6c6b13e'
     ,  icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
     <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
   </svg> ,
   time:'5h '  
    },
    {
        title:'Notification title',
        description:'Lorem ipsum ',
        image:'https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?w=740&t=st=1703683925~exp=1703684525~hmac=f4700884ef4fcc987998033216c372c6ea229e2f0ae19cf2cd6d3bb9e6c6b13e'
      , icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
      <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
    </svg> ,
    time:'21m'  
    },
];

    return ( 

        <div className=" bg-white w-full">
          <div className="sticky top-0 z-50 bg-white border-b flex justify-between items-center p-5">
                {/* left */}
              <div>
             <h1 className="font-semibold text-2xl m-3 flex items-center justify-between ">
             <Link to="/review">  <FaArrowLeft className="h-5 w-5 text-blue-400 flex mr-8" /> </Link> Notification</h1>
              </div>

                {/* right */}
                <div>
              <Link to="/">  <MdOutlineClose className="h-7 w-7 hover:text-red-600" /></Link>
                </div>

            </div>

            <div className="flex ">
                

                <div className="w-2/3 mt-5">
            {items.map((item)=>(
            <div className="flex bg-gray-50 shadow-sm border rounded-2xl p-2 ml-10 m-2 ">
            
            <div className="ml-2 mr-5 mt-2">
               <img className="w-20 h-20 rounded-full" src={item.image} alt=""/> 
             </div>

              <div className=" w-96 p-2">
                <ul className="flex justify-between gap-64 ">
                  <li className="font-semibold text-lg flex gap-64 text-nowrap ">{item.title} </li>
                  <li className="flex items-center gap-9 text-sm text-gray-500 relative ">{item.time}
               
                  
                   <BsThreeDots onClick={handleMenuClick} />
                    {menuOpen && (
                      <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded shadow-lg z-10 p-2">
                        <ul className="">
                          <li className="py-1  ">settings</li>
                          <li>prof</li>
                        </ul>
                      </div>
                    )}
                   </li>
                  
                </ul>
               
             <p className="text-ellipsis overflow-hidden flex justify-between">{item.description}</p>
            
             
             </div>
            

             
             </div>
             ))}

             <h1 className="font-semibold text-2xl pl-5 m-5 mt-10 border-t p-2">This Week</h1>
  
            {items.map((item)=>(
            <div className="flex bg-white shadow-sm border-b rounded-md  p-2 ml-10 m-2 ">
            
            <div className="ml-2 mr-5 mt-2">
               <img className="w-20 h-20 rounded-full" src={item.image} alt=""/> 
             </div>

              <div className=" w-96 p-2">
              <ul className="flex justify-between gap-64 ">
                  <li className="font-semibold text-lg flex gap-64 text-nowrap ">{item.title} </li>
                  <li className="flex items-center gap-9 text-sm text-gray-500  ">1w   <BsThreeDots />
                  
                  </li>
                  
                </ul>
             <p className="text-ellipsis overflow-hidden flex justify-between">{item.description}  </p>
             
             
             </div>
            

             
             </div>
             ))}
             </div>

             <div className="w-1/2 bg-white ">
                <div className="fixed top-38">
            
                    <img className="sticky top-32 z-50 h-96" src="https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?w=1060&t=st=1703689243~exp=1703689843~hmac=f403ae52dbbae7e48364b97a37dc31c7d588fc7e2edc6f0c01bcbc84e89b38da" alt=""/>
                
                <div>
                    <ul className="flex space-x-3 mt-8 p-2 cursor-pointer text-balance text-sm">
                      <Link to="/about"><li className="hover:underline hover:text-yellow-600 ">About</li></Link>  
                        <Link to="/help">  <li className="hover:underline hover:text-yellow-600 ">Help </li></Link>
                        <li className="hover:underline hover:text-yellow-600 ">setting</li>
                        <li className="hover:underline hover:text-yellow-600 ">privacy & terms</li>
                        <li className="hover:underline hover:text-yellow-600 ">property</li>
                      <Link to='/travel'>  <li className="hover:underline hover:text-yellow-600 ">Travel Guide</li></Link>
                        <li className="hover:underline hover:text-yellow-600 ">guest</li>
                    </ul>
                    <p className="flex"> <span className="text-yellow-600 p-2 "><BsHouseFill className="h-5 w-5 ml-2 mb-5" /> </span> Marefiya 2024</p>
                </div>
                </div>
        </div>
        </div>
        </div>

     );
}
 
export default Notification;
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { PiCoffeeFill } from "react-icons/pi";
import { BiCoffeeTogo } from "react-icons/bi";
import { GiCakeSlice } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const items = [
    {
        icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-yellow-400"
        viewBox="0 0 20 20"
        fill="currentColor"> <path
          d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
      </svg>
    }
  ];

const Kaldis = () => {
    return ( 
        <div className="bg-white">
             <div className="sticky top-0 z-50 bg-white border-b flex justify-between items-center p-5">
                {/* left */}
              <div>
             <h1 className="font-semibold text-2xl m-3 flex items-center justify-between ">
             <Link to="/AA">  <FaArrowLeft className="h-5 w-5 text-blue-400 flex mr-8" /> </Link> Kaldi's Coffee</h1>
              </div>

                {/* right */}
                <div>
              <Link to="/">  <MdOutlineClose className="h-7 w-7 hover:text-red-600" /></Link>
                </div>

            </div>

            <div className="relative">
 <img class="h-96 w-full max-w-full  rounded-lg object-cover object-center md:h-[480px]"
   src="https://img.freepik.com/free-photo/close-up-hands-barista-make-latte-coffee-art-paint_1150-12161.jpg?w=996&t=st=1705139974~exp=1705140574~hmac=d782e3524290c88ba079524ca2fac23c5f070ac2f6e6cec7e1c482f52b5303dd"
   alt="" />
   <h1 className="absolute  top-40 m-6 ml-16 text-yellow-400 text-4xl font-lobster"><span className="block text-2xl">Welcome!</span> We serve the richest coffee in the city!</h1>
  <button className=" bg-[#ffc000] w-36 absolute  top-60 m-6 ml-24 rounded-3xl p-1 mt-9 hover:bg-yellow-300">Our Menu</button>
</div>

<div className="flex place-content-center gap-24 mt-10 m-5 ml-32">
<p className="font-lobster"><PiCoffeeFill className="h-16 w-16 text-yellow-500 block"/>
  Hot Coffee</p>
  <p className="font-lobster"><BiCoffeeTogo className="h-16 w-16 text-yellow-500" /> Cold Coffee </p>
  <p className="font-lobster"><GiCakeSlice className="h-16 w-16 text-yellow-500"/> Dessert </p>
  <p className="font-lobster"><SiBuymeacoffee className="h-16 w-16 text-yellow-500"/> Cup Coffee</p>
</div>

<div className="mt-16 m-5">
    <h1 className="text-3xl font-semibold m-5 flex place-content-center">Special Coffee</h1>
    <div className="flex gap-4 ">
        <div className="w-96 h-96 bg-gray-50">
            <img className="w-76 h-76" src="https://img.freepik.com/free-photo/close-up-hands-barista-make-latte-coffee-art-paint_1150-12161.jpg?w=996&t=st=1705139974~exp=1705140574~hmac=d782e3524290c88ba079524ca2fac23c5f070ac2f6e6cec7e1c482f52b5303dd" alt=""/>
            <h1 className="text-xl font-semibold mt-2 p-1">Iced Coffee</h1>
            <p className=" p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h1 className="font-semibold text-lg p-1 ">$ 19.9</h1>
        </div>

        <div className="w-96 h-96 bg-gray-50">
            <img className="w-76 h-76" src="https://img.freepik.com/free-photo/close-up-hands-barista-make-latte-coffee-art-paint_1150-12161.jpg?w=996&t=st=1705139974~exp=1705140574~hmac=d782e3524290c88ba079524ca2fac23c5f070ac2f6e6cec7e1c482f52b5303dd" alt=""/>
            <h1 className="text-xl font-semibold mt-2 p-1">Macchiato</h1>
            <p className=" p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h1 className="font-semibold text-lg p-1 pb-2">$ 39.5</h1>
        </div>

        <div className="w-96 h-96 bg-gray-50">
            <img className="w-76 h-76" src="https://img.freepik.com/free-photo/close-up-hands-barista-make-latte-coffee-art-paint_1150-12161.jpg?w=996&t=st=1705139974~exp=1705140574~hmac=d782e3524290c88ba079524ca2fac23c5f070ac2f6e6cec7e1c482f52b5303dd" alt=""/>
            <h1 className="text-xl font-semibold mt-2 p-1">Cappuccino</h1>
            <p className=" p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h1 className="font-semibold text-lg p-1 pb-2">$ 20.6</h1>
        </div>

    </div>

</div>

<div className="mt-16 m-5">
    <h1 className="text-3xl font-semibold m-5 flex place-content-center">Special Dessert</h1>
    <div className="flex gap-4 ">
        <div className="w-96 h-96 bg-gray-50">
            <img className="w-76 h-64" src="https://img.freepik.com/free-photo/eastern-sweets_2829-13987.jpg?w=996&t=st=1705164152~exp=1705164752~hmac=76b58b501a11fac0b9d2d90513e58d03ebf4d67bce89632405257416e140ca2b" alt=""/>
            <h1 className="text-xl font-semibold mt-2 p-1">Baklava</h1>
            <p className=" p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h1 className="font-semibold text-lg p-1 ">$ 10.9</h1>
        </div>

        <div className="w-96 h-96 bg-gray-50">
            <img className="w-76 h-64" src="https://img.freepik.com/free-photo/view-delicious-dessert_23-2150777847.jpg?t=st=1705164297~exp=1705167897~hmac=c64fcdced168ab9bcbb3c4b9494711c27224f60fed1c7edbb18ccc195f6152aa&w=996" alt=""/>
            <h1 className="text-xl font-semibold mt-2 p-1">Black Forest cake</h1>
            <p className=" p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h1 className="font-semibold text-lg p-1 ">$ 23.9</h1>
        </div>

        <div className="w-96 h-96 bg-gray-50">
            <img className="w-76 h-64" src="https://img.freepik.com/free-photo/indulgent-berry-cheesecake-slice-wood-table-generated-by-ai_188544-9811.jpg?w=1060&t=st=1705164086~exp=1705164686~hmac=56f6502cecd1e1211cff6dbe66662c6f6e4b6d81c039a9421afb97994909d455" alt=""/>
            <h1 className="text-xl font-semibold mt-2 p-1">Tiramisu</h1>
            <p className=" p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h1 className="font-semibold text-lg p-1 ">$ 129.9</h1>
        </div>

    </div>

</div>

<div className=" mt-16 bg-gray-100 ">
    <h1 className="font-lobster place-content-center flex m-2 pt-4">come and join</h1>
    <h1 className="font-semibold text-xl mb-2 place-content-center flex">CUSTOMERS</h1>
    <div className="flex gap-4 m-3 mb- ">
        <div className="w-96 h-auto bg-white p-2 border shadow-sm">
            <div className="flex items-center justify-between gap-6">
               <p className="flex items-center gap-2"> <img className="rounded-full h-10 w-10" src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                <span className="font-semibold">John Doe</span> 
               </p>
               <p>
               {items.map((item)=>(
                 <h1 className="flex">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon}</h1>
               ))}
               </p>
                

            </div>
            <p className="text-balance mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quod neque quisquam asperiores vero illum perspiciatis voluptas non cum similique cumque voluptates laboriosam odit velit consequuntur sit, at aspernatur enim?</p>

        </div>
        <div className="w-96 h-auto bg-white p-2 border shadow-sm">
            <div className="flex items-center justify-between gap-6">
               <p className="flex items-center gap-2"> <img className="rounded-full h-10 w-10" src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                <span className="font-semibold">Smith R.</span> 
               </p>
               <p>
               {items.map((item)=>(
                 <h1 className="flex">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon}</h1>
               ))}
               </p>
                

            </div>
            <p className="text-balance mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quod neque quisquam asperiores vero illum perspiciatis voluptas non cum similique cumque voluptates laboriosam odit velit consequuntur sit, at aspernatur enim?</p>

        </div>
        <div className="w-96 h-auto bg-white p-2 border shadow-sm">
            <div className="flex items-center justify-between gap-6">
               <p className="flex items-center gap-2"> <img className="rounded-full h-10 w-10" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                <span className="font-semibold">Juliya Doe</span> 
               </p>
               <p>
               {items.map((item)=>(
                 <h1 className="flex">{item.icon} {item.icon} {item.icon} {item.icon} {item.icon}</h1>
               ))}
               </p>
                

            </div>
            <p className="text-balance mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quod neque quisquam asperiores vero illum perspiciatis voluptas non cum similique cumque voluptates laboriosam odit velit consequuntur sit, at aspernatur enim?</p>

        </div>

    </div>
</div>

<div className=" mt-6 m-5">
    <h1 className="font-semibold text-3xl flex place-content-center border-t pt-10">Location</h1>
    <img className="h-72 w-10/12 ml-10 mt-5 m-3" src="https://th.bing.com/th/id/R.caf6ae72543eaee2599552d00704983c?rik=GatD%2bl%2fAmV0dzA&pid=ImgRaw&r=0" alt="map"/>
    <div className="flex justify-between items-center">
    <div className="w-1/2 mt-5 ml-10">
        <h1 className="text-2xl font-semibold mb-3">About</h1>
        <p className="text-balance">Kaldi's Coffee Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam architecto ipsum dolorem cupiditate sapiente assumenda. Similique ab enim nesciunt assumenda quis, modi recusandae voluptatum commodi esse praesentium, earum quidem!</p>

    </div>
    
    <div className="ml-16 gap-5 mt-5 w-1/2">
    <p className="flex items-center gap-2  "><FaLocationDot className="fill-red-600 h-4 w-4 mr-1"/> Near X , Mexico</p>
    <p className="flex items-center gap-2"><IoIosCall /> +251-999-000-1111</p>
    <p className="flex items-center gap-2"><IoIosCall /> +251-999-000-1111</p>
    <p className="flex items-center gap-2"><IoIosCall /> +251-999-000-1111</p>
    <p className="flex items-center gap-2"><MdEmail /> example@example.com</p>
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
 
export default Kaldis;
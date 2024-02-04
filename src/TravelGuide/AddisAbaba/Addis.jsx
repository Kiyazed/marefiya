
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import React from 'react';
import { Carousel } from 'antd';
import { Tabs } from 'antd';
import Travel from '../Travel';
import Hotels from './hotels/Hotels';
import Restaurants from './restaurants/Restaurants';
import Cafe from "./cafe/Cafe";
import Shoping from './Shoping';
import Todo from './ThingsTodo/Todo';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Hotels',
    children: <Hotels/>,
  },
  {
    key: '2',
    label: 'Restaurants',
    children: <Restaurants/>,
  },
  {
    key: '3',
    label: 'Cafe',
    children: <Cafe/>,
  },
  {
    key: '4',
    label: 'Shop',
    children: <Shoping/>,
  },
  {
    key: '5',
    label: 'Attractions',
    children: 'Attractions',
  },
  {
    key: '6',
    label: 'Things to do',
    children: <Todo/>,
  },

];



const Addis = () => {
  

  return (
    <div className="" >
             <div className="sticky top-0 z-50 bg-white border-b flex justify-between items-center p-5">
                {/* left */}
              <div>
             <h1 className="font-semibold text-2xl m-3 flex items-center justify-between ">
             <Link to="/travel  ">  <FaArrowLeft className="h-5 w-5 text-blue-400 flex mr-8" /> </Link> Addis Ababa, Ethiopia</h1>
              </div>

                {/* right */}
                <div>
              <Link to="/">  <MdOutlineClose className="h-7 w-7 hover:text-red-600" /></Link>
                </div>

            </div>

         <div className='m-2 mt-8 pl-5'>
         <Tabs className='' defaultActiveKey="1" items={items} onChange={onChange} />

         </div>

          
      
     
    </div>
  );
}

 
export default Addis;
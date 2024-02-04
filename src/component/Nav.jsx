 import { Button, Divider, notification, Space } from 'antd';
 import { Link } from 'react-router-dom';
 import {  Drawer } from 'antd';
 import { useState } from 'react';
 import { SmileOutlined } from '@ant-design/icons';
 import { Avatar, List } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { IoIosLogOut } from "react-icons/io";



const items = [
   {
     key: '1',
     type: 'group',
     label: 'Juliya Smith',
     children: [
       {
         key: '1-1',
         label: 'Profile',
       },
       {
         key: '1-2',
         label: 'Settings',
       },
       {
         key: '1-3',
         label: 'Wallet',
       },
       {
         key: '1-4',
         label: 'Help',
       },
     ],
   },
   {
     key: '2',
     label: 'Log out',
     icon:<IoIosLogOut className='h-5 w-5 text-red-500'/>
     
     
    
   },
   
 ];




 const data = [
   {
     title: 'Transfer...',
     time: '25 min ago'
   },
   {
     title: 'New requests',
     time: '45 min ago'
   },
   {
     title: 'John review ',
     time: '1 hr ago'
   },
   {
     title: 'Tip of the day',
     time: '2 days ago'
   },
 ];
 
 

 


const Navbar = () => {

   const [open, setOpen] = useState(false);
   const showDrawer = () => {
     setOpen(true);
   };
   const onClose = () => {
     setOpen(false);
   };

   const [api, contextHolder] = notification.useNotification();
   const openNotification = () => {
     api.open({
       message: 'Notification Title',
       description:
         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
       icon: (
         <SmileOutlined
           style={{
             color: '#108ee9',
           }}
         />
       ),
     });
   };
  

    return ( 
        <div className="sticky top-0 z-50 w-full h-16 ">
             <header className='h-16 w-full md:px-2 sm:px-10  flex justify-between items-center border-b bg-white shadow-sm '>
           <div className="flex md:flex-wrap items-center relative ">
           <div class="group relative mt-5 m-5 ">
        <Link to='/'>
         <button className="cursor-pointer duration-200 hover:scale-110 active:scale-90" title="Go Back">
            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="50px" viewBox="0 0 24 24" class="stroke-blue-300">
             <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
             </svg>

           <span className="absolute -top-14 left-[50%] -translate-x-[50%] 
                       z-20 origin-left scale-0 px-3 rounded-lg border 
                    border-gray-300 bg-white py-2 text-sm font-bold
                       shadow-md transition-all duration-300 ease-in-out 
                       group-hover:scale-100">Back</span>
  
       </button>
      </Link>
         </div>
   
           </div>

   {/* right */}
           <div className='flex m-3 '>
            
            <Link to="/message">
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-7 h-8 flex items-center mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
             </svg>

            </Link>
           
            <>
            <div className='relative inline-flex'>
      <button  onClick={showDrawer} className='bg-white outline-none relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'>
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
         <svg xmlns="http://www.w3.org/2000/svg" fill="#3b82f6" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-10 h-9 flex items-center mr-3 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
          </svg>
          </span>

 
      </button>
      <span
      class=" absolute rounded-full py-0 px-0 text-xs font-medium content-[''] leading-none grid place-items-center top-[14%] right-[36%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white min-w-[22px] min-h-[18px]">
      5
    </span>
    </div>
      <Drawer className='bg-yellow-600' title="Notification" placement="right" onClose={onClose} open={open}>
      {contextHolder}
      <List className='border-b '
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
       <List.Item className='hover:bg-gray-100 shadow-sm mb-3 cursor-pointer'>
        <List.Item.Meta
          avatar={<Avatar src='https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?w=740&t=st=1703683925~exp=1703684525~hmac=f4700884ef4fcc987998033216c372c6ea229e2f0ae19cf2cd6d3bb9e6c6b13e' />}
          title={<a href="/notification" className='flex text-black font-medium'>{item.title} <span className='ml-16 p-1 mr-0 text-gray-500'>{item.time}</span></a>}
          description="Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          
       />
      </List.Item>
      
    )}
    
  />
     <Link to='/notification'><button className='bg-yellow-400 text-white border h-10 w-full opacity-100 hover:opacity-85 mt-3'>View all</button></Link> 
      </Drawer>
    </>
                
      
      <Dropdown 
        menu={{
        items,
        }}
     >
    <a onClick={(e) => e.preventDefault()} >
      <Space>
        <div className='ml-5 mt-1 relative inline-flex'>
        <img className=' inline-block relative object-cover object-center rounded-full w-10 h-10 ' src='https://img.freepik.com/free-photo/pleasant-looking-caucasian-female-with-long-hair-wearing-yellow-casual-shirt-having-good-mood-looking-happily-camera_176532-11558.jpg?w=1060&t=st=1702126009~exp=1702126609~hmac=20880da3ad23f71a4b04dac260dcad76f22ffd1ed1e81204173e743e1de6e5a5' alt=''/>
         
         
        
      </div>
         <DownOutlined className='text-blue-400 ' />
       </Space>
    </a>
  </Dropdown>   
                
          
           </div>
        </header>
        </div>
     );
}
 
export default Navbar;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuQuote } from "react-icons/lu";
import Navbar from "../../component/Nav";

import Typewriter from 'typewriter-effect';



function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundcolor: "transparent"  }}
      onClick={onClick}
    />
  );
}


const TestimonialsPage = () => {
 
 const testimonials = [
  {
    id:1,
    rating: 2,
    content:"Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun. ",
    name:"james",
    location:"Addis",
    image:"https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?w=740&t=st=1702288175~exp=1702288775~hmac=f77ce3f48637ab042a4ae2d4f2e6292d2d2217392f8c18ff89d7b8fd410533d7"

  },
  {
    id:2,
    rating: 6,
    content:"Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun.",
    name:"Adem Smith",
    location:"Uk",
    image:"https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1702288309~exp=1702288909~hmac=58e6070c70d79e67e136cd6daaa676fd5dcacabe4e6a5e9b40a69c5d91110a94"
  },
  {
    id:3,
    rating: 8,
    content:"Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun.",
    name:"John Doe",
    location:"USA",
    image:"https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1060&t=st=1702288351~exp=1702288951~hmac=49510d850097c9ef87669d1d44a1fe545704ddd8d7a3c5643900bd7abf8af12a"
  },
  {
    id:4,
    rating: 3,
    content:"Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun.",
    name:"Jane Will",
    location:"Addis Ababa",
    image:"https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?t=st=1702288299~exp=1702288899~hmac=914d9104886d793b03cb97ba6e79a6745e6cac7c2d9e87005057b1ff94b934b1"
  },
  {
    id:5,
    rating: 3,
    content:"Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun.",
    name:"Solomon Jr ",
    location:"Bahirdar",
    image:"https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1702288309~exp=1702288909~hmac=58e6070c70d79e67e136cd6daaa676fd5dcacabe4e6a5e9b40a69c5d91110a94"
  },
  {
    id:6,
    rating: 3,
    content:"Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun.",
    name:"Kemal Jemal",
    location:"California",
    image:"https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1060&t=st=1702288351~exp=1702288951~hmac=49510d850097c9ef87669d1d44a1fe545704ddd8d7a3c5643900bd7abf8af12a"
  },
  
 ];

 var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <Arrow />,
  prevArrow: <Arrow />,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  className:"center",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


  
const text="Testiminials".split("");

 
  return (
    <div>
     <Navbar/> 

    <div className="  space-x-5  px-4 py-8 bg-gray-100">
     
      <h1 className="text-3xl text-yellow-500 flex place-content-center font-bold p-2 m-2"> Testimonials</h1>
      <h3 className="font-bold text-2xl flex place-content-center  m-3 mb-5 pb-5 text-black">
      <Typewriter  onInit={(typewriter)=>{
        typewriter
        .typeString("What your guests are saying")
        .pauseFor(1000)
       
        .start();
      }}/> </h3>
      <Slider
      {...settings}>
        {testimonials.map((testimonial) => (
        <div
            key={testimonial.id} 
            style={{width:'20%',position:'absolute'}}  
            className="rounded-[12px] flex-col justify-center border space-x-5 h-full w-96 bg-white flex   shadow-sm p-4 hover:shadow-md"
          >
            <div className=" items-center justify-center "> 
           

            <div className="flex justify-between mb-4">

             
             <LuQuote className="w-6 h-10 text-green-600 fill-green-600"/>

             <div className="text-yellow-500 flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <div className="ml-1 text-gray-700">
                {testimonial.rating.toFixed(1)}
              </div>
                

              </div>
             

              


               

              
            </div>
            <p className="text-gray-700 mb-4">{testimonial.content}</p>
            
            <div className="flex justify-start items-center">
                <img className="h-10 w-10 rounded-full flex " src={testimonial.image} alt=""/>
                <p className="text-black m-3 items-center"> {testimonial.name} <h5 className="text-gray-500"> -{testimonial.location}</h5> </p>
              </div>
              
           
            </div>
          </div>
        ))}
      </Slider>
     
    </div>
    </div>
  );
};

export default TestimonialsPage;
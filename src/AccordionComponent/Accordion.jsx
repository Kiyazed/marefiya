
import React from "react";
import data from "./AccordionData";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="#ffc000"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
 const AccordionIcon = () => {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="ml-24 m-16 p-2">
       <h1 className="font-semibold text-4xl mt-10 mb-10 border-t pt-5">Frequently asked questions</h1>

    {data.map((item,id)=>(
      <Accordion open={open === id} icon={<Icon id={id} open={open} />}>
        <AccordionHeader className="bg-gray-50 p-2 pr-2" onClick={() => handleOpen(id)}>{item.question}</AccordionHeader>
        <AccordionBody className='p-2'>
          {item.answer}
        </AccordionBody>
      </Accordion>
      ))}
      
    </div>
  );
  
}
export default AccordionIcon;
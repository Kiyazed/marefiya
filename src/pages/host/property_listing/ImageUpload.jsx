import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineDriveFolderUpload } from "react-icons/md"

function ImageUpload() {
  const [files, setFiles] = useState([]);
  const inputElement=useRef(null);
  const [selectedImage,setSelectedImage]= useState(null);

  const handleImageClick = (index) =>{
    setSelectedImage(files[index]);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (files.length + droppedFiles.length > 10) {
      alert('You can only upload up to 10 images');
      return;
    }
    setFiles([...files, ...droppedFiles]);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (files.length + selectedFiles.length > 10) {
      alert('You can only upload up to 10 images');
      return;
    }
    setFiles([...files, ...selectedFiles]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleFormSubmit = async (e) => {

    

    e.preventDefault();


    const formData = new FormData();
    files.forEach((file) => {
      formData.append('images', file);
    });

    try {
      await axios.post('/upload-url', formData);

      // Perform any other actions after successful upload
      alert('Images uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to upload images');
    }
  };

  return (
     <div>
      <div>
      <div class="group relative mt-5 m-5 ">
        <Link to='/next'>
         <button class="cursor-pointer duration-200 hover:scale-110 active:scale-90" title="Go Back">
         <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="50px" viewBox="0 0 24 24" class="stroke-blue-300">
          <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
           </svg>

           <span class="absolute -top-14 left-[50%] -translate-x-[50%] 
                       z-20 origin-left scale-0 px-3 rounded-lg border 
                    border-gray-300 bg-white py-2 text-sm font-bold
                       shadow-md transition-all duration-300 ease-in-out 
                       group-hover:scale-100">Back</span>
  
       </button>
      </Link>
         </div>
      </div>

     <h1 className='font-bold text-2xl mt-10 mb-0 grid place-items-center '>Step 4: Please upload your images here </h1>
    <div className="flex justify-center items-center h-full">
     
      <div
        className="p-9 m-10 border-4 w-96 border-dashed border-blue-200 rounded-lg"
        onDrop={handleFileDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <form onSubmit={handleFormSubmit}>
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />
          <div className="text-center">
            <p className="text-gray-500"><MdOutlineDriveFolderUpload className='h-24 w-24 ml-20'/>Drag &amp; drop or</p>
            <button
              type="button"
              onClick={() => inputElement.current.click()}
              className="w-40 h-12 my-3 bg-white cursor-pointer rounded-3xl border-2 border-[#ffc000] shadow-[inset_0px_-2px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out"
            > 
              <span class="font-medium text-[#333] group-hover:text-white">Select Images</span>
            </button>
            
          </div>
          <div className="mt-4 flex justify-center items-center">
            {files.map((file, index) => (
              <div
                key={index}
                className="relative m-2 flex justify-center items-center" onClick={()=>handleImageClick(index)}
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={'Uploaded  ${index + 1}'}
                  className="w-48 h-20 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  <span className="sr-only">Delete</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <input type='file' multiple onChange={handleFileSelect} className='hidden' ref={inputElement}/>
          
          {files.length > 0 && (
            <Link to='/price'>
            <button
              type="submit"
              className="block w-40 h-12 ml-16 mt-5 bg-white cursor-pointer rounded-3xl border-2 border-[#ffc000] shadow-[inset_0px_-2px_0px_1px_#ffc000] group hover:bg-[#ffc000] transition duration-300 ease-in-out"
            >
                 
            <span class="font-medium text-[#333] group-hover:text-white">Upload Image</span>
            </button>
            </Link>
          )}
          
        </form>
      </div>
      {selectedImage && (
          <div className='fixed top-0 left-0 flex items-center justify-center w-full h-full z-10 bg-black bg-opacity-75'>
            <img src={URL.createObjectURL(selectedImage)} alt='selected ' className='mx-auto mt-4 w-96 h-96 '/>
            <button type='button ' onClick={()=>setSelectedImage(null)} className='absolute top-0 right-0 text-white mt-5 mx-5 m-5  w-32 h-10 bg-red-500 hover:bg-red-400 rounded-md'>
              close
            </button>
          </div>
        )}
     
    </div>
    </div>
  );
}

export default ImageUpload;
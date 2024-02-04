import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import './index.css';
import Review from "./pages/host/Review";

import TestimonialsPage from "./pages/host/TestimonialsPage";
import Register from "./pages/Register";
import Finance from "./pages/host/Finance";
import Availability from "./pages/host/property_listing/Availability";
import ImageUpload from "./pages/host/property_listing/ImageUpload";
import Listing from "./pages/host/property_listing/Listing";
import Location from "./pages/host/property_listing/Location";
import Price from "./pages/host/property_listing/Price";
import SuccessMessage from "./pages/host/property_listing/SuccessMessage";
import Verify from "./pages/host/property_listing/Verify";
import Notification from "./pages/host/Notification";
import Help from "./pages/host/Help";
import Latest from "./pages/host/Latestreview";
import Community from "./pages/Community";
import Conversation from "./pages/Conversation";
import Contact from "./pages/Contact";
import Travel from "./TravelGuide/Travel";
import Addis from "./TravelGuide/AddisAbaba/Addis";
import Piassa from "./TravelGuide/AddisAbaba/restaurants/Piassa";
import Habesha from "./TravelGuide/AddisAbaba/restaurants/Habesha";
import SeeAll from "./TravelGuide/AddisAbaba/restaurants/SeeAll";
import Menu from "./TravelGuide/AddisAbaba/restaurants/Menu";
import Mexico from "./TravelGuide/AddisAbaba/cafe/Mexico";
import Kaldis from "./TravelGuide/AddisAbaba/cafe/Kaldis";
import Unesco from "./TravelGuide/AddisAbaba/ThingsTodo/art/Unesco";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
  
        <Routes>
          
          <Route path="/review" element={<Review/>} />
          <Route path="/testimony" element={<TestimonialsPage/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/finance" element={<Finance/>} />
          <Route path="/list" element={<Listing/>} /> 
          <Route path="/location" element={<Location/>}/> 
           <Route path="/price" element={<Price/>}/>
          <Route path="/availability" element={<Availability/>}/>
          <Route path="/image" element={ <ImageUpload/>}/>
          <Route path="/verify" element={ <Verify/>}/>
          <Route path="/success" element={<SuccessMessage/>}/>
          <Route path="/notification" element={<Notification/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/latest" element={<Latest/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/conversation" element={<Conversation/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/travel" element={<Travel/>} />
          <Route path="/aa" element={<Addis/>} />
          <Route path="/piassa" element={<Piassa/>} />
          <Route path="/habesha" element={<Habesha/>} />
          <Route path="/see" element={<SeeAll/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/mexico" element={<Mexico/>} />
          <Route path="/kaldis" element={<Kaldis/>} />
          <Route path="/unesco" element={<Unesco/>} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import Hello from "./component/hello";
import { BrowserRouter, Routes,Route } from "react-router-dom"; 
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Contact from "./component/pages/Contact";
import Account from "./component/pages/Account";
import Home from "./component/pages/Home";
import About from "./component/pages/About";

const App = () => {
  return (
    
 <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/account" element={<Account/>}/>
   </Routes>
   <Footer/>
 </BrowserRouter>
  
  );
} ;
export default App;
import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom"; 
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Contact from "./component/pages/Contact";
import Account from "./component/pages/Account";
import About from "./component/pages/About";
import Home from "./component/pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    
 <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact/:id" element={<Contact/>}/>
    <Route path="/account" element={<Account/>}/>
   </Routes>
   <Footer/>
    <ToastContainer />
 </BrowserRouter>
  
  );
} ;
export default App;
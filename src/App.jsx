import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);



  return (

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/services" element={<Services />} />
           <Route path="/faq" element={<FAQ />} />
           <Route path="/book" element={<Book />} />
           <Route path="/pricing" element={<h1>Pricing Page - Coming Soon</h1>} />
           <Route path= "/contact" element={<Contact />} />
      </Routes>
   
  );
}

export default App;
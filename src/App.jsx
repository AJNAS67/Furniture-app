// import { useState } from 'react'
import './App.css'
import HomePage from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopingPage from './pages/shop/inedx';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUsPage from './pages/about';
import Footer from './components/Footer';
import ServicePage from './pages/services';
import BlogPage from './pages/blog';
import ContactPage from './pages/contact';
function App() {
  // const [count, setCount] = useState(0);

  return (
  <>
 
    <BrowserRouter>
    <Header/>
    <Hero/>
      <Routes>
        {/* <Route path="/" element={<HomePage />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="shop" element={<ShopingPage />} />
          <Route path="about" element={<AboutUsPage/>}/>
          <Route path="services" element={<ServicePage/>}/>
          <Route path="blog" element={<BlogPage/>}/>
          <Route path="contact" element={<ContactPage/>}/>

          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
      <Footer/>
    </BrowserRouter>

  </>
  )
}

export default App

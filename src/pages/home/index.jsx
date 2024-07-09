import React from 'react';

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProductSection from '../../components/ProductSection';
import WhyChooseUs from '../../components/WhyChooseUs';
import WeHelp from '../../components/WeHelp';
import PopularProduct from '../../components/PopularProduct';
import Testimonial from '../../components/Testimonial'
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <div>
		<Header/>
		<Hero/>
		<ProductSection/>
		<WhyChooseUs/>
    <WeHelp/>
    <PopularProduct/>
    {/* <Testimonial/> */}
    <BlogSection/>
    <Footer/>
      
    </div>
  )
}

export default HomePage

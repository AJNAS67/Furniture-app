import React from 'react';

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
		<ProductSection/>
		<WhyChooseUs/>
    <WeHelp/>
    <PopularProduct/>
    {/* <Testimonial/> */}
    <BlogSection/>
      
    </div>
  )
}

export default HomePage

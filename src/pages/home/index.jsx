import React from 'react';

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProductSection from '../../components/ProductSection';
import WhyChooseUs from '../../components/WhyChooseUs';
import WeHelp from '../../components/WeHelp';
import PopularProduct from '../../components/PopularProduct';
import Testimonial from '../../components/Testimonial'

const HomePage = () => {
  return (
    <div>
		<Header/>
		<Hero/>
		<ProductSection/>
		<WhyChooseUs/>
    <WeHelp/>
    <PopularProduct/>
    <Testimonial/>
      
    </div>
  )
}

export default HomePage

import React from 'react';

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProductSection from '../../components/ProductSection';
import WhyChooseUs from '../../components/WhyChooseUs';
import WeHelp from '../../components/WeHelp'

const HomePage = () => {
  return (
    <div>
		<Header/>
		<Hero/>
		<ProductSection/>
		<WhyChooseUs/>
    <WeHelp/>
      
    </div>
  )
}

export default HomePage

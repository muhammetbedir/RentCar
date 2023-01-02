import React from 'react'
import Carousel from '../components/Carousel'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function HomePage() {
  return (
    <div className='homePage'>
    
    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />
    </div>
  )
}

export default HomePage
import React from 'react'
import '../Styles/Hero.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../Assets/1.jpeg'
import image2 from '../Assets/2.jpeg'
import  image3 from '../Assets/3.jpeg'
import image4 from '../Assets/4.jpeg'

const Hero = () => {
    return (
        <div className="hero-section">
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000} // Adjust the interval as needed
          >
            <div>
              <img src={image1} alt="Image 1" />
            </div>
            <div>
              <img src={image2} alt="Image 2" />
            </div>
            <div>
              <img src={image3} alt="Image 3" />
            </div>
            <div>
              <img src={image4} alt="Image 4" />
            </div>
            
          </Carousel>
    
          
        </div>
      );
}

export default Hero
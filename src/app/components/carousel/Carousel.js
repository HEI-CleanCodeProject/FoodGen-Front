import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./carousel.css";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
      <div class="overlay"></div>
    
       { /*  <img src="/images/Photo.png" alt="" class="photo"/>
       <img src="/images/1.png" alt="Image 1" className="carousel-image" />
       */}
        <Carousel autoPlay infiniteLoop className="">
          <div>
            <img src="/images/1.png" alt="Image 1" className="carousel-image" />
          </div>
          <div>
            <img src="/images/2.png" alt="Image 2" className="carousel-image" />
          </div>
          <div>
            <img src="/images/3.png" alt="Image 3" className="carousel-image" />
          </div>
        </Carousel>
        
                    

      </div>
    </div>
  );
};

export default CarouselComponent;
import React from 'react';

export const CarouselItem = () => {
  return(
    <div className="carousel-item" />
  )
}

const Carousel = ({ children }) => {
  return(
    <div className="carousel">
      {
        React.Children.map((children), children => {
          return React.cloneElement(children, { className: 'carousel-item' })
        })
      }
    </div>
  )
}

export default Carousel;

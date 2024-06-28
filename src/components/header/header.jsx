import React, { useState, useEffect } from 'react';
import './header.css'; // import your CSS file for styling
import image1 from '../../assets/site11.jpg';
import image2 from '../../assets/site8.jpg';
import image3 from '../../assets/site5.jpg';
import image4 from '../../assets/site5.jpg';


const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: image1,
      text: "Slide 1 Text",
    },
    {
      image: image2,
      text: "Slide 2 Text",
    },
    {
      image: image3,
      text: "Slide 2 Text",
    },
    {
      image: image4,
      text: "Slide 2 Text",
    },
    // Add more slides as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="background-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h2>{slide.text}</h2>
          </div>
        </div>
      ))}
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'dot active' : 'dot'}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;

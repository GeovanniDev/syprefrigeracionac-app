import { useState } from "react";
import PropTypes from "prop-types";

const ImageCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      {/* <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === currentIndex ? "active" : ""}
            aria-current={index === currentIndex ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
      <div className="carousel-inner">
        {images.map((item, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? "active" : ""}`}>
            <img src={item.imageUrl} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" onClick={goToPrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: "invert(100%)" }}></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={goToNext}>
        <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: "invert(100%)" }}></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ImageCarousel;

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};
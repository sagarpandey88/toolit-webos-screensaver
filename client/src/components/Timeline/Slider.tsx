import React, { useState, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Slider.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    //preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 37) {
        // Left arrow
        goToPrevious();
      } else if (event.keyCode === 39) {
        // Right arrow
        goToNext();
      }
    },
    [goToPrevious, goToNext]
  );

  // Attach event listener for arrow keys
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div {...handlers} className="carousel" tabIndex={0}>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image.src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

function Carousel({ images, autoSlide = false, autoSlideInterval = 3000 }) {
  const [currentImage, setCurrentImage] = useState(0);

  const prev = () =>
    setCurrentImage((currentImage) =>
      currentImage === 0 ? images.length - 1 : currentImage - 1,
    );

  const next = useCallback(
    () =>
      setCurrentImage((currentImage) =>
        currentImage === images.length - 1 ? 0 : currentImage + 1,
      ),
    [images.length],
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="relative max-h-96 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, key) => (
          <img
            key={key}
            className="max-h-96 min-w-full object-cover"
            src={image}
            alt="Shopping"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`
              h-3 w-3 rounded-full bg-white transition-all
              ${currentImage === i ? 'p-2' : 'bg-opacity-50'}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
};

export default Carousel;

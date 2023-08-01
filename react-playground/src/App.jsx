import React, { useState } from 'react';

const imageData = [
  'https://yt3.googleusercontent.com/5PWVj9wPhRvJvY0RgLPnrMavM_RgS2jLSCgC4fUTsv8EAMzzQIYekw7FOdlA3RToXFEihTabYw=s900-c-k-c0x00ffffff-no-rj',
  'https://yt3.googleusercontent.com/ytc/AGIKgqOE2odAevc22sdCkQsZ3of410-sHBKA5ZhjeBxaZQ=s900-c-k-c0x00ffffff-no-rj',
  'https://yt3.googleusercontent.com/gU57ObmwaSJczV-USg3xNowTZk6PzaoF0AayIOIDGWxObWE6kx-AWN4rgfMKd8VNbkmmClRZNQ=s900-c-k-c0x00ffffff-no-rj',
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentImageIndex((currentIndex) => (currentIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((currentIndex) => (currentIndex + 1));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <img className="w-64 h-64 object-cover" src={imageData[currentImageIndex]} alt="Carousel" />
        <div className="flex gap-4">
          <button
            onClick={goToPrevImage}
            disabled={currentImageIndex === 0}
            className="disabled:opacity-30 py-2 px-4 bg-blue-500 text-white rounded"
          >
            Prev
          </button>
          <button
            onClick={goToNextImage}
            disabled={currentImageIndex === imageData.length - 1}
            className="disabled:opacity-30 py-2 px-4 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

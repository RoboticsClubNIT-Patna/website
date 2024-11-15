import React, { useState, useEffect } from 'react';

const RCCard = ({ image }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate an image loading delay
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Adjust the delay as needed

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='relative overflow-hidden group mr-12'>
      <div className={`h-[50vh] w-[50vh] lg:h-[70vh] lg:w-[60vh] overflow-hidden rounded-2xl transition-all duration-500 ease-in-out ${isLoaded ? 'blur-0' : 'blur-md'}`}>
    
        <img
          src={image}
          alt='Card Image'
          className='h-full object-cover filter'
        />
      </div>
    </div>
  );
};

export default RCCard;

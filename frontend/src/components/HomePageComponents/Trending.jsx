import React from 'react'
import TrendingCard from "./TrendingCard";
import trendingData from "../../trendingData";

const Trending = () => {

  const firstThreeItems = trendingData.slice(0, 3);

  return (
    <div className="flex flex-col md:mx-4 justify-center md:justify-start ">
      <div className='ml-8'>
              <h1 className='font-anton text-7xl sm:text-8xl'
                 style={{
                  WebkitTextStroke:'1px white',
                  color:'black',
                  textStroke:'1px white'
                 }}>
                     WHATS
              </h1>
              <h1 className='font-anton text-7xl sm:text-8xl text-white '>TRENDING</h1>
         </div>

      {/* TrendingCard */}

      <div className="grid sm:grid-cols-3 grid-rows-1  md:gap-4 md:mx-6 mt-16 mb-10 justify-center items-center overflow-x-scroll overflow-y-hidden">
        {firstThreeItems.map((item) => (
          <TrendingCard
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            imageUrl={item.imageUrl}
            cardId = {item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;

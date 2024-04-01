import React, { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false)
  
  const handleClick = () => {
    setShowItems(!showItems);
  };
  

  // console.log(data);



  return (
    <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12 mx-auto my-4">
      <div className="bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between items-center mb-4  cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg cursor-pointer" >
            {data.title} ({data.itemCards.length})</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 font-bold cursor-pointer"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>
       {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

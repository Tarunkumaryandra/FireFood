import React from 'react';
import FilterButtons from './FilterButtons'
import useRestaurantData from '../utils/Hooks/useRestaurantData';
import { useState } from 'react';
import Header from './common/Header';


function Shimmer() {
  const { listOfRes, filterTopRatedRestaurants, searchRestaurants, resetSearch } = useRestaurantData();
  const [searchText, setSearchText] = useState('');
  


  
  return (
    <div>
      <Header />
    <div className='body p-4 lg:p-8'>
    <FilterButtons
    searchText={searchText}
    setSearchText={setSearchText}
    searchRestaurants={searchRestaurants}
    resetSearch={resetSearch}
    filterTopRatedRestaurants={filterTopRatedRestaurants}
  />
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {[...Array(8)].map((_, index) => (
        <div key={index} className="p-4 bg-white rounded-lg shadow-md animate-pulse">
          <div className="bg-gray-300 h-40 w-full rounded-md mb-4"></div>
          <div className="bg-gray-200 h-4 w-3/4 rounded-md mb-2"></div>
          <div className="bg-gray-200 h-4 w-1/2 rounded-md mb-2"></div>
          <div className="bg-gray-200 h-4 w-2/3 rounded-md"></div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}

export default Shimmer;

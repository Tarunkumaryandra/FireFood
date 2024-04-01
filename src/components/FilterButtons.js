import React from 'react';

function FilterButtons({ searchText, setSearchText, searchRestaurants, resetSearch, filterTopRatedRestaurants }) {
  return (
    <div className=''>
    <div className='filter flex flex-col lg:flex-row items-center  mb-2 lg:mb-2 justify-between'>
      <div className='relative w-full max-w-xl  bg-white rounded-full flex mb-2'>
        <input 
          placeholder="Search for restaurants" 
          className="rounded-full w-full h-16 bg-transparent py-2 pl-8  outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-white-200 focus:border-white-200" 
          type="text" 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button 
          type="submit" 
          className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-[#f77d00] hover:bg-[#f77d00] sm:px-6 sm:text-base sm:font-medium focus:outline-none  focus:ring-white-500 focus:border-white-200"
          onClick={() => searchRestaurants(searchText)}
        >
          Search
        </button> 

      </div>
      <div className='flex'>
      <button className='filter-btn bg-[#f77d00] rounded-full lg:ml-auto hover:bg-[#f77d00] text-white px-4 py-2 font-semibold ' onClick={filterTopRatedRestaurants}>
        Top Rated Restaurants
      </button>
      <button className=' text-gray-600  hover:text-green-600 font-bold px-2 py-2 rounded' onClick={resetSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-10">
          <path fillRule="evenodd"  d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
        </svg>
      </button>
      </div>
      </div>
   
     
   
      
    </div>
  );
}

export default FilterButtons;

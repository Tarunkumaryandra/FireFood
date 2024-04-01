import React, { useState } from 'react';
import ResCard, { withPromotedLable } from './common/ResCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurantData from '../utils/Hooks/useRestaurantData';
import useOnlineStatus from '../utils/Hooks/useOnlineStatus';
import FilterButtons from './FilterButtons';
import SearchLocationPage from './Pages/SearchLocationPage';
import { latitude,longitude } from './Pages/SearchLocationPage';
import {  useEffect } from 'react';
import { fetchData } from '../utils/Hooks/useRestaurantData';
import Header from './common/Header';
import { selectedLocation } from './Pages/Home';

function Body() {
  const { listOfRes, filterTopRatedRestaurants, searchRestaurants, resetSearch } = useRestaurantData(latitude,longitude);
  const [searchText, setSearchText] = useState('');
  const onlineStatus = useOnlineStatus();

  const ResCardPromoted = withPromotedLable(ResCard);
  


  useEffect(() => {
    fetchData(latitude, longitude);
  }, [latitude, longitude]);


  if (!onlineStatus) {
    return (
      <h1 className="text-red-500">You're Offline. Check Your Internet Connection.</h1>
    );
  }

  const handleResetSearch = () => {
    setSearchText('');
    resetSearch();
  };


  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
    <Header selectedLocation={selectedLocation} />
    <div className='body p-4 lg:p-8'>
      <FilterButtons
        searchText={searchText}
        setSearchText={setSearchText}
        searchRestaurants={searchRestaurants}
        resetSearch={handleResetSearch}
        filterTopRatedRestaurants={filterTopRatedRestaurants}
      />
      <div className='res-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0'>
        {listOfRes.map((restaurant) => (
          <Link 
            key={restaurant.info.id}
            to={"/resmenu/"+restaurant.info.id} 
            className=' rounded p-4'
          >
            {restaurant.info.promoted ? 
              (<ResCardPromoted resData={restaurant} /> ) : 
              ( <ResCard resData={restaurant} />)
            }
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}
  export default Body
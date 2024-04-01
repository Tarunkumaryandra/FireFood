import { useState, useEffect } from 'react';
import { SWIGGY_MAPI, SWIGGY_API } from '../../utils/constant';

function useRestaurantData(latitude, longitude) {
  const [listOfRes, setListOfRes] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    fetchData(latitude, longitude);
  }, [latitude, longitude]);

  const fetchData = async (lat, lng) => {
    try {
      const isMobile = window.innerWidth <= 768;
      const API = isMobile ? SWIGGY_MAPI(lat, lng) : SWIGGY_API(lat, lng);
      const data = await fetch(API);
      const json = await data.json();
      
      console.log(json)
     
      if (json && json.data && json.data.cards) {
        const cardIndex = isMobile ? 2 : 4;
        const restaurants =
          json.data.cards[cardIndex]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListOfRes(restaurants);
        setOriginalList(restaurants);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filterTopRatedRestaurants = () => {
    const filteredList = listOfRes.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setListOfRes(filteredList);
  };

  const searchRestaurants = (searchText) => {
    const filteredRes = originalList.filter(
      (restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRes(filteredRes);
  };

  const resetSearch = () => {
    setListOfRes(originalList);
  };

  return {
    listOfRes,
    filterTopRatedRestaurants,
    searchRestaurants,
    resetSearch,
  };
}

// Exporting fetchData function
const fetchData = async (lat, lng) => {
  try {
    const isMobile = window.innerWidth <= 768;
    const API = isMobile ? SWIGGY_MAPI(lat, lng) : SWIGGY_API(lat, lng);
    const data = await fetch(API);
    const json = await data.json();
   
    if (json && json.data && json.data.cards) {
      const cardIndex = isMobile ? 2 : 4;
      const restaurants =
        json.data.cards[cardIndex]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      return restaurants;
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default useRestaurantData;
export { fetchData };

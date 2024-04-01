import { useState } from 'react';
import useRestaurantData from '../../utils/Hooks/useRestaurantData'; // Import the modified useRestaurantData hook
import { LOCATION_API, ADDRESS_API, GET_ADDRESS } from '../../utils/constant';
import useLocation from '../../utils/Hooks/UseLocation';
import { Link } from 'react-router-dom';
import { GPSICON, SEARCH } from '../../utils/constant';

// Define latitude and longitude as state variables outside of the component
let latitude = 0;
let longitude = 0;
let selectedLocationName = ''; 


const SearchLocationPage = ({ onSelect }) => {
  const [searchData, setSearchData] = useState([]);
  // const [selectedLocationName, setSelectedLocationName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const userLoaction = useLocation()

  const handleSearch = async (query) => {
    setSearchQuery(query);
    try {
      const res = await fetch(LOCATION_API + query);
      if (!res.ok) {
        const error = res.status;
        throw new Error(error);
      } else {
        const { data } = await res.json();
        setSearchData(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAddress = async (place_id) => {
    try {
      const res = await fetch(ADDRESS_API + place_id);
      if (!res.ok) {
        const error = res.status;
        throw new Error(error);
      } else {
        const { data } = await res.json();
        const selectedPlace = {
          city: data[0]?.address_components[0]?.short_name,
          lat: data[0]?.geometry?.location?.lat,
          lng: data[0]?.geometry?.location?.lng,
          address: data[0]?.formatted_address,
        };
        onSelect(selectedPlace);
        // setSelectedLocationName(selectedPlace.address);
        setSearchData([]);
        setSearchQuery(selectedPlace.address);
        // Update latitude and longitude variables
        latitude = selectedPlace.lat;
        longitude = selectedPlace.lng;
        selectedLocationName = selectedPlace.address;
        // console.log(selectedLocationName)
     

      }
    } catch (err) {
      console.log(err);
    }
  };

  // Pass latitude and longitude to useRestaurantData [ filterTopRatedRestaurants, searchRestaurants, resetSearch]
  // const { listOfRes } = useRestaurantData(latitude, longitude);


  const GPS = async () => {
    try {
      if (userLoaction.latitude !== null && userLoaction.longitude !== null) {
        latitude = userLoaction.latitude;
        longitude = userLoaction.longitude;
        console.log(userLoaction.longitude);
        console.log(userLoaction.latitude);
  
        const addressData = await GET_ADDRESS(latitude, longitude);
        selectedLocationName=addressData.data[0].formatted_address
        // console.log(addressData.data[0].formatted_address);
        // Handle the address data as needed, e.g., set state, pass to another function, etc.
      } else {
        console.error('Latitude or longitude is null');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  




  return (
    <div class="flex justify-center items-center lg:mt-60 mt-32">
    <div class="relative flex">
      <input
        type="text"
        placeholder="Enter your Search Location"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        class="h-12  focus:outline-none  transition lg:w-96 w-full px-5 font-ProximaNovaMed text-lg text-[#282c3f] mt-0"
      />
      <ul class="absolute top-12 left-0 right-0 border border-t-0 border-[#d4d5d9] shadow-lg w-full bg-[#fbfbfb] text-[#535665] z-10">
        {searchData &&
          searchData.map((item) => (
            <li
              key={item.place_id}
              class="cursor-pointer py-4 sm:py-6 px-3 sm:px-5 font-ProximaNovaMed text-sm sm:text-base border-dashed border-[#bebfc5] border-t-0 border-l-0 border-r-0 flex items-center gap-5 hover:bg-slate-100 transition bg-[#fbfbfb]"
              onClick={() => fetchAddress(item.place_id)}
            >
            {item.description}
            </li>
          ))}
      </ul>
      {selectedLocationName && (
        <p class="mt-2 text-gray-600 text-sm"></p>
      )}
      {selectedLocationName && <Link to="/body" className='mt-3 mx-3'><img src={`${process.env.PUBLIC_URL}/${SEARCH}`} width={25} /></Link>}
      <br></br>
      <Link to="/body" onClick={GPS} className='mt-3 mx-3'> <img src={`${process.env.PUBLIC_URL}/${GPSICON}`} width={25} /> </Link>
    </div>
  </div>
  
    
  );
};

// Exporting SearchLocationPage component
export default SearchLocationPage;

// Exporting latitude and longitude
export { latitude, longitude, selectedLocationName };

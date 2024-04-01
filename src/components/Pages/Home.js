import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchLocationPage from './SearchLocationPage';
import Header from '../common/Header';

// Declare selectedLocation outside the component
let selectedLocation = '';

function Home() {
  const [location, setLocation] = useState(null);

  const handleLocationSelect = (selectedPlace) => {
    setLocation(selectedPlace);
    selectedLocation = selectedPlace; // Update selectedLocation
  };

  return (
    <div>
        <Header selectedLocation={selectedLocation} />
        <SearchLocationPage onSelect={handleLocationSelect} />  
       
    </div>
  );
}

// Export Home component and selectedLocation variable
export default Home;
export { selectedLocation };



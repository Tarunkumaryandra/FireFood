import { useState, useEffect } from 'react';

// Custom hook to get the user's location
function useLocation() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Function to get user's location
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    // Call the function to get user's location when the component mounts
    getUserLocation();

    // Cleanup function
    return () => {
      // Do any cleanup if needed
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return userLocation;
}

export default useLocation;

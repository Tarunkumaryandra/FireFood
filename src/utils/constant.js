const CORSPROXY = '';

// https://proxy.cors.sh/

export const CDN_URL =
"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";


export const MENU_API =
`${CORSPROXY}https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7635223&lng=83.3081172&restaurantId=`;


export const MENU_MAPI =
`${CORSPROXY}https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7635223&lng=83.3081172&restaurantId=`;



export const SWIGGY_MAPI = (latitude, longitude) => {
    return `${CORSPROXY}https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
};
  
export const SWIGGY_API = (latitude, longitude) => {
    return `${CORSPROXY}https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
};

export const GET_ADDRESS = async (latitude, longitude) => {
  try {
    const response = await fetch(`${CORSPROXY}https://www.swiggy.com/dapi/misc/address-recommend?latlng=${latitude}%2c${longitude}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

  


export const LOCATION_API = `${CORSPROXY}https://www.swiggy.com/dapi/misc/place-autocomplete?input=`;

export const ADDRESS_API = `${CORSPROXY}https://www.swiggy.com/dapi/misc/address-recommend?place_id=`;

export const LOGO_URL=
"assets/img/logo1.png"; 

export const Bike=
"assets/img/bike.gif"; 


 export const veg =
 "assets/img/v.png";


 export const nonveg =
 "assets/img/nv.png";


 export const food =
 "assets/img/food.jpg";


 export const bg=
 "assets/img/bg.png";


 export const error404 =
 "assets/img/404.gif";


 export const GPSICON=
 "assets/img/GPS.png"


 export const SEARCH=
 "assets/img/Search.png"
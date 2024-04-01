import React from 'react';
import { CDN_URL } from '../../utils/constant';

function ResCard(props) {
  const { resData } = props;

  // Check if resData and resData.info are defined before accessing properties
  if (!resData || !resData.info) {
    // Handle the case where resData or resData.info is undefined
    return <p className="text-red-500">Error: Restaurant information not available</p>;
  }
  // console.log(resData)

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    locality,
  } = resData.info;

  return (
    <div className='res-card overflow-hidden  transform hover:scale-95  transition duration-300 rounded-md p-4'>
      <img 
          className="w-96 h-40 object-cover object-center rounded-md mb-4"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3 className='text-xl font-semibold mb-2 overflow-hidden whitespace-nowrap overflow-ellipsis'>{name}</h3>
      
      <div className='flex items-center mb-2'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
        <span className='text-black-500 pl-1 pr-1 font-bold'>{avgRating} • </span><h4 className='text-gray-700 font-bold'> {((Math.ceil(resData?.info?.sla?.deliveryTime/10))*10)-5}-{(Math.ceil(resData?.info?.sla?.deliveryTime/10))*10} mins</h4>
      </div>
    
     
      <h4 className='text-gray-700 mb-1 overflow-hidden whitespace-nowrap overflow-ellipsis'>{cuisines.join(', ')}</h4>
      <h4 className='text-gray-700 mb-1'>{locality}</h4>
    </div>
  );
};

// Higer order component
export const withPromotedLable =(ResCard) =>{
  return (props) =>{
    return (
      <div className="relative">
        <label className='absolute bg-black text-white m-2 p-2 rounded-lg z-10'>Promoted</label>
        <ResCard {...props}/>
      </div>

    )
  }
}

export default ResCard;

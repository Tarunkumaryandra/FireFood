import React from 'react';

const ShimmerMenu = () => {
  return (
    <div >
         <div className="p-2 m-2 border-b-2 text-left w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12 mx-auto my-4">
      <div className="py-2 flex justify-between">
        <div>
          {/* Shimmer effect for veg/non-veg icon */}
          <div className="w-5 h-5 bg-gray-200 animate-pulse rounded-full"></div>
          {/* Shimmer effect for item name */}
          <div className="mt-2 w-24 h-4 bg-gray-200 animate-pulse rounded"></div>
          {/* Shimmer effect for item price */}
          <div className="mt-1 w-20 h-4 bg-gray-200 animate-pulse rounded"></div>
          {/* Shimmer effect for item description */}
          <div className="mt-1 w-32 h-4 bg-gray-200 animate-pulse rounded"></div>
        </div>
        <div>
          {/* Shimmer effect for item image */}
          <div className="w-28 h-24 bg-gray-200 animate-pulse rounded-md"></div>
        </div>
      </div>
    </div>
      {/* Shimmer effect for each item */}
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index} className="animate-puls p-4 bg-white rounded-lg shadow-md animate-pulse">
          {/* Shimmer effect for item title */}
          <div className="h-12 bg-gray-200 rounded mb-2 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12 mx-auto my-4 p-4"></div>
          {/* Shimmer effect for item price */}
      
        </div>
      ))}
    </div>
  );
};

export default ShimmerMenu;

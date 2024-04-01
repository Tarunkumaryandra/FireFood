import React from 'react'
import { useParams } from 'react-router-dom';
import useResMenu from '../../utils/Hooks/useResMenu';
import RestaurantCategory from '../common/RestaurantCategory';
import ShimmerMenu from '../ShimmerMenu';
import Header from '../common/Header';

function ResMenu() {

    const {resId} = useParams();

    const resInfo = useResMenu(resId);
    // console.log(resInfo)


    const isMobile = window.innerWidth <= 768;
    const cardIndex = isMobile ? 2 : 2;

    const {name,cuisines,costForTwoMessage,avgRating,totalRatings,totalRatingsString,locality} = 
    resInfo?.cards[cardIndex]?.card?.card?.info || 'NO Data';



    const cardIndex2 = isMobile ? 2 : 2;
    const{lastMileTravelString}=
    resInfo?.cards[cardIndex2]?.card?.card?.info?.sla || "-";



    
    const cardIndex1 = isMobile ? 5 : 4;
    const categories = resInfo?.cards[cardIndex1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(categories)

    


    

  return resInfo === null ? (<ShimmerMenu />) : (
    <div>
      <Header />
    <div className='text-center '>
        <div className='w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12 mx-auto my-4 flex justify-between '>
        <div>
        <h1 className='font-bold mt-6 text-xl mb-2 ml-1 text-start'>{name}</h1>
        <h3 className=' text-sm text-left ml-1 text-gray-500'>{cuisines.join(",")}</h3>
        <h3 className=' text-sm text-left ml-1 text-gray-500'>{locality},{" "}{lastMileTravelString}</h3>
  
        </div>
        <div>
        <button className=" items-center text-gray-800 font-semibold px-3 py-4 rounded-lg shadow-md mt-4" data-testid="restaurant-ratings-header" aria-hidden="true">
          <span className=''>
            <span className="flex items-center space-x-1 justify-center mb-1">
              <span className='flex justify-center text-green-700'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-green-700 stroke-green-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
               {" "} {avgRating}
                </span>
            </span>
            <hr></hr>
            <span className="ml-2 mt-2 text-gray-600">{totalRatingsString}</span>
         </span>
          </button>
        </div>
        </div>
        
        
        <h1 className='text-2xl  font-bold'>Menu</h1>
         {categories.map((category) => 
         <RestaurantCategory 
         key={category?.card?.card.title}
         data ={category?.card?.card} />)}
    </div>
    </div>
  )
}

export default ResMenu
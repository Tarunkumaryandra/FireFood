import React from 'react';
import { CDN_URL, food, nonveg, veg } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/Redux/cartSlice';

function ItemList({ items }) {

  const dispatch = useDispatch()

  // console.log(items);
  const handleAddItem =(item) =>{
    dispatch(addItem(item))
  }



  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className='p-2 m-2 border-b-2 text-left'>
          <div className='py-2 flex justify-between'>
            <div className=''>
            {item.card.info.isVeg === 1 ? <img src={`${process.env.PUBLIC_URL}/${veg}`} alt="Veg" width="5%" /> : <img src={`${process.env.PUBLIC_URL}/${nonveg}`} alt="Non-Veg" width="5%" />}
              <span className='font-semibold'>{item.card.info.name}</span>
              <br />
              <span>
                ₹{' '}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className='text-xs'>{item.card.info.description}</p>
            </div>
            <div>
            <div className='relative'>
              <button 
              className='p-2 px-6 bg-white shadow-lg absolute rounded-lg m-auto mx-5  my-20 text-xs text-green-500 font-bold'
              onClick={() =>handleAddItem(item)}>
                ADD
                </button>
              </div>
            {item.card.info.imageId ? (
                    <img
                        src={CDN_URL + item.card.info.imageId}
                        className='w-28 h-24 max-w-28 max-h-24 object-cover rounded-md'
                        alt={item.card.info.name}
                    />
                    
                    ) : (
                    <img
                        src={`${process.env.PUBLIC_URL}/${food}`}
                        className='w-28 h-24 max-w-28 max-h-24 object-cover rounded-md'
                        alt={item.card.info.name}
                    />
             )}
              
             </div>
            

          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;

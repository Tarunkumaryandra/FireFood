import React from 'react'
import Header from '../common/Header'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from '../common/ItemList'
import { clearCart } from '../../utils/Redux/cartSlice'

function CartPage() {
  const cartItems = useSelector((store)=> store.cart.items)
  const dispatch = useDispatch()

  const handleClearCart= () =>{
    dispatch(clearCart())
  }



  return (
    <div>
        <Header />
        <div className='text-center m-4 p-4'>
          <h1 className='font-bold text-xl'>Cart</h1>
          <button className='p-2 m-2 bg-[#f77d00] text-white font-bold rounded-lg text-sm' onClick={handleClearCart}>
            Clear Cart
            </button>
            {cartItems.length === 0 && (<h1 className='font-bold'>Cart is empty. Add Items to the Cart!</h1>)}
        </div>
        <div className='lg:w-6/12 m-auto'>
        <ItemList items={cartItems} />
        </div>
    </div>
  )
}

export default CartPage
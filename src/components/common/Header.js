import React, { useState,useEffect } from 'react';
import { LOGO_URL } from '../../utils/constant';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/Hooks/useOnlineStatus';
import { selectedLocationName } from '../Pages/SearchLocationPage';
import { latitude,longitude } from '../Pages/SearchLocationPage';
import { fetchData } from '../../utils/Hooks/useRestaurantData';
import { useSelector } from 'react-redux';


function Header({ setSelectedLocation }) {
  const [BtnName, setBtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  const handleLogin = () => {
    setBtnName(prevBtnName => prevBtnName === "Login" ? "Logout" : "Login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };


  useEffect(() => {
    fetchData(latitude, longitude);
  }, [latitude, longitude]);


  const cartItems=useSelector((store)=>store.cart.items)



  return (
    <div className="relative bg-gray-100 shadow-md h-25 mb-2 json">
      {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-50"></div>}
      <div className="flex justify-between items-center py-4 px-6 lg:px-32  relative z-50">
        <div className='logo-container'>
          <img
            className='w-12 lg:w-12 h-auto cursor-pointer transform hover:scale-95  transition duration-300'
            src={`${process.env.PUBLIC_URL}/${LOGO_URL}`}
            alt="Logo"
          />
        </div>   <Link to='/'>
        <div className='flex cursor-pointer hover:text-orange-600 text-sm font-semibold text-gray-600'>
            {selectedLocationName && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
              </svg>
            )}
            <p className='flex overflow-hidden whitespace-nowrap w-40 lg:w-64'>
              {selectedLocationName}
            </p>
            {/* {selectedLocationName && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange-600" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            )} */}
          </div>

        </Link>
    
       
        <div className="lg:hidden">
          <button className="text-gray-800 focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
        <div className={`nav-items lg:flex ${isMenuOpen ? 'absolute top-[200%] left-0  bg-opacity-100 w-full p-4 rounded-lg' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-12">
          <li className="text-gray-600 font-bold cursor-pointer">
               {onlineStatus ? "Online🟢" : "Offline🔴"}
            </li>
            
            <li>
              <Link to="/" className="text-gray-600 hover:text-orange-600 font-bold flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

              Search</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-orange-600 font-bold flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
                About Us
              </Link>
            </li>
            <li>
            <Link to="/contact" className="text-gray-600 hover:text-orange-600 font-bold flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
               Contact Us
            </Link>
            </li>
            <li>
            <Link to="/cart" className="text-gray-600 hover:text-orange-600 font-bold flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
              Cart [{cartItems.length} items]
              </Link>
            </li>
            <li>
            {/* <Link className='text-gray-600 hover:text-orange-600 font-bold flex' onClick={handleLogin}>
              
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            {BtnName}
            </Link> */}
            </li>
            
          
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

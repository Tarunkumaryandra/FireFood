import  { useState } from 'react'
import { useEffect } from 'react'
import {MENU_API,MENU_MAPI } from '../../utils/constant'

function useResMenu(resId) {
    const[resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const isMobile =window.innerWidth <= 768;
        const API = isMobile ? MENU_MAPI : MENU_API
        const data = await fetch(API + resId);
        const json = await data.json();
        // console.log(json)
        setResInfo(json.data);
    }

  return resInfo;
}

export default useResMenu
import React from 'react';
import { Bike, bg } from '../../utils/constant';

function Footer() {
    return (
        <footer className="bg-gray-100 relative overflow-x-hidden">
            
            <div className="footer_bg  bottom-0 w-full h-72 " style={{  backgroundImage: `url(${bg})` }}></div>
            <div className="footer_bg">
                <div className="footer_bg_two absolute bg-cover w-32 h-52  bottom-0   animate-moveRight " style={{ backgroundImage: `url(${Bike})`, width:'225px' ,marginBottom:'20px', backgroundColor:'#0000'}}></div>
            </div>
           
        
       
        </footer>
    );
}

export default Footer;

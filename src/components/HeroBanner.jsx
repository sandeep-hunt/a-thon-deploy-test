import React from 'react'
import { useState, useEffect } from 'react';
import Bg_Img from '../assets/images/backgrounds/hero_bg_hr.webp'

const HeroBanner = () => {
    
    const [backgroundClass, setBackgroundClass] = useState("hero-container-bg-lw");

    useEffect(() => {
        // Preload the high-resolution image
        const highResImage = new Image();
        highResImage.src = Bg_Img;  // Path to your high-res image
    
        highResImage.onload = () => {
          // Once the high-res image is loaded, update the class
          setBackgroundClass("hero-container-bg-hr");
        };
      }, []);

    return (
        <React.Fragment>
            <div className={'hero-container ' + backgroundClass}>
                <div className="hero-content">
                    <div className="heroHead">
                        <h3 className='heroTxt' style={{fontWeight:`400`}}>For The World : India's First Home Grown Tech.</h3>
                        <h3 className='heroTxt mt-1'>Trailblazing All Terrain Farm <b>R</b>o<b>VR</b>'s.</h3>
                    </div>
                    <div className="heroBottom">
                        <h4 className='heroTxtBtm'>All-Terrain Ag & Farm Dynamics</h4>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroBanner
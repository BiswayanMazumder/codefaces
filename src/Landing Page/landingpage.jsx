import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
export default function Landingpage() {
    useEffect(() => {
        document.title = "LuxeLayers : Shop T-shirts , Jackets , Shorts and Joggers Online";
    })
    return (
        <>
            <div className="webbody">
                <div className="headersection">
                    <div className="logo">
                        <img src="https://overlaysnow.com/cdn/shop/files/Overlays_Flame_Logo_150x150_2_150x.jpg?v=1719309287" alt="" className='logoimg' />
                    </div>
                    <div className="headeroptions">
                        <div className="options" >
                            <Link to="/" style={{textDecoration:"none",color:"black"}} className='headerlink'>New Arrivals</Link>
                            <Link to="/" style={{textDecoration:"none",color:"black"}}>Latest Drop</Link>
                            <Link to="/" style={{textDecoration:"none",color:"black"}}>Shop Men</Link>
                            <Link to="/" style={{textDecoration:"none",color:"black"}}>Heavy Weight</Link>
                            <Link to="/" style={{textDecoration:"none",color:"orangered"}}>Home</Link>
                            <Link to="/" style={{textDecoration:"none",color:"black"}}>Shop Women</Link>
                            <Link to="/" style={{textDecoration:"none",color:"black"}}>About Us</Link>
                            <Link to="/" style={{textDecoration:"none",color:"black"}}>Sale</Link>
                            <Link to="/" style={{textDecoration:"none",color:"black"}}>Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div className="bodyimage">
                    <img src="https://overlaysnow.com/cdn/shop/files/Free_spirit___The_ultimate_Textures_web_1.jpg?v=1723292870&width=2000" alt="" width={"100%"} height={"100%"} />
                </div>
            </div>
        </>
    )
}

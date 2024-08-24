import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Landingpage() {
    const [currentImage, setCurrentImage] = useState('https://overlaysnow.com/cdn/shop/files/Free_spirit___The_ultimate_Textures_web_1.jpg?v=1723292870&width=2000');

    useEffect(() => {
        document.title = "LuxeLayers : Shop T-shirts , Jackets , Shorts and Joggers Online";

        const images = [
            'https://overlaysnow.com/cdn/shop/files/Free_spirit___The_ultimate_Textures_web_1.jpg?v=1723292870&width=2000',
            'https://overlaysnow.com/cdn/shop/files/Regular_Fit_ultra_soft-web.jpg?v=1723730492&width=2000'
        ];

        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            setCurrentImage(images[currentIndex]);
        }, 5000);

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <>
            <div className="webbody">
                <div className="headersection">
                    <div className="logo">
                        <div className="searchform">
                            <svg focusable="false" width="18" height="18" className="icon icon--header-search" viewBox="0 0 18 18">
                                <path d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17" fill="none" stroke="currentColor" strokeWidth="2"></path>
                            </svg>
                        </div>
                        <div className="logoimage">
                            <img src="https://overlaysnow.com/cdn/shop/files/Overlays_Flame_Logo_150x150_2_150x.jpg?v=1719309287" alt="" className='logoimg' />
                        </div>
                    </div>
                    <div className="headeroptions">
                        <div className="options">
                            <Link to="/" style={{ textDecoration: "none", color: "black" }} className='headerlink'>New Arrivals</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Latest Drop</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Shop Men</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Heavy Weight</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "orangered" }}>Home</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Shop Women</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>About Us</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Sale</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div className="bodyimage">
                    <img src={currentImage} alt="" className='bodyimg'/>
                </div>
                <div className="jjehfjnfjd">
                    <video src="https://cdn.shopify.com/videos/c/o/v/334b6fb92fea4292887dadba3afbc61b.mp4" autoPlay muted loop className='promotionalvideo'></video>
                </div>
            </div>
        </>
    );
}

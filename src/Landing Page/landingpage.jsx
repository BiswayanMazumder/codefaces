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
                <div className="dhifjkfjlf">
                    <div className="items">
                        <img src="https://images.vegnonveg.com/resized/700X573/11428/air-jordan-4-retro-blackwhite-black-66c718d11e771.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11473/air-max-90-drift-action-greenblack-summit-white-green-66c6f5a6b95b7.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11478/cortez-blackdark-smoke-grey-black-66c719e4c838e.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11475/air-force-1-07-whitedragon-red-white-white-66c717cce8961.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11477/killshot-2-phantomuniversity-gold-gum-medium-brown-multicolor-66c719921548d.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11417/gel-quantum-360-viii-blackfiery-red-black-66b3610d4657e.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11418/gel-quantum-360-viii-illuminate-yellowblack-black-66b3621140516.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11426/air-jordan-1-mid-saillight-dew-muslin-white-66bb4a42e2b7a.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11434/dunk-low-nn-baroque-brownblack-white-sail-brown-66bb4b2dc3a2a.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11415/crazy-1-magic-beigeshadow-brown-brown-66b472e580b2e.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11422/air-jordan-4-retro-se-smoke-greyiron-grey-cement-grey-grey-66b48d859813d.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11396/dunk-low-retro-whitedenim-turq-white-66b3660dc7ed0.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11406/dunk-low-coconut-milkflax-sail-brown-66b497326da01.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11421/air-max-1-whitelight-army-neutral-grey-black-white-66b47248b5e8d.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/700X573/11416/gazelle-indoor-preloved-inkwonder-clay-sand-strata-blue-66b47456555a2.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="items">
                    <img src="https://images.vegnonveg.com/resized/400X328/11476/v2k-run-summit-whitechrome-white-light-orewood-brown-white-66c71880235e9.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                    </div>
                </div>
                <div className="jjehfjnfjd">
                    <video src="https://cdn.shopify.com/videos/c/o/v/334b6fb92fea4292887dadba3afbc61b.mp4" autoPlay muted loop className='promotionalvideo'></video>
                </div>
            </div>
        </>
    );
}

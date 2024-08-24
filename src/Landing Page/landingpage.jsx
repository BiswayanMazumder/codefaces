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
                            <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/_fa24086d-6873-4c24-9ff6-0aceb7380333-QyUF9bBdbH9jERIGwpyEPhaZ2HcKZL.jpg" alt="" className='logoimg' />
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
                    <img src={currentImage} alt="" className='bodyimg' />
                </div>
                <div className="dhifjkfjlf">
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items" >
                            <img src="https://images.vegnonveg.com/resized/700X573/11428/air-jordan-4-retro-blackwhite-black-66c718d11e771.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            AIR JORDAN 4 RETRO GS 'BLACK/WHITE'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11473/air-max-90-drift-action-greenblack-summit-white-green-66c6f5a6b95b7.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            AIR MAX 90 DRIFT 'ACTION GREEN/BLACK-SUMMIT WHITE'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11478/cortez-blackdark-smoke-grey-black-66c719e4c838e.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            CORTEZ 'BLACK/DARK SMOKE GREY'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11475/air-force-1-07-whitedragon-red-white-white-66c717cce8961.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            AIR FORCE 1 '07 'WHITE/DRAGON RED-WHITE'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11477/killshot-2-phantomuniversity-gold-gum-medium-brown-multicolor-66c719921548d.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            KILLSHOT 2 'PHANTOM/UNIVERSITY GOLD-GUM MEDIUM BROWN'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11417/gel-quantum-360-viii-blackfiery-red-black-66b3610d4657e.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            GEL-QUANTUM 360 VIII 'BLACK/FIERY RED'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11418/gel-quantum-360-viii-illuminate-yellowblack-black-66b3621140516.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            GEL-QUANTUM 360 VIII 'ILLUMINATE YELLOW/BLACK'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11426/air-jordan-1-mid-saillight-dew-muslin-white-66bb4a42e2b7a.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            AIR JORDAN 1 MID 'SAIL/LIGHT DEW-MUSLIN'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11434/dunk-low-nn-baroque-brownblack-white-sail-brown-66bb4b2dc3a2a.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            DUNK LOW NN 'BAROQUE BROWN/BLACK-WHITE-SAIL'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11415/crazy-1-magic-beigeshadow-brown-brown-66b472e580b2e.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            CRAZY 1 'MAGIC BEIGE/SHADOW BROWN'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11422/air-jordan-4-retro-se-smoke-greyiron-grey-cement-grey-grey-66b48d859813d.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            AIR JORDAN 4 RETRO SE 'SMOKE GREY/IRON GREY-CEMENT GREY'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11396/dunk-low-retro-whitedenim-turq-white-66b3660dc7ed0.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            DUNK LOW RETRO 'WHITE/DENIM TURQ'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11406/dunk-low-coconut-milkflax-sail-brown-66b497326da01.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            DUNK LOW 'COCONUT MILK/FLAX-SAIL'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11421/air-max-1-whitelight-army-neutral-grey-black-white-66b47248b5e8d.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            AIR MAX 1 'WHITE/LIGHT ARMY-NEUTRAL GREY-BLACK'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11416/gazelle-indoor-preloved-inkwonder-clay-sand-strata-blue-66b47456555a2.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            GAZELLE INDOOR 'PRELOVED INK/WONDER CLAY-SAND STRATA'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }}>
                        <div className="items">
                            <img src="https://images.vegnonveg.com/resized/700X573/11476/v2k-run-summit-whitechrome-white-light-orewood-brown-white-66c7187fc664e.jpg" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />
                            <br /><br />
                            V2K RUN 'SUMMIT WHITE/CHROME-WHITE-LIGHT OREWOOD BROWN'
                        </div>
                    </Link>
                </div>
                <Link style={{ textDecoration: "none" }}>
                    <div className="jjehfjnfjd">
                        <video src="https://videos.pexels.com/video-files/8533112/8533112-uhd_2560_1440_25fps.mp4" autoPlay muted loop className='promotionalvideo'></video>
                    </div>
                </Link>
                <div className="dhifjkfjlf" style={{ height: '500px', color: "black" }}>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://images.vegnonveg.com/resized/700X573/11395/air-jordan-5-retro-whiteblack-sail-metallic-silver-white-66b365aa44059.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            AIR JORDAN 5 RETRO 'WHITE/BLACK-SAIL-METALLIC SILVER'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery">
                            <img src="https://images.vegnonveg.com/resized/700X573/11394/air-jordan-1-low-whitebordeaux-sail-purple-66b364fe14e20.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            AIR JORDAN 1 LOW 'WHITE/BORDEAUX-SAIL'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery">
                            <img src="https://images.vegnonveg.com/resized/700X573/11404/air-max-1-essential-premium-neutral-oliveblack-cargo-khaki-green-66b495cfd64d0.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            AIR MAX 1 ESSENTIAL PREMIUM 'NEUTRAL OLIVE/BLACK-CARGO KHAKI'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery">
                            <img src="https://images.vegnonveg.com/resized/700X573/11400/killshot-2-dark-russetphantom-gum-medium-brown-black-brown-66b36827b5c5e.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            KILLSHOT 2 'DARK RUSSET/PHANTOM-GUM MEDIUM BROWN-BLACK'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery">
                            <img src="https://images.vegnonveg.com/resized/700X573/9805/air-jordan-1-mid-whiteblack-white-64dcc2a91c4af.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            AIR JORDAN 1 MID 'WHITE/BLACK'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery">
                            <img src="https://images.vegnonveg.com/resized/700X573/11425/air-jordan-1-low-whitemetallic-gold-black-white-66bb4992d8cb4.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            AIR JORDAN 1 LOW 'WHITE/METALLIC GOLD-BLACK'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery">
                            <img src="https://images.vegnonveg.com/resized/700X573/11381/air-jordan-1-mid-se-whiteoxidized-green-sail-neutral-grey-white-66a8c651cc6f3.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            AIR JORDAN 1 MID SE 'WHITE/OXIDIZED GREEN-SAIL-NEUTRAL GREY'
                        </div>
                    </Link>
                </div>
                <Link style={{ textDecoration: "none" }}>
                    <div className="jjehfjnfjd">
                        <video src="https://cdn.shopify.com/videos/c/o/v/4144efc50b5b4801b277b3132794de9c.mp4" autoPlay muted loop className='promotionalvideos'></video>
                    </div>
                </Link>
            </div>
        </>
    );
}

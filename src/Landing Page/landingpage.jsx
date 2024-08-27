import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAvYR2_B7BVNKufzGZHaaUcxJYWKyQ-_Jk",
    authDomain: "luxelayers.firebaseapp.com",
    projectId: "luxelayers",
    storageBucket: "luxelayers.appspot.com",
    messagingSenderId: "293993080821",
    appId: "1:293993080821:web:713b6779443a50ac0922bc",
    measurementId: "G-PKC7WSY6LG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default function Landingpage() {
    const [currentImage, setCurrentImage] = useState('https://overlaysnow.com/cdn/shop/files/Free_spirit___The_ultimate_Textures_web_1.jpg?v=1723292870&width=2000');
    const [user, setUser] = useState(false);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                console.log('User is signed in');
                setUser(true);
                // ...
            } else {
                // User is signed out
                // ...
                console.log('User is not signed')
                setUser(false);
            }
        });
        console.log(user);
    });
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
                            <Link style={{ textDecoration: "none", color: "black" }} to={user ? "/" : '/account/login'}>
                                <svg focusable="false" width="18" height="18" className="icon icon--header-search" viewBox="0 0 18 18">
                                    <path d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17" fill="none" stroke="currentColor" strokeWidth="2"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="searchform">
                            <Link style={{ textDecoration: "none", color: "black" }} to={user ? "/account/viewcart" : '/account/login'}>
                                <svg focusable="false" width="18" height="18" class="icon icon--header-cart   " viewBox="0 0 20 18">
                                    <path d="M3 1h14l1 16H2L3 1z" fill="none" stroke="currentColor" stroke-width="2"></path>
                                    <path d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0" fill="none" stroke="currentColor" stroke-width="2"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="searchform">
                            <Link style={{ textDecoration: "none", color: "black" }} to={user ? "/" : '/account/login'}>
                                <svg focusable="false" width="18" height="18" class="icon icon--header-customer   " viewBox="0 0 18 17">
                                    <circle cx="9" cy="5" r="4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></circle>
                                    <path d="M1 17v0a4 4 0 014-4h8a4 4 0 014 4v0" fill="none" stroke="currentColor" stroke-width="2"></path>
                                </svg>
                            </Link>
                        </div>
                        {/* <div className="logoimage">
                            <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/_fa24086d-6873-4c24-9ff6-0aceb7380333-QyUF9bBdbH9jERIGwpyEPhaZ2HcKZL.jpg" alt="" className='logoimg' />
                        </div> */}
                    </div>
                    <div className="headeroptions">
                        <div className="options">
                            {/* <Link to="/" style={{ textDecoration: "none", color: "black" }}>SS24</Link> */}
                            <Link to="/footwear" style={{ textDecoration: "none", color: "black" }} className='headerlink'>Footwear</Link>
                            <Link to="/ss24" style={{ textDecoration: "none", color: "black" }}>SS24</Link>
                            <Link to="/AF1" style={{ textDecoration: "none", color: "black" }}>Air Force 1</Link>
                            <Link to="/jordan" style={{ textDecoration: "none", color: "black" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "orangered" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "black" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                            <Link to="/account/login" style={{ textDecoration: "none", color: "black" }}>Login</Link>
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
                <Link style={{ textDecoration: "none" }} to={'/dunks'}>
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
                <Link style={{ textDecoration: "none" }} to={'/ss24'}>
                    <div className="jjehfjnfjd">
                        <video src="https://images.vegnonveg.com/media/collections/132/17171505421326659a34e3985f.mp4" autoPlay muted loop className='promotionalvideos'></video>
                    </div>
                </Link>
                <div className="dhifjkfjlf" style={{ height: '500px', color: "black" }}>
                    <Link style={{ textDecoration: "none", color: "black" }} to={"/jordan"}>
                        <div className="gallery" >
                            <img src="https://images.vegnonveg.com/media/collections/102/172007371710266863df57389e.png" alt="" className='newstockimages' />
                            <br /><br />
                            LEGENDARY AIR JORDAN 1
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }} to={'/slides'}>
                        <div className="gallery" >
                            <img src="https://images.vegnonveg.com/media/collections/75/171955723875667e5c76f082e.png" alt="" className='newstockimages' />
                            <br /><br />
                            SLIDES - ALL DAY COMFORT
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }} to={'/dunks'}>
                        <div className="gallery" >
                            <img src="https://images.vegnonveg.com/media/collections/101/17198391211016682a991ee9b7.png" alt="" className='newstockimages' />
                            <br /><br />
                            NIKE DUNKS - HERITAGE
                        </div>
                    </Link>
                </div>
                <Link style={{ textDecoration: "none" }}>
                    <div className="jjehfjnfjd">
                        <video src="https://cdn.shopify.com/videos/c/o/v/4144efc50b5b4801b277b3132794de9c.mp4" autoPlay muted loop className='promotionalvideos'></video>
                    </div>
                </Link>
                <div className="dhifjkfjlf" style={{ height: '500px', color: "black" }}>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/0b024371-2a62-4df8-bdb3-5786c1bde198/v2k-run-shoes-zJV8TV.png" alt="" className='newstockimages' />
                            <br /><br />
                            NIKE V2K RUN
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/71521bad-30ec-4ffb-8776-9deb56556c96/p-6000-shoes-kGDH2V.png" alt="" className='newstockimages' />
                            <br /><br />
                            NIKE P-6000 PREMIUM
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/df4a60dc-5801-4897-96b6-218643b5b4e8/v2k-run-shoes-jqDSBb.png" alt="" className='newstockimages' />
                            <br /><br />
                            NIKE V2K RUN
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/18f80bc9-88ac-450f-8f85-fbe2f68fa810/zoom-vomero-5-shoes-pTGjFN.png" alt="" className='newstockimages' />
                            <br /><br />
                            NIKE ZOOM VOMERO 5
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/da1c5a0e-0d65-4b72-8e99-b65e1062b7d7/p-6000-shoes-QcQbpx.png" alt="" className='newstockimages' />
                            <br /><br />
                            NIKE P-6000
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/6b5f86ee-d9eb-4e78-89a3-4f3978503ce2/air-max-dn-shoes-PWPh7h.png" alt="" className='newstockimages' />
                            <br /><br />
                            NIKE AIR MAX DN PREMIUM
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/e9dc7d31-f2ad-4577-bd3f-33ed7c34dfab/zoom-vomero-5-shoes-1DsLmz.png" alt="" className='newstockimages' />
                            <br /><br />
                            NIKE ZOOM VOMERO 5
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/03f2c10f-64e4-4f6f-9cbc-a954d1ce0678/v2k-run-shoes-k4c8Dd.png" alt="" className='newstockimages' />
                            <br /><br />
                            NIKE V2K RUN
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/31a17614-4755-48c0-95ed-2023ebfaaf38/initiator-shoes-FXHpRJ.png" alt="" className='newstockimages' />
                            <br /><br />
                            NIKE INITIATOR
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/425cc1ec-1c70-48fc-a531-d329065ae364/zoom-vomero-5-shoes-C5jXXx.png" alt="" className='newstockimages' />
                            <br /><br />
                            NIKE ZOOM VOMERO 5
                        </div>
                    </Link>
                </div>
                <Link style={{ textDecoration: "none" }}>
                    <div className="jjehfjnfjd">
                        <video src="https://vod.freecaster.com/louisvuitton/9cab9fef-a9c7-45bb-b866-e0176b146dce/PqutfkpKHJm5u7hJW9yCWG6s_3.mp4" autoPlay muted loop className='promotionalvideo'></video>
                    </div>
                </Link>
                <div className="dhifjkfjlf" style={{ height: '500px', color: "black" }}>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://crepdogcrew.com/cdn/shop/products/image_5dcf2022-afff-4453-8cdf-ae694772b005.jpg?v=1645548228&width=1200" alt="" className='newstockimages' />
                            <br /><br />
                            adidas Yeezy Boost 350 V2 Dazzling Blue
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://crepdogcrew.com/cdn/shop/products/YEEZYBOOST350V2.jpg?v=1673708997&width=1200" alt="" className='newstockimages' />
                            <br /><br />
                            adidas Yeezy Boost 350 V2 Core Black White
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar01_5f8c7e1b-f9d7-4841-ad63-40e5bb1d0850.png?v=1718264646&width=1000" alt="" className='newstockimages' />
                            <br /><br />
                            adidas Yeezy Foam Runner Sand
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://crepdogcrew.com/cdn/shop/products/YeezyBoost350V2_Bred_74fcca81-638d-4625-b002-e552555ceec9.jpg?v=1611595848&width=1000" alt="" className='newstockimages' />
                            <br /><br />
                            Adidas Yeezy Boost 350 V2 black red
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://crepdogcrew.com/cdn/shop/products/YEEZYSLIDEPURE.png?v=1680159297&width=1200" alt="" className='newstockimages' />
                            <br /><br />
                            Yeezy Slide Pure
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://crepdogcrew.com/cdn/shop/products/ADIDASYEEZYBOOST350V2CARBON_a89f4489-87e1-4c34-bc26-0fb2214f1d86.jpg?v=1606050742&width=1200" alt="" className='newstockimages' />
                            <br /><br />
                            adidas Yeezy Boost 350 V2 Carbon
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://crepdogcrew.com/cdn/shop/files/1_6cc2c779-cd76-4094-b8e0-75a726096130.png?v=1700139687&width=1000" alt="" className='newstockimages' />
                            <br /><br />
                            adidas Yeezy 450 Dark Slate
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://crepdogcrew.com/cdn/shop/products/image_f73351bd-401f-4ea2-b65d-24cbb2e78cd3.jpg?v=1622343450&width=1200" alt="" className='newstockimages' />
                            <br /><br />
                            adidas Yeezy Boost 700 Bright Blue
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://crepdogcrew.com/cdn/shop/products/yeezya_edaa951b-ec14-4842-b15d-141d40cb4696.jpg?v=1630052170&width=1000" alt="" className='newstockimages' />
                            <br /><br />
                            adidas Yeezy Foam RNNR MX Cream Clay
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery" >
                            <img src="https://crepdogcrew.com/cdn/shop/files/adidasYeezyBoost350V2Zebra4.png?v=1715091615&width=1000" alt="" className='newstockimages' />
                            <br /><br />
                            adidas Yeezy Boost 350 V2 Zebra
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

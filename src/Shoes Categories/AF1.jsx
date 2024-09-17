import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import Menu from '../Menu for mobile/menu';

const firebaseConfig = {
    apiKey: "AIzaSyAvYR2_B7BVNKufzGZHaaUcxJYWKyQ-_Jk",
    authDomain: "luxelayers.firebaseapp.com",
    projectId: "luxelayers",
    storageBucket: "luxelayers.appspot.com",
    messagingSenderId: "293993080821",
    appId: "1:293993080821:web:713b6779443a50ac0922bc",
    measurementId: "G-PKC7WSY6LG"
};
export default function AF1() {
    useEffect(() => {
        document.title = 'Buy Nike Air Force for Men, women, and kids | LuxeLayers';
    })
    const [user, setUser] = useState(false);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                // console.log('User is signed in');
                setUser(true);
                // ...
            } else {
                // User is signed out
                // ...
                // console.log('User is not signed')
                // setUser(false);
            }
        });
        console.log(user);
    });
    const imageUrls = [
        "https://images.vegnonveg.com/resized/400X328/11317/air-force-1-shadow-sailcacao-wow-flax-sesame-white-6690be258346c.jpg",
        "https://images.vegnonveg.com/resized/400X328/11226/air-force-1-07-lv8-light-british-tanburgundy-crush-brown-666a86b38436d.jpg",
        "https://images.vegnonveg.com/resized/400X328/11336/air-force-1-07-lv8-1-coconut-milkvintage-green-bicoastal-white-6690cdf402403.jpg",
        "https://images.vegnonveg.com/resized/400X328/11257/air-force-1-07-nn-hydrangeasblack-raspberry-barely-grape-purple-66865dbe70bcc.jpg",
        "https://images.vegnonveg.com/resized/400X328/11195/air-force-1-07-saillimestone-pale-vanilla-coconut-milk-cream-66508e9ee2809.jpg",
        "https://images.vegnonveg.com/resized/400X328/11326/air-force-1-07-whiteuniversity-gold-white-6690c18e24b7c.jpg",
        "https://images.vegnonveg.com/resized/400X328/8772/air-force-1-07-blackwhite-black_1-63bbfb21984a4.jpg",
        "https://images.vegnonveg.com/resized/400X328/11475/air-force-1-07-whitedragon-red-white-white-66c717cce8961.jpg",

    ];

    const dunkLowModels = [
        "AIR FORCE 1 SHADOW 'SAIL/CACOA WOW-FLAX-SESAME WHITE'",
        "AIR FORCE 1 '07 LV8 'LIGHT BRITISH TAN/BURGUNDY CRUSH-BROWN'",
        "AIR FORCE 1 '07 LV8-1 'COCONUT MILK/VINTAGE GREEN-BICOASTAL WHITE'",
        "AIR FORCE 1 '07 NN 'HYDRANGEAS/BLACK-RASPBERRY-BARELY GRAPE PURPLE'",
        "AIR FORCE 1 '07 'SAIL/LIMESTONE-PALE VANILLA-COCONUT MILK-CREAM'",
        "AIR FORCE 1 '07 'WHITE/UNIVERSITY GOLD-WHITE'",
        "AIR FORCE 1 '07 'BLACK/WHITE-BLACK'",
        "AIR FORCE 1 '07 'WHITE/DRAGON RED-WHITE'",
        "AIR FORCE 1 LOW 'BLACK/TEA-BLACK-PETRA BROWN'",
        "AIR FORCE 1 LV8-3 'LIGHT BRITISH TAN/BURGUNDY CRUSH-BROWN'",
        "AIR FORCE 1 '07 NN 'FLAX/CACOA WOW-SESAME WHITE'",
        "AIR FORCE 1 '07 LV8 'PHANTOM/MALACHITE-GUM YELLOW'",
        "AIR FORCE 1 '07 'BLACK/BLACK'",
        "AIR FORCE 1 LE 'BLACK/BLACK'",
        "AIR FORCE 1 '07 NN 'WHITE/OBSIDIAN-PALE IVORY-METALLIC GOLD'",
        "AIR FORCE 1 '07 'WHITE/MIDNIGHT NAVY-WHITE'",
        "AIR FORCE 1 SP 'BLACK/GAME ROYAL-BLACK'",
        "AIR FORCE 1 '07 ESSENTIAL 'SAIL/BLACK-BLACK'",
        "AIR FORCE 1 '07 NN 'WHITE/GYM RED-VOLT'",
        "AIR FORCE 1 '07 LV8 'WHITE/PHANTOM-SUMMIT WHITE'",
        "AIR FORCE 1 '07 NN SE 'SAIL/VAPOR GREEN-SEA GLASS-VOLT'",
        "AIR FORCE 1 '07 NN SE 'SEA GLASS/VAPOR GREEN-LIGHT SILVER-SAIL'",
        "AIR FORCE 1 LOW RETRO PREMIUM 'WHITE/ELEMENTAL GOLD-DARK HAZEL'",
        "AIR FORCE 1 LV8-4 'WHITE/BLACK-WHITE'"
    ];


    return (
        <>
            <div className="webbody">
                <div className="headersection">
                    <div className="jdjvkklv">

                        <div className="logo">
                            <div className="searchform">
                                <Menu />
                            </div>
                            {
                                user ? <div className="searchform">
                                    <Link style={{ textDecoration: "none", color: "black" }} to={user ? "/account/order" : '/account/login'}>
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="" />
                                    </Link>
                                </div> : <></>
                            }
                            {
                                user ? <div className="searchform">
                                    <Link style={{ textDecoration: "none", color: "black" }} to={user ? "/account/viewcart" : '/account/login'}>
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" />
                                    </Link>
                                </div> : <></>
                            }
                            {
                                user ? <div className="searchform">
                                    <Link style={{ textDecoration: "none", color: "black" }} to={user ? "/account/profile" : '/account/login'}>
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" />
                                    </Link>
                                </div> : <></>
                            }

                        </div>
                    </div>
                    <div className="headeroptions">
                        <div className="options">
                            <Link to="/footwear" style={{ textDecoration: "none", color: "black" }} className='headerlink'>Footwear</Link>
                            <Link to="/ss24" style={{ textDecoration: "none", color: "black" }}>SS24</Link>
                            <Link to="/AF1" style={{ textDecoration: "none", color: "orangered" }}>Air Force 1</Link>
                            <Link to="/jordan" style={{ textDecoration: "none", color: "black" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "black" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                            <Link to="/account/login" style={{ textDecoration: "none", color: "black" }}>Login</Link>
                        </div>
                    </div>
                </div>
                <img src="https://images.vegnonveg.com/media/collections/84/171955716484667e5c2c97284.png" alt="" width={"100%"} />
                <div className="fgfhhgjjh">
                    {
                        imageUrls.map((url, index) => (
                            <div className="jenfkjfrf">
                                <img src={imageUrls[index]} alt="" />
                                <div className="ejfjf">
                                    {dunkLowModels[index]}
                                </div>
                                {/* <br /><br /> */}
                            </div>
                        ))
                    }
                </div>
                <br /><br />
            </div>
        </>
    )
}

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default function Sleeveless() {
    const [user, setUser] = useState(false);
    useEffect(() => {
        document.title="Men's Tank Tops & Sleeveless Shirts | luxelayers.com";
    })
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
    const fetchedAjPic = [
        'https://overlaysnow.com/cdn/shop/files/OVERLAYS174.jpg?v=1718451482&width=300',
        'https://overlaysnow.com/cdn/shop/files/BeigeDreamBackPrint_Sleeveless_OVRLYS_2.jpg?v=1720523040&width=300',
        'https://overlaysnow.com/cdn/shop/files/BlackSleeveless_OVRLYS_1.jpg?v=1720622833&width=300',
        'https://overlaysnow.com/cdn/shop/files/GreenSleeveless_OVRLYS_1.jpg?v=1720522750&width=300',
        'https://overlaysnow.com/cdn/shop/files/BeigeSleeveless_OVRLYS_1.jpg?v=1720522965&width=300',
        'https://overlaysnow.com/cdn/shop/files/AriseSleeveless_2.jpg?v=1723031549&width=300',
        'https://overlaysnow.com/cdn/shop/files/DreamSleevlessinPeachColor_2.jpg?v=1723031275&width=300'
    ];
    const fetchedAjName = [
        'Hawk Eye Sleeveless Heavy Weight Acid Wash Tank Top With Raw Edges',
        'Arise Heavy Weight Sleeveless Tank Top With Raw Edges',
        'Dream Heavyweight Sleeveless Tank Top With Raw Edges',
        'Digital Green Heavyweight Sleeveless Tank Top With Raw Edges',
        'Fawn Heavy Weight Sleeveless Tank Top With Raw Edges',
        'Arise Heavy Weight Sleeveless Tank Top With Raw Edges',
        'Dream Heavyweight Sleeveless Tank Top With Raw Edges'
    ];
    
    const LazyImage = ({ src, alt }) => {
        const [loading, setLoading] = useState(true);
        const imgRef = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setLoading(false);
                        observer.unobserve(imgRef.current);
                    }
                },
                { threshold: 0.1 }
            );
            if (imgRef.current) {
                observer.observe(imgRef.current);
            }
            return () => {
                if (imgRef.current) {
                    observer.unobserve(imgRef.current);
                }
            };
        }, []);
        return (
            <div ref={imgRef} className="lazy-image-container">
                {loading && <div className="loading-placeholder">Loading...</div>}
                <img
                    src={!loading ? src : undefined}
                    alt={alt}
                    className={loading ? 'hidden' : ''}
                />
            </div>
        );
    };
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
                            {/* <Link to="/" style={{ textDecoration: "none", color: "black" }}>SS24</Link> */}
                            <Link to="/footwear" style={{ textDecoration: "none", color: "black" }} className='headerlink'>Footwear</Link>
                            <Link to="/ss24" style={{ textDecoration: "none", color: "black" }}>SS24</Link>
                            <Link to="/AF1" style={{ textDecoration: "none", color: "black" }}>Air Force 1</Link>
                            <Link to="/jordan" style={{ textDecoration: "none", color: "black" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "black" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                            {
                                user ? <Link style={{ textDecoration: "none", color: "red" }}>Logout</Link> :
                                    <Link to={'/account/login'} style={{ textDecoration: "none", color: "black" }}>Login</Link>
                            }
                        </div>
                    </div>
                </div>
                <video src="https://cdn.shopify.com/videos/c/o/v/b1df145dd4814539bbac39d4771a7d0e.mp4" alt="" width={"100%"} muted autoPlay loop />
                <div className="jdjfdjv">
                        {
                            fetchedAjName.map((name, index) => (
                                <Link 
                                    className="jenfkjfrf"
                                    style={{ textDecoration: "none", color: "black" }}
                                    key={index}>
                                    <img src={fetchedAjPic[index]} alt={name} className="lazy-image" style={{marginTop: "20px"}}/>
                                    <div className="ejfjf" style={{marginTop: "8px"}}>
                                        {name}
                                    </div>
                                    <div className="ejfjf" style={{marginTop: "8px"}}>
                                    ₹1799.00
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
            </div>
        </>
    )
}

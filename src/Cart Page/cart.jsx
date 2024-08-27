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
export default function Cart() {
    useEffect(() => {
        document.title='Shopping Cart | luxelayers.com'
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
                // setUser(true);
                // ...
            } else {
                // User is signed out
                // ...
                // console.log('User is not signed')
                // setUser(false);
                window.location.replace('/')
            }
        });
        console.log(user);
    });
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
                                    <path d="M3 1h14l1 16H2L3 1z" fill="none" stroke="orangered" stroke-width="2"></path>
                                    <path d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0" fill="none" stroke="orangered" stroke-width="2"></path>
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
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "black" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                            <Link to="/account/login" style={{ textDecoration: "none", color: "black" }}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

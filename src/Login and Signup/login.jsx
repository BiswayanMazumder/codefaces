import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
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
export default function Login() {
    useEffect(() => {
        document.title = 'Account'
    });
    const auth = getAuth();
    const sendresetpassword = () => {
        const auth = getAuth();
        const email = document.getElementById("emailaddress").value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    const login = () => {
        const email = document.getElementById("emailaddress").value;
        const password = document.getElementById("passwordbox").value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log("Signed in")
                const user = userCredential.user;
                window.location.replace('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error: ", errorMessage);
            });
    }
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
                            {/* <Link to="/account/login" style={{ textDecoration: "none", color: "orangered" }}>Login</Link> */}
                            {
                                user ? <Link style={{ textDecoration: "none", color: "red" }}>Logout</Link> :
                                    <Link to={'/account/login'} style={{ textDecoration: "none", color: "black" }}>Login</Link>
                            }
                        </div>
                    </div>
                </div>
                <div className="jdkfkvjdlv">
                    <div className="jjfejf">
                        Login
                    </div>
                    Please enter your e-mail and password:
                    <div className="ekfjmmf">
                        <div className="email" style={{ border: "none" }}>
                            <input type="text" placeholder='E-mail' className='email' id='emailaddress' />
                        </div>
                    </div>
                    <div className="ekfjmmf">
                        <div className="email" style={{ border: "none" }}>
                            <input type="password" placeholder='Password' className='email' id='passwordbox' />
                        </div>
                    </div>
                    <Link style={{ textDecoration: "none", color: "white" }}>
                        <div className="ekfjmmf" onClick={login}>
                            <div className="loginbutton" style={{ border: "none", backgroundColor: "black", color: "white", justifyContent: "center", alignItems: "center", textAlign: "center", display: "flex" }} >
                                LOGIN
                            </div>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "white" }} onClick={sendresetpassword}>
                        <div className="ekfjmmf">
                            <div className="email" style={{ border: "none" }}>
                                Forgot Password?
                            </div>
                        </div>
                    </Link>
                    <div className="dfbjdndn">
                        <div className="ejfhfm">
                            <img src="https://overlaysnow.com/cdn/shop/files/truck_1_100x.png?v=1679920131" alt="" className='featureimgs' />
                            Free & Fast Delivery
                        </div>
                        <div className="ejfhfm">
                            <img src="https://overlaysnow.com/cdn/shop/files/retweet_100x.png?v=1679920531" alt="" className='featureimgs' />
                            Return Policy
                        </div>
                        <div className="ejfhfm">
                            <img src="https://overlaysnow.com/cdn/shop/files/mail_100x.png?v=1679920559" alt="" className='featureimgs' />
                            Contact us

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function Returnorder() {
    useState(() => {
        document.title = 'Return Order | LuxeLayers'
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
    const [empty,setempty]=useState(false);
    const emptyvalue=()=>{
        var orderid=document.getElementById('emailaddress').value;
        // var email=document.getElementById('passwordbox').value;
        // console.log('orderid',orderid);
        // console.log('email',email);
        if(orderid==''){
            setempty(true);
        }
        setInterval(() => {
            setempty(false);
        }, 5000);
    }
    const [correctorder,setcorrectorder]=useState(false);
    const [firsttime,setfirsttime]=useState(true);
    const [Email,setemail]=useState('');
    const fetchorder = async () => {
        emptyvalue();
        var orderid = document.getElementById('emailaddress').value; // Order ID input
        const auth = getAuth();
        const db = getFirestore(app); // Initialize Firestore with the Firestore instance
        const currentUser = auth.currentUser;
    
        if (!currentUser) {
            console.log('No user is currently logged in.');
            return;
        }
    
        const UID = currentUser.uid;
        const userEmail = currentUser.email; // Get the current user's email
        const orderDocRef = doc(db, 'Order Details', orderid);
    
        try {
            const orderDocSnapshot = await getDoc(orderDocRef); // Get the document snapshot
    
            if (orderDocSnapshot.exists()) {
                const cartData = orderDocSnapshot.data(); // Get the data from the snapshot
                const emailid = cartData.email;
    
                if (emailid === userEmail) { // Compare with the current user's email
                    setfirsttime(false);
                    setInterval(() => {
                        setfirsttime(true);
                    }, 5000);
                    setcorrectorder(true);
                } else {
                    setfirsttime(false);
                    setInterval(() => {
                        setfirsttime(true);
                    }, 5000);
                }
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.log('Error fetching order:', error);
        }
    }
    
    
    return (
        <div className='webbody' style={{height: '100vh'}}>
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
                        <Link to="/AF1" style={{ textDecoration: "none", color: "black" }}>Air Force 1</Link>
                        <Link to="/jordan" style={{ textDecoration: "none", color: "black" }}>Jordan</Link>
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                        <Link to="/dunks" style={{ textDecoration: "none", color: "black" }}>Dunks</Link>
                        <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                        <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                        {/* <Link to="/account/login" style={{ textDecoration: "none", color: "black" }}>Login</Link> */}
                        {
                            user ? <Link style={{ textDecoration: "none", color: "red" }}>Logout</Link> :
                                <Link to={'/account/login'} style={{ textDecoration: "none", color: "black" }}>Login</Link>
                        }
                    </div>
                </div>
            </div>
            <div className="jdkfkvjdlv">
                <div className="jjfejf">
                    Product Return Request
                </div>
                Enter your order number and Email or Phone to find your order
                <div className="ekfjmmf">
                        <div className="email" style={{ border: "none" }}>
                            <input type="text" placeholder='Order Number' className='email' id='emailaddress' style={{ border:empty? "2px solid red":"" }} />
                        </div>
                    </div>
                    {/* <div className="ekfjmmf">
                        <div className="email" style={{ border: "none"}}>
                            <input type="text" placeholder='Email Address' className='email' id='passwordbox' style={{ border:empty? "2px solid red":"" }}/>
                        </div>
                    </div> */}
                    <Link style={{ textDecoration: "none", color: "white" }}>
                        <div className="ekfjmmf" onClick={()=>{fetchorder()}}>
                            <div className="loginbutton" style={{ border: "none", backgroundColor: "#BFA162", color: "white", justifyContent: "center", alignItems: "center", textAlign: "center", display: "flex" }} >
                                Find your order
                            </div>
                        </div>
                    </Link>
                    {
                      firsttime?<></>:  correctorder?<></>:<div className="ffmfmb" style={{ color: "red",fontWeight:"500" }}>
                    Sorry this is not your order
                    </div>
                    }
                    <br /><br />
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
    )
}

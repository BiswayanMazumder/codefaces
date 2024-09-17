import React, { useEffect, useState } from 'react';
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
export default function Cart() {
    useEffect(() => {
        document.title = 'Shopping Cart | luxelayers.com'
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
                window.location.replace('/')
            }
        });
        // console.log(user);
    });
    const [documentNames, setDocumentNames] = useState([]);
    const [fetchedAjName, setFetchedAjName] = useState([]);
    const [fetchedAjPic, setFetchedAjPic] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [fetchedAjPrice, setFetchedAjprice] = useState([]);
    useEffect(() => {
        const fetchDocumentNames = async () => {
            console.log('Fetching document names...');
            try {
                const auth = getAuth();
                const db = getFirestore(app);
                const currentUser = auth.currentUser;
                if (currentUser) {
                    const UID = currentUser.uid;
                    // console.log('Current UID:', UID);
                    const cartDocRef = doc(db, 'Cart Items', UID);
                    const cartDocSnap = await getDoc(cartDocRef);
                    if (cartDocSnap.exists()) {
                        const cartData = cartDocSnap.data();
                        // console.log('Cart Items data:', cartData);
                        const pid = cartData?.['Product ID'] || [];
                        // console.log('Product IDs:', pid);
                        setDocumentNames(pid);
                        const ajName = [];
                        const ajPic = [];
                        const ajprice = [];

                        for (let i = 0; i < pid.length; i++) {
                            const productDocRef = doc(db, 'sneakers', pid[i]);
                            const productDocSnap = await getDoc(productDocRef);
                            if (productDocSnap.exists()) {
                                const productData = productDocSnap.data();
                                // console.log('Product data:', productData);
                                ajName.push(productData?.name || 'No Name');
                                ajPic.push(productData?.['Product Image'] || 'No Image');
                                ajprice.push(productData?.Price || 0);
                            } else {
                                console.log(`No product data found for ID: ${pid[i]}`);
                            }
                        }
                        setFetchedAjName(ajName);
                        setFetchedAjPic(ajPic);
                        setFetchedAjprice(ajprice);
                    } else {
                        console.log('No cart items document found');
                    }
                } else {
                    console.log('No current user');
                }
            } catch (error) {
                console.error('Error fetching document names:', error);
            }
        };

        fetchDocumentNames();
    }, []);

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
                <Link className="cart-items" style={{ textDecoration: "none", color: "black" }}>
                    {fetchedAjName.length > 0 ? (
                        fetchedAjName.map((name, index) => (
                            <Link key={index} className="cart-item" to={"/product"} onClick={() => {
                                localStorage.setItem('producttype', 'sneakers');
                                localStorage.setItem('iscart', true);
                                localStorage.setItem('productname', fetchedAjName[index]);
                                localStorage.setItem('productprice', fetchedAjPrice[index]);
                                localStorage.setItem('productimage', fetchedAjPic[index]);
                                localStorage.setItem('PID', documentNames[index]);
                                console.log(documentNames[index]);
                            }} style={{ textDecoration: "none", color: "black" }}>
                                <img src={fetchedAjPic[index]} alt={name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{name}</h3>
                                    <br /><br />
                                    <p className="cart-item-price" style={{ fontWeight: "500" }}>₹{fetchedAjPrice[index]}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>No items in cart</p>
                    )}
                </Link>
            </div>
        </>
    )
}

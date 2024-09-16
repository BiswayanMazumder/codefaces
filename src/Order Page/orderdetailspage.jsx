import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

// Initialize Firebase
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
export default function Orderdetailspage() {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const productname = localStorage.getItem('productname');
    useEffect(() => {
        document.title = `Orders Information for ${productname} | luxelayers.com`;
    }, [name]);
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);
                await fetchUserData(user.uid);
                // await fetchOrderData(user.uid);
            } else {
                window.location.replace('/');
            }
        });
        return () => unsubscribe();
    }, []);

    const fetchUserData = async (uid) => {
        const db = getFirestore(app);
        const docRef = doc(db, "User Detail", uid);
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setName(docSnap.data()["Name"]);
            } else {
                console.log('No such document!');
            }
        } catch (e) {
            console.error(`Error getting document: ${e.message}`);
        }
    };
    const [shipped, setShipped] = useState(true);
    const [outfordelivery, setoutfordelivery] = useState(false);
    const [delivered, setdelivered] = useState(false);
    useEffect(() => {
        const fetchOrderDetails = async () => {
            console.log('Fetching');
            const db = getFirestore(app);
            const allOrderDetails = [];
            const orderDetailsRef = doc(db, 'Order Details', localStorage.getItem('OID'));
            const orderDetailSnap = await getDoc(orderDetailsRef);
            if (orderDetailSnap.exists()) {
                const order = orderDetailSnap.data();
                setShipped(order["Shipped"]);
                setoutfordelivery(order["Out_Delivery"]);
                setdelivered(order["Delivered"]);
                allOrderDetails.push(order);
            } else {
                console.log('No such document!');
            }

            // Log allOrderDetails here if needed
            // console.log('Order Details', allOrderDetails);
        };

        fetchOrderDetails();
    }, []);

    // Use this effect to log the shipped state when it changes
    useEffect(() => {
        // console.log('Shipped state updated:', shipped);

    }, [shipped]);
    useEffect(() => {
        // console.log('Shipped state updated ofd:', outfordelivery);

    }, [outfordelivery]);
    useEffect(() => {
        // console.log('Shipped state updated deli:', delivered);

    }, [delivered]);
    return (
        <>
            <div className="webbody">
                <div className="headersection">
                    {user && (
                        <div className="logo">
                            <div className="searchform">
                                <Link style={{ textDecoration: "none", color: "black" }} to={user ? "/account/order" : '/'}>
                                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="" />
                                </Link>
                            </div>
                            <div className="searchform">
                                <Link style={{ textDecoration: "none", color: "black" }} to={user ? "/account/viewcart" : '/account/login'}>
                                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" />
                                </Link>
                            </div>
                            <div className="searchform">
                                <Link style={{ textDecoration: "none", color: "black" }} to={user ? "/account/profile" : '/account/login'}>
                                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Profile" />
                                </Link>
                            </div>
                        </div>
                    )}
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
                            {user ? (
                                <Link style={{ textDecoration: "none", color: "red" }} onClick={() => getAuth().signOut()}>Logout</Link>
                            ) : (
                                <Link to={'/account/login'} style={{ textDecoration: "none", color: "black" }}>Login</Link>
                            )}
                        </div>
                    </div>
                </div>
                <div className="orderdetailsbody">
                    <div className="navs">
                        <Link className='ejfjejf' style={{ textDecoration: "none", color: "black", fontSize: "13px" }} to={'/'}>
                            Home
                        </Link>
                        <Link className='ejfjejf' style={{ textDecoration: "none", color: "black", fontSize: "13px" }} to={'/account/profile'}>
                            My Account
                        </Link>
                        <Link className='ejfjejf' style={{ textDecoration: "none", color: "black", fontSize: "13px" }} to={'/account/order'}>
                            My Orders
                        </Link>
                        <div className='ejfjejf' style={{ textDecoration: "none", color: "black", fontSize: "13px" }}>
                            {localStorage.getItem('OID')}
                        </div>
                    </div>
                    <br /><br /><br />
                    <div className="orderdetails">
                        <img src={localStorage.getItem('productimage')} alt={localStorage.getItem('OID')} height={250} width={250} />
                        <div className="details">
                            <div className="names" style={{fontSize:"15px"}}>
                                {localStorage.getItem('productname')}
                            </div>
                            <div className="names" style={{ fontWeight: "bold" }}>
                                ₹{localStorage.getItem('productprice')}
                            </div>
                            <div className="names" style={{ fontWeight: "300", color: "gray" }}>
                                Seller-LuxeLayers
                            </div>
                        </div>
                        <div className="details">
                        <div className="deliverydetails">
                            <div className="kjkvfmvs" style={{ color: "green" ,fontWeight:"600",fontSize:"12px"}}>
                                Shipped
                            </div>
                            
                            <div className="kjkvfmv" style={{ color: outfordelivery ? "green" : "red",fontWeight:"600",fontSize:"12px" }} >
                                {outfordelivery? "Out For Delivery":"Waiting for nearest hub"}
                            </div>
                            
                            <div className="kjkvfmv" style={{ color: delivered ? "green" : "red",fontWeight:"600" ,fontSize:"12px"}} >
                                {delivered? "Delivery Completed":"Not Delivered"}
                            </div>
                        </div>
                            <div className="deliverydetails">
                                <div className="shippedcircle" style={{ backgroundColor: "green" }}>

                                </div>
                                <div className="djhd" style={{ backgroundColor: outfordelivery ? "green" : "red" }} >

                                </div>
                                <div className="shippedcircle" style={{ backgroundColor: outfordelivery ? "green" : "red" }}>

                                </div>
                                <div className="djhd" style={{ backgroundColor: delivered ? "green" : "red" }}>

                                </div>
                                <div className="shippedcircle" style={{ backgroundColor: delivered ? "green" : "red" }} >

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

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

export default function Orderpage() {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [orderDetails, setOrderDetails] = useState([]); // New state for order details

    useEffect(() => {
        document.title = `Orders History for ${name} | luxelayers.com`;
    }, [name]);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);
                await fetchUserData(user.uid);
                await fetchOrderData(user.uid);
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

    const fetchOrderData = async (uid) => {
        const db = getFirestore(app);
        const orderDocRef = doc(db, 'Order IDs', uid);
        try {
            const orderDocSnap = await getDoc(orderDocRef);
            if (orderDocSnap.exists()) {
                const orderData = orderDocSnap.data();
                const pid = orderData?.['IDs'] || [];

                const allOrderDetails = [];

                for (let i = 0; i < pid.length; i++) {
                    const orderDetailsRef = doc(db, 'Order Details', pid[i]);
                    const orderDetailSnap = await getDoc(orderDetailsRef);
                    if (orderDetailSnap.exists()) {
                        const order = orderDetailSnap.data();
                        const itemCount = order["Name"].length;
                        for (let j = 0; j < itemCount; j++) {
                            allOrderDetails.push({ ...order, OrderID: pid[i], Index: j });
                        }
                    }
                }

                setOrderDetails(allOrderDetails);
                // console.log('Order Details:', allOrderDetails); // Debugging line
            } else {
                console.log('No such document!');
            }
        } catch (e) {
            console.error(`Error getting document: ${e.message}`);
        }
    };

    const formatDate = (seconds) => {
        const date = new Date(seconds * 1000);
        return date.toLocaleDateString(undefined, {
            month: 'long',  // Full month name
            day: 'numeric', // Day of the month
        });
    };

    return (
        <div className="webbody">
            <div className="headersection">
                {user && (
                    <div className="logo">
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
            {orderDetails.length > 0 ? (
                orderDetails.map((order, index) => (
                    <div key={index} className="order">
                        <Link
                            className="cart-item"
                            to={"/account/orderdetails"}
                            onClick={() => {
                                localStorage.setItem('producttype', 'sneakers');
                                localStorage.setItem('iscart', true);
                                localStorage.setItem('productname', order["Name"][order.Index]);
                                localStorage.setItem('productprice', order["Price"][order.Index]);
                                localStorage.setItem('productimage', order["Product Image"][order.Index]);
                                localStorage.setItem('PID', order["Product ID"][order.Index]);
                                localStorage.setItem('OID',order.OrderID) // Access OrderID directly from the order object
                            }}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <img src={order["Product Image"][order.Index]} alt={order["Name"][order.Index]} className="cart-item-image" />
                            <div className="cart-item-details">
                                <p style={{ color: order.Delivered ? 'green' : 'red' }}>
                                    {order.Delivered ? `Delivered on ${formatDate(order["Delivery Date"].seconds)}` : "Order yet to be Delivered"}
                                </p>
                                <h3 className="cart-item-name">{order["Name"][order.Index]}</h3>
                                <p className="cart-item-price" style={{ fontWeight: "500" }}>₹{order["Price"][order.Index]}</p>
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No orders found</p>
            )}
        </div>
    );
}

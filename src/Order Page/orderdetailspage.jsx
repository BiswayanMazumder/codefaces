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
    const [shippedate, setshippeddate] = useState('');
    const [outfordeliverydate, setoutfordeliverydate] = useState('');
    const [delivereddate, setdelivereddate] = useState('');
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
                setshippeddate(order["Order Date"]);
                setoutfordeliverydate(order["Out_Delivery_Time"]);
                setdelivereddate(order["Delivery Date"]);
                setdelivered(order["Delivered"]);
                allOrderDetails.push(order);
                // console.log(order);
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
    useEffect(() => {
        // console.log('Shipped state updated shiped:', shippedate);

    }, [shippedate]);
    useEffect(() => {
        // console.log('Shipped state updated ofd:', outfordeliverydate);

    }, [outfordeliverydate]);
    useEffect(() => {
        // console.log('Shipped state updated deli:', delivereddate);

    }, [delivereddate]);
    const formatDate = (seconds) => {
        const date = new Date(seconds * 1000);
        return date.toLocaleDateString(undefined, {
            month: 'long',  // Full month name
            day: 'numeric', // Day of the month
        });
    };
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
                            <Link className="names" style={{ fontSize: "15px",marginBottom:"10px",textDecoration: "none", color: "black" }} to={'/product'} onClick={()=>
                            {
                                localStorage.setItem('producttype', 'sneakers');
                                        localStorage.setItem('productname',localStorage.getItem('productname') );
                                        localStorage.setItem('productprice', localStorage.getItem('productprice'));
                                        localStorage.setItem('productimage', localStorage.getItem('productimage'));
                                        localStorage.setItem('PID', localStorage.getItem('PID'));
                                        console.log(localStorage.getItem('PID'));
                            }
                            }>
                                {localStorage.getItem('productname')}
                            </Link>
                            <br />
                            <div className="namess" style={{ fontWeight: "bold" }}>
                                ₹{localStorage.getItem('productprice')}
                            </div>
                            <br />
                            <div className="nameds" style={{ fontWeight: "300", color: "gray" }}>
                                Seller-LuxeLayers
                            </div>
                        </div>

                    </div>
                </div>
                <br /><br /><br />
                <div className="djfkdklckd">
                    Track your delivery
                    </div>
                    {/* <br /><br /><br /> */}
                <div className="deliverydetails">
                    <div className="ejfkmvdv">
                        <div className="shippingcircle" style={{ backgroundColor: "green" }}>

                        </div>
                        <div className="shippingline" style={{ backgroundColor: "green" }}>

                        </div>
                        <div className="shippingcircle" style={{ backgroundColor: outfordelivery ? "green" : "red" }}>

                        </div>
                        <div className="shippingline" style={{ backgroundColor: delivered ? "green" : "red" }}>

                        </div>
                        <div className="shippingcircle" style={{ backgroundColor: delivered ? "green" : "red" }}>

                        </div>
                    </div>
                    
                    <div className="ejfkmvdvs">
                        <div className="shippedtext" style={{color:"green"}}>
                            {`Item confirmed on ${formatDate(shippedate.seconds)}`}
                        </div>
                        <div className="shippedtext" style={{color: outfordelivery?"green":"red"}}>
                            {outfordelivery? `Out For Delivery on ${formatDate(outfordeliverydate.seconds)}`:"Yet to be out"}
                        </div>
                        <div className="shippedtext" style={{color: delivered?"green":"red"}}>
                            {delivered?`Delivered on ${formatDate(delivereddate.seconds)}`:"Yet to be delivered"}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

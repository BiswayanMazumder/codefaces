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
export default function Returnorderdetails() {
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
    const [shipped, setShipped] = useState(true);
    const [outfordelivery, setoutfordelivery] = useState(false);
    const [delivered, setdelivered] = useState(false);
    const [shippedate, setshippeddate] = useState('');
    const [outfordeliverydate, setoutfordeliverydate] = useState('');
    const [delivereddate, setdelivereddate] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);
    const [cancellationdate, setcancellationdate] = useState('');
    const [cancelled, setcancellation] = useState(false);
    const [refunddate, setrefunddate] = useState('');
    const [refunded, setrefunded] = useState(false);
    const [name, setnameorder] = useState([]);
    const [price, setprice] = useState([]);
    const [productimg, setproductimg] = useState([]);
    useEffect(() => {
        const fetchOrderDetails = async () => {
            console.log('Fetching');
            const db = getFirestore(app);
            const allOrderDetails = [];
            const orderDetailsRef = doc(db, 'Order Details', localStorage.getItem('searchorderid'));
            const orderDetailSnap = await getDoc(orderDetailsRef);
            if (orderDetailSnap.exists()) {
                const order = orderDetailSnap.data();
                setShipped(order["Shipped"]);
                setcancellation(order["Cancelled"]);
                setoutfordelivery(order["Out_Delivery"]);
                setshippeddate(order["Order Date"]);
                setnameorder(order["Name"]);
                setprice(order["Price"]);
                setproductimg(order["Product Image"]);
                setoutfordeliverydate(order["Out_Delivery_Time"]);
                setcancellationdate(order['Cancellation Date']);
                setdelivereddate(order["Delivery Date"]);
                setdelivered(order["Delivered"]);
                setrefunded(order["Refunded"]);
                setrefunddate(order['Refund Initial Date']);
                allOrderDetails.push(order);
                setOrderDetails(order);
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
        // console.log('Shipped state updated:', shipped);

    }, [refunddate]);
    useEffect(() => {
        // console.log('Shipped state updated ofd:', outfordelivery);

    }, [outfordelivery]);
    useEffect(() => {
        console.log('Shipped state updated ofd:', cancelled);

    }, [cancelled]);
    useEffect(() => {
        // console.log('Shipped state updated ofd:', outfordelivery);

    }, [cancellationdate]);
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
    useEffect(() => {
        // console.log('Shipped state updated deli:', delivereddate);

    }, [refunded]);
    const formatDate = (seconds) => {
        const date = new Date(seconds * 1000);
        return date.toLocaleDateString(undefined, {
            month: 'long',  // Full month name
            day: 'numeric', // Day of the month
        });
    };
    const calculateEstimatedDelivery = (orderDateSeconds) => {
        const orderDate = new Date(orderDateSeconds * 1000);
        const estimatedDeliveryDate = new Date(orderDate);
        estimatedDeliveryDate.setDate(orderDate.getDate() + 7); // Add 7 days for estimated delivery
        return estimatedDeliveryDate.getTime() / 1000; // Convert back to seconds
    };
    return (
        <div className='webbody'>
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
            <div className="orderdetailsbody">
                <div className="navs">
                    <Link className='ejfjejf' style={{ textDecoration: "none", color: "black", fontSize: "13px" }} to={'/'}>
                        Home
                    </Link>
                    <Link className='ejfjejf' style={{ textDecoration: "none", color: "black", fontSize: "13px" }}>
                        Orders Search
                    </Link>
                    <div className='ejfjejf' style={{ textDecoration: "none", color: "black", fontSize: "13px" }}>
                        {localStorage.getItem('searchorderid')}
                    </div>
                </div>
                <div className="heading">
                    ORDER ID : {localStorage.getItem('searchorderid')}
                </div>
                <div className="dhfjdndv">
                    <div className="jdefn">
                        Order date : {formatDate(shippedate.seconds)}
                    </div>
                    <div className="jdefdn" style={{color:cancelled?"red":"green"}}>
                        {cancelled?`Cancelled on : ${formatDate(cancellationdate.seconds)}`:`Estimated delivery : ${formatDate(calculateEstimatedDelivery(shippedate.seconds))}`}
                    </div>
                </div>
                <br /><br />
                <div className="jerjgglk">
                    <div className="jhjnglkmf">
                        {
                            name.map((item, index) => {
                                return (
                                    <div className="jdefnjjdjfkf">
                                        <div className="ehfjnfkee">
                                            <img src={productimg[index]} alt={item} height={"200px"} width={"200px"} />
                                            {item}
                                        </div>
                                        <div className="prrickekjfef">
                                            ₹{price[index]}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

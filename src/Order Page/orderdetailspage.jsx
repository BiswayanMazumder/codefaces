import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Menu from '../Menu for mobile/menu';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
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
    const [orderDetails, setOrderDetails] = useState(null);

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
                setOrderDetails(order);
                console.log(order);
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
    const generateInvoiceNumber = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let invoiceNumber = 'INV-'; // Prefix for the invoice number
        for (let i = 0; i < 8; i++) {
            invoiceNumber += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return invoiceNumber;
    };
    
    const generateInvoice = async () => {
        if (!orderDetails) return; // Ensure orderDetails is available
    
        const doc = new jsPDF();
        const invoiceNumber = generateInvoiceNumber(); // Generate a random invoice number
    
        // Title
        doc.setFontSize(22);
        doc.text("Invoice", 105, 20, { align: "center" });
    
        // Company Info
        doc.setFontSize(12);
        doc.text("LuxeLayers", 20, 40);
        doc.text("123 Luxe Street, Fashion City, Kolkata", 20, 45);
        doc.text("Phone: +91-234-567-890", 20, 50);
        doc.text("Email: support@luxelayers.com", 20, 55);
    
        // Customer Info
        doc.text(`Customer Name: ${name}`, 20, 70);
        doc.text(`Invoice Number: ${invoiceNumber}`, 20, 75); // Display the random invoice number
        doc.text(`Order ID: ${orderDetails["Order ID"]}`, 20, 80);
        doc.text(`Order Date: ${formatDate(orderDetails["Order Date"].seconds)}`, 20, 85);
        doc.text(`Delivery Date: ${formatDate(orderDetails["Delivery Date"].seconds)}`, 20, 90);
    
        // Add a table for products
        const tableStartY = 100;
        const products = orderDetails["Name"].map((name, index) => [
            name,
            { content: '', styles: { halign: 'center' } },
            `${orderDetails["Price"][index]} INR`
        ]);
    
        doc.autoTable({
            startY: tableStartY,
            head: [['Item', 'Image', 'Price']],
            body: products,
            didParseCell: (data) => {
                if (data.column.index === 1) {
                    const img = new Image();
                    img.src = orderDetails["Product Image"][data.row.index];
                    img.onload = function () {
                        doc.addImage(img, 'JPEG', data.cell.x + 3, data.cell.y + 1, 30, 30);
                    };
                }
            },
            styles: { cellPadding: 2, fontSize: 12 }, // Adjust cell padding
            theme: 'grid'
        });
    
        // Total Amount
        const totalY = doc.autoTable.previous.finalY + 10;
        doc.text(`Total Amount: ${orderDetails["Total"]} INR`, 20, totalY);
    
        // Footer
        doc.text("Thank you for your purchase!", 105, totalY + 10, { align: "center" });
    
        // Save the PDF
        doc.save(`${orderDetails["Order ID"]}.pdf`);
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
                            <Link className="names" style={{ fontSize: "15px", marginBottom: "10px", textDecoration: "none", color: "black" }} to={'/product'} onClick={() => {
                                localStorage.setItem('producttype', 'sneakers');
                                localStorage.setItem('productname', localStorage.getItem('productname'));
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
                            <br />
                            {
                                delivered?<div className="nameds" style={{ fontWeight: "300", color: "gray",display:"flex",flexDirection:"row",gap:"10px" }}>
                                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/downloadInvoice_e0f744.png" alt="" height={"30px"} width={"30px"} />
                                <Link style={{textDecoration:"none",color:"black",paddingTop:"5px",fontWeight:"500"}} onClick={()=>generateInvoice()}>
                                    Download Invoice
                                </Link>
                            </div>:<></>
                            }
                        </div>

                    </div>
                </div>
                <br /><br /><br />
                <div className="djfkdklckd">
                    Track your order
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
                        <div className="shippedtext" style={{ color: "green" }}>
                            {`Item confirmed on ${formatDate(shippedate.seconds)}`}
                        </div>
                        <div className="shippedtext" style={{ color: outfordelivery ? "green" : "red" }}>
                            {outfordelivery ? `Out For Delivery on ${formatDate(outfordeliverydate.seconds)}` : "Yet to be out"}
                        </div>
                        <div className="shippedtext" style={{ color: delivered ? "green" : "red" }}>
                            {delivered ? `Delivered on ${formatDate(delivereddate.seconds)}` : "Yet to be delivered"}
                        </div>
                    </div>
                    <div className="ejfkmvdvsss" style={{ paddingLeft: "35%", paddingTop: "20%", position: "relative" }}>
                        <Link className="shippedtext" style={{ color: "#2874F1", textDecoration: "none" }}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTknIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiPgoJPGcgZmlsbD0nbm9uZSc+CgkJPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjMjg3NEYxIiBwb2ludHM9IjkgMTIuMDYyNSAxMy42Mzc1IDE1LjQzNzUgMTEuODYyNSA5Ljk4NzUgMTYuNSA2LjY4NzUgMTAuODEyNSA2LjY4NzUgOSAxLjA2MjUgNy4xODc1IDYuNjg3NSAxLjUgNi42ODc1IDYuMTM3NSA5Ljk4NzUgNC4zNjI1IDE1LjQzNzUiIC8+CgkJPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjAgMCAxOCAwIDE4IDE4IDAgMTgiIC8+Cgk8L2c+Cjwvc3ZnPg==" alt="" className='rateimage' />
                            Rate & Review Product
                        </Link>
                        <Link className="shippedtext" style={{ color: "#2874F1", textDecoration: "none" }}>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/chatWithUs_69d373.svg" alt="" className='rateimage'/>
                            Chat with us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

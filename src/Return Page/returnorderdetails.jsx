import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import Menu from '../Menu for mobile/menu';
import LoadingSpinner from './loader';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
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
    useEffect(() => {
        document.title = "Luxelayers - Search Order Details";
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
    const [loading, setLoading] = useState(true); // Loading state
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
    const [totaltshirt, setTotaltshirt] = useState(0);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            console.log('Fetching');
            setLoading(true); // Set loading to true before fetching
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
                setTotaltshirt(order["Total"]);
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
            setLoading(false); // Set loading to false after fetching
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
    if (loading) {
        return <LoadingSpinner />;
    }
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
                    {
                                delivered ? <div className="nameds" style={{ fontWeight: "300", color: "gray", display: "flex", flexDirection: "row", gap: "10px" }}>
                                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/downloadInvoice_e0f744.png" alt="" height={"30px"} width={"30px"} />
                                    <Link style={{ textDecoration: "none", color: "black", paddingTop: "5px", fontWeight: "500",fontSize:"15px",marginRight:"20px" }} onClick={() => generateInvoice()}>
                                        Download Invoice
                                    </Link>
                                </div> : <></>
                            }
                </div>
                <div className="dhfjdndv">
                    <div className="jdefn">
                        Order date : {formatDate(shippedate.seconds)}
                    </div>
                    <div className="jdefdn" style={{ color: cancelled ? "red" : "green" }}>
                        {delivered? `Delivered on : ${formatDate(delivereddate.seconds)}` : cancelled ? `Cancelled on : ${formatDate(cancellationdate.seconds)}` : `Estimated delivery : ${formatDate(calculateEstimatedDelivery(shippedate.seconds))}`}
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
                <div className="bottomdetails">
                    <div className="ebujfkfje">
                        <div className="eujflkefm">
                            Need Help?
                        </div>
                        <Link className="eujflbfbjemnf" style={{ textDecoration: "none", color: "black",fontSize: "17px"}}>
                            Order Issues
                        </Link>
                        <Link className="eujflbfbjemnf" style={{ textDecoration: "none", color: "black",fontSize: "17px"}}>
                            Delivery Info
                        </Link>
                        <Link className="eujflbfbjemnf" style={{ textDecoration: "none", color: "black",fontSize: "17px"}}>
                            Return Info
                        </Link>
                        <Link className="eujflbfbjemnf" style={{ textDecoration: "none", color: "black",fontSize: "17px"}}>
                            {/* Return Info */}
                        </Link>
                    </div>
                    <div className="ebujfkfje">
                        <div className="eujflkefm">
                            Order Summary
                        </div>
                        <div className="eujflbfbjemnf" style={{ textDecoration: "none", color: "black",fontSize: "17px"}}>
                            Subtotal : ₹{((totaltshirt)-(0.18*totaltshirt)).toFixed(2)}
                        </div>
                        <div className="eujflbfbjemnf" style={{ textDecoration: "none", color: "black",fontSize: "17px"}}>
                            Delivery Charges : ₹0.00
                        </div>
                        <div className="eujflbfbjemnf" style={{ textDecoration: "none", color: "black",fontSize: "17px"}}>
                            Tax : ₹{(0.18*totaltshirt).toFixed(2)}
                        </div>
                        <div className="eujflbfbjemnf" style={{ textDecoration: "none", color: "black",fontSize: "17px",fontWeight: "bold"}}>
                            Total : ₹{totaltshirt}
                        </div>
                        <div className="eujflbfbjemnf" style={{ textDecoration: "none", color: "black",fontSize: "17px"}}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

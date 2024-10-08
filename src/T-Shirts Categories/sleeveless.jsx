import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import Menu from '../Menu for mobile/menu';
import LoadingSpinner from '../Return Page/loader';

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

export default function Sleeveless() {
    const [user, setUser] = useState(false);
    const [documentNames, setDocumentNames] = useState([]);
    const [fetchedAjName, setFetchedAjName] = useState([]);
    const [fetchedAjPic, setFetchedAjPic] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchedAjPrice, setFetchedAjprice] = useState([]);

    useEffect(() => {
        document.title = "Men's Tank Tops & Sleeveless Shirts | luxelayers.com";
    }, []);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setUser(!!user);
        });
    }, []);

    useEffect(() => {
        const db = getFirestore(app);
        const fetchDocumentNames = async () => {
            setLoading(true);
            try {
                const colRef = collection(db, 'Sleeveless');
                const querySnapshot = await getDocs(colRef);
                const names = querySnapshot.docs.map(doc => doc.id);
                setDocumentNames(names);

                const ajName = [];
                const ajPic = [];
                const ajprice = [];
                for (const docId of names) {
                    const docRef = doc(db, 'Sleeveless', docId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        ajName.push(docSnap.data()?.name);
                        ajPic.push(docSnap.data()?.['Product Image']);
                        ajprice.push(docSnap.data()?.Price);
                    }
                }

                setFetchedAjName(ajName);
                setFetchedAjPic(ajPic);
                setFetchedAjprice(ajprice);
            } catch (e) {
                console.error("Error fetching document names:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchDocumentNames();
    }, []);

    const LazyImage = ({ src, alt }) => {
        const [loading, setLoading] = useState(true);
        const imgRef = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setLoading(false);
                        observer.unobserve(imgRef.current);
                    }
                },
                { threshold: 0.1 }
            );

            if (imgRef.current) {
                observer.observe(imgRef.current);
            }
            return () => {
                if (imgRef.current) {
                    observer.unobserve(imgRef.current);
                }
            };
        }, []);

        return (
            <div ref={imgRef} className="lazy-image-container">
                {loading && <div className="loading-placeholder">Loading...</div>}
                <img src={!loading ? src : undefined} alt={alt} className={loading ? 'hidden' : ''} />
            </div>
        );
    };
    const [activeZone, setActiveZone] = useState('sleveless');
    const generateAlphanumericString = (index) => {
        const db = getFirestore(app);
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        const orderDetailsRef = doc(db, 'Sleeveless', result);
        setDoc(orderDetailsRef, {
            'Available': true,
            'Price': 1500,
            'Product Image': fetchedAjPic[index],
            'name': fetchedAjName[index],
            'XS': true,
            'S': true,
            'M': false,
            'L': false,
            'XL': true,
            'XXL': true
        });
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
                            {user && (
                                <>
                                    <div className="searchform">
                                        <Link style={{ textDecoration: "none", color: "black" }} to="/account/order">
                                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="searchform">
                                        <Link style={{ textDecoration: "none", color: "black" }} to="/account/viewcart">
                                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="searchform">
                                        <Link style={{ textDecoration: "none", color: "black" }} to="/account/profile">
                                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" />
                                        </Link>
                                    </div>
                                </>
                            )}
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
                            {user ? <Link style={{ textDecoration: "none", color: "red" }}>Logout</Link> : <Link to='/account/login' style={{ textDecoration: "none", color: "black" }}>Login</Link>}
                        </div>
                    </div>
                </div>
                <video src="https://vod.freecaster.com/louisvuitton/9d07bef3-470a-4055-b7d5-61367469eb43/ne9rE3V5nNi47f4tUESV7WB1_9.mp4" alt="" width={"100%"} muted autoPlay loop />
                <div className="jejfmlkl">
                    <Link className="sleveless" style={{fontWeight:activeZone==='sleveless'?'bold':'500',textDecoration:'none',color:'black'}} onClick={()=>{
                        setActiveZone('sleveless');
                    }}>
                        SLEEVELESS
                    </Link>
                    <Link className="sleveless" onClick={()=>{
                        setActiveZone('untamedwild');
                    }} style={{fontWeight:activeZone==='untamedwild'?'bold':'500',textDecoration:'none',color:'black'}}>
                        UNTAMED WILD
                    </Link>
                    <Link className="sleveless" onClick={()=>{
                        setActiveZone('distressed');
                    }}  style={{fontWeight:activeZone==='distressed'?'bold':'500',textDecoration:'none',color:'black'}}>
                        DISTRESSED
                    </Link>
                </div>
               {
                loading?<div className="loading"><LoadingSpinner/></div>: <div className="jdjfdjv">
                    {
                        fetchedAjName.map((name, index) => (
                            <Link to="/products/tshirts"
                                className="jenfkjfrf"
                                style={{ textDecoration: "none", color: "black" }}
                                key={index}>
                                <img src={fetchedAjPic[index]} alt={name} className="lazy-image" style={{ marginTop: "20px" }} onClick={() => {
                                        localStorage.setItem('producttype', 'Sleveless');
                                        localStorage.setItem('productname', fetchedAjName[index]);
                                        localStorage.setItem('productprice', fetchedAjPrice[index]);
                                        localStorage.setItem('productimage', fetchedAjPic[index]);
                                        localStorage.setItem('PID', documentNames[index]);
                                        // console.log(documentNames[index]);
                                    }} height={"350px"} width={"350px"} />
                                <div className="ejfjf" style={{ marginTop: "8px" }}>
                                    {name}
                                </div>
                                <div className="ejfjf" style={{ marginTop: "8px",fontWeight: "bold" }}>
                                    ₹{fetchedAjPrice[index]}.00
                                </div>
                            </Link>
                        ))
                    }
                </div>
               }
            </div>
        </>
    );
}

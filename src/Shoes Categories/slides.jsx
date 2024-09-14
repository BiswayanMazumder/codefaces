import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

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

export default function Slides() {
    useEffect(() => {
        document.title = 'Buy slides for Men, women, and kids | LuxeLayers';
    }, []);

    const [documentNames, setDocumentNames] = useState([]);
    const [fetchedAjName, setFetchedAjName] = useState([]);
    const [fetchedAjPic, setFetchedAjPic] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [fetchedAjPrice, setFetchedAjprice] = useState([]);
    useEffect(() => {
        const auth = getAuth();
        const db = getFirestore(app); // Initialize Firestore with the Firestore instance
        const currentUser = auth.currentUser;

        const fetchDocumentNames = async () => {
            try {
                setLoading(true); // Start loading
                // Fetch the collection
                const colRef = collection(db, 'Slides');
                const querySnapshot = await getDocs(colRef);

                // Extract document IDs and add them to the list
                const names = querySnapshot.docs.map(doc => doc.id);
                setDocumentNames(names);

                // Fetch additional data for each document
                const ajName = [];
                const ajPic = [];
                const ajprice = [];
                for (const docId of names) {
                    const docRef = doc(db, 'Slides', docId);
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
                if (process.env.NODE_ENV === 'development') {
                    console.error("Error fetching document names:", e);
                }
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchDocumentNames();
    }, []);
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
    // Lazy load images
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
                <img
                    src={!loading ? src : undefined}
                    alt={alt}
                    className={loading ? 'hidden' : ''}
                />
            </div>
        );
    };

    return (
        <>
            <div className="webbody">
                <div className="headersection">
                {user?<div className="logo">
                        <div className="searchform">
                            <Link style={{ textDecoration: "none", color: "black" }} to={user ? "/" : '/account/login'}>
                                <svg focusable="false" width="18" height="18" className="icon icon--header-search" viewBox="0 0 18 18">
                                    <path d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17" fill="none" stroke="currentColor" strokeWidth="2"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="searchform">
                            <Link style={{ textDecoration: "none", color: "black" }} to={user ? "/account/viewcart" : '/account/login'}>
                                <svg focusable="false" width="18" height="18" class="icon icon--header-cart   " viewBox="0 0 20 18">
                                    <path d="M3 1h14l1 16H2L3 1z" fill="none" stroke="currentColor" stroke-width="2"></path>
                                    <path d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0" fill="none" stroke="currentColor" stroke-width="2"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="searchform">
                            <Link style={{ textDecoration: "none", color: "black" }} to={user ? "/account/profile" : '/account/login'}>
                            <svg focusable="false" width="18" height="18" class="icon icon--header-customer   " viewBox="0 0 18 17">
                                    <circle cx="9" cy="5" r="4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></circle>
                                    <path d="M1 17v0a4 4 0 014-4h8a4 4 0 014 4v0" fill="none" stroke="currentColor" stroke-width="2"></path>
                                </svg>
                            </Link>
                        </div>
                        
                    </div>:<></>}
                    <div className="headeroptions">
                        <div className="options">
                            <Link to="/footwear" style={{ textDecoration: "none", color: "black" }} className='headerlink'>Footwear</Link>
                            <Link to="/ss24" style={{ textDecoration: "none", color: "black" }}>SS24</Link>
                            <Link to="/AF1" style={{ textDecoration: "none", color: "black" }}>Air Force 1</Link>
                            <Link to="/jordan" style={{ textDecoration: "none", color: "black" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "black" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "orangered" }}>Slides</Link>
                            {/* <Link to="/account/login" style={{ textDecoration: "none", color: "black" }}>Login</Link> */}
                            {
                                user?<Link  style={{ textDecoration: "none", color: "red" }}>Logout</Link>:
                                <Link to={'/account/login'} style={{ textDecoration: "none", color: "black" }}>Login</Link>
                            }
                        </div>
                    </div>
                </div>
                <img src="https://images.vegnonveg.com/media/collections/75/171955723875667e5c76f082e.png" alt="" width={"100%"} />
                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div className="fgfhhgjjh">
                        {
                            fetchedAjName.map((name, index) => (
                                <Link to={"/product"}
                                    className="jenfkjfrf"
                                    style={{ textDecoration: "none", color: "black" }}
                                    key={index}
                                    onClick={() => {
                                        localStorage.setItem('producttype', 'Slides');
                                        localStorage.setItem('productname', fetchedAjName[index]);
                                        localStorage.setItem('productprice', fetchedAjPrice[index]);
                                        localStorage.setItem('productimage', fetchedAjPic[index]);
                                        localStorage.setItem('PID',documentNames[index]);
                                        console.log(documentNames[index]);
                                    }}
                                >
                                    <LazyImage src={fetchedAjPic[index]} alt={name} />
                                    <div className="ejfjf">
                                        {name}
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                )}
                <br /><br />
            </div>
        </>
    );
}

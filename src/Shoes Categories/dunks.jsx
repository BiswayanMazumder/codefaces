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

export default function Dunks() {
    useEffect(() => {
        document.title = 'Buy Nike Dunks for Men, women, and kids | LuxeLayers';
    }, []);

    const [documentNames, setDocumentNames] = useState([]);
    const [fetchedAjName, setFetchedAjName] = useState([]);
    const [fetchedAjPic, setFetchedAjPic] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const auth = getAuth();
        const db = getFirestore(app); // Initialize Firestore with the Firestore instance
        const currentUser = auth.currentUser;

        const fetchDocumentNames = async () => {
            try {
                setLoading(true); // Start loading
                // Fetch the collection
                const colRef = collection(db, 'Dunks');
                const querySnapshot = await getDocs(colRef);

                // Extract document IDs and add them to the list
                const names = querySnapshot.docs.map(doc => doc.id);
                setDocumentNames(names);

                // Fetch additional data for each document
                const ajName = [];
                const ajPic = [];
                
                for (const docId of names) {
                    const docRef = doc(db, 'Dunks', docId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        ajName.push(docSnap.data()?.name);
                        ajPic.push(docSnap.data()?.['Product Image']);
                    }
                }

                setFetchedAjName(ajName);
                setFetchedAjPic(ajPic);
                
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
                    <div className="headeroptions">
                        <div className="options">
                            <Link to="/footwear" style={{ textDecoration: "none", color: "black" }} className='headerlink'>Footwear</Link>
                            <Link to="/ss24" style={{ textDecoration: "none", color: "black" }}>SS24</Link>
                            <Link to="/AF1" style={{ textDecoration: "none", color: "black" }}>Air Force 1</Link>
                            <Link to="/jordan" style={{ textDecoration: "none", color: "black" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "orangered" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                            <Link to="/account/login" style={{ textDecoration: "none", color: "black" }}>Login</Link>
                        </div>
                    </div>
                </div>
                <img src="https://images.vegnonveg.com/media/collections/101/17198391211016682a991ee9b7.png" alt="" width={"100%"} />
                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div className="fgfhhgjjh">
                        {
                            fetchedAjName.map((name, index) => (
                                <div className="jenfkjfrf" key={index}>
                                    <LazyImage src={fetchedAjPic[index]} alt={name} />
                                    <div className="ejfjf">
                                        {name}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}
                <br /><br />
            </div>
        </>
    );
}

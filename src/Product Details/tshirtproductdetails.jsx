import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp, } from 'firebase/app';
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
const auth = getAuth();
const db = getFirestore(app); // Initialize Firestore with the Firestore instance
const currentUser = auth.currentUser;
export default function TShirtProductDetails() {
    const sneakername = localStorage.getItem("productname");
    const sneakerimage = localStorage.getItem("productimage");
    const sneakerprice = localStorage.getItem("productprice");
    const sneakertype = localStorage.getItem("producttype");
    const sneakerid = localStorage.getItem("PID");

    const [productdetails, setProductDetails] = useState('');
    const [filteredSizes, setFilteredSizes] = useState([]);

    useEffect(() => {
        document.title = `${sneakername} | LuxeLayers`;
    }, [sneakername]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const genAI = new GoogleGenerativeAI('AIzaSyC0kDunLTQWxNPZCVLTAKMa6ce9mvR0hd0');
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

                const prompt = `About ${sneakername} in 100 words`;
                const result = await model.generateContent(prompt);
                setProductDetails(result.response.text());
            } catch (error) {
                console.error('Error generating content:', error);
            }
        };

        fetchData();
    }, [sneakername]);

    useEffect(() => {
        const fetchSizes = async () => {
            console.log('PID', sneakerid);
            const app = initializeApp(firebaseConfig);
            const auth = getAuth();
            const db = getFirestore(app);
            const docRef = doc(db, 'Sleeveless', sneakerid);
            try {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const sizes = [];
                    if (data["XS"]) sizes.push('XS');
                    if (data["S"]) sizes.push('S');
                    if (data["M"]) sizes.push('M');
                    if (data["L"]) sizes.push('L');
                    if (data["XL"]) sizes.push('XL');
                    if (data["XXL"]) sizes.push('XXL');
                    // if (data["UK 12"]) sizes.push('UK 12');
                    setFilteredSizes(sizes);
                    console.log(sizes);
                } else {
                    console.log('No such document!');
                }
            } catch (e) {
                console.error(`Error getting document: ${e.message}`);
            }
        };

        if (sneakerid) {
            fetchSizes();
        }
    }, [sneakerid]);
    const [reviews, setreviews] = useState([]);
    const [reviewimages, setreviewimages] = useState([]);
    const [documentNames, setDocumentNames] = useState([]);
    const [fetchedAjName, setFetchedAjName] = useState([]);
    const [fetchedAjPic, setFetchedAjPic] = useState([]);
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true); // Loading state
    const [fetchedAjPrice, setFetchedAjprice] = useState([]);
    useEffect(() => {


        const fetchDocumentNames = async () => {
            try {
                setLoading(true); // Start loading
                // Fetch the collection
                const colRef = collection(db, sneakertype);
                const querySnapshot = await getDocs(colRef);

                // Extract document IDs and add them to the list
                const names = querySnapshot.docs.map(doc => doc.id);
                setDocumentNames(names);

                // Fetch additional data for each document
                const ajName = [];
                const ajPic = [];
                const ajprice = [];
                for (const docId of names) {
                    const docRef = doc(db, sneakertype, docId);
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
                // console.log(fetchedAjPic);
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
    const [cartItems, setCartItems] = useState(false);
    useEffect(() => {
        const fetchDocumentName = async () => {
            console.log('Fetching document names...');
            try {
                const currentUser = auth.currentUser;
                if (currentUser) {
                    const UID = currentUser.uid;
                    let pid = [];  // Changed to let
                    // console.log('Current UID:', UID);
                    const cartDocRef = doc(db, 'Cart Items', UID);
                    const cartDocSnap = await getDoc(cartDocRef);
                    if (cartDocSnap.exists()) {
                        const cartData = cartDocSnap.data();
                        pid = cartData?.['Product ID'] || [];
                        console.log('Product IDs:', pid);

                        // Update state based on the presence of items
                        if (pid.includes(sneakerid)) {
                            setCartItems(true);
                        } else {
                            setCartItems(false);
                        }
                    } else {
                        console.log('No cart items document found');
                        setCartItems(false); // Set to false if no document is found
                    }
                } else {
                    console.log('No current user');
                    setCartItems(false); // Set to false if no user is logged in
                }
            } catch (error) {
                console.error('Error fetching document names:', error);
            }
        };

        fetchDocumentName();
    }, []);
    useEffect(() => {
        const fetchReviews = async () => {
            console.log('Reviews fetching')
            try {
                console.log('sneaker id', sneakerid);
                console.log('fetching reviews');
                const docRef = doc(db, 'Reviews', sneakerid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const reviewData = docSnap.data();
                    setreviews(reviewData?.Review || []);
                    setreviewimages(reviewData?.["Review Image"] || []);
                    console.log('Review', reviewData?.Review);
                } else {
                    console.log('No reviews document found');
                }
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        if (sneakerid) {
            fetchReviews();
        }
    }, []);
    const AddToCart = async () => {
        try {
            // Get current user
            const currentUser = auth.currentUser;
            if (!currentUser) {
                throw new Error('No user is currently signed in.');
            }

            const UID = currentUser.uid;
            const cartDocRef = doc(db, 'Cart Items', UID);

            // Use setDoc with merge to handle both create and update scenarios
            await setDoc(cartDocRef, {
                'Product ID': arrayUnion(sneakerid)
            }, { merge: true });

            // On success
            setCartItems(true);  // Indicate success
            console.log('Product added to cart successfully.');
        } catch (error) {
            // On failure
            setCartItems(false);  // Indicate failure
            console.error('Error adding product to cart:', error);
        }
    };
    const RemoveFromCart = async () => {
        try {
            // Get current user
            const currentUser = auth.currentUser;
            if (!currentUser) {
                throw new Error('No user is currently signed in.');
            }

            const UID = currentUser.uid;
            const cartDocRef = doc(db, 'Cart Items', UID);

            // Update the document by removing the product ID from the array
            await updateDoc(cartDocRef, {
                'Product ID': arrayRemove(sneakerid)
            });
            setCartItems(false);
            console.log('Product removed from cart successfully.');
        } catch (error) {
            console.error('Error removing product from cart:', error);
        }
    };
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

        useEffect(() => {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    setUser(true);
                    // ...
                } else {
                }
            });
            // console.log(user);
        });



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
                        {
                            user ? <Link style={{ textDecoration: "none", color: "red" }}>Logout</Link> :
                                <Link to={'/account/login'} style={{ textDecoration: "none", color: "black" }}>Login</Link>
                        }
                    </div>
                </div>
            </div>
            <div className="sneakerdetails">
                <img src={sneakerimage} alt="" height={"650px"} width={"650px"} />

                <div className="jjenfkmdcm">
                    <div className="sneakerprice" style={{ position: "relative", top: "30px", fontWeight: "300" }}>
                        NIKE
                    </div>
                    <br /><br />
                    <div className="sneakername">
                        {sneakername}
                    </div>
                    <div className="sneakerprice">
                        ₹{sneakerprice}
                    </div>
                    <div className="sneakerprice" style={{
                        fontSize: "15px",
                        position: "relative",
                        top: "30px",
                        whiteSpace: "wrap",
                    }}>
                        {productdetails}
                    </div>
                    <Link className="sneakerprice" style={{
                        fontSize: "15px",
                        position: "relative",
                        top: "50px",
                        color: "black",
                        textDecoration: "none",
                        whiteSpace: "wrap",
                        fontWeight: "bold",
                    }}>
                        SELECT SIZE
                    </Link>
                    <div className="sneakerprice" style={{
                        fontSize: "15px",
                        position: "relative",
                        top: "70px",
                        whiteSpace: "wrap",
                    }}>
                        <select id="myDropdown" name="options" style={{ width: "200px", height: "30px", border: "1px solid white" }}>
                            {/* <option value="" disabled selected>SELECT SIZE</option> */}
                            {
                                filteredSizes.map((size) => (
                                    <option value={size}>{size}</option>
                                ))
                            }
                        </select>
                        <Link style={{ textDecoration: "none" }} onClick={cartItems ? RemoveFromCart : AddToCart}>
                            <div className="ejnfdmvkdmv">
                                {cartItems ? 'REMOVE FROM CART' : "ADD TO CART"}
                                {/* <center>ADD TO CART</center> */}
                            </div>
                        </Link>
                        <br /><br />
                    </div>
                </div>
            </div>
        </div>
    );
}
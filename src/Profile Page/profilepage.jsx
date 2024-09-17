import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Menu from '../Menu for mobile/menu';

// Firebase configuration
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

export default function Profilepage() {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setEmail(user.email); // Set the email when the user is authenticated
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);
    useEffect(() => {
        document.title = "My Profile";
    }, []);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const auth = getAuth();
            const db = getFirestore(app);
            const currentUser = auth.currentUser;

            if (!currentUser) {
                console.log('No user is logged in.');
                return;
            }

            const docRef = doc(db, "User Detail", currentUser.uid);

            try {
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setName(docSnap.data()["Name"]);
                    // console.log('Name', docSnap.data()["Name"]);
                } else {
                    // console.log('No such document!');
                }
            } catch (e) {
                // console.log(`Error getting document: ${e.message}`);
            }
        };

        if (user) {
            fetchData();
        }
    }, [user]);
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
                window.location.replace('/')
            }
        });
        // console.log(user);
    });
    const [gender, setgender] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const auth = getAuth();
            const db = getFirestore(app);
            const currentUser = auth.currentUser;

            if (!currentUser) {
                console.log('No user is logged in.');
                return;
            }

            const docRef = doc(db, "User Detail", currentUser.uid);

            try {
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setgender(docSnap.data()["Gender"]);
                    // console.log('Name', docSnap.data()["Gender"]);
                } else {
                    console.log('No such document!');
                }
            } catch (e) {
                // console.log(`Error getting document: ${e.message}`);
            }
        };

        if (user) {
            fetchData();
        }
    }, [user]);
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
            <div className="profilepagebody">
                <div className="dfndndf">
                    <div className="personalnames">
                        Personal Information
                        <input type="text" placeholder={name} className='username' disabled style={{ cursor: "not-allowed" }} />
                    </div>
                    <div className="personalnames">
                        Your Gender
                        <br /><br />
                        <div className="gendertiles">
                            <input type="radio" id="male" name="gender" value="male" checked={gender} disabled style={{ cursor: "not-allowed" }} />
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="gender" value="female" checked={!gender} disabled style={{ cursor: "not-allowed" }} />
                            <label for="female">Female</label>
                        </div>
                    </div>
                    <div className="personalnames">
                        Email Address
                        <input type="text" placeholder={email} className='username' disabled style={{ cursor: "not-allowed" }} />
                    </div>
                    <div className="personalnames">
                        FAQs
                    </div>
                    <div className="personalnames">
                        What happens when I update my email address?
                        <br /><br />
                        <div className="answers" style={{ fontWeight: "400", marginRight: "20px" }}>
                            Your login email id changes, likewise. You'll receive all your account related communication on your updated email address.
                        </div>
                    </div>
                    <div className="personalnames">
                        What happens to my existing LuxeLayers account when I update my email address?
                        <br /><br />
                        <div className="answers" style={{ fontWeight: "400", marginRight: "20px" }}>
                            Your login email id changes, likewise. You'll receive all your account related communication on your updated email address.
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

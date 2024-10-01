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

export default function Footer() {
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
  return (
    <div className="footer">
        <div className="footercontainer">
            <div className="footerpoints">
                <div className="headers">
                POLICIES
                </div>
                <Link className="headerspoints" to={user?'/apps/search_order':'/account/login'} style={{textDecoration: 'none'}}>
                Search Your Order
                </Link>
                <div className="headerspoints">
                Shipping Policy
                </div>
                <div className="headerspoints">
                <Link className="headerspoints" to={'/pages/terms-condition'} style={{textDecoration: 'none'}}>
                Terms and Condition
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

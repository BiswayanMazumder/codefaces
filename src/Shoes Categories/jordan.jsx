import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
export default function Jordan() {
    useEffect(() => {
        document.title = 'Buy Nike Air Jordan for Men, women, and kids | LuxeLayers';
    })

    const [documentNames, setDocumentNames] = useState([]);
    const [fetchedAjName, setFetchedAjName] = useState([]);
    const [fetchedAjPic, setFetchedAjPic] = useState([]);
    useEffect(() => {
        const auth = getAuth();
        const db = getFirestore(app); // Initialize Firestore with the Firestore instance
        const currentUser = auth.currentUser;
    
        const fetchDocumentNames = async () => {
          try {
            // Fetch the collection
            const colRef = collection(db, 'Air Jordan');
            const querySnapshot = await getDocs(colRef);
    
            // Extract document IDs and add them to the list
            const names = querySnapshot.docs.map(doc => doc.id);
            setDocumentNames(names);
    
            // Fetch additional data for each document
            const ajName = [];
            const ajPic = [];
            
            for (const docId of names) {
              const docRef = doc(db, 'Air Jordan', docId);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                ajName.push(docSnap.data()?.name);
                ajPic.push(docSnap.data()?.['Product Image']);
              }
            }
    
            setFetchedAjName(ajName);
            setFetchedAjPic(ajPic);
    
            // if (process.env.NODE_ENV === 'development') {
            //   console.log('Document Names:', names);
            //   console.log('Fetched AJ Names:', ajName);
            //   console.log('Fetched AJ Pics:', ajPic);
            // }
    
          } catch (e) {
            if (process.env.NODE_ENV === 'development') {
              console.error("Error fetching document names:", e);
            }
          }
        };
    
        fetchDocumentNames();
      }, []);

    return (
        <>
            <div className="webbody">
                <div className="headersection">
                    {/* <div className="logo">
                        <div className="searchform">

                            <svg focusable="false" width="18" height="18" className="icon icon--header-search" viewBox="0 0 18 18">
                                <path d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17" fill="none" stroke="currentColor" strokeWidth="2"></path>
                            </svg>
                        </div>
                        <div className="searchform">

                            <svg focusable="false" width="18" height="18" class="icon icon--header-cart   " viewBox="0 0 20 18">
                                <path d="M3 1h14l1 16H2L3 1z" fill="none" stroke="currentColor" stroke-width="2"></path>
                                <path d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0" fill="none" stroke="currentColor" stroke-width="2"></path>
                            </svg>
                        </div>
                        <div className="searchform">

                            <svg focusable="false" width="18" height="18" class="icon icon--header-customer   " viewBox="0 0 18 17">
                                <circle cx="9" cy="5" r="4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></circle>
                                <path d="M1 17v0a4 4 0 014-4h8a4 4 0 014 4v0" fill="none" stroke="currentColor" stroke-width="2"></path>
                            </svg>
                        </div> */}
                    {/* <div className="logoimage">
                            <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/_fa24086d-6873-4c24-9ff6-0aceb7380333-QyUF9bBdbH9jERIGwpyEPhaZ2HcKZL.jpg" alt="" className='logoimg' onClick={() => window.location.href = "/"} />
                        </div> */}
                    {/* </div> */}
                    <div className="headeroptions">
                        <div className="options">
                            <Link to="/footwear" style={{ textDecoration: "none", color: "black" }} className='headerlink'>Footwear</Link>
                            <Link to="/ss24" style={{ textDecoration: "none", color: "black" }}>SS24</Link>
                            <Link to="/AF1" style={{ textDecoration: "none", color: "black" }}>Air Force 1</Link>
                            <Link to="/jordan" style={{ textDecoration: "none", color: "orangered" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "black" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                            <Link to="/account/login" style={{ textDecoration: "none", color: "black" }}>Login</Link>
                        </div>
                    </div>
                </div>
                <img src="https://images.vegnonveg.com/media/collections/102/172007371710266863df57389e.png" alt="" width={"100%"} />
                <div className="fgfhhgjjh">
                    {
                        fetchedAjName.map((url, index) => (
                            <div className="jenfkjfrf">
                                <img src={fetchedAjPic[index]} alt="" />
                                <div className="ejfjf">
                                    {fetchedAjName[index]}
                                </div>
                                {/* <br /><br /> */}
                            </div>
                        ))
                    }
                </div>
                <br /><br />
            </div>
        </>
    )
}

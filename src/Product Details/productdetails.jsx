import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyAvYR2_B7BVNKufzGZHaaUcxJYWKyQ-_Jk",
    authDomain: "luxelayers.firebaseapp.com",
    projectId: "luxelayers",
    storageBucket: "luxelayers.appspot.com",
    messagingSenderId: "293993080821",
    appId: "1:293993080821:web:713b6779443a50ac0922bc",
    measurementId: "G-PKC7WSY6LG"
};

export default function ProductDetails() {
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
            const app = initializeApp(firebaseConfig);
            const auth = getAuth();
            const db = getFirestore(app);
            const docRef = doc(db, sneakertype, sneakerid);

            try {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const sizes = [];
                    if (data["UK 6"]) sizes.push('UK 6');
                    if (data["UK 7"]) sizes.push('UK 7');
                    if (data["UK 8"]) sizes.push('UK 8');
                    if (data["UK 9"]) sizes.push('UK 9');
                    if (data["UK 10"]) sizes.push('UK 10');
                    if (data["UK 11"]) sizes.push('UK 11');
                    if (data["UK 12"]) sizes.push('UK 12');
                    setFilteredSizes(sizes);
                    // console.log(sizes);
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

    return (
        <div className="webbody">
            <div className="headersection">
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
                        <Link to="/account/login" style={{ textDecoration: "none", color: "black" }}>Login</Link>
                    </div>
                </div>
            </div>
            <div className="sneakerdetails">
                <img src={sneakerimage} alt="" />

                <div className="jjenfkmdcm">
                    <div className="sneakerprice" style={{ position: "relative", top: "30px", fontWeight: "300" }}>
                        {sneakertype}
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
                </div>
            </div>
        </div>
    );
}
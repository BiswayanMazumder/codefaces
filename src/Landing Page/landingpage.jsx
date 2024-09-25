import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import Menu from '../Menu for mobile/menu';
import { GoogleGenerativeAI } from '@google/generative-ai';
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
export default function Landingpage() {
    const [currentImage, setCurrentImage] = useState('https://overlaysnow.com/cdn/shop/files/Coming-Soon.jpg?v=1726651886&width=2000');
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
    useEffect(() => {
        document.title = "LuxeLayers : Shop T-shirts , Jackets , Shorts and Joggers Online";

        const images = [
            'https://overlaysnow.com/cdn/shop/files/Coming-Soon.jpg?v=1726651886&width=2000',
            'https://overlaysnow.com/cdn/shop/files/Fearlessness_meets_greatness_Desktop_Banner.jpg?v=1725718330&width=2000'
        ];

        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            setCurrentImage(images[currentIndex]);
        }, 5000);

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);
    const [loading, setLoading] = useState(true);
    const [documentNames, setDocumentNames] = useState([]);
    const [fetchedAjName, setFetchedAjName] = useState([]);
    const [fetchedAjPic, setFetchedAjPic] = useState([]);
    const [fetchedAjPrice, setFetchedAjprice] = useState([]);
    const [loggeduser, setuser] = useState(false);
    useEffect(() => {
        const fetchDocumentNames = async () => {
            console.log('Fetching document names...');
            try {
                const auth = getAuth();
                const db = getFirestore(app);
                const currentUser = auth.currentUser;
                setuser(currentUser);
                if (currentUser) {
                    const UID = currentUser.uid;
                    // console.log('Current UID:', UID);
                    const cartDocRef = doc(db, 'Recently Viewed', UID);
                    const cartDocSnap = await getDoc(cartDocRef);
                    if (cartDocSnap.exists()) {
                        const cartData = cartDocSnap.data();
                        // console.log('Cart Items data:', cartData);
                        const pid = cartData?.['Product ID'] || [];
                        // console.log('Product IDs:', pid);
                        setDocumentNames(pid);
                        const ajName = [];
                        const ajPic = [];
                        const ajprice = [];

                        for (let i = 0; i < pid.length; i++) {
                            const productDocRef = doc(db, 'sneakers', pid[i]);
                            const productDocSnap = await getDoc(productDocRef);
                            if (productDocSnap.exists()) {
                                const productData = productDocSnap.data();
                                // console.log('Product data:', productData);
                                ajName.push(productData?.name || 'No Name');
                                ajPic.push(productData?.['Product Image'] || 'No Image');
                                ajprice.push(productData?.Price || 0);
                            } else {
                                console.log(`No product data found for ID: ${pid[i]}`);
                            }
                        }
                        setFetchedAjName(ajName);
                        setFetchedAjPic(ajPic);
                        setFetchedAjprice(ajprice);
                        // console.log('Name ', ajName);
                    } else {
                        console.log('No cart items document found');
                    }
                } else {
                    console.log('No current user');
                }
            } catch (error) {
                console.error('Error fetching document names:', error);
            }
        };

        fetchDocumentNames();
    }, []);
    const [documentNamess, setDocumentNamess] = useState([]);
    const [fetchedAjNames, setFetchedAjNames] = useState([]);
    const [fetchedAjPics, setFetchedAjPics] = useState([]);
    const [fetchedAjPrices, setFetchedAjprices] = useState([]);
    const [loggedusers, setusers] = useState(false);
    useEffect(() => {
        const db = getFirestore(app);
        const fetchDocumentNames = async () => {
            setLoading(true);
            try {
                const colRef = collection(db, 'Coming Soon');
                const querySnapshot = await getDocs(colRef);
                const names = querySnapshot.docs.map(doc => doc.id);
                setDocumentNamess(names);

                const ajName = [];
                const ajPic = [];
                const ajprice = [];
                for (const docId of names) {
                    const docRef = doc(db, 'Coming Soon', docId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        ajName.push(docSnap.data()?.name);
                        ajPic.push(docSnap.data()?.['Product Image']);
                        ajprice.push(docSnap.data()?.Price);
                    }
                }

                setFetchedAjNames(ajName);
                setFetchedAjPics(ajPic);
                setFetchedAjprices(ajprice);
            } catch (e) {
                console.error("Error fetching document names:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchDocumentNames();
    }, []);
    const [documentNamesss, setDocumentNamesss] = useState([]);
    const [fetchedAjNamess, setFetchedAjNamess] = useState([]);
    const [fetchedAjPicss, setFetchedAjPicss] = useState([]);
    const [fetchedAjPricess, setFetchedAjpricess] = useState([]);
    useEffect(() => {
        const db = getFirestore(app);
        const fetchDocumentNames = async () => {
            setLoading(true);
            try {
                const colRef = collection(db, 'Yeezys');
                const querySnapshot = await getDocs(colRef);
                const names = querySnapshot.docs.map(doc => doc.id);
                setDocumentNamesss(names);

                const ajName = [];
                const ajPic = [];
                const ajprice = [];
                for (const docId of names) {
                    const docRef = doc(db, 'Yeezys', docId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        ajName.push(docSnap.data()?.name);
                        ajPic.push(docSnap.data()?.['Product Image']);
                        ajprice.push(docSnap.data()?.Price);
                    }
                }

                setFetchedAjNamess(ajName);
                setFetchedAjPicss(ajPic);
                setFetchedAjpricess(ajprice);
            } catch (e) {
                console.error("Error fetching document names:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchDocumentNames();
    }, []);
    const [documentNamessss, setDocumentNamessss] = useState([]);
    const [fetchedAjNamesss, setFetchedAjNamesss] = useState([]);
    const [fetchedAjPicsss, setFetchedAjPicsss] = useState([]);
    const [fetchedAjPricesss, setFetchedAjpricesss] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    useEffect(() => {
        const fetchDocumentNames = async () => {
            console.log('Fetching document names...');
            try {
                const auth = getAuth();
                const db = getFirestore(app);
                const currentUser = auth.currentUser;
                if (currentUser) {
                    const UID = currentUser.uid;
                    const cartDocRef = doc(db, 'Favourite Items', UID);
                    const cartDocSnap = await getDoc(cartDocRef);
                    if (cartDocSnap.exists()) {
                        const cartData = cartDocSnap.data();
                        const pid = cartData?.['Product ID'] || [];
                        setDocumentNamessss(pid);
                        const ajName = [];
                        const ajPic = [];
                        const ajprice = [];

                        for (let i = 0; i < pid.length; i++) {
                            const productDocRef = doc(db, 'sneakers', pid[i]);
                            const productDocSnap = await getDoc(productDocRef);
                            if (productDocSnap.exists()) {
                                const productData = productDocSnap.data();
                                ajName.push(productData?.name || 'No Name');
                                ajPic.push(productData?.['Product Image'] || 'No Image');
                                ajprice.push(productData?.Price || 0);
                            }
                        }
                        setFetchedAjNamesss(ajName);
                        setFetchedAjPicsss(ajPic);
                        setFetchedAjpricesss(ajprice);
                    } else {
                        console.log('No favourite items document found');
                    }
                } else {
                    console.log('No current user');
                }
            } catch (error) {
                console.error('Error fetching document names:', error);
            }
        };

        fetchDocumentNames();
    }, []);
    const products = [
        {
            name: "AIR JORDAN 4 RETRO GS 'BLACK/WHITE'",
            img: "https://images.vegnonveg.com/resized/700X573/11428/air-jordan-4-retro-blackwhite-black-66c718d11e771.jpg"
        },
        {
            name: "AIR MAX 90 DRIFT 'ACTION GREEN/BLACK-SUMMIT WHITE'",
            img: "https://images.vegnonveg.com/resized/700X573/11473/air-max-90-drift-action-greenblack-summit-white-green-66c6f5a6b95b7.jpg"
        },
        {
            name: "CORTEZ 'BLACK/DARK SMOKE GREY'",
            img: "https://images.vegnonveg.com/resized/700X573/11478/cortez-blackdark-smoke-grey-black-66c719e4c838e.jpg"
        },
        {
            name: "AIR FORCE 1 '07 'WHITE/DRAGON RED-WHITE'",
            img: "https://images.vegnonveg.com/resized/700X573/11475/air-force-1-07-whitedragon-red-white-white-66c717cce8961.jpg"
        },
        {
            name: "KILLSHOT 2 'PHANTOM/UNIVERSITY GOLD-GUM MEDIUM BROWN'",
            img: "https://images.vegnonveg.com/resized/700X573/11477/killshot-2-phantomuniversity-gold-gum-medium-brown-multicolor-66c719921548d.jpg"
        },
        {
            name: "GEL-QUANTUM 360 VIII 'BLACK/FIERY RED'",
            img: "https://images.vegnonveg.com/resized/700X573/11417/gel-quantum-360-viii-blackfiery-red-black-66b3610d4657e.jpg"
        },
        {
            name: "GEL-QUANTUM 360 VIII 'ILLUMINATE YELLOW/BLACK'",
            img: "https://images.vegnonveg.com/resized/700X573/11418/gel-quantum-360-viii-illuminate-yellowblack-black-66b3621140516.jpg"
        },
        {
            name: "AIR JORDAN 1 MID 'SAIL/LIGHT DEW-MUSLIN'",
            img: "https://images.vegnonveg.com/resized/700X573/11426/air-jordan-1-mid-saillight-dew-muslin-white-66bb4a42e2b7a.jpg"
        },
        {
            name: "DUNK LOW NN 'BAROQUE BROWN/BLACK-WHITE-SAIL'",
            img: "https://images.vegnonveg.com/resized/700X573/11434/dunk-low-nn-baroque-brownblack-white-sail-brown-66bb4b2dc3a2a.jpg"
        },
        {
            name: "CRAZY 1 'MAGIC BEIGE/SHADOW BROWN'",
            img: "https://images.vegnonveg.com/resized/700X573/11415/crazy-1-magic-beigeshadow-brown-brown-66b472e580b2e.jpg"
        },
        {
            name: "AIR JORDAN 4 RETRO SE 'SMOKE GREY/IRON GREY-CEMENT GREY'",
            img: "https://images.vegnonveg.com/resized/700X573/11422/air-jordan-4-retro-se-smoke-greyiron-grey-cement-grey-grey-66b48d859813d.jpg"
        },
        {
            name: "DUNK LOW RETRO 'WHITE/DENIM TURQ'",
            img: "https://images.vegnonveg.com/resized/700X573/11396/dunk-low-retro-whitedenim-turq-white-66b3660dc7ed0.jpg"
        },
        {
            name: "DUNK LOW 'COCONUT MILK/FLAX-SAIL'",
            img: "https://images.vegnonveg.com/resized/700X573/11406/dunk-low-coconut-milkflax-sail-brown-66b497326da01.jpg"
        },
        {
            name: "AIR MAX 1 'WHITE/LIGHT ARMY-NEUTRAL GREY-BLACK'",
            img: "https://images.vegnonveg.com/resized/700X573/11421/air-max-1-whitelight-army-neutral-grey-black-white-66b47248b5e8d.jpg"
        },
        {
            name: "GAZELLE INDOOR 'PRELOVED INK/WONDER CLAY-SAND STRATA'",
            img: "https://images.vegnonveg.com/resized/700X573/11416/gazelle-indoor-preloved-inkwonder-clay-sand-strata-blue-66b47456555a2.jpg"
        },
        {
            name: "V2K RUN 'SUMMIT WHITE/CHROME-WHITE-LIGHT OREWOOD BROWN'",
            img: "https://images.vegnonveg.com/resized/700X573/11476/v2k-run-summit-whitechrome-white-light-orewood-brown-white-66c7187fc664e.jpg"
        }
    ];

    const toggleModal = async (img, name) => {
        setSelectedImage(img);
        setIsOpen(!isOpen);
        try {
            const genAI = new GoogleGenerativeAI('AIzaSyC0kDunLTQWxNPZCVLTAKMa6ce9mvR0hd0');
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = `About ${name} in 50 words`;
            const result = await model.generateContent(prompt);
            setProductDetails(result.response.text());
            // console.log('response',result.response.text());
        } catch (error) {
            console.error('Error generating content:', error);
        }
    };
    const [productdetails, setProductDetails] = useState('');

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
                            {/* <Link to="/" style={{ textDecoration: "none", color: "black" }}>SS24</Link> */}
                            <Link to="/footwear" style={{ textDecoration: "none", color: "black" }} className='headerlink'>Footwear</Link>
                            <Link to="/ss24" style={{ textDecoration: "none", color: "black" }}>SS24</Link>
                            <Link to="/AF1" style={{ textDecoration: "none", color: "black" }}>Air Force 1</Link>
                            <Link to="/jordan" style={{ textDecoration: "none", color: "black" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "orangered" }}>Home</Link>
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
                <Link className="bodyimage" to={'/sleveless'}>
                    <img src={currentImage} alt="" className='bodyimg' />
                </Link>
                <div className="dhifjkfjlf">
                    {products.map((product, index) => (
                        <Link
                            key={index}
                            style={{ textDecoration: "none" }}
                            onClick={() => toggleModal(product.img, product.name)}
                        >
                            <div className="items">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    height={'100px'}
                                    width={'100px'}
                                    style={{ borderRadius: '50%' }}
                                />
                                <br /><br />
                                {product.name}
                            </div>
                        </Link>
                    ))}

                    {isOpen && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="close" onClick={toggleModal}>&times;</span>
                                <h2>{selectedImage ? products.find(p => p.img === selectedImage).name : ''}</h2>
                                <img
                                    src={selectedImage}
                                    alt=""
                                    style={{ width: '100%' }}
                                />
                                <p>{productdetails}</p>
                            </div>
                        </div>
                    )}

                    <style jsx>{`
                .modal {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    z-index: 1;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(5px);
                }
                .modal-content {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 5px;
                    width: 80%;
                    max-width: 500px;
                    position: relative;
                }
                .close {
                    position: absolute;
                    top: 10px;
                    right: 20px;
                    cursor: pointer;
                    font-size: 24px;
                }
                .items {
                    text-align: center;
                    margin: 10px;
                }
            `}</style>
                </div>
                <Link style={{ textDecoration: "none" }} to={'/dunks'}>
                    <div className="jjehfjnfjd">
                        <video src="https://videos.pexels.com/video-files/8533112/8533112-uhd_2560_1440_25fps.mp4" autoPlay muted loop className='promotionalvideo'></video>
                    </div>
                </Link>
                <div className="dhifjkfjlf" style={{ height: '500px', color: "black" }}>
                    <Link style={{ textDecoration: "none", color: "black" }} onClick={() => {
                        localStorage.setItem('producttype', 'sneakers');
                        localStorage.setItem('productname', "AIR JORDAN 5 RETRO 'WHITE/BLACK-SAIL-METALLIC SILVER'");
                        localStorage.setItem('productprice', "12500");
                        localStorage.setItem('productimage', "https://images.vegnonveg.com/resized/700X573/11395/air-jordan-5-retro-whiteblack-sail-metallic-silver-white-66b365aa44059.jpg");
                        localStorage.setItem('PID', "7uzaT6u7As");
                        // console.log(documentNames[index]);
                    }} to={'/product'}>
                        <div className="gallery" >
                            <img src="https://images.vegnonveg.com/resized/700X573/11395/air-jordan-5-retro-whiteblack-sail-metallic-silver-white-66b365aa44059.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            AIR JORDAN 5 RETRO 'WHITE/BLACK-SAIL-METALLIC SILVER'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }} onClick={() => {
                        localStorage.setItem('producttype', 'sneakers');
                        localStorage.setItem('productname', "AIR JORDAN 1 LOW 'WHITE/BORDEAUX-SAIL'");
                        localStorage.setItem('productprice', "12500");
                        localStorage.setItem('productimage', "https://images.vegnonveg.com/resized/700X573/11394/air-jordan-1-low-whitebordeaux-sail-purple-66b364fe14e20.jpg");
                        localStorage.setItem('PID', "OJTlHLl2IN");
                        // console.log(documentNames[index]);
                    }} to={'/product'}>
                        <div className="gallery">
                            <img src="https://images.vegnonveg.com/resized/700X573/11394/air-jordan-1-low-whitebordeaux-sail-purple-66b364fe14e20.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            AIR JORDAN 1 LOW 'WHITE/BORDEAUX-SAIL'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }} onClick={() => {
                        localStorage.setItem('producttype', 'sneakers');
                        localStorage.setItem('productname', "AIR MAX 1 ESSENTIAL PREMIUM 'NEUTRAL OLIVE/BLACK-CARGO KHAKI'");
                        localStorage.setItem('productprice', "12500");
                        localStorage.setItem('productimage', "https://images.vegnonveg.com/resized/700X573/11404/air-max-1-essential-premium-neutral-oliveblack-cargo-khaki-green-66b495cfd64d0.jpg");
                        localStorage.setItem('PID', "Qi7tr8647e");
                        // console.log(documentNames[index]);
                    }} to={'/product'}>
                        <div className="gallery">
                            <img src="https://images.vegnonveg.com/resized/700X573/11404/air-max-1-essential-premium-neutral-oliveblack-cargo-khaki-green-66b495cfd64d0.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            AIR MAX 1 ESSENTIAL PREMIUM 'NEUTRAL OLIVE/BLACK-CARGO KHAKI'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }}>
                        <div className="gallery">
                            <img src="https://images.vegnonveg.com/resized/700X573/11400/killshot-2-dark-russetphantom-gum-medium-brown-black-brown-66b36827b5c5e.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            KILLSHOT 2 'DARK RUSSET/PHANTOM-GUM MEDIUM BROWN-BLACK'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }} onClick={() => {
                        localStorage.setItem('producttype', 'sneakers');
                        localStorage.setItem('productname', "AIR JORDAN 3 RETRO TEX 'DARK DRIFTWOOD/SAIL-HEMP-VELVET BROWN'");
                        localStorage.setItem('productprice', "12500");
                        localStorage.setItem('productimage', "https://images.vegnonveg.com/resized/700X573/9805/air-jordan-1-mid-whiteblack-white-64dcc2a91c4af.jpg");
                        localStorage.setItem('PID', "L0xXIoM5Gl");
                        // console.log(documentNames[index]);
                    }} to={'/product'}>
                        <div className="gallery">
                            <img src="https://images.vegnonveg.com/resized/700X573/9805/air-jordan-1-mid-whiteblack-white-64dcc2a91c4af.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            AIR JORDAN 3 RETRO TEX 'DARK DRIFTWOOD/SAIL-HEMP-VELVET BROWN'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }} onClick={() => {
                        localStorage.setItem('producttype', 'sneakers');
                        localStorage.setItem('productname', "AIR JORDAN 1 LOW SE 'OXIDIZED GREEN/WHITE-SAIL'");
                        localStorage.setItem('productprice', "12500");
                        localStorage.setItem('productimage', "https://images.vegnonveg.com/resized/700X573/11425/air-jordan-1-low-whitemetallic-gold-black-white-66bb4992d8cb4.jpg");
                        localStorage.setItem('PID', "9uyQCfovvA");
                        // console.log(documentNames[index]);
                    }} to={'/product'}>
                        <div className="gallery">
                            <img src="https://images.vegnonveg.com/resized/700X573/11425/air-jordan-1-low-whitemetallic-gold-black-white-66bb4992d8cb4.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            AIR JORDAN 1 LOW SE 'OXIDIZED GREEN/WHITE-SAIL'
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }} onClick={() => {
                        localStorage.setItem('producttype', 'sneakers');
                        localStorage.setItem('productname', "AIR JORDAN 4 RETRO GS 'BLACK/WHITE'");
                        localStorage.setItem('productprice', "12500");
                        localStorage.setItem('productimage', "https://images.vegnonveg.com/resized/700X573/11381/air-jordan-1-mid-se-whiteoxidized-green-sail-neutral-grey-white-66a8c651cc6f3.jpg");
                        localStorage.setItem('PID', "RpR8VJGvRc");
                        // console.log(documentNames[index]);
                    }} to={'/product'}>
                        <div className="gallery">
                            <img src="https://images.vegnonveg.com/resized/700X573/11381/air-jordan-1-mid-se-whiteoxidized-green-sail-neutral-grey-white-66a8c651cc6f3.jpg" alt="" className='newstockimages' />
                            <br /><br />
                            AIR JORDAN 4 RETRO GS 'BLACK/WHITE'
                        </div>
                    </Link>
                </div>
                <Link style={{ textDecoration: "none" }} to={'/ss24'}>
                    <div className="jjehfjnfjd">
                        <video src="https://images.vegnonveg.com/media/collections/132/17171505421326659a34e3985f.mp4" autoPlay muted loop className='promotionalvideos'></video>
                    </div>
                </Link>
                <div className="dhifjkfjlf" style={{ height: '500px', color: "black" }}>
                    <Link style={{ textDecoration: "none", color: "black" }} to={"/jordan"}>
                        <div className="gallery" >
                            <img src="https://images.vegnonveg.com/media/collections/102/172007371710266863df57389e.png" alt="" className='newstockimages' />
                            <br /><br />
                            LEGENDARY AIR JORDAN 1
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }} to={'/slides'}>
                        <div className="gallery" >
                            <img src="https://images.vegnonveg.com/media/collections/75/171955723875667e5c76f082e.png" alt="" className='newstockimages' />
                            <br /><br />
                            SLIDES - ALL DAY COMFORT
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", color: "black" }} to={'/dunks'}>
                        <div className="gallery" >
                            <img src="https://images.vegnonveg.com/media/collections/101/17198391211016682a991ee9b7.png" alt="" className='newstockimages' />
                            <br /><br />
                            NIKE DUNKS - HERITAGE
                        </div>
                    </Link>
                </div>
                <Link style={{ textDecoration: "none" }}>
                    <div className="jjehfjnfjd">
                        <video src="https://cdn.shopify.com/videos/c/o/v/4144efc50b5b4801b277b3132794de9c.mp4" autoPlay muted loop className='promotionalvideos'></video>
                    </div>
                </Link>
                <div className="dhifjkfjlf" style={{ height: '500px', color: "black" }}>
                    {
                        fetchedAjNames.map((name, index) => (
                            <Link style={{ textDecoration: "none", color: "black" }} key={index} onClick={() => {
                                localStorage.setItem('producttypeupcoming', 'Coming Soon');
                                localStorage.setItem('productnameupcoming', fetchedAjNames[index]);
                                localStorage.setItem('productpriceupcoming', fetchedAjPrices[index]);
                                localStorage.setItem('productimageupcoming', fetchedAjPics[index]);
                                localStorage.setItem('PIDupcoming', documentNamess[index]);
                                // console.log(documentNames[index]);
                            }} to={'/products/comingsoon'}>
                                <div className="gallery">
                                    <img src={fetchedAjPics[index]} alt="" className='newstockimages' />
                                    <br /><br />
                                    {fetchedAjNames[index]}
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <Link style={{ textDecoration: "none" }}>
                    <div className="jjehfjnfjd">
                        <video src="https://vod.freecaster.com/louisvuitton/9cab9fef-a9c7-45bb-b866-e0176b146dce/PqutfkpKHJm5u7hJW9yCWG6s_3.mp4" autoPlay muted loop className='promotionalvideo'></video>
                    </div>
                </Link>
                <div className="dhifjkfjlf" style={{ height: '500px', color: "black" }} >
                    {
                        fetchedAjNamess.map((name, index) => (
                            <Link style={{ textDecoration: "none", color: "black" }} key={index} onClick={() => {
                                localStorage.setItem('producttype', 'Yeezys');
                                localStorage.setItem('productname', fetchedAjNamess[index]);
                                localStorage.setItem('productprice', fetchedAjPricess[index]);
                                localStorage.setItem('productimage', fetchedAjPicss[index]);
                                localStorage.setItem('PID', documentNamesss[index]);
                                // console.log(documentNames[index]);
                            }} to={'/product'}>
                                <div className="gallery">
                                    <img src={fetchedAjPicss[index]} alt="" className='newstockimages' />
                                    <br /><br />
                                    {fetchedAjNamess[index]}
                                </div>
                            </Link>
                        ))
                    }
                </div>
                {
                    loggeduser ? <Link style={{ textDecoration: "none" }}>
                        <div className="jjehfjnfjd">
                            <video src="https://images.vegnonveg.com/media/collections/140/172623524714066e4426f7646c.mp4" autoPlay muted loop className='promotionalvideo'></video>
                        </div>
                    </Link> : <></>
                }
                {
                    loggeduser ? <div className="jefkeklf" style={{ fontWeight: "bold", left: "25px", position: "relative", top: "50px" }}>
                        Recently Viewed Items

                    </div> : <></>
                }
                {
                    loggeduser && fetchedAjName.length > 0 ? <div className="dhifjkfjlf" style={{ height: '500px', color: "black" }}>
                        {
                            fetchedAjName.map((name, index) => (
                                <Link style={{ textDecoration: "none", color: "black" }} key={index}
                                    onClick={() => {
                                        localStorage.setItem('producttype', 'sneakers');
                                        localStorage.setItem('productname', fetchedAjName[index]);
                                        localStorage.setItem('productprice', fetchedAjPrice[index]);
                                        localStorage.setItem('productimage', fetchedAjPic[index]);
                                        localStorage.setItem('PID', documentNames[index]);
                                        console.log(documentNames[index]);
                                    }}
                                    to={"/product"}
                                >
                                    <div className="gallery" >
                                        <img src={fetchedAjPic[index]} alt="" className='newstockimages' />
                                        <br /><br />
                                        {fetchedAjName[index]}
                                    </div>
                                </Link>
                            ))
                        }
                    </div> : <></>
                }
                {
                    loggeduser ? <Link style={{ textDecoration: "none" }}>
                        <div className="jjehfjnfjd">
                            <video src="https://media.jimmychoo.com/video/upload/e_volume:mute,q_auto:best,f_auto/v1727081973/WEBSITE/Autumn%202024/HP/wk26/GBROW/d-gbrow-box5_ynqy8i.mp4" autoPlay muted loop className='promotionalvideo'></video>
                        </div>
                    </Link> : <></>
                }
                {
                    loggeduser ? <div className="jefkeklf" style={{ fontWeight: "bold", left: "25px", position: "relative", top: "50px" }}>
                        Your Favourite Items

                    </div> : <></>
                }
                {
                    loggeduser && fetchedAjNamesss.length > 0 ? (
                        <div className="dhifjkfjlf" style={{ height: '500px', color: "black" }}>
                            {
                                fetchedAjNamesss.map((name, index) => (
                                    <Link
                                        style={{ textDecoration: "none", color: "black", position: 'relative' }}
                                        key={index}
                                        onClick={() => {
                                            localStorage.setItem('producttype', 'sneakers');
                                            localStorage.setItem('productname', fetchedAjNamesss[index]);
                                            localStorage.setItem('productprice', fetchedAjPricesss[index]);
                                            localStorage.setItem('productimage', fetchedAjPicsss[index]);
                                            localStorage.setItem('PID', documentNamessss[index]);
                                            console.log(documentNames[index]);
                                        }}
                                        to={"/product"}
                                    >
                                        <div className="gallery">
                                            <img src={fetchedAjPicsss[index]} alt="" className='newstockimages' />
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '5px',  // Adjust the position as needed
                                                    right: '5px',  // Adjust the position as needed
                                                    cursor: 'pointer',
                                                    zIndex: 1,  // Ensure the icon is above the image
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevents the click from propagating to the Link
                                                    // Add any additional functionality for the heart icon here, if needed
                                                }}
                                            >
                                            </div>
                                            <br /><br />
                                            {fetchedAjNamesss[index]}
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    ) : <></>
                }


            </div>
        </>
    );
}

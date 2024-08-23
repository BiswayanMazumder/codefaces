import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Landingpage() {
    useEffect(() => {
        document.title = "CodeFaces - Learn and Practice Coding with Problems";
    })
    return (
        <>
            <div className="webbody">
                <div className="jdjkkvm">
                    <div className="kdkvmmv">
                        <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/Favicon%20Image/logo.webp" alt="" height={"50px"} style={{ marginLeft: "50px" }} className='laptop'/>
                        
                    </div>
                    <div className="buttons">
                        <Link style={{ color: "black", textDecoration: "none" }} className='jnvmn'>
                            Practice
                        </Link>
                        <Link style={{ color: "black", textDecoration: "none" }} className='jnvmn'>
                            Complete
                        </Link>
                        <Link style={{ color: "#5e93d7", textDecoration: "none", fontWeight: "600" }} className='jnvmn'>
                            Login
                        </Link>
                        <div className="signupbtn">
                            Sign Up
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

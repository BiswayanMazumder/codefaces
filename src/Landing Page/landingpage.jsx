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
                        <img src="https://optiflowinator.vercel.app/_next/image?url=%2Fimages%2Flogo.jpg&w=64&q=75" alt="" height={"50px"} style={{ marginLeft: "50px" }} className='laptop'/>
                        
                    </div>
                    <div className="buttons">
                        <Link style={{ color: "black", textDecoration: "none" }} className='jnvmn'>
                            Practice
                        </Link>
                        <Link style={{ color: "black", textDecoration: "none" }} className='jnvmn'>
                            Complete
                        </Link>
                        <Link style={{ color: "blue", textDecoration: "none", fontWeight: "600" }} className='jnvmn'>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

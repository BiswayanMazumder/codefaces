import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ProductDetails() {
    let sneakername=localStorage.getItem("productname");
        let sneakerimage=localStorage.getItem("productimage");
        let sneakerprice=localStorage.getItem("productprice");
    useEffect(() => {
        // sneakername=localStorage.setItem("productname")
        document.title =  sneakername + ' | LuxeLayers';
    })
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
                        <div className="sneakername">
                            {sneakername}
                        </div>
                        <div className="sneakerprice">
                        ₹{sneakerprice}
                        </div>
                        <div className="sneakerprice" style={{fontSize:"12px",position:"relative",top:"30px"}}>
                        MRP inclusive of all taxes
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

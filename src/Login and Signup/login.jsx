import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    useEffect(() => {
        document.title = 'Account'
    })
    return (
        <>
            <div className="webbody">
                <div className="headersection">
                    <div className="logo">
                        <div className="searchform">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="icon icon-hamburger" fill="none" viewBox="0 0 18 16">
                                <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor">
                                </path></svg> */}
                            <svg focusable="false" width="18" height="18" className="icon icon--header-search" viewBox="0 0 18 18">
                                <path d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17" fill="none" stroke="currentColor" strokeWidth="2"></path>
                            </svg>
                        </div>
                        <div className="logoimage">
                            <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/_fa24086d-6873-4c24-9ff6-0aceb7380333-QyUF9bBdbH9jERIGwpyEPhaZ2HcKZL.jpg" alt="" className='logoimg' />
                        </div>
                    </div>
                    <div className="headeroptions">
                        <div className="options">
                            {/* <Link to="/" style={{ textDecoration: "none", color: "black" }}>SS24</Link> */}
                            <Link to="/footwear" style={{ textDecoration: "none", color: "black" }} className='headerlink'>Footwear</Link>
                            <Link to="/ss24" style={{ textDecoration: "none", color: "black" }}>SS24</Link>
                            <Link to="/AF1" style={{ textDecoration: "none", color: "black" }}>Air Force 1</Link>
                            <Link to="/jordan" style={{ textDecoration: "none", color: "black" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "black" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                            <Link to="/account/login" style={{ textDecoration: "none", color: "orangered" }}>Login</Link>
                        </div>
                    </div>
                </div>
                <div className="jdkfkvjdlv">
                    <div className="jjfejf">
                        Login
                    </div>
                    Please enter your e-mail and password:
                    <div className="ekfjmmf">
                        <div className="email" style={{border: "none"}}>
                            <input type="text" placeholder='E-mail' className='email' />
                        </div>
                    </div>
                    <div className="ekfjmmf">
                        <div className="email" style={{border: "none"}}>
                            <input type="password" placeholder='Password' className='email' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

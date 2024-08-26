import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Slides() {
    useEffect(() => {
      document.title = 'Shop the Latest Collection of Slides and Sandals Online at LuxeLayers';  
    })
    const imageUrls = [
        "https://images.vegnonveg.com/resized/400X328/11240/jordan-jumpman-slide-neutral-greymetallic-silver-grey-667d41362b384.jpg",
        "https://images.vegnonveg.com/resized/400X328/11225/calm-sandal-light-bone-cream-666a83e84e6a9.jpg",
        "https://images.vegnonveg.com/resized/400X328/11225/calm-sandal-light-bone-cream-666a83e87116a.jpg",
        "https://images.vegnonveg.com/resized/400X328/11244/calm-slide-se-glacier-blue-blue-66865e0f385b4.jpg",
        "https://images.vegnonveg.com/resized/400X328/11244/calm-slide-se-glacier-blue-blue-66865e0f57cce.jpg",
        "https://images.vegnonveg.com/resized/400X328/11245/icon-classic-sandal-blackwhite-black-66865eb998bb6.jpg",
        "https://images.vegnonveg.com/resized/400X328/11191/calm-slide-game-royal-blue-66508c815106c.jpg",
        "https://images.vegnonveg.com/resized/400X328/10916/jordan-super-play-slide-blackphantom-anthracite-black-660ff53055b50.jpg",
        "https://images.vegnonveg.com/resized/400X328/10916/jordan-super-play-slide-blackphantom-anthracite-black-660ff5308138c.jpg",
        "https://images.vegnonveg.com/resized/400X328/11060/calm-sandal-black-black_1-6634824205ed5.jpg",
        "https://images.vegnonveg.com/resized/400X328/11060/calm-sandal-black-black_1-663482421f859.jpg",
        "https://images.vegnonveg.com/resized/400X328/10901/air-max-1-slide-whiteroyal-blue-black-light-neutral-grey-blue-660e942f103d7.jpg",
        "https://images.vegnonveg.com/resized/400X328/11474/calm-slide-flat-pewter-grey-66c71665c9e1c.jpg",
        "https://images.vegnonveg.com/resized/400X328/11436/chuck-70-mule-slip-egretblack-black-66c6d00abb1b9.jpg",
        "https://images.vegnonveg.com/resized/400X328/11439/run-star-utility-sandal-cx-ox-egret-cream-66c6d2efece41.jpg",
    ];
    
    const slidesnames = [
        'JORDAN JUMPMAN SLIDE NEUTRAL GREY/METALLIC SILVER',
        'CALM SANDAL LIGHT BONE',
        'CALM SLIDE SE GLACIER BLUE',
        'ICON CLASSIC SANDAL BLACK/WHITE',
        'CALM SLIDE GAME ROYAL',
        'SUPER PLAY SLIDE BLACK/PHANTOM-ANTHRACITE',
        'CALM SANDAL BLACK',
        'AIR MAX 1 SLIDE WHITE/ROYAL BLUE-BLACK-LIGHT NEUTRAL GREY',
        'CALM SLIDE FLAT PEWTER',
        'CHUCK 70 MULE SLIP EGRET/BLACK',
        'RUN STAR UTILITY SANDAL CX OX EGRET',
        'RUN STAR UTILITY SANDAL CX OX BLACK',
        'AIR MAX CIRRO SLIDE DARK SMOKE GREY/COOL GREY',
        'CALM MULE FLAX',
        'ICON CLASSIC SANDAL SE ARMORY NAVY/FLAX-SAIL',
        'AIR MAX KOKO SANDAL SANDDRIFT',
        'CALM MULE FLAT PEWTER',
        'CALM MULE SAIL',
        'ROAM WHITE/SAIL',
        'ROAM BLACK/IRON GREY',
        'HYDRO III RETRO SUMMIT WHITE/FIRE RED-CEMENT GREY-BLACK',
        'AIR MORE UPTEMPO SLIDE MIDNIGHT NAVY/UNIVERSITY RED-WHITE-CLEAR',
        'AIR MAX CIRRO SLIDE BLACK/CYBER-BLACK',
        'AIR MORE UPTEMPO SLIDE UNIVERSITY BLUE/WHITE'
      ];
          
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
                            <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/_fa24086d-6873-4c24-9ff6-0aceb7380333-QyUF9bBdbH9jERIGwpyEPhaZ2HcKZL.jpg" alt="" className='logoimg' onClick={() => window.location.href = "/"} />
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
                            <Link to="/slides" style={{ textDecoration: "none", color: "orangered" }}>Slides</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Login</Link>
                        </div>
                    </div>
                </div>
                <img src="https://images.vegnonveg.com/media/collections/75/171955723875667e5c76f082e.png" alt="" width={"100%"}  />
                <div className="fgfhhgjjh">
                    {
                        imageUrls.map((url, index) => (
                            <div className="jenfkjfrf">
                            <img src={imageUrls[index]} alt="" />
                            <div className="ejfjf">
                                {slidesnames[index]}
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

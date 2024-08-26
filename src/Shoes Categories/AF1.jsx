import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AF1() {
    useEffect(() => {
      document.title = 'Buy Nike Air Force for Men, women, and kids | LuxeLayers';  
    })
    const imageUrls = [
        "https://images.vegnonveg.com/resized/400X328/11317/air-force-1-shadow-sailcacao-wow-flax-sesame-white-6690be258346c.jpg",
        "https://images.vegnonveg.com/resized/400X328/11226/air-force-1-07-lv8-light-british-tanburgundy-crush-brown-666a86b38436d.jpg",
        "https://images.vegnonveg.com/resized/400X328/11336/air-force-1-07-lv8-1-coconut-milkvintage-green-bicoastal-white-6690cdf402403.jpg",
        "https://images.vegnonveg.com/resized/400X328/11257/air-force-1-07-nn-hydrangeasblack-raspberry-barely-grape-purple-66865dbe70bcc.jpg",
        "https://images.vegnonveg.com/resized/400X328/11195/air-force-1-07-saillimestone-pale-vanilla-coconut-milk-cream-66508e9ee2809.jpg",
        "https://images.vegnonveg.com/resized/400X328/11326/air-force-1-07-whiteuniversity-gold-white-6690c18e24b7c.jpg",
        "https://images.vegnonveg.com/resized/400X328/8772/air-force-1-07-blackwhite-black_1-63bbfb21984a4.jpg",
        "https://images.vegnonveg.com/resized/400X328/11475/air-force-1-07-whitedragon-red-white-white-66c717cce8961.jpg",
        
      ];
      
      const dunkLowModels = [
        "AIR FORCE 1 SHADOW 'SAIL/CACOA WOW-FLAX-SESAME WHITE'",
        "AIR FORCE 1 '07 LV8 'LIGHT BRITISH TAN/BURGUNDY CRUSH-BROWN'",
        "AIR FORCE 1 '07 LV8-1 'COCONUT MILK/VINTAGE GREEN-BICOASTAL WHITE'",
        "AIR FORCE 1 '07 NN 'HYDRANGEAS/BLACK-RASPBERRY-BARELY GRAPE PURPLE'",
        "AIR FORCE 1 '07 'SAIL/LIMESTONE-PALE VANILLA-COCONUT MILK-CREAM'",
        "AIR FORCE 1 '07 'WHITE/UNIVERSITY GOLD-WHITE'",
        "AIR FORCE 1 '07 'BLACK/WHITE-BLACK'",
        "AIR FORCE 1 '07 'WHITE/DRAGON RED-WHITE'",
        "AIR FORCE 1 LOW 'BLACK/TEA-BLACK-PETRA BROWN'",
        "AIR FORCE 1 LV8-3 'LIGHT BRITISH TAN/BURGUNDY CRUSH-BROWN'",
        "AIR FORCE 1 '07 NN 'FLAX/CACOA WOW-SESAME WHITE'",
        "AIR FORCE 1 '07 LV8 'PHANTOM/MALACHITE-GUM YELLOW'",
        "AIR FORCE 1 '07 'BLACK/BLACK'",
        "AIR FORCE 1 LE 'BLACK/BLACK'",
        "AIR FORCE 1 '07 NN 'WHITE/OBSIDIAN-PALE IVORY-METALLIC GOLD'",
        "AIR FORCE 1 '07 'WHITE/MIDNIGHT NAVY-WHITE'",
        "AIR FORCE 1 SP 'BLACK/GAME ROYAL-BLACK'",
        "AIR FORCE 1 '07 ESSENTIAL 'SAIL/BLACK-BLACK'",
        "AIR FORCE 1 '07 NN 'WHITE/GYM RED-VOLT'",
        "AIR FORCE 1 '07 LV8 'WHITE/PHANTOM-SUMMIT WHITE'",
        "AIR FORCE 1 '07 NN SE 'SAIL/VAPOR GREEN-SEA GLASS-VOLT'",
        "AIR FORCE 1 '07 NN SE 'SEA GLASS/VAPOR GREEN-LIGHT SILVER-SAIL'",
        "AIR FORCE 1 LOW RETRO PREMIUM 'WHITE/ELEMENTAL GOLD-DARK HAZEL'",
        "AIR FORCE 1 LV8-4 'WHITE/BLACK-WHITE'"
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
                            <Link to="/AF1" style={{ textDecoration: "none", color: "orangered" }}>Air Force 1</Link>
                            <Link to="/jordan" style={{ textDecoration: "none", color: "black" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "black" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                            <Link to="/account/login" style={{ textDecoration: "none", color: "black" }}>Login</Link>
                        </div>
                    </div>
                </div>
                <img src="https://images.vegnonveg.com/media/collections/84/171955716484667e5c2c97284.png" alt="" width={"100%"}  />
                <div className="fgfhhgjjh">
                    {
                        imageUrls.map((url, index) => (
                            <div className="jenfkjfrf">
                            <img src={imageUrls[index]} alt="" />
                            <div className="ejfjf">
                                {dunkLowModels[index]}
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

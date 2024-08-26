import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Dunks() {
    useEffect(() => {
      document.title = 'Shop the Latest Collection of Slides and Sandals Online at LuxeLayers';  
    })
    const imageUrls = [
        'https://images.vegnonveg.com/resized/400X328/5358/nike-dunk-low-retro-whiteblack-white-60e41a479d3e7.jpg',
        'https://images.vegnonveg.com/resized/400X328/5363/w-nike-dunk-low-whiteblack-white-60e41b4c68977.jpg',
        'https://images.vegnonveg.com/resized/400X328/8828/nike-dunk-low-retro-whitegrey-fog-63ce764079383.jpg',
        'https://images.vegnonveg.com/resized/400X328/8828/nike-dunk-low-retro-whitegrey-fog-63ce764031209.jpg',
        'https://images.vegnonveg.com/resized/400X328/10539/dunk-low-dark-currywhite-white-658e94dce57fc.jpg',
        'https://images.vegnonveg.com/resized/400X328/11342/dunk-low-nn-summit-whitekhaki-baroque-brown-phantom-white-6690cf8f03a69.jpg',
        'https://images.vegnonveg.com/resized/400X328/11434/dunk-low-nn-baroque-brownblack-white-sail-brown-66bb4b2dc3a2a.jpg',
        'https://images.vegnonveg.com/resized/400X328/11407/dunk-low-blackmidnight-navy-white-university-red-white-66bb4bbad6fab.jpg',
        'https://images.vegnonveg.com/resized/400X328/11396/dunk-low-retro-whitedenim-turq-white-66b3660dc7ed0.jpg',
        'https://images.vegnonveg.com/resized/400X328/11406/dunk-low-coconut-milkflax-sail-brown-66b497326da01.jpg',
        'https://images.vegnonveg.com/resized/400X328/11408/dunk-low-game-royalblack-white-multicolor-66b4784782d8e.jpg',
        'https://images.vegnonveg.com/resized/400X328/11397/dunk-low-retro-whitedragon-red-black-white-66b3667e7b69f.jpg',
      ];
      
      const dunkLowModels = [
        "DUNK LOW RETRO 'WHITE/BLACK'",
        "DUNK LOW 'WHITE/BLACK' Womens",
        "DUNK LOW RETRO 'WHITE/GREY FOG'",
        "DUNK LOW 'DARK CURRY/WHITE'",
        "DUNK LOW NN 'SUMMIT WHITE/KHAKI-BAROQUE BROWN-PHANTOM'",
        "DUNK LOW NN 'BAROQUE BROWN/BLACK-WHITE-SAIL'",
        "DUNK LOW 'BLACK/MIDNIGHT NAVY-WHITE-UNIVERSITY RED'",
        "DUNK LOW RETRO 'WHITE/DENIM TURQ'",
        "DUNK LOW 'COCONUT MILK/FLAX-SAIL'",
        "DUNK LOW 'GAME ROYAL/BLACK-WHITE'",
        "DUNK LOW RETRO 'WHITE/DRAGON RED-BLACK'",
        "DUNK LOW NN 'PHANTOM/OBSIDIAN-PALE IVORY'",
        "DUNK LOW PREMIUM 'PHANTOM/PHOTON DUST-LIGHT SMOKE GREY'",
        "DUNK LOW PREMIUM 'OIL GREEN/TREELINE-SAIL'",
        "DUNK LOW RETRO PREMIUM 'MEDIUM OLIVE/HEMP-SUMMIT WHITE-SAIL'",
        "DUNK LOW LX 'PHOTON DUST/METALLIC SILVER-PINK FOAM'",
        "DUNK LOW 'CACAO WOW/PALE IVORY-PINK FOAM'",
        "DUNK HIGH RETRO SE 'PHANTOM/RACER BLUE-PALE IVORY-GUM YELLOW'",
        "DUNK LOW RETRO 'WHITE/VIOTECH'",
        "DUNK LOW 'SAIL/PACIFIC MOSS-CREAM-LIMESTONE'",
        "DUNK LOW NN 'PHOTON DUST/OBSIDIAN-WHITE-PHANTOM'",
        "DUNK LOW NN 'WHITE/DUSTY CACTUS'",
        "DUNK LOW 'WHITE/BLACK-FOOTBALL GREY-GREEN STRIKE'",
        "DUNK LOW RETRO SE 'PHANTOM/KHAKI-LIGHT BONE-SUMMIT WHITE'"
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
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>SS24</Link>
                            <Link to="/AF1" style={{ textDecoration: "none", color: "black" }}>Air Force 1</Link>
                            <Link to="/jordan" style={{ textDecoration: "none", color: "black" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "orangered" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Contact Us</Link>
                        </div>
                    </div>
                </div>
                <img src="https://images.vegnonveg.com/media/collections/101/17198391211016682a991ee9b7.png" alt="" width={"100%"}  />
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

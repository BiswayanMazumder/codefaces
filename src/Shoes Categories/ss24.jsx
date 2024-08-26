import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function SS24() {
    useEffect(() => {
      document.title = 'Buy Nike Air Force for Men, women, and kids | LuxeLayers';  
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
        "https://images.vegnonveg.com/resized/400X328/11473/air-max-90-drift-action-greenblack-summit-white-green-66c6f5a6b95b7.jpg",
  "https://images.vegnonveg.com/resized/400X328/11421/air-max-1-whitelight-army-neutral-grey-black-white-66b47248b5e8d.jpg",
  "https://images.vegnonveg.com/resized/400X328/11421/air-max-1-whitelight-army-neutral-grey-black-white-66b4724907e18.jpg",
  "https://images.vegnonveg.com/resized/400X328/11420/air-max-90-whitekhaki-cyber-dark-smoke-grey-white-66b4720bd006d.jpg",
  "https://images.vegnonveg.com/resized/400X328/11420/air-max-90-whitekhaki-cyber-dark-smoke-grey-white-66b4720c2227d.jpg",
  "https://images.vegnonveg.com/resized/400X328/11405/air-max-plus-premium-black-teablack-petra-brown-olive-grey-black-66b478d3d7fd6.jpg",
  "https://images.vegnonveg.com/resized/400X328/11404/air-max-1-essential-premium-neutral-oliveblack-cargo-khaki-green-66b495cfd64d0.jpg",
  "https://images.vegnonveg.com/resized/400X328/11402/air-max-1-essential-whiteblack-summit-white-white-66b4760314a84.jpg",
  "https://images.vegnonveg.com/resized/400X328/11402/air-max-1-essential-whiteblack-summit-white-white-66b47603619dc.jpg",
  "https://images.vegnonveg.com/resized/400X328/11388/air-max-sndr-hyper-pinkblack-white-pink-66b0bb285d92c.jpg",
  "https://images.vegnonveg.com/resized/400X328/11388/air-max-sndr-hyper-pinkblack-white-pink-66b0bb29104e2.jpg",
  "https://images.vegnonveg.com/resized/400X328/11369/air-max-1-86-og-light-smoke-greymetallic-silver-grey-66a8c87a72f58.jpg",
  "https://images.vegnonveg.com/resized/400X328/11347/air-max-dn-se-premium-multicolor-multicolor-669a1ca7d4f65.jpg",
  "https://images.vegnonveg.com/resized/400X328/11341/air-max-90-nn-whitemetallic-gold-obsidian-white-6690cf0645ec5.jpg",
  "https://images.vegnonveg.com/resized/400X328/11338/air-max-90-lv8-sailred-stardust-summit-white-white-66979dfc7818e.jpg",
  "https://images.vegnonveg.com/resized/400X328/11338/air-max-90-lv8-sailred-stardust-summit-white-white-66979dfc9987b.jpg",
  "https://images.vegnonveg.com/resized/400X328/11339/air-max-90-lv8-sailbarely-green-summit-white-white-66979eb0553b8.jpg",
  "https://images.vegnonveg.com/resized/400X328/11314/air-max-90-blackwhite-stadium-green-black-6690bd35add59.jpg",
  "https://images.vegnonveg.com/resized/400X328/11318/air-max-1-whiteaster-pink-light-orewood-brown-black-white-6690bef729bc8.jpg",
  "https://images.vegnonveg.com/resized/400X328/11313/air-max-90-whitelight-silver-aster-pink-black-white-6690bcde1eab5.jpg",
  "https://images.vegnonveg.com/resized/400X328/11328/air-max-1-coconut-milkburgundy-crush-armory-navy-white-6690c23b15864.jpg",

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
        "DUNK LOW RETRO SE 'PHANTOM/KHAKI-LIGHT BONE-SUMMIT WHITE'",
        "AIR MAX 90 DRIFT 'ACTION GREEN/BLACK-SUMMIT WHITE'",
        "AIR MAX 1 'WHITE/LIGHT ARMY-NEUTRAL GREY-BLACK'",
        "AIR MAX 90 'WHITE/KHAKI-CYBER-DARK SMOKE GREY'",
        "AIR MAX PLUS PREMIUM 'BLACK TEA/BLACK-PETRA BROWN-OLIVE GREY'",
        "AIR MAX 1 ESSENTIAL PREMIUM 'NEUTRAL OLIVE/BLACK-CARGO KHAKI'",
        "AIR MAX 1 ESSENTIAL 'WHITE/BLACK-SUMMIT WHITE'",
        "AIR MAX SNDR 'HYPER PINK/BLACK-WHITE'",
        "AIR MAX 1 '86 OG 'LIGHT SMOKE GREY/METALLIC SILVER'",
        "AIR MAX DN SE PREMIUM 'MULTICOLOR'",
        "AIR MAX 90 NN 'WHITE/METALLIC GOLD-OBSIDIAN'",
        "AIR MAX 90 LV8 'SAIL/RED STARDUST-SUMMIT WHITE'",
        "AIR MAX 90 LV8 'SAIL/BARELY GREEN-SUMMIT WHITE'",
        "AIR MAX 90 'BLACK/WHITE-STADIUM GREEN'",
        "AIR MAX 1 'WHITE/ASTER PINK-LIGHT OREWOOD BROWN-BLACK'",
        "AIR MAX 90 'WHITE/LIGHT SILVER-ASTER PINK-BLACK'",
        "AIR MAX 1 'COCONUT MILK/BURGUNDY CRUSH-ARMORY NAVY'",
        "AIR MAX 1 '86 OG 'EARTH/LIGHT LEMON TWIST-OIL GREEN'",
        "AIR MAX 1 'SUMMIT WHITE/BURGUNDY CRUSH-PICANTE RED'",
        "AIR MAX 90 'WHITE/BLACK-DARK TEAM RED-PURE PLATINUM'",
        "AIR MAX 1 'WHITE/UNIVERSITY RED-CREAM-LIMESTONE'",
        "AIR MAX 90 LV8 'SAIL/WHITE-COCONUT MILK-PALE VANILLA'",
        "AIR MAX 90 LV8 'WHITE/PHOTON DUST-BAROQUE BROWN'",
        "AIR MAX 1 'PLATINUM TINT/DARK OBSIDIAN-WOLF GREY'",
        "AIR MAX ISLA SANDAL 'BLACK/ANTHRACITE'",
        "https://images.vegnonveg.com/resized/400X328/11317/air-force-1-shadow-sailcacao-wow-flax-sesame-white-6690be258346c.jpg",
        "https://images.vegnonveg.com/resized/400X328/11226/air-force-1-07-lv8-light-british-tanburgundy-crush-brown-666a86b38436d.jpg",
        "https://images.vegnonveg.com/resized/400X328/11336/air-force-1-07-lv8-1-coconut-milkvintage-green-bicoastal-white-6690cdf402403.jpg",
        "https://images.vegnonveg.com/resized/400X328/11257/air-force-1-07-nn-hydrangeasblack-raspberry-barely-grape-purple-66865dbe70bcc.jpg",
        "https://images.vegnonveg.com/resized/400X328/11195/air-force-1-07-saillimestone-pale-vanilla-coconut-milk-cream-66508e9ee2809.jpg",
        "https://images.vegnonveg.com/resized/400X328/11326/air-force-1-07-whiteuniversity-gold-white-6690c18e24b7c.jpg",
        "https://images.vegnonveg.com/resized/400X328/8772/air-force-1-07-blackwhite-black_1-63bbfb21984a4.jpg",
        "https://images.vegnonveg.com/resized/400X328/11475/air-force-1-07-whitedragon-red-white-white-66c717cce8961.jpg",
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
                            <Link to="/ss24" style={{ textDecoration: "none", color: "orangered" }}>SS24</Link>
                            <Link to="/AF1" style={{ textDecoration: "none", color: "black" }}>Air Force 1</Link>
                            <Link to="/jordan" style={{ textDecoration: "none", color: "black" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "black" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Login</Link>
                        </div>
                    </div>
                </div>
                <video src="https://images.vegnonveg.com/media/collections/132/17171505421326659a34e3985f.mp4"  width={"100%"} autoPlay loop muted></video>
                {/* <img src="https://images.vegnonveg.com/media/collections/84/171955716484667e5c2c97284.png" alt="" width={"100%"}  /> */}
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

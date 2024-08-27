import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AirMax() {
    useEffect(() => {
        document.title = 'Shop Nike Air Max l Latest Footwear Sneaker Collection l LuxeLayers';
    })
    const imageUrls = [
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
        "AIR MAX ISLA SANDAL 'BLACK/ANTHRACITE'"
    ];


    return (
        <>
            <div className="webbody">
                <div className="headersection">
                    <div className="logo">
                        <div className="searchform">

                            <svg focusable="false" width="18" height="18" className="icon icon--header-search" viewBox="0 0 18 18">
                                <path d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17" fill="none" stroke="currentColor" strokeWidth="2"></path>
                            </svg>
                        </div>
                        <div className="searchform">

                            <svg focusable="false" width="18" height="18" class="icon icon--header-cart   " viewBox="0 0 20 18">
                                <path d="M3 1h14l1 16H2L3 1z" fill="none" stroke="currentColor" stroke-width="2"></path>
                                <path d="M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0" fill="none" stroke="currentColor" stroke-width="2"></path>
                            </svg>
                        </div>
                        <div className="searchform">

                            <svg focusable="false" width="18" height="18" class="icon icon--header-customer   " viewBox="0 0 18 17">
                                <circle cx="9" cy="5" r="4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></circle>
                                <path d="M1 17v0a4 4 0 014-4h8a4 4 0 014 4v0" fill="none" stroke="currentColor" stroke-width="2"></path>
                            </svg>
                        </div>
                        {/* <div className="logoimage">
                            <img src="https://g1uudlawy6t63z36.public.blob.vercel-storage.com/_fa24086d-6873-4c24-9ff6-0aceb7380333-QyUF9bBdbH9jERIGwpyEPhaZ2HcKZL.jpg" alt="" className='logoimg' onClick={() => window.location.href = "/"} />
                        </div> */}
                    </div>
                    <div className="headeroptions">
                        <div className="options">
                            <Link to="/footwear" style={{ textDecoration: "none", color: "black" }} className='headerlink'>Footwear</Link>
                            <Link to="/ss24" style={{ textDecoration: "none", color: "black" }}>SS24</Link>
                            <Link to="/AF1" style={{ textDecoration: "none", color: "black" }}>Air Force 1</Link>
                            <Link to="/jordan" style={{ textDecoration: "none", color: "black" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "black" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "orangered" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                            <Link to="/account/login" style={{ textDecoration: "none", color: "black" }}>Login</Link>
                        </div>
                    </div>
                </div>
                <img src="https://images.vegnonveg.com/media/collections/107/17198391301076682a99a1da90.png" alt="" width={"100%"} />
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

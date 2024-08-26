import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Jordan() {
    useEffect(() => {
      document.title = 'Buy Nike Air Jordan for Men, women, and kids | LuxeLayers';  
    })
    const imageUrls = [
        "https://images.vegnonveg.com/resized/400X328/11393/air-jordan-1-low-off-noirarchaeo-brown-sail-brown-66b362b30f4dc.jpg",
        "https://images.vegnonveg.com/resized/400X328/11393/air-jordan-1-low-off-noirarchaeo-brown-sail-brown-66b362b35ce83.jpg",
        "https://images.vegnonveg.com/resized/400X328/11422/air-jordan-4-retro-se-smoke-greyiron-grey-cement-grey-grey-66b48d859813d.jpg",
        "https://images.vegnonveg.com/resized/400X328/11422/air-jordan-4-retro-se-smoke-greyiron-grey-cement-grey-grey-66b48d8603d63.jpg",
        "https://images.vegnonveg.com/resized/400X328/11425/air-jordan-1-low-whitemetallic-gold-black-white-66bb4992d8cb4.jpg",
        "https://images.vegnonveg.com/resized/400X328/11425/air-jordan-1-low-whitemetallic-gold-black-white-66bb499322a13.jpg",
        "https://images.vegnonveg.com/resized/400X328/11381/air-jordan-1-mid-se-whiteoxidized-green-sail-neutral-grey-white-66a8c651cc6f3.jpg",
        "https://images.vegnonveg.com/resized/400X328/11247/air-jordan-1-low-se-oxidized-greenwhite-sail-green-66a8c54429f5d.jpg",
        "https://images.vegnonveg.com/resized/400X328/11247/air-jordan-1-low-se-oxidized-greenwhite-sail-green-66a8c544725c4.jpg",
        "https://images.vegnonveg.com/resized/400X328/11241/air-jordan-1-low-se-hemplight-british-tan-sail-oatmeal-brown-667d3e4f7c748.jpg",
        "https://images.vegnonveg.com/resized/400X328/11241/air-jordan-1-low-se-hemplight-british-tan-sail-oatmeal-brown-667d3e4fd25f1.jpg",
        "https://images.vegnonveg.com/resized/400X328/11429/air-jordan-4-retro-blackwhite-black_1-66c71921807e0.jpg",
        "https://images.vegnonveg.com/resized/400X328/11429/air-jordan-4-retro-blackwhite-black_1-66c71921c754a.jpg",
        "https://images.vegnonveg.com/resized/400X328/11428/air-jordan-4-retro-blackwhite-black-66c718d11e771.jpg",
        "https://images.vegnonveg.com/resized/400X328/11426/air-jordan-1-mid-saillight-dew-muslin-white-66bb4a42e2b7a.jpg",
        "https://images.vegnonveg.com/resized/400X328/11426/air-jordan-1-mid-saillight-dew-muslin-white-66bb4a431e495.jpg",
        "https://images.vegnonveg.com/resized/400X328/11216/air-jordan-11-retro-low-whitemidnight-navy-diffused-blue-white-6662eaf4ed74c.jpg",
        "https://images.vegnonveg.com/resized/400X328/11216/air-jordan-11-retro-low-whitemidnight-navy-diffused-blue-white-6662eaf5294de.jpg",
        "https://images.vegnonveg.com/resized/400X328/11395/air-jordan-5-retro-whiteblack-sail-metallic-silver-white-66b365aa44059.jpg",
        "https://images.vegnonveg.com/resized/400X328/11394/air-jordan-1-low-whitebordeaux-sail-purple-66b364fe14e20.jpg",
        "https://images.vegnonveg.com/resized/400X328/9805/air-jordan-1-mid-whiteblack-white-64dcc2a91c4af.jpg",
        "https://images.vegnonveg.com/resized/400X328/9805/air-jordan-1-mid-whiteblack-white-64dcc2a979f95.jpg",
        "https://images.vegnonveg.com/resized/400X328/11375/air-jordan-1-retro-high-og-blackmetallic-gold-sail-black_1-66a8c4bbb4277.jpg",
        "https://images.vegnonveg.com/resized/400X328/11375/air-jordan-1-retro-high-og-blackmetallic-gold-sail-black_1-66a8c4bc2d73f.jpg",
        "https://images.vegnonveg.com/resized/400X328/11374/air-jordan-1-retro-high-og-blackmetallic-gold-sail-black-66a8c41a8efe9.jpg",
        "https://images.vegnonveg.com/resized/400X328/11324/air-jordan-1-retro-high-og-university-blueuniversity-gold-sail-blue-6690d2df36ed7.jpg",
        "https://images.vegnonveg.com/resized/400X328/11309/air-jordan-1-low-sailneutral-grey-coconut-milk-grey-6690bb424cd21.jpg",
        "https://images.vegnonveg.com/resized/400X328/11316/air-jordan-1-mid-blackmetallic-gold-white-black-6690bdacce982.jpg",
        "https://images.vegnonveg.com/resized/400X328/11316/air-jordan-1-mid-blackmetallic-gold-white-black-6690bdad1b6da.jpg",
        "https://images.vegnonveg.com/resized/400X328/11306/air-jordan-1-low-whitesky-grey-football-grey-white-6690ba64af00f.jpg",
        "https://images.vegnonveg.com/resized/400X328/11303/air-jordan-1-mid-legend-light-brownsail-muslin-white-6690b3636add7.jpg",
        "https://images.vegnonveg.com/resized/400X328/11352/air-jordan-3-retro-tex-dark-driftwoodsail-hemp-velvet-brown-brown-6690d2874de39.jpg",
        "https://images.vegnonveg.com/resized/400X328/11352/air-jordan-3-retro-tex-dark-driftwoodsail-hemp-velvet-brown-brown-6690d28783e41.jpg",
        "https://images.vegnonveg.com/resized/400X328/11307/air-jordan-1-retro-low-og-whiteblack-wolf-grey-white-6690d206a3124.jpg",
        "https://images.vegnonveg.com/resized/400X328/11307/air-jordan-1-retro-low-og-whiteblack-wolf-grey-white-6690d206dfa2c.jpg",
        "https://images.vegnonveg.com/resized/400X328/11315/air-jordan-1-mid-blackwhite-gym-red-black_1-669113064f7db.jpg",
        "https://images.vegnonveg.com/resized/400X328/11301/air-jordan-1-low-whitewolf-grey-midnight-navy-grey-6690b22d90729.jpg",
        "https://images.vegnonveg.com/resized/400X328/11344/air-jordan-legacy-312-low-whitelight-dew-sail-white-669113bfa0306.jpg",
        "https://images.vegnonveg.com/resized/400X328/11248/air-jordan-1-mid-se-neutral-greysmoke-grey-sail-grey-66865b3831d31.jpg",
        "https://images.vegnonveg.com/resized/400X328/11248/air-jordan-1-mid-se-neutral-greysmoke-grey-sail-grey-66865b386d852.jpg",
        "https://images.vegnonveg.com/resized/400X328/11233/air-jordan-13-retro-dune-redterra-blush-white-red-667549df633ec.jpg",
        "https://images.vegnonveg.com/resized/400X328/10654/air-jordan-1-low-85-whitenavy-blue-65ba3f129749e.jpg",
    ];
    const airJordanSneakers = [
        "AIR JORDAN 1 LOW 'OFF NOIR/ARCHAEO BROWN-SAIL'",
        "AIR JORDAN 4 RETRO SE 'SMOKE GREY/IRON GREY-CEMENT GREY'",
        "AIR JORDAN 1 LOW 'WHITE/METALLIC GOLD-BLACK'",
        "AIR JORDAN 1 MID SE 'WHITE/OXIDIZED GREEN-SAIL-NEUTRAL GREY'",
        "AIR JORDAN 1 LOW SE 'OXIDIZED GREEN/WHITE-SAIL'",
        "AIR JORDAN 1 LOW SE 'HEMP/LIGHT BRITISH TAN-SAIL-OATMEAL'",
        "AIR JORDAN 4 RETRO GS 'BLACK/WHITE'",
        "AIR JORDAN 4 RETRO 'BLACK/WHITE'",
        "AIR JORDAN 1 MID 'SAIL/LIGHT DEW-MUSLIN'",
        "AIR JORDAN 11 RETRO LOW 'WHITE/MIDNIGHT NAVY-DIFFUSED BLUE'",
        "AIR JORDAN 5 RETRO 'WHITE/BLACK-SAIL-METALLIC SILVER'",
        "AIR JORDAN 1 LOW 'WHITE/BORDEAUX-SAIL'",
        "AIR JORDAN 1 MID 'WHITE/BLACK'",
        "AIR JORDAN 1 RETRO HIGH OG GS 'BLACK/METALLIC GOLD-SAIL'",
        "AIR JORDAN 1 RETRO HIGH OG 'BLACK/METALLIC GOLD-SAIL'",
        "AIR JORDAN 1 RETRO HIGH OG 'UNIVERSITY BLUE/UNIVERSITY GOLD-SAIL'",
        "AIR JORDAN 1 LOW 'SAIL/NEUTRAL GREY-COCONUT MILK'",
        "AIR JORDAN 1 MID 'BLACK/METALLIC GOLD-WHITE'",
        "AIR JORDAN 1 LOW 'WHITE/SKY GREY-FOOTBALL GREY'",
        "AIR JORDAN 1 MID 'LEGEND LIGHT BROWN/SAIL-MUSLIN'",
        "AIR JORDAN 3 RETRO TEX 'DARK DRIFTWOOD/SAIL-HEMP-VELVET BROWN'",
        "AIR JORDAN 1 RETRO LOW OG 'WHITE/BLACK-WOLF GREY'",
        "AIR JORDAN 1 MID GS 'BLACK/WHITE-GYM RED'",
        "AIR JORDAN 1 LOW 'WHITE/WOLF GREY-MIDNIGHT NAVY'",
        "AIR JORDAN LEGACY 312 LOW 'WHITE/LIGHT DEW-SAIL'",
        "AIR JORDAN 1 MID SE 'NEUTRAL GREY/SMOKE GREY-SAIL'",
        "AIR JORDAN 13 RETRO 'DUNE RED/TERRA BLUSH-WHITE'",
        "AIR JORDAN 1 LOW 85 'WHITE/NAVY'",
        "AIR JORDAN 1 MID 'WHITE/MIDNIGHT NAVY-WOLF GREY'",
        "AIR JORDAN 1 MID 'BLACK/WHITE-GYM RED'",
        "AIR JORDAN 1 RETRO HIGH OG 'SUMMIT WHITE/OBSIDIAN'",
        "AIR JORDAN 1 RETRO LOW OG 'BLACK/GORGE GREEN-VARSITY RED-SAIL'",
        "AIR JORDAN 1 MID SE 'WHITE/INDUSTRIAL BLUE-SAIL'",
        "SPIZIKE LOW PREMIUM 'VARSITY MAIZE/BLACK-WOLF GREY'",
        "AIR JORDAN 4 RETRO 'WHITE/OXIDIZED GREEN-NEUTRAL GREY'",
        "AIR JORDAN 4 RETRO 'WHITE/OXIDIZED GREEN-NEUTRAL GREY'",
        "AIR JORDAN 1 MID SE CRAFT 'PALE IVORY/SAIL-LEGEND LIGHT BROWN'",
        "AIR JORDAN 1 MID SE 'WHITE/METALLIC SILVER-WOLF GREY'",
        "AIR JORDAN 1 LOW SE 'METALLIC SILVER/PHOTON DUST-WOLF GREY'",
        "AIR JORDAN 1 RETRO LOW OG 'NEUTRAL GREY/METALLIC SILVER-WHITE'",
        "AIR JORDAN 1 RETRO LOW OG 'NEUTRAL GREY/METALLIC SILVER-WHITE'",
        "AIR JORDAN 1 LOW MM 'PERFECT PINK/METALLIC GOLD'",
        "AIR JORDAN 1 MID 'WHITE'",
        "AIR JORDAN 4 RETRO 'OFF WHITE/MILITARY BLUE-NEUTRAL GREY' GS",
        "AIR JORDAN 1 MID SE 'WHITE/INDUSTRIAL BLUE-SAIL'",
        "AIR JORDAN 1 MID SE 'COCONUT MILK/LEGEND PINK-SAIL'",
        "AIR JORDAN 11 RETRO LOW 'BLACK/VARSITY ROYAL-WHITE'",
        "AIR JORDAN 1 MID SE 'BLACK/PINE GREEN-DUNE RED'",
        "AIR JORDAN 1 MID SE 'BLACK/PINE GREEN-DUNE RED'",
        "AIR JORDAN 1 LOW SE 'WHITE/INDUSTRIAL BLUE-BLUE GREY-SAIL'",
        "AIR JORDAN 1 LOW 85 'SUMMIT WHITE/LIGHT SMOKE GREY-NEUTRAL GREY'",
        "AIR JORDAN 1 LOW 'WHITE/BLACK'",
        "AIR JORDAN 1 RETRO HIGH OG 'WHITE/TEAM RED'",
        "AIR JORDAN 4 RETRO 'WHITE/COCONUT MILK-VIVID SULFUR'",
        "SPIZIKE LOW 'WHITE/TEAM RED-WOLF GREY-ANTHRACITE'",
        "AIR JORDAN 3 RETRO 'WHITE/COSMIC CLAY-SAIL-CEMENT GREY'",
        "AIR JORDAN 5 RETRO SE 'SAIL/BLACK-LIGHT OREWOOD BROWN-COCONUT MILK'",
        "AIR JORDAN 3 RETRO 'BLACK/GREEN GLOW-WOLF GREY-WHITE'",
        "AIR JORDAN 4 RETRO 'SAIL/METALLIC GOLD-BLACK'",
        "AIR JORDAN 9 RETRO 'SUMMIT WHITE/BLACK-DARK POWDER BLUE'",
        "AIR JORDAN 1 LOW MM 'LUCKY GREEN/METALLIC GOLD'",
        "AIR JORDAN 5 RETRO 'ARMY OLIVE/SOLAR ORANGE'",
        "AIR JORDAN 3 RETRO 'WHITE/METALLIC COPPER-TRUE BLUE'",
        "AIR JORDAN 1 MID SE 'WHITE/LOBSTER-DUNE RED-SAIL'",
        "AIR JORDAN 5 RETRO 'WHITE/LUCKY GREEN-BLACK-ICE BLUE'",
        "AIR JORDAN 1 ZOOM AIR COMFORT 2 'BLACK/FIRE RED-CEMENT GREY-WHITE'",
        "AIR JORDAN 1 RETRO HIGH OG 'BLACK/WHITE'",
        "AIR JORDAN 1 RETRO HIGH OG 'BLACK/WHITE'",
        "AIR JORDAN 1 RETRO HIGH OG 'WHITE/SKY J MAUVE'",
        "AIR JORDAN 1 RETRO HIGH OG 'PRALINE/WHITE-SAIL'",
        "AIR JORDAN 1 RETRO HIGH OG 'BLACK/UNIVERSITY RED-WHITE'",
        "AIR JORDAN 1 HIGH MM 'BLACK/GAME ROYAL-WHITE-SAIL'",
        "AIR JORDAN 1 RETRO HIGH OG 'TECH GREY/MUSLIN-BLACK-WHITE'",
        "AIR JORDAN 1 RETRO HIGH OG 'WHITE/METALLIC GOLD-GUM LIGHT BROWN'",
        "AIR JORDAN 1 LOW SE 'PALE VANILLA'",
        "AIR JORDAN 3 RETRO CRAFT 'IVORY/GREY MIST-CREAM'",
        "AIR JORDAN 2 RETRO LOW 'WHITE/CEMENT GREY-SANDDRIFT-NEUTRAL GREY'",
        "AIR JORDAN 3 RETRO 'WHITE/MIDNIGHT NAVY-CEMENT GREY-BLACK'",
        "AIR JORDAN 1 RETRO LOW OG 'WHITE/UNIVERSITY RED'",
        "AIR JORDAN 1 MID 'WHITE/BLACK'",
        "AIR JORDAN 6 RETRO 'WHITE/YELLOW OCHRE-BLACK'",
        "AIR JORDAN 2 RETRO LOW 'WHITE/UNIVERSITY BLUE-CEMENT GREY'",
        "AIR JORDAN 2 RETRO 'SAIL/COCONUT MILK-BLACK'",
        "AIR JORDAN 2 RETRO LOW 'BLACK/FIRE RED-FIR-CEMENT GREY'",
        "AIR JORDAN 11 RETRO GS 'WHITE/METALLIC GOLD-BLACK'",
        "AIR JORDAN 11 RETRO 'WHITE/METALLIC GOLD-BLACK'",
        "AIR JORDAN 1 MID 'DUSTY PEACH/NIGHT MAROON-SAIL-WHITE'",
        "AIR JORDAN 4 RETRO SE CRAFT 'MEDIUM OLIVE/PALE VANILLA-CARGO KHAKI'",
        "AIR JORDAN 3 RETRO 'NIGHT STADIUM/TOTAL ORANGE-BLACK'",
        "AIR JORDAN 3 RETRO GS 'NIGHT STADIUM/TOTAL ORANGE-BLACK'",
        "AIR JORDAN 3 RETRO 'OFF NOIR/BLACK-SAIL-CEMENT GREY'",
        "AIR JORDAN 11 RETRO 'SAIL/VELVET BROWN-ATMOSPHERE'",
        "AIR JORDAN 5 RETRO SE 'MIDNIGHT NAVY/BLACK-FOOTBALL GREY'",
        "AIR JORDAN 1 ZOOM AIR COMFORT 2 'SAIL/ALPHA ORANGE-ROYAL PULSE'",
        "AIR JORDAN 13 RETRO 'WHITE/WHEAT'",
        "AIR JORDAN 2 RETRO LOW 'WHITE/UNIVERSITY RED-BLACK-COCONUT MILK'",
        "AIR JORDAN 1 MID 'SAIL/BLACK-DESERT'",
        "AIR JORDAN 6 RETRO 'BLACK/BRIGHT CONCORD-AQUATONE'",
        "AIR JORDAN 2 RETRO 'BLACK/CEMENT GREY-FIRE RED-SAIL'",
        "AIR JORDAN 11 RETRO LOW IE  'BLACK/WHITE'",
        "AIR JORDAN 2 RETRO 'SUMMIT WHITE/GYM RED-MEDIUM SOFT PINK'",
        "AIR JORDAN 13 RETRO 'WHITE/TRUE RED-WOLF GREY'",
        "AIR JORDAN 3 RETRO 'BLACK/FIRE RED-METALLIC GOLD-CEMENT GREY'",
        "AIR JORDAN 1 MID SE 'BLEACHED TURQ/SKY J TEAL-BARELY GREEN'",
        "AIR JORDAN 2 RETRO LOW 'WHITE/VARSITY ROYAL-BLACK-MUSLIN'",
        "AIR JORDAN 7 RETRO 'WHITE/CRIMSON-BLACK'",
        "AIR JORDAN 11 RETRO LOW 'TOUR YELLOW-WHITE'",
        "AIR JORDAN 5 RETRO LOW 'INDIGO HAZE/FIRE RED-METALLIC SILVER'",
        "AIR JORDAN 1 RETRO LOW OG 'BLACK/MUSLIN-TECH GREY-WHITE'",
        "AIR JORDAN 5 RETRO SE CRAFT 'LIGHT OREWOOD BROWN/SAFETY ORANGE-FLAT PEWTER'",
        "AIR JORDAN 3 RETRO GS 'WHITE/BLACK-IRON-LIGHT ASH GREY'",
        "WMNS AIR JORDAN 1 RETRO HI OG 'ATMOSPHERE/WHITE-MUSLIN-SAIL'",
        "AIR JORDAN 1 MID 'LUCKY GREEN/BLACK-WHITE'",
        "AIR JORDAN 3 RETRO 'WHITE/VARSITY RED-LUCKY GREEN'"
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
                            <Link to="/jordan" style={{ textDecoration: "none", color: "orangered" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "black" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Contact Us</Link>
                        </div>
                    </div>
                </div>
                <img src="https://images.vegnonveg.com/media/collections/102/172007371710266863df57389e.png" alt="" width={"100%"}  />
                <div className="fgfhhgjjh">
                    {
                        imageUrls.map((url, index) => (
                            <div className="jenfkjfrf">
                            <img src={imageUrls[index]} alt="" />
                            <div className="ejfjf">
                                {airJordanSneakers[index]}
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

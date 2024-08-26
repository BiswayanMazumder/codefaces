import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Footwear() {
    useEffect(() => {
      document.title = 'Buy Nike Air Force for Men, women, and kids | LuxeLayers';  
    })
    const imageUrls = [
"https://images.vegnonveg.com/resized/400X328/11425/air-jordan-1-low-whitemetallic-gold-black-white-66bb4992d8cb4.jpg",
    "https://images.vegnonveg.com/resized/400X328/11425/air-jordan-1-low-whitemetallic-gold-black-white-66bb499322a13.jpg",
    "https://images.vegnonveg.com/resized/400X328/8828/nike-dunk-low-retro-whitegrey-fog-63ce764079383.jpg",
    "https://images.vegnonveg.com/resized/400X328/8828/nike-dunk-low-retro-whitegrey-fog-63ce764031209.jpg",
    "https://images.vegnonveg.com/resized/400X328/5363/w-nike-dunk-low-whiteblack-white-60e41b4c68977.jpg",
    "https://images.vegnonveg.com/resized/400X328/11340/cortez-txt-gorge-greenyellow-ochre-sail-green-66966abceb356.jpg",
    "https://images.vegnonveg.com/resized/400X328/11241/air-jordan-1-low-se-hemplight-british-tan-sail-oatmeal-brown-667d3e4f7c748.jpg",
    "https://images.vegnonveg.com/resized/400X328/11422/air-jordan-4-retro-se-smoke-greyiron-grey-cement-grey-grey-66b48d859813d.jpg",
    "https://images.vegnonveg.com/resized/400X328/11422/air-jordan-4-retro-se-smoke-greyiron-grey-cement-grey-grey-66b48d8603d63.jpg",
    "https://images.vegnonveg.com/resized/400X328/11443/chuck-70-high-navyfossilized-blue-66c6d6d37fbdc.jpg",
    "https://images.vegnonveg.com/resized/400X328/11445/chuck-taylor-all-star-high-trek-tanwhite-egret-brown-66c6d75ade0ab.jpg",
    "https://images.vegnonveg.com/resized/400X328/11446/chuck-taylor-all-star-ox-cloudy-dazewhite-egret-blue-66c6df9329c86.jpg",
    "https://images.vegnonveg.com/resized/400X328/11455/chuck-70-at-cx-high-hot-teanomad-khaki-brown-66c6e82a67516.jpg",
    "https://images.vegnonveg.com/resized/400X328/11455/chuck-70-at-cx-high-hot-teanomad-khaki-brown-66c6e82a97a05.jpg",
    "https://images.vegnonveg.com/resized/400X328/11474/calm-slide-flat-pewter-grey-66c71665c9e1c.jpg",
    "https://images.vegnonveg.com/resized/400X328/11440/as-1-pro-ox-whiteblack-white-66c6d32b1cd01.jpg",
    "https://images.vegnonveg.com/resized/400X328/11441/as-1-pro-ox-greenalmost-black-black-green-66c6d423aa188.jpg",
    "https://images.vegnonveg.com/resized/400X328/11463/pro-blaze-classic-ox-whitefossilized-egret-white-66c6f4153c8ff.jpg",
    "https://images.vegnonveg.com/resized/400X328/11463/pro-blaze-classic-ox-whitefossilized-egret-white-66c6f415b1981.jpg",
    "https://images.vegnonveg.com/resized/400X328/11461/chuck-taylor-all-star-cruise-ox-blackegret-black-66c6f37ff4221.jpg",
    "https://images.vegnonveg.com/resized/400X328/6399/RUN%20STAR%20MOTION%20OX%20'BLACK/WHITE/EGRET'-63c7e9d8e171b.jpg",
    "https://images.vegnonveg.com/resized/400X328/11449/chuck-taylor-all-star-high-chaotic-neutralegret-brown-66c6e69d58cb5.jpg",
    "https://images.vegnonveg.com/resized/400X328/11457/chuck-taylor-all-star-lift-ox-egrettrue-sky-gold-white-66c6f139b5fba.jpg",
    "https://images.vegnonveg.com/resized/400X328/11457/chuck-taylor-all-star-lift-ox-egrettrue-sky-gold-white-66c6f13a1b0e7.jpg",
    "https://images.vegnonveg.com/resized/400X328/11456/chuck-taylor-all-star-lift-high-blackegret-gold-black-66c6e8a284424.jpg",
    "https://images.vegnonveg.com/resized/400X328/11458/run-star-hike-high-blackegret-gold-black-66c6f18d92399.jpg",
    "https://images.vegnonveg.com/resized/400X328/11448/chuck-taylor-all-star-ox-blacktrue-sky-egret-black-66c6e022333b6.jpg",
    "https://images.vegnonveg.com/resized/400X328/11462/chuck-70-ox-fossilizedegret-gold-blue-66c6f3cb95d44.jpg",
    "https://images.vegnonveg.com/resized/400X328/11462/chuck-70-ox-fossilizedegret-gold-blue-66c6f3cbe903d.jpg",
    "https://images.vegnonveg.com/resized/400X328/11459/chuck-70-high-origin-storyblack-cloudy-daze-grey-66c6f2952c890.jpg",
    "https://images.vegnonveg.com/resized/400X328/11436/chuck-70-mule-slip-egretblack-black-66c6d00abb1b9.jpg",
    "https://images.vegnonveg.com/resized/400X328/11459/chuck-70-high-origin-storyblack-cloudy-daze-grey-66c6f2952c890.jpg",
    "https://images.vegnonveg.com/resized/400X328/11451/chuck-70-high-pinkegret-black-pink-66c6e7957eca3.jpg",
    "https://images.vegnonveg.com/resized/400X328/11451/chuck-70-high-pinkegret-black-pink-66c6e795e7ac6.jpg",
    "https://images.vegnonveg.com/resized/400X328/11450/chuck-taylor-all-star-lift-high-egretenamel-red-black-black-66c6e74c708be.jpg",
    "https://images.vegnonveg.com/resized/400X328/11442/chuck-70-high-stardust-lilacegret-black-purple-66c6d68c7f7cf.jpg",
    "https://images.vegnonveg.com/resized/400X328/11436/chuck-70-mule-slip-egretblack-black-66c6d00abb1b9.jpg",
    "https://images.vegnonveg.com/resized/400X328/11439/run-star-utility-sandal-cx-ox-egret-cream-66c6d2efece41.jpg",
    "https://images.vegnonveg.com/resized/400X328/11439/run-star-utility-sandal-cx-ox-egret-cream-66c6d2f02636e.jpg",
    "https://images.vegnonveg.com/resized/400X328/11438/run-star-utility-sandal-cx-ox-black-black-66c6d2655407f.jpg",
    "https://images.vegnonveg.com/resized/400X328/11447/star-player-76-ox-obsidianvintage-white-blue-66c6dfdb65637.jpg",
    "https://images.vegnonveg.com/resized/400X328/11437/star-player-76-ox-blackvintage-white-black-66c6d19214ddb.jpg",
    "https://images.vegnonveg.com/resized/400X328/11454/chuck-70-high-vintage-whiteblue-black-white-66c6e7da9993d.jpg",
    "https://images.vegnonveg.com/resized/400X328/11454/chuck-70-high-vintage-whiteblue-black-white-66c6e7db1e87c.jpg",
    "https://images.vegnonveg.com/resized/400X328/11444/chuck-70-high-blackred-vintage-white-black-66c6d71140557.jpg",
    "https://images.vegnonveg.com/resized/400X328/11429/air-jordan-4-retro-blackwhite-black_1-66c71921807e0.jpg",
    "https://images.vegnonveg.com/resized/400X328/11428/air-jordan-4-retro-blackwhite-black-66c718d11e771.jpg",
    "https://images.vegnonveg.com/resized/400X328/11478/cortez-blackdark-smoke-grey-black-66c719e4c838e.jpg",
    "https://images.vegnonveg.com/resized/400X328/11478/cortez-blackdark-smoke-grey-black-66c719e5234e9.jpg",
    "https://images.vegnonveg.com/resized/400X328/11476/v2k-run-summit-whitechrome-white-light-orewood-brown-white-66c7187fc664e.jpg",
    "https://images.vegnonveg.com/resized/400X328/11477/killshot-2-phantomuniversity-gold-gum-medium-brown-multicolor-66c719921548d.jpg",
    "https://images.vegnonveg.com/resized/400X328/11475/air-force-1-07-whitedragon-red-white-white-66c717cce8961.jpg",
    "https://images.vegnonveg.com/resized/400X328/11473/air-max-90-drift-action-greenblack-summit-white-green-66c6f5a6b95b7.jpg",
    "https://images.vegnonveg.com/resized/400X328/11473/air-max-90-drift-action-greenblack-summit-white-green-66c6f5a716445.jpg",
    "https://images.vegnonveg.com/resized/400X328/11417/gel-quantum-360-viii-blackfiery-red-black-66b3610d4657e.jpg",
    "https://images.vegnonveg.com/resized/400X328/11418/gel-quantum-360-viii-illuminate-yellowblack-black-66b3621140516.jpg",
    "https://images.vegnonveg.com/resized/400X328/11424/cortez-pure-platinum-white-66bb4a997900f.jpg",
    "https://images.vegnonveg.com/resized/400X328/11426/air-jordan-1-mid-saillight-dew-muslin-white-66bb4a42e2b7a.jpg",
    "https://images.vegnonveg.com/resized/400X328/11426/air-jordan-1-mid-saillight-dew-muslin-white-66bb4a431e495.jpg",
    "https://images.vegnonveg.com/resized/400X328/11434/dunk-low-nn-baroque-brownblack-white-sail-brown-66bb4b2dc3a2a.jpg",
    "https://images.vegnonveg.com/resized/400X328/11415/crazy-1-magic-beigeshadow-brown-brown-66b472e580b2e.jpg",
    "https://images.vegnonveg.com/resized/400X328/11407/dunk-low-blackmidnight-navy-white-university-red-white-66bb4bbad6fab.jpg",
    "https://images.vegnonveg.com/resized/400X328/11216/air-jordan-11-retro-low-whitemidnight-navy-diffused-blue-white-6662eaf4ed74c.jpg",
    "https://images.vegnonveg.com/resized/400X328/11216/air-jordan-11-retro-low-whitemidnight-navy-diffused-blue-white-6662eaf5294de.jpg",
    "https://images.vegnonveg.com/resized/400X328/11409/field-general-82-sp-aluminumtotal-orange-light-gum-brown-blue-66b4978bda164.jpg",
    "https://images.vegnonveg.com/resized/400X328/11396/dunk-low-retro-whitedenim-turq-white-66b3660dc7ed0.jpg",
    "https://images.vegnonveg.com/resized/400X328/11406/dunk-low-coconut-milkflax-sail-brown-66b497326da01.jpg",
    "https://images.vegnonveg.com/resized/400X328/11421/air-max-1-whitelight-army-neutral-grey-black-white-66b47248b5e8d.jpg",
    "https://images.vegnonveg.com/resized/400X328/11421/air-max-1-whitelight-army-neutral-grey-black-white-66b4724907e18.jpg",
    "https://images.vegnonveg.com/resized/400X328/11419/blazer-low-77-vintage-summit-whitecacao-wow-photon-dust-white-66b471a8d8a64.jpg",
    "https://images.vegnonveg.com/resized/400X328/11416/gazelle-indoor-preloved-inkwonder-clay-sand-strata-blue-66b47456555a2.jpg",
    "https://images.vegnonveg.com/resized/400X328/11414/ae-1-core-blackarctic-fusion-cloud-white-black-66b4732ea2fe1.jpg",
    "https://images.vegnonveg.com/resized/400X328/11408/dunk-low-game-royalblack-white-multicolor-66b4784782d8e.jpg",
    "https://images.vegnonveg.com/resized/400X328/11408/dunk-low-game-royalblack-white-multicolor-66b47847c3aaa.jpg",
    "https://images.vegnonveg.com/resized/400X328/11403/dunk-low-nn-phantomobsidian-pale-ivory-white-66b47686279b2.jpg",
    "https://images.vegnonveg.com/resized/400X328/11397/dunk-low-retro-whitedragon-red-black-white-66b3667e7b69f.jpg",
    "https://images.vegnonveg.com/resized/400X328/11423/blazer-low-77-vintage-crimson-tintglacier-blue-pink-66b47296f03c2.jpg",
    "https://images.vegnonveg.com/resized/400X328/11420/air-max-90-whitekhaki-cyber-dark-smoke-grey-white-66b4720bd006d.jpg",
    "https://images.vegnonveg.com/resized/400X328/11405/air-max-plus-premium-black-teablack-petra-brown-olive-grey-black-66b478d3d7fd6.jpg",
    "https://images.vegnonveg.com/resized/400X328/11401/air-force-1-low-black-teablack-petra-brown-black-66b475a7d425c.jpg",
    
        
      ];
      
      const dunkLowModels = [
"AIR JORDAN 1 LOW 'WHITE/METALLIC GOLD-BLACK'",
    "DUNK LOW RETRO 'WHITE/GREY FOG'",
    "DUNK LOW 'WHITE/BLACK' Womens",
    "CORTEZ TXT 'GORGE GREEN/YELLOW OCHRE-SAIL'",
    "AIR JORDAN 1 LOW SE 'HEMP/LIGHT BRITISH TAN-SAIL-OATMEAL'",
    "AIR JORDAN 4 RETRO SE 'SMOKE GREY/IRON GREY-CEMENT GREY'",
    "CHUCK 70 HIGH 'NAVY/FOSSILIZED'",
    "CHUCK TAYLOR ALL STAR HIGH 'TREK TAN/WHITE-EGRET'",
    "CHUCK TAYLOR ALL STAR OX 'CLOUDY DAZE/WHITE-EGRET'",
    "CHUCK 70 AT-CX HIGH 'HOT TEA/NOMAD KHAKI'",
    "CALM SLIDE 'FLAT PEWTER'",
    "AS-1 PRO OX 'WHITE/BLACK'",
    "AS-1 PRO OX 'GREEN/ALMOST BLACK-BLACK'",
    "PRO BLAZE CLASSIC OX 'WHITE/FOSSILIZED-EGRET'",
    "CHUCK TAYLOR ALL STAR CRUISE OX 'BLACK/EGRET'",
    "RUN STAR MOTION OX 'BLACK/WHITE/EGRET'",
    "CHUCK TAYLOR ALL STAR HIGH 'CHAOTIC NEUTRAL/EGRET'",
    "CHUCK TAYLOR ALL STAR LIFT OX 'EGRET/TRUE SKY-GOLD'",
    "CHUCK TAYLOR ALL STAR LIFT HIGH 'BLACK/EGRET-GOLD'",
    "RUN STAR HIKE HIGH 'BLACK/EGRET-GOLD'",
    "CHUCK TAYLOR ALL STAR OX 'BLACK/TRUE SKY-EGRET'",
    "CHUCK 70 OX 'FOSSILIZED/EGRET-GOLD'",
    "CHUCK 70 HIGH 'ORIGIN STORY/BLACK-CLOUDY DAZE'",
    "CHUCK 70 MULE SLIP 'EGRET/BLACK'",
    "CHUCK 70 HIGH 'ORIGIN STORY/BLACK-CLOUDY DAZE'",
    "CHUCK 70 HIGH 'PINK/EGRET-BLACK'",
    "CHUCK TAYLOR ALL STAR LIFT HIGH 'EGRET/ENAMEL RED-BLACK'",
    "CHUCK 70 HIGH 'STARDUST LILAC/EGRET-BLACK'",
    "CHUCK 70 MULE SLIP 'EGRET/BLACK'",
    "RUN STAR UTILITY SANDAL CX OX 'EGRET'",
    "RUN STAR UTILITY SANDAL CX OX 'BLACK'",
    "STAR PLAYER 76 OX 'OBSIDIAN/VINTAGE WHITE'",
    "STAR PLAYER 76 OX 'BLACK/VINTAGE WHITE'",
    "CHUCK 70 HIGH 'VINTAGE WHITE/BLUE-BLACK'",
    "CHUCK 70 HIGH 'BLACK/RED-VINTAGE WHITE'",
    "AIR JORDAN 4 RETRO GS 'BLACK/WHITE'",
    "AIR JORDAN 4 RETRO 'BLACK/WHITE'",
    "CORTEZ 'BLACK/DARK SMOKE GREY'",
    "V2K RUN 'SUMMIT WHITE/CHROME-WHITE-LIGHT OREWOOD BROWN'",
    "KILLSHOT 2 'PHANTOM/UNIVERSITY GOLD-GUM MEDIUM BROWN'",
    "AIR FORCE 1 '07 'WHITE/DRAGON RED-WHITE'",
    "AIR MAX 90 DRIFT 'ACTION GREEN/BLACK-SUMMIT WHITE'",
    "GEL-QUANTUM 360 VIII 'BLACK/FIERY RED'",
    "GEL-QUANTUM 360 VIII 'ILLUMINATE YELLOW/BLACK'",
    "CORTEZ 'PURE PLATINUM'",
    "AIR JORDAN 1 MID 'SAIL/LIGHT DEW-MUSLIN'",
    "DUNK LOW NN 'BAROQUE BROWN/BLACK-WHITE-SAIL'",
    "CRAZY 1 'MAGIC BEIGE/SHADOW BROWN'",
    "DUNK LOW 'BLACK/MIDNIGHT NAVY-WHITE-UNIVERSITY RED'",
    "AIR JORDAN 11 RETRO LOW 'WHITE/MIDNIGHT NAVY-DIFFUSED BLUE'",
    "FIELD GENERAL 82 SP 'ALUMINUM/TOTAL ORANGE-LIGHT GUM BROWN'",
    "DUNK LOW RETRO 'WHITE/DENIM TURQ'",
    "DUNK LOW 'COCONUT MILK/FLAX-SAIL'",
    "AIR MAX 1 'WHITE/LIGHT ARMY-NEUTRAL GREY-BLACK'",
    "BLAZER LOW '77 VINTAGE 'SUMMIT WHITE/CACAO WOW-PHOTON DUST'",
    "GAZELLE INDOOR 'PRELOVED INK/WONDER CLAY-SAND STRATA'",
    "AE 1 'CORE BLACK/ARCTIC FUSION-CLOUD WHITE'",
    "DUNK LOW 'GAME ROYAL/BLACK-WHITE'",
    "DUNK LOW NN 'PHANTOM/OBSIDIAN-PALE IVORY'",
    "DUNK LOW RETRO 'WHITE/DRAGON RED-BLACK'",
    "BLAZER LOW '77 VINTAGE 'CRIMSON TINT/GLACIER BLUE'",
    "AIR MAX 90 'WHITE/KHAKI-CYBER-DARK SMOKE GREY'",
    "AIR MAX PLUS PREMIUM 'BLACK TEA/BLACK-PETRA BROWN-OLIVE GREY'",
    "AIR FORCE 1 LOW 'BLACK TEA/BLACK-PETRA BROWN'",
    "AIR JORDAN 5 RETRO 'WHITE/BLACK-SAIL-METALLIC SILVER'",
    "AIR JORDAN 1 LOW 'WHITE/BORDEAUX-SAIL'",
    "BLAZER LOW '77 VINTAGE 'MONARCH/SAIL-COCONUT MILK-DARK RUSSET'",
    "OZMILLEN 'ALUMINA/WONDER BEIGE-SILVER METALLIC'",
    "FORUM XLG 'CLOUD WHITE/CORE BLACK'",
    "ZOOM VOMERO 5 'BAROQUE BROWN/CHROME-LIGHT OREWOOD BROWN-HEMP'",
    "AIR JORDAN 1 LOW 'OFF NOIR/ARCHAEO BROWN-SAIL'",
    "AIR MAX 1 ESSENTIAL PREMIUM 'NEUTRAL OLIVE/BLACK-CARGO KHAKI'"
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
                        <Link to="/footwear" style={{ textDecoration: "none", color: "orangered" }} className='headerlink'>Footwear</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>SS24</Link>
                            <Link to="/AF1" style={{ textDecoration: "none", color: "black" }}>Air Force 1</Link>
                            <Link to="/jordan" style={{ textDecoration: "none", color: "black" }}>Jordan</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                            <Link to="/dunks" style={{ textDecoration: "none", color: "black" }}>Dunks</Link>
                            <Link to="/airmax" style={{ textDecoration: "none", color: "black" }}>Air Max</Link>
                            <Link to="/slides" style={{ textDecoration: "none", color: "black" }}>Slides</Link>
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Contact Us</Link>
                        </div>
                    </div>
                </div>
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

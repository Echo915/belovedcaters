import { useEffect } from "react";
import Aos from "aos";

import hero1 from '../../images/hero-images/hero-img-1.png';
import hero2 from '../../images/hero-images/hero-img-2.png';

const HeroSection = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []); 

    return (
        <div>
            {/* Component content */}
            <div className="p-4">
                <p className="text-center text-primary text-bold h1 m-auto mb-3" style={{maxWidth: 400}}>Craving Something Tasty? We've Got You Covered!</p>
                <p className="text-center text-primary m-auto px-3" style={{maxWidth: 400}}>Discover a world of flavors delivered right to your door. Choose from a variety of local and international cuisines. Fast, fresh, and always delicious—satisfaction guaranteed. Order now and enjoy a hassle-free dining experience.</p>
                <div className='hero-imgs position-relative p-5' style={{minHeight: '40vw'}}>
                    <img data-aos="fade-right" data-aos-duration="600" data-aos-easing="ease-in-sine" className='img-fluid w-40 position-absolute' src={hero2} style={{top: "8rem", left: '15vw'}} />
                    <img data-aos="fade-left" data-aos-duration="600" data-aos-easing="ease-in-sine" className='img-fluid w-40 position-absolute' src={hero1} style={{top: "4rem", right: "15vw"}} />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
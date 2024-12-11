import Aos from "aos";
import Special from "./special";
import { useEffect } from "react";


const SpecialProducts = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []); 

    return (
        <div className="w-80 m-auto">
            {/* Component content */}
            <p className="text-center fw-bold text-dark p-3 h4" data-aos="fade-down" data-aos-duration="600" data-aos-easing="ease-in-sine">Popular on Our Menu</p>
            <div className="row mt-5 pt-4" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-sine">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5 py-5" >
                    <Special />
                </div>
                <div className={"col-lg-4 col-md-6 col-sm-12  mb-5 py-5"}>
                    <Special />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12  mb-5 py-5" >
                    <Special />
                </div>
            </div>            
        </div>
    );
};

export default SpecialProducts;
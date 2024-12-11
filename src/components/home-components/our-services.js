import { Link } from 'react-router-dom';
import serviceImg1 from '../../images/services/service-img1.png'
import Card from '../general/card';
import { useEffect } from "react";
import Aos from "aos";


const ServicesSection = ({services}) => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []); 

    // const services = [1, 2, 3]

    return (
        <div>
            {/* Component content */}
            <div data-aos="fade-down" data-aos-duration="600" data-aos-easing="ease-in-sine" className="section-header">
                <p className="fw-bold fs-1 text-center text-uppercase text-primary">Our Services</p>
                <p className='text-center text-primary w-50 m-auto'>Taciti penatibus hendrerit mi potenti himenaeos. Sagittis malesuada habitasse curabitur condimentum taciti viverra. Pretium vitae erat est blandit vel</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-sine" className="section-body mt-4">
                <div className='row w-80 m-auto' >
                    {
                        services.map((service)=>(
                            <div className='col-md-6 col-lg-4 p-3'>
                                <Card headerImg={serviceImg1}  />
                            </div>
                        ))
                    }
                    {/* <div className='col-md-6 col-lg-4 p-3'>
                        <Card headerImg={serviceImg1}  />
                    </div>
                    <div className='col-md-6 col-lg-4 p-3'>
                        <Card headerImg={serviceImg1}  />
                    </div>
                    <div className='col-md-6 col-lg-4 p-3'>
                        <Card headerImg={serviceImg1}  />
                    </div> */}
                </div>
            </div>
            <center><Link className='text-center fw-bold text-info p-5' to={"/services"}>View More</Link></center>
        </div>
    );
};

export default ServicesSection;
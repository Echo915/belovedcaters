import serviceImg1 from '../images/services/service-img1.png';
import ServicesSection from "../components/home-components/our-services";

const Services = () => {
    return (
        <div>
            <div className="section-header">
                <p className="fw-bold fs-1 text-center text-uppercase text-primary">Our Services</p>
                <p className='text-center text-primary w-50 m-auto'>Taciti penatibus hendrerit mi potenti himenaeos. Sagittis malesuada habitasse curabitur condimentum taciti viverra. Pretium vitae erat est blandit vel</p>
            </div>
            {/* Component content */}
            <div className="row mt-5 p-3 d-flex align-items-center">
                <div className='col-lg-4 col-md-4 col-sm-12 py-4'>
                    <div className='d-flex justify-content-start align-items-center'>
                        <span className='text-primary fw-bold me-3' style={{fontSize: 50}}>1</span>
                        <i className='text-primary'>Taciti penatibus hendrerit mi potenti himenaeos.</i>
                    </div>
                    <div className='d-flex justify-content-start align-items-center'>
                        <span className='text-primary fw-bold me-3' style={{fontSize: 50}}>2</span>
                        <i className='text-primary'>Taciti penatibus hendrerit mi potenti himenaeos.</i>
                    </div>
                    <div className='d-flex justify-content-start align-items-center'>
                        <span className='text-primary fw-bold me-3' style={{fontSize: 50}}>3</span>
                        <i className='text-primary'>Taciti penatibus hendrerit mi potenti himenaeos.</i>
                    </div>
                    <div className='d-flex justify-content-start align-items-center'>
                        <span className='text-primary fw-bold me-3' style={{fontSize: 50}}>4</span>
                        <i className='text-primary'>Taciti penatibus hendrerit mi potenti himenaeos.</i>
                    </div>
                </div>                                            
                <div className='col-lg-4 col-md-4 col-sm-12 px-4'>
                    <img className='rounded-circle w-100' src={serviceImg1} alt='img'/>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 py-4'>
                    <div className='d-flex justify-content-end align-items-center'>
                        <i className='text-primary text-end'>Taciti penatibus hendrerit mi potenti himenaeos.</i>
                        <span className='text-primary fw-bold ms-3' style={{fontSize: 50}}>5</span>
                    </div>
                    <div className='d-flex justify-content-end align-items-center'>
                        <i className='text-primary text-end'>Taciti penatibus hendrerit mi potenti himenaeos.</i>
                        <span className='text-primary fw-bold ms-3' style={{fontSize: 50}}>6</span>
                    </div>
                    <div className='d-flex justify-content-end align-items-center'>
                        <i className='text-primary text-end'>Taciti penatibus hendrerit mi potenti himenaeos.</i>
                        <span className='text-primary fw-bold ms-3' style={{fontSize: 50}}>6</span>
                    </div>
                    <div className='d-flex justify-content-end align-items-center'>
                        <i className='text-primary text-end'>Taciti penatibus hendrerit mi potenti himenaeos.</i>
                        <span className='text-primary fw-bold ms-3' style={{fontSize: 50}}>8</span>
                    </div>
                </div>
            </div>

            {/* Detailed Services */}
            <div className='row mt-5 py-5'>
                <ServicesSection services={[1,2,3,4,5,6]} />
            </div>
            {/* End Detailed Services */}
        </div>
    );
};

export default Services;
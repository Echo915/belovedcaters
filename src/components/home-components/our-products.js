import Card from "../general/card";
import productImg1 from "../../images/products/product-img1.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";


const ProductsSection = ({products}) => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []); 

    return (
        <div>
            {/* Component content */}
            <div data-aos="fade-down" data-aos-duration="600" data-aos-easing="ease-in-sine" className="section-header">
                <p className="fw-bold fs-1 text-center text-uppercase text-primary">Our Products</p>
                <p className='text-center text-primary w-50 m-auto'>Taciti penatibus hendrerit mi potenti himenaeos. Sagittis malesuada habitasse curabitur condimentum taciti viverra. Pretium vitae erat est blandit vel</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-sine" className="section-body mt-4">
                <div className='row w-80 m-auto' >
                    {products.map((product)=>(
                        <div className='col-md-6 col-lg-4 p-3'>
                            <Card headerImg={productImg1} outlined={true} />
                        </div>
                    ))}
                </div>
            </div>
            <center><Link className='text-center fw-bold text-info p-5' to={"/belovedcaters/products"}>View More</Link></center>
        </div>
    );
};

export default ProductsSection;
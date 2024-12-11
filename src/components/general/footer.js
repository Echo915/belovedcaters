import { Link } from "react-router-dom";
import Logo from "./logo";
import footerImg1 from "../../images/footer/footer-img1.png";

const Footer = () => {
    return (
        <div>
            {/* Footer content */}
            <footer className='text-muted sticky-bottom' style={{marginTop: "10rem"}}>
            <hr />
                <div className="container row w-80 m-auto">
                    <div className="col-lg-4 col-md-6 pe-3  py-4">
                            <Logo />
                        <div>
                            <p className="text-primary">Amet ornare consectetur cubilia senectus accumsan montes fringilla. Turpis facilisi aliquam taciti a iaculis nisl volutpat bibendum blandit vehicula nam. </p>
                        </div>
                        <div>
                            <input type="email" placeholder="Enter your email" className="form-control bg-primary-light rounded-pill mb-2" />
                            <button className="btn rounded-pill bg-primary text-white">Subscribe</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 py-4 row position-relative mb-5">
                        <div className="col-12">
                            <p className="fw-bold text-primary text-center">Menu</p>
                        </div>
                        <div className="col-12 row position-absolute m-auto pt-5">
                            <div className="col-6">
                                <Link className="p-1 text-primary nav-link" to={"/belovedcaters/"} >Home</Link>
                                <Link className="p-1 text-primary nav-link" to={"/belovedcaters/contact"} >Contact</Link>
                            </div>
                            <div className="col-6">
                                <Link className="p-1 text-primary nav-link" to={"/belovedcaters/products"} >Products</Link>
                                <Link className="p-1 text-primary nav-link" to={"/belovedcaters/services"} >Services</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 py-4 col-md-6 row">
                        <div className="col-12">
                            <p className="fw-bold text-primary text-center">Follow on instagram</p>
                        </div>
                        <div className="col-6 py-2">
                            <img src={footerImg1} alt="footer-img" />
                        </div>
                        <div className="col-6 py-2">
                            <img src={footerImg1} alt="footer-img" />
                        </div>
                        <div className="col-6 py-2">
                            <img src={footerImg1} alt="footer-img" />
                        </div>
                        <div className="col-6 py-2">
                            <img src={footerImg1} alt="footer-img" />
                        </div>
                    </div>
                </div>
                <div className="container py-4 row w-80 m-auto border-top mt-3">
                    <div className='text-primary col-lg-10 col-md-7'>
                        © Copyright - 2024 <span className='text-reset fw-bold' >Beloved Caters</span><span> | All Rights Reserved</span>
                    </div>
                    <div className="social-icons col-lg-2 col-md-3">
                        <i className="fi fi-brands-facebook text-info px-2 fs-4"></i>
                        <i className="fi fi-brands-youtube text-danger px-2 fs-4"></i>
                        <i className="fi fi-brands-linkedin text-info px-2 fs-4"></i>
                        <i className="fi fi-brands-instagram text-warning px-2 fs-4"></i>
                        {/* <i className="fi fi-brands-tiktok text-dark px-2 fs-4"></i> */}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
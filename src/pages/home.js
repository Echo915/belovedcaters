import HeroSection from "../components/home-components/hero";
import ProductsSection from "../components/home-components/our-products";
import ServicesSection from "../components/home-components/our-services";
import SpecialProducts from "../components/product-components/special-products";

const HomePage = () => {
    return (
        <div>
            <div className="hero-section mb-5 pb-5">
                <HeroSection />
            </div>
            <div className="specials">
                <SpecialProducts />
            </div>
            <div className="services">
                <ServicesSection services={[1, 2, 3]} />
            </div>
            <div className="products mt-5 pt-5">
                <ProductsSection products={[1, 2, 3]}/>
            </div>
        </div>
    );
}

export default HomePage;
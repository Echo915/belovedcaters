import Product from "../components/product-components/product";
import SpecialProducts from "../components/product-components/special-products";

const Products = () => {
    return (
        <>
        <div className="mt-5 w-80 m-auto">
            {/* Section 1 */}
            <p className="text-center fw-bold text-dark p-3 h4">Section 1</p>
            <div className="row mb-4">
                <div className="col-md-6 col-sm-12 p-4">
                    <Product />
                </div>
                <div className="col-md-6 col-sm-12 p-4">
                    <Product />
                </div>
                <div className="col-md-6 col-sm-12 p-4">
                    <Product />
                </div>
                <div className="col-md-6 col-sm-12 p-4">
                    <Product />
                </div>
                <div className="col-md-6 col-sm-12 p-4">
                    <Product />
                </div>
                <div className="col-md-6 col-sm-12 p-4">
                    <Product />
                </div>
            </div>

            {/* Section 2 */}
            <p className="text-center fw-bold text-dark p-3 h4">Section 2</p>
            <div className="row mb-4">
                <div className="col-md-6 col-sm-12 p-4">
                    <Product />
                </div>
                <div className="col-md-6 col-sm-12 p-4">
                    <Product />
                </div>
                <div className="col-md-6 col-sm-12 p-4">
                    <Product />
                </div>
                <div className="col-md-6 col-sm-12 p-4">
                    <Product />
                </div>
                <div className="col-md-6 col-sm-12 p-4">
                    <Product />
                </div>
                <div className="col-md-6 col-sm-12 p-4">
                    <Product />
                </div>
            </div>
        </div>
        <div className="">
            {/* Specials */}
            <SpecialProducts />
        </div>
        </>
    );
};

export default Products;
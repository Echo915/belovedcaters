import product1 from "../../images/products/product-img1.png";

const Product = () => {
    return (
        <div className="row w-100">
            {/* Component content */}
            <div className="col-2">
                <img className="img-fluid rounded-3" src={product1} />
            </div>
            <div className="col-10 border-top position-relative">
                <div className="product-head w-100 d-flex align-items-center justify-content-between position-absolute" style={{top: 0, transform: "translateY(-50%)"}}>
                    <h4 className="bg-white text-primary px-3 fw-bold">Product 1</h4>
                    <h2 className="bg-white ps-3 text-secondary fs-5">Ghc 40</h2>
                </div>
                <div className="product-details d-flex align-items-center" style={{minHeight: 100}}>
                    <p className="py-3 text-primary">Natoque venenatis enim auctor pulvinar tincidunt iaculis. Sem tristique nullam purus ridiculus nibh tincidunt.</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
import special1 from "../../images/products/special1.webp";

const Special = () => {
    return (
        <div>
            {/* Component content */}
            <div className="outline rounded-4 bg-primary-light px-3 py-4 position-relative d-flex align-items-center" style={{minHeight: 250}}>
                <img src={special1} alt="img" className="rounded-circle position-absolute rotate-infinite" style={{left: "50%", top: 0}} />
                <div style={{marginTop: 80}}>
                    <h4 className="h-2 fw-bold text-primary text-center p-0 m-0">Special 1</h4>
                    <div className="d-flex align-items-center" style={{minHeight: 100}}>
                        <p className="text-primary text-center">Natoque venenatis enim auctor pulvinar tincidunt iaculis. Sem tristique nullam purus ridiculus nibh tincidunt.</p>
                    </div><hr />
                    {/* <p className="text-success fw-bold float-start">Add to cart</p> */}
                    <button className="btn btn-sm btn-outline-success rounded-pill float-start">Add to cart</button>
                    <h5 className="float-end"><span className="me-3 text-decoration-line-through" style={{color: "grey"}}>Ghc 56</span><span className="text-secondary me-3">Ghc 40</span></h5>
                </div>
            </div>
        </div>
    );
};

export default Special;
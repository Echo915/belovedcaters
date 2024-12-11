import { Link } from "react-router-dom";

const MainNavigation = () => {
    return (
        <>
        {/* Main Navigation */}
            <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapses navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav px-3">
                    <Link to={"/"} className="nav-link active text-primary text-uppercase fw-semibold" aria-current="page" href="#">Home</Link>
                    <Link to={"products"} className="nav-link text-primary text-uppercase fw-semibold" href="#">Products</Link>
                    <Link to={"services"} className="nav-link text-primary text-uppercase fw-semibold" href="#">Services</Link>
                    <Link to={"contact"} className="nav-link text-primary text-uppercase fw-semibold">Contact</Link>
                </div>
                <div className="nav-item py-3">
                    <form className="d-flex nav-item" role="search">
                        <input className="form-control me-2 rounded-pill bg-primary-light" type="search" placeholder="Search for..." style={{padding: "0.1rem 1rem", maxWidth: 420}} aria-label="Search" />
                    </form>
                </div>
            </div>
        {/* Main Navigation / End */}
        </>
    );
}

export default MainNavigation;
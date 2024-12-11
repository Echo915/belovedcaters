import { Link } from "react-router-dom";
import logo from '../../images/logo/logo.png';

const Logo = () => {
    return (
        <>
            {/* Logo */}
            {/* <div id="logo"> */}
                <Link className="navbar-brand d-flex align-items-center" to={"/belovedcaters/"}><img className="responsive" src={logo} alt="logo" style={{width: 30}} /> <span className="h1 text-primary"> BelovedCaters</span></Link>
            {/* </div> */}
        </>
    );
}

export default Logo;
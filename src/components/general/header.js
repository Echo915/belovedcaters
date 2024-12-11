import Logo from "./logo";
import MainNavigation from "./main-nav";

const Header = () => {
    return (
        <div>
            {/* START SECTION HEADINGS */}
        {/* Header Container ================================================== */}
        <header id="header-container">
            {/* Header */}
            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="container-fluid">
                    <Logo />
                    {/* <Main Navigation /> */}
                    <MainNavigation />
                </div>
            </nav>
            {/* Header / End */}
        </header>
        <div className="clearfix"></div>
        {/* Header Container / End */}

        </div>
    );
}

export default Header;
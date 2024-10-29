import React from "react";

function Header() {


    return (
        <div className="row headerBackground">
            <Navbar />
        </div>
    )
}

function Navbar() {
    return (
    <div class="container container-fluid navbar-container">
        <div className="row">
            <div className="navbar">
                <div className="site-link col-6">
                    <a className="text-decoration-none text-white" href="https://www.google.com/">
                        www.DEMOLINK.ORG |
                    </a>
                </div>
                <div className="header-navbar col-6">
                    <ul className="d-inline-flex justify-content-end  list-group-horizontal">
                        <a className="text-decoration-none" href="https://www.google.com/">
                            <li className="list-group-item text-white">SUPPORT |</li>
                        </a>
                        <a className="text-decoration-none" href="https://www.google.com/">
                            <li className="list-group-item ps-2 text-white">FAQS |</li>
                        </a>
                        <a className="text-decoration-none" href="https://www.google.com/">
                            <li className="list-group-item ps-2 text-white">SITEMAP |</li>
                        </a>
                        <a className="text-decoration-none" href="https://www.google.com/">
                            <li className="list-group-item ps-2 text-white">HELP |</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;
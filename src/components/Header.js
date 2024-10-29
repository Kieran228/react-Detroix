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
        <nav className="navbar navbar-expand-sm">
            <a className="text-decoration-none text-white col-6" href="#">www.DEMOLINK.ORG |</a>
            <ul className="list-group list-group-horizontal header-nav col-6 d-flex justify-content-end">
                <li><a className="text-decoration-none text-white" href="">SUPPORT</a></li>
                <li><a className="text-decoration-none text-white" href="">| FAQS</a></li>
                <li><a className="text-decoration-none text-white" href="">| SITEMAP</a></li>
                <li><a className="text-decoration-none text-white" href="">| HELP</a></li>
            </ul>
        </nav>


    )
}

export default Header;
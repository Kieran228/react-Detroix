import React from "react";

function Header() {


    return(
        <div className="row headerBackground">
            <Weblink />
            <Navbar />
        </div>
    )
}

function Weblink() {
    return(
    <div className="col-6">
        <a className="text-decoration-none text-white" href="#">www.DEMOLINK.ORG |</a>
    </div>
    )
}

function Navbar() {
    return(
        <div className="col-6 d-inline-flex justify-content-end">
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item nav navborder">SUPPORT</li>
                <li className="list-group-item nav navborder">| FAQS</li>
                <li className="list-group-item nav navborder">| SITEMAP</li>
                <li className="list-group-item nav navborder">| HELP</li>
            </ul>
        </div>
    )
}

export default Header;
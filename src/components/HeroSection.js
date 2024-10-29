import React from "react";
import detroixlogo from '../images/media/dertoixbootstraplogo.png'


function HeroSection() {

    return(
        <div className="row pt-5">
            <Logo />
            <LogoNav />
        </div>
    )
}

function Logo() {
    return(
        <div className="col-6">
            <img className="img-fluid" src={detroixlogo} alt="" />
        </div>
    )
}

function LogoNav() {
    return(
    <div className="col-6 d-inline-flex justify-content-end">
        <ul className="list-group list-group-horizontal">
            <li className="list-group-item"><button>HOME</button></li>
            <li className="list-group-item"><button>ABOUT</button></li>
            <li className="list-group-item"><button>SERVICES</button></li>
            <li className="list-group-item"><button>FAQS</button></li>
            <li className="list-group-item"><button>CONTACTS</button></li>
        </ul>
    </div>
    )
}

export default HeroSection;
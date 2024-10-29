import React from "react";
import detroixlogo from '../images/media/dertoixbootstraplogo.png'
import heroimg from "../images/media/heroimg.png"


function HeroSection() {

    return (
        <div className="row pt-4">
            <Logo />
            <LogoNav />
            <HeroIMG />
            <HeroNavButtons />
        </div>
    )
}

function Logo() {
    return (
        <div className="col-6">
            <img id="logo" className="img-fluid" src={detroixlogo} alt="" />
        </div>
    )
}

function LogoNav() {
    return (
        <div className="col-6 d-inline-flex justify-content-end align-items-center">
            <ul className="list-group list-group-horizontal hero-nav">
                <li id="nav-button" className="list-group-item px-1"><button>HOME</button></li>
                <li id="nav-button" className="list-group-item px-1"><button>ABOUT</button></li>
                <li id="nav-button" className="list-group-item px-1"><button>SERVICES</button></li>
                <li id="nav-button" className="list-group-item px-1"><button>FAQS</button></li>
                <li id="nav-button" className="list-group-item px-1"><button>CONTACTS</button></li>
            </ul>
        </div>
    )
}

function HeroIMG() {
    return (
        <div className="hero-img text-center pt-4">
            <img id="hero-img" className="img-fluid" src={heroimg} alt="" />
        </div>
    )
}

function HeroNavButtons() {
    return (
        <div className="heroimgscrollbuttons text-center pt-2">
            <button className="button mx-1" id="scroll-buttons"></button>
            <button className="button mx-1" id="scroll-buttons"></button>
            <button className="button mx-1" id="scroll-buttons"></button>
        </div>
    )
}

export default HeroSection;
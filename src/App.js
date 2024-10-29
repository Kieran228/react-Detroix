import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Body from "./components/Body";
import BodyBottom from "./components/BodyBottom"
import Footer from "./components/Footer";
import './style.css'


function App() {

    return(
        <div className="container">
            
            <Header />
            <HeroSection />
            <Body />
            <BodyBottom />
            <Footer />
        </div>
    )
}

export default App;
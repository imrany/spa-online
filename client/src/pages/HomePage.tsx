// @flow strict
import { useEffect } from "react";
import Hero from "../components/UI/Hero";
import Nav from "../components/UI/Nav";
import About from "../components/UI/About";
import Products from "../components/UI/Products";
import JoinUs from "../components/UI/JoinUs";
import Footer from "../components/UI/Footer";

function HomePage() {
    useEffect(()=>{
        window.scroll(0,0)
    },[])

    return (
        <div className="flex flex-col">
            <div className="lg:px-12">
                <Nav/>
                <Hero/>
            </div>
            <div className="sm:mt-10 mb-10">
                <About/>
                <Products/>
                <JoinUs/>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;
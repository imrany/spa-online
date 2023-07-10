// @flow strict
import { useEffect } from "react";
import Hero from "../components/UI/Hero";
import Nav from "../components/UI/Nav";
import About from "../components/UI/About";
import Products from "../components/UI/Products";

function HomePage() {
    useEffect(()=>{
        window.scroll(0,0)
    },[])

    return (
        <div className="flex flex-col">
            <div className="lg:px-12">
                <Nav/>
                <div className="mt-10">
                   <Hero/>
                </div>
            </div>
            <div className="mt-10 mb-10">
                <About/>
                <Products/>
            </div>
        </div>
    );
};

export default HomePage;
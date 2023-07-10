// @flow strict

import Nav from "../components/UI/Nav";
import HeroSection from "../components/UI/HeroSection";
import Items from "../components/UI/Items";
import { products } from "../components/test_data";
import { useEffect, useState } from "react";


function LandingPage() {
    const [items,setItems]=useState({
        title:"You may also like",
        data:products
    })

    useEffect(()=>{
        window.scroll(0,0)
    },[])

    return (
        <div className="flex flex-col">
            <Nav/>
            <div className="mt-10 md:px-16 mb-10">
                <HeroSection/>
                <Items details={items}/>
            </div>
        </div>
    );
};

export default LandingPage;
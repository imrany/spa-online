// @flow strict

import { useEffect, useState } from "react";
import Hero from "../components/UI/Hero";
import Items from "../components/UI/Items";
import Nav from "../components/UI/Nav";
import image from "../assets/images/Add-ons.jpg"
import image2 from "../assets/images/download.jpeg"

function HomePage() {
    const [items,setItems]=useState({
        title:"Our Popular Categories",
        data:[
            {
                name:"Furniture",
                image:image,
                url:'/item'
            },
            {
                name:"Hand Bag",
                image:image2,
                url:'/item'
            },
            {
                name:"Books",
                image:image,
                url:'/item'
            },
            {
                name:"Technology",
                image:image2,
                url:'/item'
            },
            {
                name:"Sneaker",
                image:image,
                url:'/item'
            },
            {
                name:"Travel",
                image:image2,
                url:'/item'
            },
            {
                name:"Utensils",
                image:image,
                url:'/item'
            },
            {
                name:"Schools",
                image:image2,
                url:'/item'
            }
        ]
    })

    useEffect(()=>{
        window.scroll(0,0)
    },[])

    return (
        <div className="flex flex-col px-12">
            <Nav/>
            <div className="mt-10 mb-10">
                <Hero/>
                <Items details={items}/>
            </div>
        </div>
    );
};

export default HomePage;
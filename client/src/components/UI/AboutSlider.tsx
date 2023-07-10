import Slider from "react-slick";

const AboutSlider=()=>{
    const settings = {
        // fade: true,
        speed: 2000,
        // autoplaySpeed: 3000,
        infinite: true,
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
    };
    return(
        <Slider {...settings} className="hero_slider mt-10 w-[70vw]">
            <div className="h-[75vh] z-50" id="about-slider-image-1">
            </div>
            <div className="h-[75vh] z-50" id="about-slider-image-2">
            </div>
        </Slider>
    )
}

export default AboutSlider;
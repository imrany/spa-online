// @flow strict
import Slider from "react-slick";
import LoginSignupLayout from "./Layout/LoginSignupLayout";

function Auth() {
    const settings = {
        // fade: true,
        speed: 4000,//2000
        autoplaySpeed: 5000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };
   
    return (
        <div className="flex h-[100vh]">
            <LoginSignupLayout/>

            <div className="sec">
                <Slider {...settings} className="hero__slider">
                    <div className="h-[100vh] text-3xl font-semibold px-20 py-40 text-white" id="login-item2">
                        <div className="">
                            <div className="flex text-lg text-yellow-500 text-left mb-2">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill ml-2"></i>
                                <i className="ri-star-fill ml-2"></i>
                                <i className="ri-star-fill ml-2"></i>
                                <i className="ri-star-fill ml-2"></i>
                            </div>
                            <p className="w-[40vw]">Welcome to Spa online, we use natural products made on palm oil, coconut oil and aloe vera for great results.</p>
                        </div>
                    </div>

                    <div className="h-[100vh] px-20 py-40 text-3xl font-semibold flex flex-col justify-center items-center text-white" id="login-item3">
                        <div className="">
                            <div className="flex text-lg text-yellow-500 text-left mb-2">
                                <i className="ri-heart-fill"></i>
                                <i className="ri-heart-fill ml-2"></i>
                                <i className="ri-heart-fill ml-2"></i>
                                <i className="ri-heart-fill ml-2"></i>
                                <i className="ri-heart-fill ml-2"></i>
                            </div>
                            <p className="w-[40vw]">Enjoy our quality services, book a thepary or massage section here. You can also have a more personalized experience by signing up here.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Auth;
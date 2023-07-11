// @flow strict

import { Link } from "react-router-dom";

function Footer() {
    const date=new Date();
    const year=date.getFullYear();
    return (
        <footer className="flex flex-col  pt-20 px-12">
            <div className="flex  max-md:flex-col justify-between">
                <div className="md:w-[25vw]">
                    <p className="text-2xl text-[#333333] font-semibold mb-4">Spa online</p>
                    <p className="text-[#808080] mb-10  max-md:mb-2">
                        We use the power of natural products to produce maximum results
                    </p>
                    <a href="mailto:imranmat254@gmail.com" className="text-[#F45858]" target="_blank">
                        imranmat254@gmail.com
                        <i className="ml-2 ri-arrow-right-line"></i>
                    </a>
                </div>
                
                <div className="max-md:mt-10">
                    <p className="text-2xl text-[#333333] font-semibold md:mb-4 max-md:mt-4 max-md:mb-2">About</p>
                    <div className="text-[#808080] flex flex-col">
                    <a href="#about">About us</a>
                    <Link to="/features">Features</Link>
                    <Link to="/news">News</Link>
                    </div>
                </div>

                <div className="">
                    <p className="text-2xl text-[#333333] font-semibold md:mb-4 max-md:mt-4 max-md:mb-2">Product</p>
                    <div className="text-[#808080] flex flex-col">
                    <a href="#about">New arrival</a>
                    <Link to="/features">Discount</Link>
                    <Link to="/news">Customize</Link>
                    </div>
                </div>

                <div className="">
                    <p className="text-2xl text-[#333333] font-semibold md:mb-4 max-md:mt-4 max-md:mb-2">Company</p>
                    <div className="text-[#808080] flex flex-col">
                    <a href="#about">Our team</a>
                    <Link to="/news">Partner with us</Link>
                    <Link to="/features">Blog</Link>
                    </div>
                </div>

                <div className="">
                    <p className="text-2xl text-[#333333] font-semibold md:mb-4 max-md:mt-4 max-md:mb-2">Social media</p>
                    <div className="flex text-[#808080]">
                        <Link to="/" className='hover:bg-[#333333] hover:text-[#FFFCF8] hover:rounded-[50px] px-2 py-1'>
                            <i className='ri-instagram-line'></i>
                        </Link>
                        <Link to="/" className='hover:bg-[#333333] hover:text-[#FFFCF8] hover:rounded-[50px] px-2 py-1'>
                            <i className='ri-twitter-fill'></i>
                        </Link>
                        <Link to="/" className='hover:bg-[#333333] hover:text-[#FFFCF8] hover:rounded-[50px] px-2 py-1'>
                            <i className='ri-linkedin-fill'></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t-[1px] border-[#F3EBE1] text-sm text-[#808080] mt-10 py-5 flex justify-between">
                <p>&copy; {year} Spa online</p>
                <p>Privacy Policy  <span className="ml-6">Terms of service</span></p>
            </div>
        </footer>
    );
};

export default Footer;
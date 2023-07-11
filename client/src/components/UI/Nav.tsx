// @flow strict

import { useContext } from 'react';
import { Usercontext } from '../../UserContext';
import { Link } from 'react-router-dom';

function Nav() {
    const {email}=useContext(Usercontext)
    
    function openNav() {
        const menu=document.getElementById("menu") as HTMLDivElement;
        menu.style.display="block"
    }
    function closeNav(){
        const menu=document.getElementById("menu") as HTMLDivElement;
        menu.style.display="none"
    }
    return (
        <>
            <nav className="flex justify-between py-6 border-b-[1px] max-lg:px-4" style={{borderBottomColor:"#8o8o8o"}}>
                <Link to="/" className="font-bold text-2xl text-[#333333]" id='logo'>Spa online</Link>
                <div className="flex text-base text-[#808080]" id='nav-items'>
                        <Link to="/" className='hover:text-[#333333]'>Home</Link>
                        <a href="#about" className='hover:text-[#333333] px-4'>About</a>
                        <Link to="/products" className='hover:text-[#333333] px-4'>Products</Link>
                        <Link to="/features" className='hover:text-[#333333]'>Features</Link>
                </div>
                <div className="flex text-base" style={{color:"#808080"}} id='nav-items'>
                        <Link to="/" className='hover:bg-[#333333] hover:text-[#FFFCF8] hover:rounded-[50px] px-2 py-1'>
                            <i className='ri-search-line'></i>
                        </Link>
                        <Link to="/" className='hover:bg-[#333333] hover:text-[#FFFCF8] hover:rounded-[50px] px-2 py-1'>
                            <i className='ri-notification-line'></i>
                        </Link>
                </div>

                <div className="text-[#333333]" id='nav-menu' onClick={openNav}>
                    <i className='ri-menu-line ri-xl cursor-pointer'></i>
                </div>
            </nav>

            <div className="fixed top-0 text-xl bottom-0 left-0 right-0 bg-[#FFFCF8] z-50" onClick={closeNav} id='menu'>
                <div className="flex flex-col h-full font-semibold items-center text-[#333333] justify-center">
                    <div className="flex flex-col">
                        <Link to="/" className='hover:text-[#808080]'>Home</Link>
                        <a href="#about" className='hover:text-[#808080] py-2'>About</a>
                        <Link to="/products" className='hover:text-[#808080] py-2'>Products</Link>
                        <Link to="/features" className='hover:text-[#808080] py-2'>Features</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
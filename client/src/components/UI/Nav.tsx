// @flow strict

import { useContext } from 'react';
import { Usercontext } from '../../UserContext';
import { Link } from 'react-router-dom';

function Nav() {
    const {email}=useContext(Usercontext)
    
    return (
        <>
            <nav className="flex justify-between py-6 border-b-[1px] max-lg:px-4" style={{borderBottomColor:"#8o8o8o"}}>
                <Link to="/" className="font-bold text-2xl text-[#333333]" id='logo'>Spa online</Link>
                <div className="flex text-base" style={{color:"#808080"}} id='nav-items'>
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

                <div className="text-[#333333]" id='nav-menu'>
                    <i className='ri-menu-line ri-xl cursor-pointer'></i>
                </div>
            </nav>
        </>
    );
};

export default Nav;
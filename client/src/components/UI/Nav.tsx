// @flow strict

import { useContext } from 'react';
import { Usercontext } from '../../UserContext';
import { Link } from 'react-router-dom';

function Nav() {
    const {email}=useContext(Usercontext)
    
    return (
        <nav className="flex justify-between py-6 border-b-[1px]" style={{borderBottomColor:"#8o8o8o"}}>
           <div className="font-bold text-2xl text-[#333333]" id='logo'>Spa online</div>
           <div className="flex text-base" style={{color:"#808080"}}>
                <Link to="/" className='hover:text-[#333333]'>Home</Link>
                <a href="#about" className='hover:text-[#333333] px-4'>About</a>
                <Link to="/products" className='hover:text-[#333333] px-4'>Products</Link>
                <Link to="/features" className='hover:text-[#333333]'>Features</Link>
           </div>
           <div className="flex text-base" style={{color:"#808080"}}>
                <Link to="/">
                    <i className='ri-search-line hover:text-[#333333]'></i>
                </Link>
                <Link to="/">
                    <i className='ri-notification-line pl-4 hover:text-[#333333]'></i>
                </Link>
           </div>
        </nav>
    );
};

export default Nav;
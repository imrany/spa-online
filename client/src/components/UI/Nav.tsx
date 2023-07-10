// @flow strict

import { useContext } from 'react';
import { Header } from './Header';
import { Usercontext } from '../../UserContext';
import { Link } from 'react-router-dom';

function Nav() {
    const {email}=useContext(Usercontext)
    const handleSubmit=async(e:any)=>{
        e.preventDefault()
        try {
            const search_input=e.target.search.value
        } catch (error:any) {
            console.log(error.message)
        }
    }
    return (
        <nav>
            <Header/>
            <div className="flex mt-7 justify-between h-8 p-4 md:px-16"  id='nav-items'>
                <Link to="/" className="logo text-purple-600 font-semibold text-2xl">Online mall</Link>
                <div className="flex justify-between my-1">
                    <details className='mx-4'>
                        <summary className='cursor-pointer'>Categories</summary>
                        <ul className='bg-purple-500 py-4 px-6 text-slate-100 z-20 fixed'>
                            <li className='py-2'>Gadgets</li>
                            <li className='py-2'>Grocceries</li>
                            <li className='py-2'>Houseware</li>
                            <li className='py-2'>Utensils</li>
                        </ul>
                    </details>
                    <div className="mx-4">
                        Deals
                    </div>
                    <div className="mx-4">
                        Whats New
                    </div>
                    <div className="mx-4">
                        Delivery
                    </div>
                </div>

                <form className="pr-3 flex rounded-[50px] bg-gray-200 w-[20vw] border-2 h-10" onSubmit={handleSubmit}>
                    <input className="px-3 py-2 bg-transparent outline-none text-sm placeholder:text-sm" name='search' type='text' placeholder='Search Product' required/>
                    <button className='ml-auto text-gray-600'>
                        <i className="ri-search-line"></i>
                    </button>
                </form>

                <div className="flex justify-between my-1">
                    <Link to={`/dashboard/${email}`} className="">
                        <i className='ri-user-line'></i>
                        <span>Account</span>
                    </Link>
                    <div className="ml-6">
                        <i className="ri-shopping-cart-line"></i>
                        <span>Cart</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
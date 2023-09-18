import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [ menuButton, setMenuButton ] = useState(false);

  const handleMenu = () => {
    setMenuButton((prev) => !prev);
  };

  return (
    <div className="z-50 fixed top-0 left-0 w-full bg-[#333]">
        <div className="flex h-16 w-full text-white justify-between items-center px-5 lg:container lg:mx-auto">
            <h1>
              <NavLink to="/" className="text-3xl font-bold tracking-widest">Logo</NavLink>
            </h1>
            
            {/* mobile menu */}
            <ul className={`${menuButton ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 absolute top-16 left-0 bg-[#d4d4d4] w-full backdrop-blur-sm text-[#333] md:hidden`}>
                <li className="py-5 pl-5 font-medium"><NavLink to="/">Home</NavLink></li>
                <li className="py-5 pl-5 font-medium"><NavLink to="/">About</NavLink></li>
                <li className="py-5 pl-5 font-medium"><NavLink to="/">Contact</NavLink></li>
            </ul> 

            {/* pc menu */}
            <ul className="hidden md:flex md:gap-x-7">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="/">Contact</NavLink></li>
                <li className="grid place-items-center"><NavLink to="/cart"><FaShoppingCart className="h-5 w-5" /></NavLink></li>
            </ul> 

            <div className="flex items-center gap-x-5 md:hidden">
              <div>
                <NavLink to="/cart"><FaShoppingCart className="h-6 w-6" /></NavLink>
              </div>

              <div onClick={handleMenu}>
                {!menuButton ? <FaBars className="h-6 w-6" /> : <FaTimes className="h-6 w-6" />} 
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header
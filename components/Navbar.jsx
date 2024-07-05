'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { useState } from 'react';



const Navbar = () => { 
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return(
  <motion.nav
  variants={navVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img                                                                                            src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white cursor-pointer">
         riidl
        </h2>
        <img 
        src="/menu.svg"
        alt="menu"
        className="h-[24px] w-[24px] object-contain"
        onClick={toggleDropdown}
        />
        {isDropdownVisible && (
          <div className="absolute top-[60px] right-0 bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-md p-4">
            <ul className="flex flex-col text-white">
              <li className="py-2">
                <a href="#about" className="text-white hover:text-gray-300">About</a>
              </li>
              <li className="py-2">
                <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
              </li>
              <li className="py-2">
                <a href="#other-section" className="text-white hover:text-gray-300">Other Section</a>
              </li>
            </ul>
          </div>
        )}
    </div>
  </motion.nav>
);}

export default Navbar;

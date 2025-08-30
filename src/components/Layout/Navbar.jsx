import {IoMdClose} from "react-icons/io";
import {HiMenuAlt3} from "react-icons/hi";
import MobileMenu from "./MobileMenu.jsx";
import {useState} from "react";
import logo from "../../assets/images/logo.svg";
import {Badge} from "antd";
import {IoCartOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import {getToken, logout} from "../../helper/SessionHelper.js";
import SearchBox from "./SearchBox.jsx";
import {useSelector} from "react-redux";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const cart = useSelector((state)=>state.cart.cart);


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className="right-0 shadow-md z-10 bg-white dark:bg-dark dark:text-white duration-300">
                <div className="container">
                    <div className="flex h-[75px] items-center justify-between">
                        <Link to="/" className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] cursor-pointer">
                            <img src={logo} className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]" alt=""/> 
                        </Link>
                      
                        <SearchBox/>
                        <nav className="md:block hidden">
                            <ul className="flex items-center gap-8">

                                <Link to="/" className="cursor-pointer hover:text-primary transition-colors duration-500 text-lg font-medium">
                                     Home
                                </Link>

                                <Link to="/contact" className="cursor-pointer hover:text-primary transition-colors duration-500 text-lg font-medium">
                                    Contact
                                </Link>

                                {getToken() ? (
                                   <>
                                       <li onClick={()=>logout()} className="cursor-pointer hover:text-primary transition-colors duration-500 text-lg font-medium">
                                           Logout
                                       </li>
                                   </>
                                  ): (
                                    <>
                                        <Link to="/register" className="cursor-pointer hover:text-primary transition-colors duration-500 text-lg font-medium">
                                            Register
                                        </Link>
                                        <Link to="/login" className="cursor-pointer hover:text-primary transition-colors duration-500 text-lg font-medium">
                                            Login
                                        </Link>
                                    </>
                                  )
                                }

                                <Badge count={cart.length}>
                                    <Link to="/cart">
                                        <IoCartOutline size={30} className="cursor-pointer"/>
                                    </Link>
                                </Badge>

                            </ul>
                        </nav>

                        {/* Mobile view  */}
                        <div className="flex items-center gap-2 md:gap-4 md:hidden">
                            <Badge count={cart.length}>
                                <Link to="/cart">
                                    <IoCartOutline size={30} className="cursor-pointer"/>
                                </Link>
                            </Badge>

                            {/* Mobile Hamburger icon */}
                            {showMenu ? (
                                <IoMdClose
                                    onClick={toggleMenu}
                                    className=" cursor-pointer transition-all"
                                    size={30}
                                />
                            ) : (
                                <HiMenuAlt3
                                    onClick={toggleMenu}
                                    className="cursor-pointer transition-all"
                                    size={30}
                                />
                            )}

                        </div>
                    </div>
                </div>
            </div>

            <MobileMenu showMenu={showMenu}/>
        </>
    );
};

export default Navbar;
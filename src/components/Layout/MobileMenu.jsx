import {FaUserCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
import {getToken, logout} from "../../helper/SessionHelper.js";


const MobileMenu = ({showMenu}) => {

    return (
        <>
            <div
                className={`${showMenu ? "left-0" : "-left-[100%]"} fixed top-0 bottom-0 h-screen z-20 flex w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 md:hidden transition-all duration-500 rounded-r-xl shadow-md`}>
                <div className="card">
                    <div className="flex items-center justify-start gap-3">
                        <FaUserCircle size={50}/>
                        <div>
                            <h1 className="text-3xl font-bold font-serif">Shops</h1>
                        </div>
                    </div>
                    <nav className="nav-items mt-12">
                        <ul className="grid grid-cols-1 space-y-4 text-xl">
                            <Link to="/" className="cursor-pointer hover:text-primary duration-500">Home </Link>
                            <Link to="/contact" className="cursor-pointer hover:text-primary duration-500">Contact </Link>
                            {getToken() ? (
                                <>
                                    <li onClick={()=>logout()} className="cursor-pointer hover:text-primary duration-500">
                                        Logout
                                    </li>
                                </>
                            ): (
                                <>
                                    <Link to="/register" className="cursor-pointer hover:text-primary duration-500">Register </Link>
                                    <Link to="/login" className="cursor-pointer hover:text-primary duration-500">Login </Link>
                                </>
                            )
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
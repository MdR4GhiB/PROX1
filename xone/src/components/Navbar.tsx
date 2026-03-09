import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Helper function to check if link is active
    const isActive = (path: string) => location.pathname === path;
    return (
        <>
            <header className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-4 flex justify-between items-center shadow-lg">
                <Link to="/" className="text-2xl text-white font-bold tracking-wide hover:scale-105 transition-transform duration-200 cursor-default">
                    Xone
                </Link>
                <div className="flex items-center">
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white focus:outline-none mr-2"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop auth buttons */}
                    <div className="hidden md:block">
                        <Link
                            to="/Login"
                            className={`text-white px-4 py-2 rounded-lg ml-2 transition-all duration-200 font-medium inline-block ${isActive('/Login')
                                ? 'bg-indigo-400 shadow-lg'
                                : 'hover:bg-indigo-400 hover:shadow-lg'
                                }`}
                        >
                            Login
                        </Link>
                        <Link
                            to="/Signup"
                            className={`text-white px-4 py-2 rounded-lg ml-2 transition-all duration-200 font-medium inline-block ${isActive('/Signup')
                                ? 'bg-indigo-400 shadow-lg'
                                : 'bg-indigo-500 hover:bg-indigo-400 shadow-md hover:shadow-lg'
                                }`}
                        >
                            Signup
                        </Link>
                    </div>
                </div>
            </header>

            {/* Mobile auth buttons - shown when menu is open */}
            {isMenuOpen && (
                <div className="md:hidden bg-indigo-700 p-3 flex justify-center space-x-4">
                    <Link
                        to="/Login"
                        className={`text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium ${isActive('/Login')
                            ? 'bg-indigo-400'
                            : 'bg-indigo-500 hover:bg-indigo-400'
                            }`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Login
                    </Link>
                    <Link
                        to="/Signup"
                        className={`text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium ${isActive('/Signup')
                            ? 'bg-indigo-400'
                            : 'bg-indigo-500 hover:bg-indigo-400'
                            }`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Signup
                    </Link>
                </div>
            )}

            {/* Desktop navigation */}
            <nav className="hidden md:block bg-white shadow-md">
                <ul className="flex justify-around p-3 max-w-4xl mx-auto">
                    <li>
                        <Link
                            to="/"
                            className={`font-medium transition-all duration-200 relative pb-1 ${isActive('/')
                                ? 'text-indigo-600 after:content-[""] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-indigo-600 after:scale-x-100'
                                : 'text-gray-700 hover:text-indigo-600 after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-indigo-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
                                }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={`font-medium transition-all duration-200 relative pb-1 ${isActive('/about')
                                ? 'text-indigo-600 after:content-[""] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-indigo-600 after:scale-x-100'
                                : 'text-gray-700 hover:text-indigo-600 after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-indigo-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
                                }`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={`font-medium transition-all duration-200 relative pb-1 ${isActive('/contact')
                                ? 'text-indigo-600 after:content-[""] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-indigo-600 after:scale-x-100'
                                : 'text-gray-700 hover:text-indigo-600 after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-indigo-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
                                }`}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/service"
                            className={`font-medium transition-all duration-200 relative pb-1 ${isActive('/service')
                                ? 'text-indigo-600 after:content-[""] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-indigo-600 after:scale-x-100'
                                : 'text-gray-700 hover:text-indigo-600 after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-indigo-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
                                }`}
                        >
                            Service
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile navigation - hamburger menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col p-2">
                        <li>
                            <Link
                                to="/"
                                className={`block font-medium transition-colors duration-200 p-3 rounded-lg ${isActive('/')
                                    ? 'text-indigo-600 bg-indigo-50'
                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={`block font-medium transition-colors duration-200 p-3 rounded-lg ${isActive('/about')
                                    ? 'text-indigo-600 bg-indigo-50'
                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={`block font-medium transition-colors duration-200 p-3 rounded-lg ${isActive('/contact')
                                    ? 'text-indigo-600 bg-indigo-50'
                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/service"
                                className={`block font-medium transition-colors duration-200 p-3 rounded-lg ${isActive('/service')
                                    ? 'text-indigo-600 bg-indigo-50'
                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Service
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
}

export default Navbar;
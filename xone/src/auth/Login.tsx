import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
    return (
        <>
            <Navbar />
            {/* Main content with centered container */}
            <div className="flex-grow bg-gray-50 py-8 lg:py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    {/* Split container with boxed sections - smaller */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            {/* Left Container - Welcome Section (smaller) */}
                            <div className="lg:w-5/12 bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 lg:p-8 text-white">
                                <div className="max-w-sm mx-auto">
                                    {/* Decorative icon/element - smaller */}
                                    <div className="mb-6">
                                        <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                        </svg>
                                    </div>
                                    
                                    <h1 className="text-2xl lg:text-3xl font-bold mb-3">
                                        Welcome to Xone
                                    </h1>
                                    
                                    <p className="text-sm lg:text-base mb-6 text-indigo-100">
                                        Your gateway to amazing experiences and innovative solutions.
                                    </p>
                                    
                                    {/* Feature list - smaller */}
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-indigo-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm text-indigo-100">Exclusive features</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-indigo-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm text-indigo-100">24/7 customer support</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-indigo-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm text-indigo-100">Secure platform</span>
                                        </div>
                                    </div>

                                    {/* Testimonial/Quote - smaller */}
                                    <div className="mt-8 p-4 bg-indigo-700 bg-opacity-30 rounded-lg border border-indigo-500">
                                        <p className="text-sm text-indigo-100 italic">
                                            "Xone has transformed how I work!"
                                        </p>
                                        <div className="mt-2 flex items-center">
                                            <div className="w-6 h-6 bg-indigo-400 rounded-full flex items-center justify-center">
                                                <span className="text-xs font-bold">JD</span>
                                            </div>
                                            <div className="ml-2">
                                                <p className="text-xs font-medium">John Doe</p>
                                                <p className="text-xs text-indigo-200">Happy Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Container - Login Form (smaller) */}
                            <div className="lg:w-7/12 p-6 lg:p-8 bg-white">
                                <div className="max-w-sm mx-auto">
                                    {/* Mobile Welcome (visible only on mobile) */}
                                    <div className="lg:hidden text-center mb-6">
                                        <h1 className="text-2xl font-bold text-indigo-600 mb-1">Welcome to Xone</h1>
                                        <p className="text-sm text-gray-600">Please sign in to your account</p>
                                    </div>

                                    {/* Form Header */}
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Sign In
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-600">
                                            Or{' '}
                                            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                create a new account
                                            </Link>
                                        </p>
                                    </div>

                                    {/* Login Form */}
                                    <form className="space-y-4">
                                        {/* Email Field */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                                                    placeholder="you@example.com"
                                                />
                                            </div>
                                        </div>

                                        {/* Password Field */}
                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    required
                                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                        </div>

                                        {/* Remember me & Forgot password */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input
                                                    id="remember-me"
                                                    name="remember-me"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                                />
                                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                    Remember me
                                                </label>
                                            </div>

                                            <div className="text-sm">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div>
                                            <button
                                                type="submit"
                                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </form>

                                    {/* Social Login Options */}
                                    <div className="mt-6">
                                        <div className="relative">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-gray-300"></div>
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                            </div>
                                        </div>

                                        <div className="mt-4 grid grid-cols-2 gap-2">
                                            <button
                                                type="button"
                                                className="w-full inline-flex justify-center items-center py-2 px-3 border border-gray-300 rounded-lg shadow-sm bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                                <span className="ml-1">Twitter</span>
                                            </button>
                                            <button
                                                type="button"
                                                className="w-full inline-flex justify-center items-center py-2 px-3 border border-gray-300 rounded-lg shadow-sm bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-1">GitHub</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;
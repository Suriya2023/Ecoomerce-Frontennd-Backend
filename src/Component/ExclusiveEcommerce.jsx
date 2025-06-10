import React, { useState } from 'react';
import { Search, ShoppingCart, User, Globe, Menu, X } from 'lucide-react';
import cart from '../assets/cart.png'
import { Link } from 'react-router-dom';
export default function ExclusiveEcommerce() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Top Banner */}
            <div className="relative bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 py-2 text-center">

                    {/* Sale Text and Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
                        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                        <button className="underline hover:no-underline">Shop Now</button>
                    </div>

                    {/* Language Selector (Top-Right) */}
                    <div className="absolute top-2 right-35 hidden sm:flex items-center gap-2">
                        <span className="text-sm">English</span>
                        <Globe className="w-4 h-4" />
                    </div>

                </div>
            </div>


            <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">

                        {/* Left: Logo */}
                        <div
                            onClick={() => (window.location.href = "/")}
                            className="text-2xl cursor-pointer font-bold flex-shrink-0"
                        >
                            Sr-Shop
                        </div>

                        {/* Center: Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8 flex-1 justify-center">
                            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
                            <Link to="/ExclusiveContactPage" className="hover:text-gray-600 transition-colors">Contact</Link>
                            <Link to="/ExclusiveAbout" className="hover:text-gray-600 transition-colors">About</Link>
                            <Link to="/ExclusiveEcommerce" className="hover:text-gray-600 transition-colors">Sign Up</Link>
                        </nav>

                        {/* Right: Search + Mobile Menu Toggle */}
                        <div className="flex items-center gap-4">
                            {/* Search Bar (Desktop only) */}
                            <div className="hidden sm:flex items-center bg-gray-100 rounded-md px-3 py-2">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="bg-transparent outline-none text-sm w-48"
                                />
                                <Search className="w-4 h-4 text-gray-400" />
                            </div>

                            {/* Mobile Menu Toggle Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden text-gray-700"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
                        <div className="px-4 py-4 space-y-4">
                            <nav className="flex flex-col space-y-3">
                                <Link to="/" className="hover:text-red-500">Home</Link>
                                <Link to="/ExclusiveContactPage" className="hover:text-red-500">Contact</Link>
                                <Link to="/ExclusiveAbout" className="hover:text-red-500">About</Link>
                                <Link to="/ExclusiveEcommerce" className="hover:text-red-500">Sign Up</Link>
                            </nav>
                        </div>
                    </div>
                )}
            </header>


            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-0 items-center">
                    {/* Hero Image Section */}
                    <img src={cart} alt="Hero" className="w-full h-auto object-cover" />

                    {/* Sign Up Form */}
                    <div className="order-1 lg:order-2">
                        <div className="max-w-md mx-auto">
                            <h1 className="text-3xl font-bold mb-2">Create an account</h1>
                            <p className="text-gray-600 mb-8">Enter your details below</p>

                            <div className="space-y-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full border-b border-gray-300 pb-2 outline-none focus:border-red-500 transition-colors"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email or Phone Number"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full border-b border-gray-300 pb-2 outline-none focus:border-red-500 transition-colors"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full border-b border-gray-300 pb-2 outline-none focus:border-red-500 transition-colors"
                                />
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors font-medium"
                                >
                                    Create Account
                                </button>

                                <button
                                    type="button"
                                    className="w-full border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                                >
                                    {/* Google Icon */}
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                    Sign up with Google
                                </button>

                                <div className="text-center">
                                    <span className="text-gray-600">Already have account? </span>
                                    <button type="button" className="text-black underline hover:no-underline">
                                        Log in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


            {/* Footer */}
            <footer className="bg-black text-white mt-16">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Exclusive Section */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Sr-Shop</h3>
                            <h4 className="font-semibold mb-4">Subscribe</h4>
                            <p className="text-sm mb-4">Get 10% off your first order</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-black border border-white px-3 py-2 flex-1 text-sm rounded-l"
                                />
                                <button className="border border-white px-3 py-2 rounded-r">
                                    <span className="text-white">→</span>
                                </button>
                            </div>
                        </div>

                        {/* Support Section */}
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <div className="space-y-2 text-sm">
                                <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
                                <p>exclusive@gmail.com</p>
                                <p>+88015-88888-9999</p>
                            </div>
                        </div>

                        {/* Account Section */}
                        <div>
                            <h4 className="font-semibold mb-4">Account</h4>
                            <div className="space-y-2 text-sm">
                                <p><a href="#" className="hover:underline">My Account</a></p>
                                <p><a href="#" className="hover:underline">Login / Register</a></p>
                                <p><a href="#" className="hover:underline">Cart</a></p>
                                <p><a href="#" className="hover:underline">Wishlist</a></p>
                                <p><a href="#" className="hover:underline">Shop</a></p>
                            </div>
                        </div>

                        {/* Quick Link Section */}
                        <div>
                            <h4 className="font-semibold mb-4">Quick Link</h4>
                            <div className="space-y-2 text-sm">
                                <p><a href="#" className="hover:underline">Privacy Policy</a></p>
                                <p><a href="#" className="hover:underline">Terms Of Use</a></p>
                                <p><a href="#" className="hover:underline">FAQ</a></p>
                                <p><a href="#" className="hover:underline">Contact</a></p>
                            </div>
                        </div>

                        {/* Download App Section */}
                        <div>
                            <h4 className="font-semibold mb-4">Download App</h4>
                            <p className="text-xs text-gray-400 mb-4">Save $3 with App New User Only</p>
                            <div className="grid grid-cols-2 gap-2 mb-4">
                                <div className="bg-white p-2 rounded">
                                    <div className="w-full h-16 bg-black rounded"></div>
                                </div>
                                <div className="space-y-1">
                                    <div className="bg-white text-black p-1 rounded text-xs">Google Play</div>
                                    <div className="bg-white text-black p-1 rounded text-xs">App Store</div>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-5 h-5 bg-white rounded"></div>
                                <div className="w-5 h-5 bg-white rounded"></div>
                                <div className="w-5 h-5 bg-white rounded"></div>
                                <div className="w-5 h-5 bg-white rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                        <p>© Copyright Rimel 2022. All right reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
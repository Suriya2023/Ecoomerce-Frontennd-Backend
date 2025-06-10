import React, { useState } from 'react';
import {
    Menu,
    Search,
    Heart,
    ShoppingCart,
    ShoppingBag,
    User,
    Star,
    Phone,
    Mail,
    MapPin,
    Download,
    X,
    ArrowRight,
    Eye,
    Plus,
    Edit,
    Trash2,
    Minus
} from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn'
import { Link } from 'react-router-dom';

export default function ExclusiveAbout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <ScrollFadeIn>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={() => (window.location.href = "/")}
                            >
                                <div className="text-2xl font-bold text-gray-900">Sr-Shop</div>
                            </div>

                            {/* Navigation - Desktop */}
                            <nav className="hidden md:flex space-x-8">
                                <Link to="/" className="text-gray-700 hover:text-red-500 transition-colors">
                                    Home
                                </Link>
                                <Link to="/ExclusiveContactPage" className="text-gray-700 hover:text-red-500 transition-colors">
                                    Contact
                                </Link>
                                <Link to="/about" className="text-gray-700 hover:text-red-500 transition-colors">
                                    About
                                </Link>
                                <Link to="/ExclusiveEcommerce" className="text-gray-700 hover:text-red-500 transition-colors">
                                    Sign Up
                                </Link>
                            </nav>

                            {/* Search Bar - Desktop */}
                            <div className="hidden sm:flex items-center flex-1 max-w-md mx-8">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="What are you looking for?"
                                        className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                    <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Right Icons */}
                            <div className="flex items-center space-x-4">
                                <button className="text-gray-700 hover:text-red-500 transition-colors">
                                    <User className="w-6 h-6" />
                                </button>
                                <button
                                    className="md:hidden text-gray-700"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
                            <div className="px-4 py-4 space-y-4">
                                {/* Mobile Search */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="What are you looking for?"
                                        className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                    <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                                </div>

                                {/* Mobile Navigation */}
                                <nav className="flex flex-col space-y-3">
                                    <Link to="/" className="text-gray-700 hover:text-red-500">
                                        Home
                                    </Link>
                                    <Link to="/ExclusiveContactPage" className="text-gray-700 hover:text-red-500">
                                        Contact
                                    </Link>
                                    <Link to="/about" className="text-gray-700 hover:text-red-500">
                                        About
                                    </Link>
                                    <Link to="/ExclusiveEcommerce" className="text-gray-700 hover:text-red-500">
                                        Sign Up
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    )}
                </ScrollFadeIn>

            </header>

            {/* Our Story Section */}
            <section className="container mx-auto px-4 py-16">
                <ScrollFadeIn>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Launched in 2015, Exclusive is South Asia's premier online shopping
                                marketplace with an active presence in Bangladesh. Supported
                                by wide range of tailored marketing, data and service solutions,
                                Exclusive has 10,500 sellers and 300 brands and serves 3
                                millions customers across the region.
                            </p>
                            <p className="text-gray-600">
                                Exclusive has more than 1 Million products to offer, growing at a
                                very fast. Exclusive offers a diverse assortment in categories
                                ranging from consumer.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-pink-400 to-red-400 rounded-lg p-8">
                            <div className="flex justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
                                    alt="Shopping women"
                                    className="rounded-lg max-w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollFadeIn>

            </section>

            {/* Statistics Section */}
            <section className="container mx-auto px-4 py-16">
                <ScrollFadeIn>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center border rounded-lg p-6 hover:bg-red-500 hover:text-white transition-all duration-300 group">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white">
                                <div className="w-6 h-6 bg-white rounded-full group-hover:bg-black"></div>
                            </div>
                            <div className="text-2xl font-bold">10.5k</div>
                            <div className="text-sm">Sellers active our site</div>
                        </div>
                        <div className="text-center border rounded-lg p-6 bg-red-500 text-white">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                            </div>
                            <div className="text-2xl font-bold">33k</div>
                            <div className="text-sm">Monthly Product Sale</div>
                        </div>
                        <div className="text-center border rounded-lg p-6 hover:bg-red-500 hover:text-white transition-all duration-300 group">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white">
                                <div className="w-6 h-6 bg-white rounded-full group-hover:bg-black"></div>
                            </div>
                            <div className="text-2xl font-bold">45.5k</div>
                            <div className="text-sm">Customer active in our site</div>
                        </div>
                        <div className="text-center border rounded-lg p-6 hover:bg-red-500 hover:text-white transition-all duration-300 group">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white">
                                <div className="w-6 h-6 bg-white rounded-full group-hover:bg-black"></div>
                            </div>
                            <div className="text-2xl font-bold">25k</div>
                            <div className="text-sm">Annual gross sale in our site</div>
                        </div>
                    </div>
                </ScrollFadeIn>

            </section>

            {/* Team Section */}
            <section className="container mx-auto px-4 py-16">
                <ScrollFadeIn>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-gray-100 rounded-lg p-8 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop&crop=face"
                                    alt="Tom Cruise"
                                    className="w-32 h-40 object-cover mx-auto rounded"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-1">Tom Cruise</h3>
                            <p className="text-gray-600 mb-3">Founder & Chairman</p>
                            <div className="flex justify-center space-x-2">
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">tw</span>
                                </div>
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">in</span>
                                </div>
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">ig</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-100 rounded-lg p-8 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108755-2616b612b1c1?w=200&h=250&fit=crop&crop=face"
                                    alt="Emma Watson"
                                    className="w-32 h-40 object-cover mx-auto rounded"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-1">Emma Watson</h3>
                            <p className="text-gray-600 mb-3">Managing Director</p>
                            <div className="flex justify-center space-x-2">
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">tw</span>
                                </div>
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">in</span>
                                </div>
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">ig</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-100 rounded-lg p-8 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=250&fit=crop&crop=face"
                                    alt="Will Smith"
                                    className="w-32 h-40 object-cover mx-auto rounded"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-1">Will Smith</h3>
                            <p className="text-gray-600 mb-3">Product Designer</p>
                            <div className="flex justify-center space-x-2">
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">tw</span>
                                </div>
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">in</span>
                                </div>
                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">ig</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                </ScrollFadeIn>

            </section>

            {/* Services Section */}
            <section className="container mx-auto px-4 py-16">
                <ScrollFadeIn>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <div className="w-4 h-4 bg-black rounded-full"></div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">FREE AND FAST DELIVERY</h3>
                            <p className="text-gray-600 text-sm">Free delivery for all orders over $140</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <Phone className="w-4 h-4 text-black" />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">24/7 CUSTOMER SERVICE</h3>
                            <p className="text-gray-600 text-sm">Friendly 24/7 customer support</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <div className="w-4 h-4 bg-black rounded-full"></div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">MONEY BACK GUARANTEE</h3>
                            <p className="text-gray-600 text-sm">We return money within 30 days</p>
                        </div>
                    </div>
                </ScrollFadeIn>

            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12">
                <ScrollFadeIn>
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-5 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Exclusive</h3>
                                <p className="mb-4">Subscribe</p>
                                <p className="text-sm text-gray-400 mb-4">Get 10% off your first order</p>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-transparent border border-white px-3 py-2 flex-1 text-sm"
                                    />
                                    <button className="border border-white px-3 py-2">
                                        <Mail className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Support</h4>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
                                    <p>exclusive@gmail.com</p>
                                    <p>+88015-88888-9999</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Account</h4>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <p><a href="#" className="hover:text-white">My Account</a></p>
                                    <p><a href="#" className="hover:text-white">Login / Register</a></p>
                                    <p><a href="#" className="hover:text-white">Cart</a></p>
                                    <p><a href="#" className="hover:text-white">Wishlist</a></p>
                                    <p><a href="#" className="hover:text-white">Shop</a></p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Quick Link</h4>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <p><a href="#" className="hover:text-white">Privacy Policy</a></p>
                                    <p><a href="#" className="hover:text-white">Terms Of Use</a></p>
                                    <p><a href="#" className="hover:text-white">FAQ</a></p>
                                    <p><a href="#" className="hover:text-white">Contact</a></p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Download App</h4>
                                <p className="text-xs text-gray-400 mb-2">Save $3 with App New User Only</p>
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    <div className="bg-white p-2 rounded">
                                        <div className="w-16 h-16 bg-gray-200 rounded"></div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="bg-gray-800 px-2 py-1 rounded text-xs">Google Play</div>
                                        <div className="bg-gray-800 px-2 py-1 rounded text-xs">App Store</div>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-6 h-6 bg-white rounded"></div>
                                    <div className="w-6 h-6 bg-white rounded"></div>
                                    <div className="w-6 h-6 bg-white rounded"></div>
                                    <div className="w-6 h-6 bg-white rounded"></div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                            <p>&copy; Copyright Rimel 2022. All right reserved</p>
                        </div>
                    </div>
                    </ScrollFadeIn>
            </footer>
        </div >
    );
}
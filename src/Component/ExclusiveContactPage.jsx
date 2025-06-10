import React, { useState } from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import ScrollFadeIn from './ScrollFadeIn'

export default function ExclusiveContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <ScrollFadeIn>
                {/* Top Banner */}
                <div className="bg-black text-white text-center py-2 text-sm">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <span className="ml-2 underline cursor-pointer">ShopNow</span>
                    <select className="bg-black text-white ml-4 text-sm border-none outline-none">
                        <option>English</option>
                    </select>
                </div>

                {/* Header */}
                <header className="bg-white shadow-sm border-b sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <div onClick={() => (window.location.href = '/')} className="text-2xl font-bold cursor-pointer">
                                Sr-Shop
                            </div>

                            <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
                                <Link to="/" className="text-gray-600 hover:text-black transition">Home</Link>
                                <Link to="/contact" className="text-black font-medium transition">Contact</Link>
                                <Link to="/ExclusiveAbout" className="text-gray-600 hover:text-black transition">About</Link>
                                <Link to="/ExclusiveEcommerce" className="text-gray-600 hover:text-black transition">Sign Up</Link>
                            </nav>

                            <div className="flex items-center space-x-4">
                                <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-2">
                                    <input
                                        type="text"
                                        placeholder="What are you looking for?"
                                        className="bg-transparent outline-none text-sm w-48"
                                    />
                                    <Search className="w-4 h-4 text-gray-500" />
                                </div>
                                <Heart className="w-6 h-6 text-gray-600 cursor-pointer" />
                                <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" />
                                <User className="w-6 h-6 text-gray-600 cursor-pointer" />

                                <button
                                    className="md:hidden text-gray-600"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {isMobileMenuOpen && (
                        <div className="md:hidden bg-white border-t">
                            <div className="px-4 py-4 space-y-4">
                                <nav className="flex flex-col space-y-2">
                                    <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
                                    <Link to="/contact" className="text-black font-medium">Contact</Link>
                                    <Link to="/ExclusiveAbout" className="text-gray-700 hover:text-black">About</Link>
                                    <Link to="/ExclusiveEcommerce" className="text-gray-700 hover:text-black">Sign Up</Link>
                                </nav>
                            </div>
                        </div>
                    )}
                </header>

                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-4">
                    <div className="text-sm text-gray-500">
                        <span>Home</span> <span className="mx-2">/</span> <span className="text-black">Contact</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1">
                            <div className="space-y-8 text-center lg:text-left">
                                <div className="bg-white p-6 rounded-lg">
                                    <div className="flex items-center justify-center lg:justify-start mb-4">
                                        <div className="bg-red-500 p-2 rounded-full mr-3">
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold">Call To Us</h3>
                                    </div>
                                    <p className="text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
                                    <p className="text-gray-800">Phone: +8801611112222</p>
                                </div>

                                <hr className="border-gray-300" />

                                <div className="bg-white p-6 rounded-lg">
                                    <div className="flex items-center justify-center lg:justify-start mb-4">
                                        <div className="bg-red-500 p-2 rounded-full mr-3">
                                            <Mail className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold">Write To Us</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">Fill out our form and we will contact you within 24 hours.</p>
                                    <div className="space-y-2">
                                        <p className="text-gray-800">customer@exclusive.com</p>
                                        <p className="text-gray-800">support@exclusive.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <ScrollFadeIn>                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name *"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="bg-gray-100 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email *"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="bg-gray-100 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Your Phone *"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="bg-gray-100 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="8"
                                    className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-red-500 resize-none"
                                />
                                <div className="flex justify-center lg:justify-end">
                                    <button
                                        type="submit"
                                        className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </div>

                            </form>
                            </ScrollFadeIn>

                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-black text-white py-12 mt-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center lg:text-left">
                            <div className="lg:col-span-1">
                                <h3 className="text-xl font-bold mb-4">Exclusive</h3>
                                <h4 className="text-lg mb-4">Subscribe</h4>
                                <p className="text-gray-400 mb-4">Get 10% off your first order</p>
                                <div className="flex items-center border border-gray-600 rounded overflow-hidden">
                                    <input type="email" placeholder="Enter your email" className="px-3 py-2 w-full text-black outline-none" />
                                    <button className="bg-red-500 px-4 py-2">Submit</button>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Support</h4>
                                <div className="space-y-2 text-gray-400">
                                    <p>111 Bijoy sarani, Dhaka,</p>
                                    <p>DH 1515, Bangladesh.</p>
                                    <p>exclusive@gmail.com</p>
                                    <p>+88015-88888-9999</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Account</h4>
                                <div className="space-y-2 text-gray-400">
                                    <p>My Account</p>
                                    <p>Login/Register</p>
                                    <p>Cart</p>
                                    <p>Wishlist</p>
                                    <p>Shop</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Quick Link</h4>
                                <div className="space-y-2 text-gray-400">
                                    <p>Privacy Policy</p>
                                    <p>Terms of Use</p>
                                    <p>FAQ</p>
                                    <p>Contact</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                                <div className="flex space-x-4 justify-center lg:justify-start text-gray-400">
                                    <Facebook className="cursor-pointer" />
                                    <Twitter className="cursor-pointer" />
                                    <Instagram className="cursor-pointer" />
                                    <Linkedin className="cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                            <p>© Copyright Rimel 2022. All right reserved</p>
                        </div>
                    </div>
                </footer>
            </ScrollFadeIn>
        </div>
    );
}

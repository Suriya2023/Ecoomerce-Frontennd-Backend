import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Star, ArrowRight, Heart, Eye, Plus, Edit, Trash2, Minus } from 'lucide-react';
import { ChevronRight, Apple } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn'
import apple from '../assets/apple.png';
import spe from '../assets/spe.jpg'
import gamming from '../assets/gamming.png'
import key from '../assets/key.png'
import tv from '../assets/tv.png'
import mouse from '../assets/mouse.jpg'
import chair from '../assets/char.png'
import jbl from '../assets/jbl.png'
import jbl2 from '../assets/jbl2.png'
import Bag from '../assets/bag.png'
import jackat from '../assets/jc.png'
import ProductDetailsPage from './ProductDetailsPage';
import { Link } from 'react-router-dom';
const EcommerceHomepage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showProductDetails, setShowProductDetails] = useState(false);

    const [newProduct, setNewProduct] = useState({
        id: '',
        name: '',
        price: '',
        originalPrice: '',
        category: '',
        rating: 4.5,
        reviews: 0,
        image: '',
        description: ''
    });

    const calculateTimeLeft = () => {
        const difference = +new Date("2025-06-16T00:00:00") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const [ccurrentSlide, ssetCurrentSlide] = useState(2); // Middle slide active

    const ccategories = [
        "Woman's Fashion",
        "Men's Fashion",
        "Electronics",
        "Home & Lifestyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby's & Toys",
        "Groceries & Pets",
        "Health & Beauty"
    ];

    const slides = [
        { id: 0, active: false },
        { id: 1, active: false },
        { id: 2, active: true },
        { id: 3, active: false },
        { id: 4, active: false }
    ];
    const viewProductDetails = (product) => {
        setSelectedProduct(product);
        setShowProductDetails(true);
    };

    const goBackToHome = () => {
        setShowProductDetails(false);
        setSelectedProduct(null);
    };
    const currentSlideData = slides[ccurrentSlide];
    // Cart Functions
    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const updateCartQuantity = (productId, newQuantity) => {
        if (newQuantity === 0) {
            removeFromCart(productId);
        } else {
            setCart(cart.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            ));
        }
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };
    const handleDeleteProduct = (productId) => {
        setProducts(products.filter(p => p.id !== productId));
    };

    // Product Management Functions
    const handleAddProduct = () => {
        if (newProduct.name && newProduct.price) {
            const product = {
                ...newProduct,
                id: Date.now(),
                price: parseFloat(newProduct.price),
                originalPrice: newProduct.originalPrice ? parseFloat(newProduct.originalPrice) : null
            };
            setProducts([...products, product]);
            setNewProduct({
                id: '',
                name: '',
                price: '',
                originalPrice: '',
                category: '',
                rating: 4.5,
                reviews: 0,
                image: '',
                description: ''
            });
            setIsAddProductModalOpen(false);
        }
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setNewProduct(product);
        setIsEditMode(true);
        setIsAddProductModalOpen(true);
    };

    const handleUpdateProduct = () => {
        setProducts(products.map(p => p.id === editingProduct.id ? newProduct : p));
        setIsEditMode(false);
        setEditingProduct(null);
        setNewProduct({
            id: '',
            name: '',
            price: '',
            originalPrice: '',
            category: '',
            rating: 4.5,
            reviews: 0,
            image: '',
            description: ''
        });
        setIsAddProductModalOpen(false);
    };

    const flashSaleProducts = [
        { id: 1, name: 'Gaming Controller', price: 49.99, originalPrice: 79.99, image: gamming, rating: 4.5, reviews: 128 },
        { id: 2, name: 'Wireless Keyboard', price: 89.99, originalPrice: 129.99, image: key, rating: 4.7, reviews: 256 },
        { id: 3, name: 'Smart Watch', price: 199.99, originalPrice: 299.99, image: tv, rating: 4.6, reviews: 89 },
        { id: 4, name: 'Bluetooth Speaker', price: 39.99, originalPrice: 59.99, image: spe, rating: 4.4, reviews: 178 }
    ];

    const categories = [
        { name: 'Electronics', icon: '📱', color: 'bg-blue-100 text-blue-600' },
        { name: 'Fashion', icon: '👕', color: 'bg-pink-100 text-pink-600' },
        { name: 'Home', icon: '🏠', color: 'bg-green-100 text-green-600' },
        { name: 'Sports', icon: '⚽', color: 'bg-orange-100 text-orange-600' },
        { name: 'Books', icon: '📚', color: 'bg-purple-100 text-purple-600' },
        { name: 'Beauty', icon: '💄', color: 'bg-red-100 text-red-600' }
    ];

    const bestSellingProducts = [
        { id: 5, name: 'Winter Jacket', price: 129.99, image: jackat, rating: 4.8, reviews: 342 },
        { id: 6, name: 'Leather Bag', price: 89.99, image: Bag, rating: 4.6, reviews: 156 },
        { id: 7, name: 'Gaming Mouse', price: 59.99, image: mouse, rating: 4.7, reviews: 234 },
        { id: 8, name: 'Office Chair', price: 299.99, image: chair, rating: 4.5, reviews: 98 }
    ];

    const exploreProducts = [
        { id: 9, name: 'Premium Headset', price: 149.99, image: '/api/placeholder/300/300', rating: 4.9, reviews: 167 },
        { id: 10, name: 'Camera Lens', price: 299.99, image: '/api/placeholder/300/300', rating: 4.7, reviews: 89 },
        { id: 11, name: 'Laptop Stand', price: 49.99, image: '/api/placeholder/300/300', rating: 4.5, reviews: 123 },
        { id: 12, name: 'Wireless Router', price: 79.99, image: '/api/placeholder/300/300', rating: 4.6, reviews: 201 },
        { id: 13, name: 'Gaming Chair', price: 399.99, image: '/api/placeholder/300/300', rating: 4.8, reviews: 145 },
        { id: 14, name: 'Smart Light', price: 29.99, image: '/api/placeholder/300/300', rating: 4.4, reviews: 278 },
        { id: 15, name: 'Controller Pro', price: 89.99, image: '/api/placeholder/300/300', rating: 4.7, reviews: 189 },
        { id: 16, name: 'Winter Coat', price: 159.99, image: '/api/placeholder/300/300', rating: 4.6, reviews: 156 }
    ];

    const newArrivals = [
        { id: 17, name: 'Smart Display', price: 199.99, image: '/api/placeholder/300/300', isNew: true },
        { id: 18, name: 'VR Headset', price: 399.99, image: '/api/placeholder/150/150', isNew: true },
        { id: 19, name: 'Fitness Tracker', price: 99.99, image: '/api/placeholder/150/150', isNew: true }
    ];

    // const [timeLeft, setTimeLeft] = useState({
    //     days: 3,
    //     hours: 23,
    //     minutes: 19,
    //     seconds: 56
    // });

    useEffect(() => {
        // Set target date (3 days from now for demo)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 3);
        targetDate.setHours(23, 19, 56, 0);

        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds
                });
            }
        };

        // Initial call
        updateCountdown();

        // Update every second
        const timer = setInterval(updateCountdown, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, []);


    // Slider state
    const [currentSlide, setCurrentSlide] = useState(0);

    // Sample banner images data
    const bannerImages = [
        {
            id: 1,
            src: "/",
            title: "Up to 70% OFF",
            subtitle: "Limited time offer - Don't miss out!",
            alt: "Flash Sale Banner 1"
        },
        {
            id: 2,
            src: "/",
            title: "Mega Sale Event",
            subtitle: "Extra 50% off on selected items!",
            alt: "Flash Sale Banner 2"
        },
        {
            id: 3,
            src: "/",
            title: "Weekend Special",
            subtitle: "Free shipping on all orders!",
            alt: "Flash Sale Banner 3"
        },
        {
            id: 4,
            src: "/",
            title: "Best Deals",
            subtitle: "Lowest prices guaranteed!",
            alt: "Flash Sale Banner 4"
        }
    ];
    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    };
    const ProductCard = ({ product, showOriginalPrice = false, showActions = false }) => (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">

            <div onClick={() => viewProductDetails(product)} className="relative overflow-hidden rounded-t-lg">

                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <img className='text-gray-400 text-sm' src={product.image} alt={product.name} />

                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 mb-2">
                        <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                        onClick={() => viewProductDetails(product)}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
                    >
                        <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                </div>
                {showActions && (
                    <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={() => handleEditProduct(product)}
                            className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 mb-2"
                        >
                            <Edit className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                )}

            </div>
            <div className="p-4">

                <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating || 4.5)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-1">({product.reviews || 0})</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        {showOriginalPrice && product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                    </div>
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors duration-300"
                    >
                        Add to Cart
                    </button>
                </div>

            </div>

        </div>
    );
    // Navigation functions
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    };

    // Auto slide functionality
    useEffect(() => {
        const slideTimer = setInterval(() => {
            nextSlide();
        }, 5000); // Auto slide every 5 seconds

        return () => clearInterval(slideTimer);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };


    if (showProductDetails && selectedProduct) {
        return (
            <ProductDetailsPage
                product={selectedProduct}
                onBack={goBackToHome}
                onAddToCart={addToCart}
                relatedProducts={[...flashSaleProducts, ...bestSellingProducts, ...exploreProducts]}
            />
        );
    }


    return (

        <div className="min-h-screen bg-gray-50">
            {/* Add Product Modal */}
            {isAddProductModalOpen && (
                <div className="fixed inset-0 backdrop-blur-sm bg-transparent border border-red-500 flex items-center justify-center z-50 p-4">

                    <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">
                                {isEditMode ? 'Edit Product' : 'Add New Product'}
                            </h2>
                            <button
                                onClick={() => {
                                    setIsAddProductModalOpen(false);
                                    setIsEditMode(false);
                                    setEditingProduct(null);
                                    setNewProduct({
                                        id: '',
                                        name: '',
                                        price: '',
                                        originalPrice: '',
                                        category: '',
                                        rating: 4.5,
                                        reviews: 0,
                                        image: '',
                                        description: ''
                                    });
                                }}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                                <input
                                    type="text"
                                    value={newProduct.name}
                                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter product name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                <input
                                    type="number"
                                    value={newProduct.price}
                                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter price"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Original Price (Optional)</label>
                                <input
                                    type="number"
                                    value={newProduct.originalPrice}
                                    onChange={(e) => setNewProduct({ ...newProduct, originalPrice: e.target.value })}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter original price"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select
                                    value={newProduct.category}
                                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Home">Home</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Books">Books</option>
                                    <option value="Beauty">Beauty</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    value={newProduct.description}
                                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter product description"
                                    rows="3"
                                />
                            </div>

                            <div className="flex space-x-3 pt-4">
                                <button
                                    type="button"
                                    onClick={isEditMode ? handleUpdateProduct : handleAddProduct}
                                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-medium transition-colors duration-300"
                                >
                                    {isEditMode ? 'Update Product' : 'Add Product'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsAddProductModalOpen(false);
                                        setIsEditMode(false);
                                        setEditingProduct(null);
                                    }}
                                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-md font-medium transition-colors duration-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Cart Modal */}
            {isCartOpen && (
                <div className="fixed inset-0 backdrop-blur-sm bg-transparent border border-red-500 flex items-center justify-center z-50 p-4">
                    <ScrollFadeIn>
                        <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">Shopping Cart ({getTotalItems()})</h2>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {cart.length === 0 ? (
                                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                            ) : (
                                <>
                                    <div className="space-y-4 mb-6">
                                        {cart.map((item) => (
                                            <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                                                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                                                    <span className="text-xs text-gray-400">IMG</span>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-medium text-sm">{item.name}</h3>
                                                    <p className="text-red-500 font-bold">${item.price}</p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="w-8 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-lg font-bold">Total: ${getTotalPrice()}</span>
                                        </div>
                                        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-medium transition-colors duration-300">
                                            Checkout
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </ScrollFadeIn>
                </div>
            )}
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <ScrollFadeIn>
                    <div className="bg-black text-white text-center py-2 text-sm">
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <span className="ml-2 underline cursor-pointer">ShopNow</span>
                        <select className="bg-black text-white ml-4 text-sm border-none outline-none">
                            <option>English</option>
                        </select>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="flex items-center">
                                <div className="text-2xl font-bold text-gray-900">Sr-Shop</div>
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex space-x-8">
                                <Link to="/" className="text-gray-700 hover:text-red-500 transition-colors">Home</Link>
                                <Link to="/ExclusiveContactPage" className="text-gray-700 hover:text-red-500 transition-colors">Contact</Link>
                                <Link to="/ExclusiveAbout" className="text-gray-700 hover:text-red-500 transition-colors">About</Link>
                                <Link to="/ExclusiveEcommerce" className="text-gray-700 hover:text-red-500 transition-colors">Sign Up</Link>
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
                                <button
                                    onClick={() => setIsAddProductModalOpen(true)}
                                    className="hidden sm:flex bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300 items-center"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Product
                                </button>

                                <button onClick={() => window.location.href = '/ExclusiveEcommerce'} className="text-gray-700 hover:text-red-500 transition-colors">
                                    <User className="w-6 h-6" />
                                </button>

                                <button
                                    onClick={() => setIsCartOpen(true)}
                                    className="text-gray-700 hover:text-red-500 transition-colors relative"
                                >
                                    <ShoppingCart className="w-6 h-6" />
                                    {getTotalItems() > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            {getTotalItems()}
                                        </span>
                                    )}
                                </button>

                                {/* Mobile Menu Toggle */}
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
                                    <Link to="/" className="text-gray-700 hover:text-red-500">Home</Link>
                                    <Lin to="/ExclusiveContactPage" className="text-gray-700 hover:text-red-500">Contact</Lin>
                                    <Link to="/ExclusiveAbout" className="text-gray-700 hover:text-red-500">About</Link>
                                    <Link to="/ExclusiveEcommerce" className="text-gray-700 hover:text-red-500">Sign Up</Link>
                                    <button
                                        onClick={() => setIsAddProductModalOpen(true)}
                                        className="w-full text-left bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
                                    >
                                        <Plus className="w-4 h-4 inline mr-2" />
                                        Add Product
                                    </button>
                                </nav>
                            </div>
                        </div>
                    )}
                </ScrollFadeIn>
            </header>


            {/* Hero Section */}
            <div className="w-full bg-gray-50">
                <ScrollFadeIn>

                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row">
                            {/* Sidebar Navigation */}
                            <div className="w-full lg:w-64 bg-white border-r border-gray-200 p-4 lg:p-6">
                                <nav className="space-y-1">
                                    {ccategories.map((category, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between py-3 px-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer transition-all duration-200 group"
                                        >
                                            <span className="text-sm lg:text-base font-medium">{category}</span>
                                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                        </div>
                                    ))}
                                </nav>
                            </div>

                            {/* Main Banner Area */}
                            <div className="flex-1 p-4 lg:p-6">
                                <div
                                    className={`relative h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500`}
                                    style={{
                                        backgroundImage: `url(${apple})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                        {slides.map((slide) => (
                                            <button
                                                key={slide.id}
                                                onClick={() => ssetCurrentSlide(slide.id)}
                                                className={`h-2 rounded-full transition-all duration-300 ${slide.id === ccurrentSlide
                                                    ? 'bg-red-500 w-6'
                                                    : 'bg-white/40 hover:bg-white/60 w-2'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </ScrollFadeIn>

            </div>




            {/* My Products Section */}
            {products.length > 0 && (
                <ScrollFadeIn>
                    <section className="py-16 bg-gray-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <div className="flex items-center mb-2">
                                        <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
                                        <h2 className="text-red-500 font-semibold">My Store</h2>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900">My Products</h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product} showOriginalPrice={true} showActions={true} />
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollFadeIn>
            )}

            <section className="py-16">
                <ScrollFadeIn>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gray-50 p-8">
                            <div className="max-w-6xl mx-auto">
                                {/* Flash Sales Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">

                                    <div>
                                        <div className="flex items-center mb-2">
                                            <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
                                            <h2 className="text-red-500 font-semibold">Today's</h2>
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900">Flash Sales</h3>
                                    </div>
                                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                                        <div className="flex space-x-2 text-center">
                                            <div className="bg-white rounded-lg p-3 shadow-md">
                                                <div className="text-2xl font-bold text-gray-900">
                                                    {formatTime(timeLeft.days)}
                                                </div>
                                                <div className="text-xs text-gray-500">Days</div>
                                            </div>
                                            <div className="text-2xl font-bold text-red-500 self-center">:</div>
                                            <div className="bg-white rounded-lg p-3 shadow-md">
                                                <div className="text-2xl font-bold text-gray-900">
                                                    {formatTime(timeLeft.hours)}
                                                </div>
                                                <div className="text-xs text-gray-500">Hours</div>
                                            </div>
                                            <div className="text-2xl font-bold text-red-500 self-center">:</div>
                                            <div className="bg-white rounded-lg p-3 shadow-md">
                                                <div className="text-2xl font-bold text-gray-900">
                                                    {formatTime(timeLeft.minutes)}
                                                </div>
                                                <div className="text-xs text-gray-500">Minutes</div>
                                            </div>
                                            <div className="text-2xl font-bold text-red-500 self-center">:</div>
                                            <div className="bg-white rounded-lg p-3 shadow-md">
                                                <div className="text-2xl font-bold text-gray-900">
                                                    {formatTime(timeLeft.seconds)}
                                                </div>
                                                <div className="text-xs text-gray-500">Seconds</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Image Slider Section */}
                                <div className="w-full">
                                    <ScrollFadeIn>
                                        <div className="relative overflow-hidden rounded-lg shadow-lg">
                                            {/* Image Container */}
                                            <div
                                                className="flex transition-transform duration-500 ease-in-out"
                                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                            >
                                                {bannerImages.map((image, index) => (
                                                    <div key={image.id} className="w-full flex-shrink-0 relative">
                                                        <img
                                                            src={image.src}
                                                            alt={image.alt}
                                                            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                                                        />
                                                        {/* Overlay content */}
                                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                                                            <div className="text-center text-white">
                                                                <h4 className="text-2xl sm:text-4xl font-bold mb-2">{image.title}</h4>
                                                                <p className="text-sm sm:text-lg">{image.subtitle}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Slide Indicators */}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                {bannerImages.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => goToSlide(index)}
                                                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-red-500' : 'bg-white bg-opacity-50'
                                                            }`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Navigation Arrows on Image */}
                                            <button
                                                onClick={prevSlide}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                                            >
                                                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={nextSlide}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                                            >
                                                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </ScrollFadeIn>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <section className="py-16">
                            <ScrollFadeIn>
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <div className="flex items-center mb-2">
                                                <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
                                                <h2 className="text-red-500 font-semibold">This Days</h2>
                                            </div>
                                            <h3 className="text-3xl font-bold text-gray-900">Best Selling Products</h3>
                                        </div>
                                        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300">
                                            View All
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                        {flashSaleProducts.map((product) => (
                                            <ProductCard key={product.id} product={product} showOriginalPrice={true} />
                                        ))}
                                    </div>
                                </div>
                            </ScrollFadeIn>
                        </section>


                        {/* View All Button */}
                        <div className="text-center mt-8">
                            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
                                View All Products
                            </button>
                        </div>
                    </div>
                </ScrollFadeIn>
            </section>

            {/* Browse by Category */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollFadeIn>

                        <div>
                            <div className="flex items-center mb-2">
                                <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
                                <h2 className="text-red-500 font-semibold">This Category</h2>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">Browse By Category</h3>
                        </div>
                        <br />
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className={`${category.color} rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer group`}
                                >
                                    <div className="text-3xl mb-2">{category.icon}</div>
                                    <div className="font-medium">{category.name}</div>
                                </div>
                            ))}
                        </div>
                    </ScrollFadeIn>

                </div>
            </section>

            {/* Best Selling Products */}
            <section className="py-16">
                <ScrollFadeIn>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="flex items-center mb-2">
                                    <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
                                    <h2 className="text-red-500 font-semibold">This Month</h2>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">Best Selling Products</h3>
                            </div>
                            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300">
                                View All
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {bestSellingProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </ScrollFadeIn>

            </section>

            {/* Music Experience Banner */}
            <section className="py-16">  <ScrollFadeIn> <div className="flex min-h-screen flex-col-reverse md:flex-row items-center justify-center bg-black text-white p-6 md:p-12">


                {/* Left Side */}
                <div className="flex-1 w-full flex flex-col items-center md:items-start space-y-6">
                    <p className="text-green-500 font-semibold text-sm">Categories</p>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
                        Enhance Your <br /> Music Experience
                    </h1>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-black">
                        <div className="bg-white rounded-full px-5 py-3 text-center w-20">
                            <p className="text-lg font-bold">{String(timeLeft.hours).padStart(2, '0')}</p>
                            <p className="text-xs font-medium">Hours</p>
                        </div>
                        <div className="bg-white rounded-full px-5 py-3 text-center w-20">
                            <p className="text-lg font-bold">{String(timeLeft.days).padStart(2, '0')}</p>
                            <p className="text-xs font-medium">Days</p>
                        </div>
                        <div className="bg-white rounded-full px-5 py-3 text-center w-20">
                            <p className="text-lg font-bold">{String(timeLeft.minutes).padStart(2, '0')}</p>
                            <p className="text-xs font-medium">Minutes</p>
                        </div>
                        <div className="bg-white rounded-full px-5 py-3 text-center w-20">
                            <p className="text-lg font-bold">{String(timeLeft.seconds).padStart(2, '0')}</p>
                            <p className="text-xs font-medium">Seconds</p>
                        </div>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded">
                        Buy Now!
                    </button>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1 w-full flex justify-center mb-10 md:mb-0">
                    <img
                        src={jbl2}
                        alt="Speaker"
                        className="w-full max-w-xs md:max-w-md lg:max-w-lg"
                    />
                </div>
            </div>
            </ScrollFadeIn>

            </section>
            {/* Explore Our Products */}
            <section className="py-16">
                <ScrollFadeIn>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollFadeIn>                        <div className="flex items-center mb-8">
                            <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
                            <div>
                                <h2 className="text-red-500 font-semibold mb-2">Our Products</h2>
                                <h3 className="text-3xl font-bold text-gray-900">Explore Our Products</h3>
                            </div>
                        </div>
                        </ScrollFadeIn>
                        <ScrollFadeIn>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {exploreProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </ScrollFadeIn>
                        <ScrollFadeIn>

                            <div className="text-center mt-8">
                                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
                                    View All Products
                                </button>
                            </div>
                        </ScrollFadeIn>

                    </div>
                </ScrollFadeIn>

            </section>

            {/* New Arrival */}
            <section className="py-16 bg-white">
                <ScrollFadeIn>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center mb-8">
                            <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
                            <div>
                                <h2 className="text-red-500 font-semibold mb-2">Featured</h2>
                                <h3 className="text-3xl font-bold text-gray-900">New Arrival</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            <div className="lg:col-span-2 bg-black text-white rounded-lg p-8 relative overflow-hidden">
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold mb-4">PlayStation 5</h4>
                                    <p className="text-gray-300 mb-6">Black and White version of the PS5 coming out on sale.</p>
                                    <button className="text-white border-b border-white pb-1 hover:border-gray-300 transition-colors">
                                        Shop Now
                                    </button>
                                </div>
                                <div className="absolute right-0 bottom-0 w-64 h-64 bg-gray-800 rounded-full opacity-50"></div>
                            </div>
                            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-gray-900 text-white rounded-lg p-6 relative">
                                    <div className="relative z-10">
                                        <h4 className="text-xl font-bold mb-2">Women's Collections</h4>
                                        <p className="text-gray-300 text-sm mb-4">Featured woman collections that give you another vibe.</p>
                                        <button className="text-white border-b border-white pb-1 text-sm hover:border-gray-300 transition-colors">
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-rows-2 gap-6">
                                    <div className="bg-gray-900 text-white rounded-lg p-4 relative">
                                        <h4 className="text-lg font-bold mb-2">Speakers</h4>
                                        <p className="text-gray-300 text-xs mb-2">Amazon wireless speakers</p>
                                        <button className="text-white border-b border-white pb-1 text-xs hover:border-gray-300 transition-colors">
                                            Shop Now
                                        </button>
                                    </div>
                                    <div className="bg-gray-900 text-white rounded-lg p-4 relative">
                                        <h4 className="text-lg font-bold mb-2">Perfume</h4>
                                        <p className="text-gray-300 text-xs mb-2">GUCCI INTENSE OUD EDP</p>
                                        <button className="text-white border-b border-white pb-1 text-xs hover:border-gray-300 transition-colors">
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollFadeIn>

            </section>

            {/* Services */}
            <section className="py-16">
                <ScrollFadeIn>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl">🚚</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">FREE AND FAST DELIVERY</h4>
                                <p className="text-gray-600">Free delivery for all orders over $140</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl">🎧</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">24/7 CUSTOMER SERVICE</h4>
                                <p className="text-gray-600">Friendly 24/7 customer support</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl">🛡️</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">MONEY BACK GUARANTEE</h4>
                                <p className="text-gray-600">We return money within 30 days</p>
                            </div>
                        </div>
                    </div>
                </ScrollFadeIn>

            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-16">
                <ScrollFadeIn>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            <div>
                                <h5 className="text-xl font-bold mb-4">Sr-Shop</h5>
                                <p className="text-gray-400 mb-4">Subscribe</p>
                                <p className="text-gray-400 text-sm mb-4">Get 10% off your first order</p>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-transparent border border-gray-600 rounded-l-md px-3 py-2 flex-1 text-sm focus:outline-none focus:border-white"
                                    />
                                    <button className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-200 transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-4">Support</h5>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <p>5TH FLOOR. FLAT-501.
                                        Prutidham Heists, Wing-A, Modi Mahollo, A. K. Road, C.S
                                        ΝΟ-1685 ΤΟ 1692.
                                        Surat-395 008.</p>
                                    <p>srrajput221221@gmail.com</p>
                                    <p>+91 9510190352</p>
                                </div>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-4">Account</h5>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <a href="#" className="block hover:text-white transition-colors">My Account</a>
                                    <a href="#" className="block hover:text-white transition-colors">Login / Register</a>
                                    <a href="#" className="block hover:text-white transition-colors">Cart</a>
                                    <a href="#" className="block hover:text-white transition-colors">Wishlist</a>
                                    <a href="#" className="block hover:text-white transition-colors">Shop</a>
                                </div>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-4">Quick Link</h5>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
                                    <a href="#" className="block hover:text-white transition-colors">Terms Of Use</a>
                                    <a href="#" className="block hover:text-white transition-colors">FAQ</a>
                                    <a href="#" className="block hover:text-white transition-colors">Contact</a>
                                </div>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-4">Download App</h5>
                                <p className="text-xs text-gray-400 mb-4">Save $3 with App New User Only</p>
                                <div className="flex space-x-2 mb-4">
                                    <div className="w-20 h-20 bg-gray-800 rounded flex items-center justify-center">
                                        <span className="text-xs">QR Code</span>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <div className="w-24 h-8 bg-gray-800 rounded flex items-center justify-center">
                                            <span className="text-xs">Google Play</span>
                                        </div>
                                        <div className="w-24 h-8 bg-gray-800 rounded flex items-center justify-center">
                                            <span className="text-xs">App Store</span>
                                        </div>
                                    </div>
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
};

export default EcommerceHomepage;
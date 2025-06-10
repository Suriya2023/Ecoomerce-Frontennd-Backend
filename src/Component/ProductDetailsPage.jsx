import React, { useState } from 'react';
import { Star, Heart, Eye, ShoppingCart, Minus, Plus, ArrowLeft, Truck, Shield, Headphones, X, Trash2 } from 'lucide-react';

const ProductDetailsPage = ({ product, onBack, onAddToCart, relatedProducts = [] }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('red');
    const [selectedSize, setSelectedSize] = useState('M');
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const productImages = [
        '/api/placeholder/400/400',
        '/api/placeholder/400/400',
        '/api/placeholder/400/400',
        '/api/placeholder/400/400'
    ];
    const removeFromCart = (index) => {
        setCart(prevCart => prevCart.filter((_, i) => i !== index));
    };

    const colors = ['red', 'blue', 'black', 'white'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];


    const handleAddToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item =>
                item.id === product.id &&
                item.selectedColor === selectedColor &&
                item.selectedSize === selectedSize
            );

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id &&
                        item.selectedColor === selectedColor &&
                        item.selectedSize === selectedSize
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity, selectedColor, selectedSize }];
            }
        });

        // Success message show karo
        alert('Product added to cart!');
    };

    const ProductCard = ({ product }) => (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
            <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Product Image</span>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 mb-2">
                        <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                        <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                </div>
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
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    <button
                        onClick={() => onAddToCart(product)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors duration-300"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <button
                            onClick={onBack}
                            className="flex items-center text-gray-700 hover:text-red-500 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Shop
                        </button>
                        <div className="text-2xl font-bold text-gray-900">Sr-Shop</div>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-700 hover:text-red-500 transition-colors">
                                <Heart className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => setShowCart(true)}
                                className="text-gray-700 hover:text-red-500 transition-colors relative"
                            >
                                <ShoppingCart className="w-6 h-6" />
                                {cart.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {cart.reduce((sum, item) => sum + item.quantity, 0)}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center text-sm text-gray-500">
                    <span>Home</span>
                    <span className="mx-2">/</span>
                    <span>{product.category || 'Products'}</span>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">{product.name}</span>
                </div>
            </div>

            {/* Product Details */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div>
                        <div className="mb-4">
                            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                                <span className="text-gray-400">Main Product Image</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {productImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`w-full h-20 bg-gray-200 rounded-lg flex items-center justify-center border-2 ${selectedImage === index ? 'border-red-500' : 'border-transparent'
                                        }`}
                                >
                                    <span className="text-gray-400 text-xs">IMG {index + 1}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

                        {/* Rating */}
                        <div className="flex items-center mb-4">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < Math.floor(product.rating || 4.5)
                                            ? 'text-yellow-400 fill-current'
                                            : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500 ml-2">({product.reviews || 0} Reviews)</span>
                            <span className="text-sm text-green-500 ml-4">In Stock</span>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <div className="flex items-center space-x-4">
                                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {product.description || "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."}
                        </p>

                        {/* Color Selection */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Colors:</h3>
                            <div className="flex space-x-3">
                                {colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-gray-900' : 'border-gray-300'
                                            }`}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Size:</h3>
                            <div className="flex space-x-3">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 text-sm border rounded-md ${selectedSize === size
                                            ? 'border-red-500 text-red-500'
                                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-2 hover:bg-gray-100"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-2 hover:bg-gray-100"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium transition-colors duration-300"
                            >
                                Add To Cart
                            </button>
                            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50">
                                <Heart className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Delivery Info */}
                        <div className="border border-gray-300 rounded-lg p-4 space-y-4">
                            <div className="flex items-center">
                                <Truck className="w-5 h-5 mr-3" />
                                <div>
                                    <p className="font-medium">Free Delivery</p>
                                    <p className="text-sm text-gray-500">Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Shield className="w-5 h-5 mr-3" />
                                <div>
                                    <p className="font-medium">Return Delivery</p>
                                    <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center mb-8">
                            <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
                            <h2 className="text-3xl font-bold text-gray-900">Related Item</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.slice(0, 4).map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
            {/* Cart Sidebar */}
            {showCart && (
                <div className="fixed inset-0 z-50 overflow-hidden">
                    <div className="absolute inset-0 bg-transparent-sm bg-opacity-50" onClick={() => setShowCart(false)}></div>
                    <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold">Shopping Cart</h2>
                                <button onClick={() => setShowCart(false)}>
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {cart.length === 0 ? (
                                <p className="text-gray-500">Your cart is empty</p>
                            ) : (
                                <>
                                    <div className="space-y-4 mb-6">
                                        {cart.map((item, index) => (
                                            <div key={index} className="flex items-center space-x-4 border-b pb-4">
                                                <div className="w-16 h-16 bg-gray-200 rounded"></div>
                                                <div className="flex-1">
                                                    <h3 className="font-medium">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">
                                                        {item.selectedColor} / {item.selectedSize}
                                                    </p>
                                                    <p className="text-sm">${item.price} x {item.quantity}</p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(index)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t pt-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-lg font-bold">Total: ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
                                        </div>
                                        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium">
                                            Checkout
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetailsPage;
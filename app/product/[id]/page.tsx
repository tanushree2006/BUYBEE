"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Heart, ShoppingCart, Minus, Plus, Share2, Truck, Shield, RotateCcw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const product = {
  id: 1,
  name: "Wireless Bluetooth Headphones Premium Pro",
  price: 6799,
  originalPrice: 8999,
  images: [
    "/placeholder.svg?height=500&width=500&text=Headphones+Main",
    "/placeholder.svg?height=500&width=500&text=Headphones+Side",
    "/placeholder.svg?height=500&width=500&text=Headphones+Back",
    "/placeholder.svg?height=500&width=500&text=Headphones+Case",
  ],
  rating: 4.5,
  reviews: 128,
  category: "Electronics",
  badge: "Best Seller",
  badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
  inStock: true,
  stockCount: 15,
  description:
    "Experience premium sound quality with these wireless Bluetooth headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for music lovers and professionals. Immerse yourself in crystal-clear audio with deep bass and crisp highs.",
  features: [
    "Active Noise Cancellation Technology",
    "30-hour ultra-long battery life",
    "Quick charge: 5 min = 3 hours playback",
    "Premium leather ear cups for comfort",
    "Bluetooth 5.0 connectivity",
    "Built-in HD microphone for calls",
    "Foldable design for portability",
    "Multi-device pairing support",
  ],
  specifications: {
    "Driver Size": "40mm Dynamic",
    "Frequency Response": "20Hz - 20kHz",
    Impedance: "32 ohms",
    Weight: "280g",
    Connectivity: "Bluetooth 5.0, 3.5mm jack",
    Battery: "30 hours playback",
    "Charging Time": "2 hours full charge",
    "Noise Cancellation": "Active ANC up to 30dB",
  },
}

const relatedProducts = [
  {
    id: 2,
    name: "Smart Fitness Watch Ultra",
    price: 15999,
    image: "/placeholder.svg?height=200&width=200&text=Smart+Watch",
    rating: 4.8,
    badgeColor: "bg-gradient-to-r from-green-400 to-blue-500",
  },
  {
    id: 7,
    name: "Bluetooth Speaker Portable",
    price: 7999,
    image: "/placeholder.svg?height=200&width=200&text=Speaker",
    rating: 4.2,
    badgeColor: "bg-gradient-to-r from-cyan-400 to-blue-500",
  },
  {
    id: 9,
    name: "Gaming Mechanical Keyboard RGB",
    price: 8999,
    image: "/placeholder.svg?height=200&width=200&text=Keyboard",
    rating: 4.6,
    badgeColor: "bg-gradient-to-r from-purple-400 to-pink-500",
  },
  {
    id: 10,
    name: "Wireless Gaming Mouse Pro",
    price: 4999,
    image: "/placeholder.svg?height=200&width=200&text=Gaming+Mouse",
    rating: 4.4,
    badgeColor: "bg-gradient-to-r from-indigo-400 to-purple-500",
  },
]

const reviews = [
  {
    id: 1,
    name: "Arjun K.",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Absolutely amazing sound quality! The noise cancellation works like magic. Perfect for my daily commute and work calls. Highly recommended! 🎧✨",
  },
  {
    id: 2,
    name: "Priya M.",
    rating: 4,
    date: "2024-01-10",
    comment:
      "Great headphones overall. Battery life is incredible - lasts the whole week! Only minor complaint is they're slightly heavy for long use.",
  },
  {
    id: 3,
    name: "Rohit S.",
    rating: 5,
    date: "2024-01-05",
    comment:
      "Best purchase I've made this year! Crystal clear audio, comfortable fit, and the quick charge feature is a lifesaver. Worth every rupee! 💯",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("standard")

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, Math.min(product.stockCount, quantity + change)))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-purple-600 transition-colors">
            Products
          </Link>
          <span>/</span>
          <Link href={`/category/${product.category}`} className="hover:text-purple-600 transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl border-0 shadow-2xl bg-white">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <Badge
                  className={`absolute top-4 left-4 ${product.badgeColor} text-white border-0 font-bold px-4 py-2`}
                >
                  {product.badge} ⭐
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-xl border-3 transition-all duration-300 ${
                    selectedImage === index
                      ? "border-purple-500 shadow-lg scale-105"
                      : "border-transparent hover:border-purple-300"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">
                  {product.rating} ({product.reviews} reviews) ⭐
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
              )}
              <Badge className="bg-gradient-to-r from-red-400 to-pink-500 text-white border-0 font-bold px-3 py-1">
                Save ₹{(product.originalPrice! - product.price).toLocaleString()} 💰
              </Badge>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Product Options */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold mb-2 block text-gray-800">Color</label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger className="w-48 bg-white border-purple-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="black">Midnight Black</SelectItem>
                    <SelectItem value="white">Pearl White</SelectItem>
                    <SelectItem value="silver">Space Silver</SelectItem>
                    <SelectItem value="blue">Ocean Blue</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-bold mb-2 block text-gray-800">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-48 bg-white border-purple-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Fit</SelectItem>
                    <SelectItem value="large">Large Fit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-bold mb-2 block text-gray-800">Quantity</label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="border-purple-200 hover:bg-purple-50 rounded-full"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-16 text-center font-bold text-xl text-gray-800">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stockCount}
                    className="border-purple-200 hover:bg-purple-50 rounded-full"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-green-600 mt-2 font-medium">✅ {product.stockCount} items in stock</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-full py-4 text-lg font-bold"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart 🛒
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-pink-200 hover:bg-pink-50 rounded-full bg-transparent"
              >
                <Heart className="h-5 w-5 mr-2 text-pink-500" />
                Wishlist
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-200 hover:bg-blue-50 rounded-full bg-transparent"
              >
                <Share2 className="h-5 w-5 mr-2 text-blue-500" />
                Share
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-purple-100">
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <Truck className="h-6 w-6 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <Shield className="h-6 w-6 text-green-500" />
                <span className="text-sm font-medium text-gray-700">2 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <RotateCcw className="h-6 w-6 text-purple-500" />
                <span className="text-sm font-medium text-gray-700">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-md border-0 shadow-lg">
            <TabsTrigger
              value="description"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              Reviews ({product.reviews})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card className="bg-white/80 backdrop-blur-md border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <Sparkles className="h-6 w-6 mr-2 text-purple-500" />
                  Product Description
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">{product.description}</p>
                <h4 className="font-bold mb-4 text-xl text-gray-800">✨ Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card className="bg-white/80 backdrop-blur-md border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">🔧 Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between py-3 px-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border-l-4 border-purple-500"
                    >
                      <span className="font-bold text-gray-800">{key}:</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card className="bg-white/80 backdrop-blur-md border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">💬 Customer Reviews</h3>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-full">
                    Write a Review ✍️
                  </Button>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-purple-100 pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <span className="font-bold text-gray-800">{review.name}</span>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            ✨ Related Products You'll Love
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-md border-0"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <Link href={`/product/${relatedProduct.id}`}>
                      <h3 className="font-bold mb-2 hover:text-purple-600 transition-colors text-gray-800">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-800">₹{relatedProduct.price.toLocaleString()}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm ml-1 text-gray-600">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Grid, List, Star, Heart, ShoppingCart, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const categories = {
  "1": {
    name: "Electronics",
    description: "Premium technology and cutting-edge electronics",
    image: "/placeholder.svg?height=400&width=1200&text=Premium+Electronics",
    products: [
      {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 12999,
        originalPrice: 16999,
        image: "/placeholder.svg?height=300&width=300&text=Premium+Headphones",
        rating: 4.8,
        reviews: 342,
        badge: "Bestseller",
        badgeColor: "bg-gradient-to-r from-amber-600 to-amber-700",
      },
      {
        id: 2,
        name: "Luxury Smart Watch",
        price: 28999,
        originalPrice: 34999,
        image: "/placeholder.svg?height=300&width=300&text=Luxury+Watch",
        rating: 4.9,
        reviews: 189,
        badge: "Premium",
        badgeColor: "bg-gradient-to-r from-slate-700 to-slate-800",
      },
      {
        id: 5,
        name: "Professional Camera Lens",
        price: 45999,
        originalPrice: 52999,
        image: "/placeholder.svg?height=300&width=300&text=Camera+Lens",
        rating: 4.7,
        reviews: 167,
        badge: "Pro",
        badgeColor: "bg-gradient-to-r from-stone-600 to-stone-700",
      },
      {
        id: 7,
        name: "Premium Bluetooth Speaker",
        price: 15999,
        originalPrice: 19999,
        image: "/placeholder.svg?height=300&width=300&text=Premium+Speaker",
        rating: 4.6,
        reviews: 298,
        badge: "Audio",
        badgeColor: "bg-gradient-to-r from-blue-700 to-blue-800",
      },
      {
        id: 9,
        name: "Mechanical Keyboard Luxury",
        price: 18999,
        originalPrice: 23999,
        image: "/placeholder.svg?height=300&width=300&text=Luxury+Keyboard",
        rating: 4.8,
        reviews: 234,
        badge: "Gaming",
        badgeColor: "bg-gradient-to-r from-emerald-700 to-emerald-800",
      },
    ],
  },
  "2": {
    name: "Fashion",
    description: "Luxury fashion and designer collections",
    image: "/placeholder.svg?height=400&width=1200&text=Luxury+Fashion",
    products: [
      {
        id: 16,
        name: "Designer Silk Dress",
        price: 8999,
        originalPrice: 12999,
        image: "/placeholder.svg?height=300&width=300&text=Silk+Dress",
        rating: 4.7,
        reviews: 156,
        badge: "Designer",
        badgeColor: "bg-gradient-to-r from-stone-600 to-stone-700",
      },
      {
        id: 17,
        name: "Cashmere Wool Sweater",
        price: 6999,
        originalPrice: 9999,
        image: "/placeholder.svg?height=300&width=300&text=Cashmere+Sweater",
        rating: 4.8,
        reviews: 203,
        badge: "Luxury",
        badgeColor: "bg-gradient-to-r from-amber-600 to-amber-700",
      },
      {
        id: 18,
        name: "Italian Leather Jacket",
        price: 24999,
        originalPrice: 32999,
        image: "/placeholder.svg?height=300&width=300&text=Leather+Jacket",
        rating: 4.9,
        reviews: 145,
        badge: "Italian",
        badgeColor: "bg-gradient-to-r from-gray-700 to-gray-800",
      },
      {
        id: 19,
        name: "Premium Denim Jeans",
        price: 7999,
        originalPrice: 10999,
        image: "/placeholder.svg?height=300&width=300&text=Premium+Jeans",
        rating: 4.5,
        reviews: 312,
        badge: "Premium",
        badgeColor: "bg-gradient-to-r from-blue-700 to-blue-800",
      },
      {
        id: 21,
        name: "Designer Handbag",
        price: 15999,
        originalPrice: 21999,
        image: "/placeholder.svg?height=300&width=300&text=Designer+Handbag",
        rating: 4.8,
        reviews: 234,
        badge: "Designer",
        badgeColor: "bg-gradient-to-r from-rose-600 to-rose-700",
      },
      {
        id: 25,
        name: "Evening Gown",
        price: 18999,
        originalPrice: 25999,
        image: "/placeholder.svg?height=300&width=300&text=Evening+Gown",
        rating: 4.9,
        reviews: 89,
        badge: "Elegant",
        badgeColor: "bg-gradient-to-r from-purple-600 to-purple-700",
      },
      {
        id: 26,
        name: "Luxury Sneakers",
        price: 14999,
        originalPrice: 19999,
        image: "/placeholder.svg?height=300&width=300&text=Luxury+Sneakers",
        rating: 4.7,
        reviews: 267,
        badge: "Comfort",
        badgeColor: "bg-gradient-to-r from-blue-600 to-blue-700",
      },
      {
        id: 27,
        name: "Cashmere Coat",
        price: 32999,
        originalPrice: 42999,
        image: "/placeholder.svg?height=300&width=300&text=Cashmere+Coat",
        rating: 4.8,
        reviews: 134,
        badge: "Winter",
        badgeColor: "bg-gradient-to-r from-stone-700 to-stone-800",
      },
    ],
  },
  "3": {
    name: "Home & Garden",
    description: "Curated home essentials and garden accessories",
    image: "/placeholder.svg?height=400&width=1200&text=Designer+Home",
    products: [
      {
        id: 29,
        name: "Artisan Coffee Maker",
        price: 18999,
        originalPrice: 22999,
        image: "/placeholder.svg?height=300&width=300&text=Artisan+Coffee",
        rating: 4.6,
        reviews: 203,
        badge: "Artisan",
        badgeColor: "bg-gradient-to-r from-emerald-700 to-emerald-800",
      },
      {
        id: 30,
        name: "Premium Air Purifier",
        price: 25999,
        originalPrice: 31999,
        image: "/placeholder.svg?height=300&width=300&text=Air+Purifier",
        rating: 4.7,
        reviews: 234,
        badge: "Health",
        badgeColor: "bg-gradient-to-r from-green-600 to-green-700",
      },
    ],
  },
  "4": {
    name: "Sports",
    description: "Premium sports equipment and fitness gear",
    image: "/placeholder.svg?height=400&width=1200&text=Premium+Sports",
    products: [
      {
        id: 31,
        name: "Premium Yoga Mat",
        price: 4999,
        originalPrice: 6999,
        image: "/placeholder.svg?height=300&width=300&text=Premium+Yoga+Mat",
        rating: 4.6,
        reviews: 189,
        badge: "Wellness",
        badgeColor: "bg-gradient-to-r from-green-600 to-green-700",
      },
    ],
  },
  "5": {
    name: "Books",
    description: "Curated collection of premium books and literature",
    image: "/placeholder.svg?height=400&width=1200&text=Premium+Books",
    products: [
      {
        id: 40,
        name: "The Art of Luxury Living",
        price: 2999,
        originalPrice: 3999,
        image: "/placeholder.svg?height=300&width=300&text=Luxury+Living+Book",
        rating: 4.6,
        reviews: 189,
        badge: "Bestseller",
        badgeColor: "bg-gradient-to-r from-amber-600 to-amber-700",
      },
      {
        id: 41,
        name: "Modern Architecture Guide",
        price: 3499,
        originalPrice: 4499,
        image: "/placeholder.svg?height=300&width=300&text=Architecture+Book",
        rating: 4.5,
        reviews: 156,
        badge: "Design",
        badgeColor: "bg-gradient-to-r from-stone-600 to-stone-700",
      },
      {
        id: 42,
        name: "Culinary Masterpieces",
        price: 4999,
        originalPrice: 6999,
        image: "/placeholder.svg?height=300&width=300&text=Culinary+Book",
        rating: 4.8,
        reviews: 234,
        badge: "Chef's Choice",
        badgeColor: "bg-gradient-to-r from-emerald-600 to-emerald-700",
      },
      {
        id: 43,
        name: "Fashion Through Decades",
        price: 3999,
        originalPrice: 5499,
        image: "/placeholder.svg?height=300&width=300&text=Fashion+History",
        rating: 4.4,
        reviews: 167,
        badge: "Fashion",
        badgeColor: "bg-gradient-to-r from-rose-600 to-rose-700",
      },
      {
        id: 44,
        name: "Investment Strategies",
        price: 2499,
        originalPrice: 3499,
        image: "/placeholder.svg?height=300&width=300&text=Investment+Book",
        rating: 4.7,
        reviews: 298,
        badge: "Finance",
        badgeColor: "bg-gradient-to-r from-blue-600 to-blue-700",
      },
    ],
  },
  "6": {
    name: "Beauty",
    description: "Luxury beauty and premium skincare collections",
    image: "/placeholder.svg?height=400&width=1200&text=Luxury+Beauty",
    products: [
      {
        id: 50,
        name: "Luxury Skincare Set",
        price: 8999,
        originalPrice: 12999,
        image: "/placeholder.svg?height=300&width=300&text=Skincare+Set",
        rating: 4.8,
        reviews: 267,
        badge: "Premium",
        badgeColor: "bg-gradient-to-r from-rose-600 to-rose-700",
      },
      {
        id: 51,
        name: "Professional Makeup Kit",
        price: 12999,
        originalPrice: 17999,
        image: "/placeholder.svg?height=300&width=300&text=Makeup+Kit",
        rating: 4.7,
        reviews: 189,
        badge: "Pro",
        badgeColor: "bg-gradient-to-r from-purple-600 to-purple-700",
      },
      {
        id: 52,
        name: "Organic Face Serum",
        price: 4999,
        originalPrice: 6999,
        image: "/placeholder.svg?height=300&width=300&text=Face+Serum",
        rating: 4.6,
        reviews: 234,
        badge: "Organic",
        badgeColor: "bg-gradient-to-r from-green-600 to-green-700",
      },
      {
        id: 53,
        name: "Luxury Perfume Collection",
        price: 15999,
        originalPrice: 21999,
        image: "/placeholder.svg?height=300&width=300&text=Perfume+Collection",
        rating: 4.9,
        reviews: 156,
        badge: "Signature",
        badgeColor: "bg-gradient-to-r from-amber-600 to-amber-700",
      },
      {
        id: 54,
        name: "Anti-Aging Cream",
        price: 6999,
        originalPrice: 9999,
        image: "/placeholder.svg?height=300&width=300&text=Anti+Aging+Cream",
        rating: 4.5,
        reviews: 198,
        badge: "Advanced",
        badgeColor: "bg-gradient-to-r from-blue-600 to-blue-700",
      },
    ],
  },
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")

  const category = categories[params.id as keyof typeof categories]

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-stone-50 to-slate-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-light mb-4 text-gray-900">Category Not Found</h1>
          <p className="text-gray-600 mb-8 font-light">The category you're looking for doesn't exist.</p>
          <Link href="/products">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">Browse All Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const sortedProducts = [...category.products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-stone-50 to-slate-50">
      <Navbar />

      {/* Category Hero */}
      <section className="relative h-96 overflow-hidden">
        <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-900/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <Crown className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h1 className="text-5xl font-light mb-4 tracking-wide">{category.name}</h1>
            <p className="text-xl font-light tracking-wide">{category.description}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-light mb-2 text-gray-900 tracking-wide">{category.name} Collection</h2>
            <p className="text-gray-600 font-light">Showing {sortedProducts.length} premium products</p>
          </div>

          <div className="flex items-center space-x-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 bg-white border-gray-300">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border border-gray-300 bg-white">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`rounded-r-none ${viewMode === "grid" ? "bg-gray-900 text-white" : "text-gray-700"}`}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={`rounded-l-none ${viewMode === "list" ? "bg-gray-900 text-white" : "text-gray-700"}`}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-light mb-3 text-gray-900">No products available</h3>
            <p className="text-gray-600 mb-6 font-light">
              We're curating premium products for this category. Check back soon!
            </p>
            <Link href="/products">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">Browse All Products</Button>
            </Link>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-gray-200/50"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <Badge
                        className={`absolute top-4 left-4 ${product.badgeColor} text-white border-0 font-medium tracking-wide`}
                      >
                        {product.badge}
                      </Badge>
                    )}
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute top-4 right-4 bg-white/90 hover:bg-white border-0 shadow-lg"
                    >
                      <Heart className="h-4 w-4 text-gray-600" />
                    </Button>
                  </div>

                  <div className="p-6">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-medium mb-3 hover:text-gray-600 transition-colors text-gray-900 tracking-wide">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-medium text-gray-900">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        className="bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium tracking-wide"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {sortedProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-500 bg-white border border-gray-200/50"
              >
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="relative w-40 h-40 flex-shrink-0">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.badge && (
                        <Badge className={`absolute top-2 left-2 text-xs ${product.badgeColor} text-white border-0`}>
                          {product.badge}
                        </Badge>
                      )}
                    </div>

                    <div className="flex-1">
                      <Link href={`/product/${product.id}`}>
                        <h3 className="font-medium text-xl mb-3 hover:text-gray-600 transition-colors text-gray-900 tracking-wide">
                          {product.name}
                        </h3>
                      </Link>

                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-medium text-gray-900">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-gray-300 hover:bg-gray-50 bg-transparent"
                          >
                            <Heart className="h-4 w-4 text-gray-600" />
                          </Button>
                          <Button className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-6 font-medium tracking-wide">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

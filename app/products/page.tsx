"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, Grid, List, Star, Heart, ShoppingCart, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const products = [
  // Electronics
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 12999,
    originalPrice: 16999,
    image: "/Headphones.jpg?height=300&width=300&text=Premium+Headphones",
    rating: 4.8,
    reviews: 342,
    category: "Electronics",
    badge: "Bestseller",
    badgeColor: "bg-gradient-to-r from-amber-600 to-amber-700",
  },
  {
    id: 2,
    name: "Luxury Smart Watch",
    price: 28999,
    originalPrice: 34999,
    image: "/SmartWatch.jpg?height=300&width=300&text=Luxury+Watch",
    rating: 4.9,
    reviews: 189,
    category: "Electronics",
    badge: "Premium",
    badgeColor: "bg-gradient-to-r from-slate-700 to-slate-800",
  },
  {
    id: 5,
    name: "Professional Camera Lens",
    price: 45999,
    originalPrice: 52999,
    image: "/Lens.jpg?height=300&width=300&text=Camera+Lens",
    rating: 4.7,
    reviews: 167,
    category: "Electronics",
    badge: "Pro",
    badgeColor: "bg-gradient-to-r from-stone-600 to-stone-700",
  },
  {
    id: 7,
    name: "Premium Bluetooth Speaker",
    price: 15999,
    originalPrice: 19999,
    image: "/Speaker.jpg?height=300&width=300&text=Premium+Speaker",
    rating: 4.6,
    reviews: 298,
    category: "Electronics",
    badge: "Audio",
    badgeColor: "bg-gradient-to-r from-blue-700 to-blue-800",
  },
  {
    id: 9,
    name: "Mechanical Keyboard Luxury",
    price: 18999,
    originalPrice: 23999,
    image: "/Keyboard.jpg?height=300&width=300&text=Luxury+Keyboard",
    rating: 4.8,
    reviews: 234,
    category: "Electronics",
    badge: "Gaming",
    badgeColor: "bg-gradient-to-r from-emerald-700 to-emerald-800",
  },

  // Fashion - Expanded with more clothes
  {
    id: 16,
    name: "Designer Silk Dress",
    price: 8999,
    originalPrice: 12999,
    image: "/SilkDress.jpg?height=300&width=300&text=Silk+Dress",
    rating: 4.7,
    reviews: 156,
    category: "Fashion",
    badge: "Designer",
    badgeColor: "bg-gradient-to-r from-stone-600 to-stone-700",
  },
  {
    id: 17,
    name: "Cashmere Wool Sweater",
    price: 6999,
    originalPrice: 9999,
    image: "/Sweater.jpg?height=300&width=300&text=Cashmere+Sweater",
    rating: 4.8,
    reviews: 203,
    category: "Fashion",
    badge: "Luxury",
    badgeColor: "bg-gradient-to-r from-amber-600 to-amber-700",
  },
  {
    id: 18,
    name: "Italian Leather Jacket",
    price: 24999,
    originalPrice: 32999,
    image: "/LeatherJacket.jpg?height=300&width=300&text=Leather+Jacket",
    rating: 4.9,
    reviews: 145,
    category: "Fashion",
    badge: "Italian",
    badgeColor: "bg-gradient-to-r from-gray-700 to-gray-800",
  },
  {
    id: 19,
    name: "Premium Denim Jeans",
    price: 7999,
    originalPrice: 10999,
    image: "/Denim.jpg?height=300&width=300&text=Premium+Jeans",
    rating: 4.5,
    reviews: 312,
    category: "Fashion",
    badge: "Premium",
    badgeColor: "bg-gradient-to-r from-blue-700 to-blue-800",
  },
  {
    id: 20,
    name: "Formal Cotton Shirt",
    price: 4999,
    originalPrice: 6999,
    image: "/CottonShirt.jpg?height=300&width=300&text=Formal+Shirt",
    rating: 4.4,
    reviews: 198,
    category: "Fashion",
    badge: "Formal",
    badgeColor: "bg-gradient-to-r from-slate-600 to-slate-700",
  },
  {
    id: 21,
    name: "Designer Handbag",
    price: 15999,
    originalPrice: 21999,
    image: "/Bag.jpg?height=300&width=300&text=Designer+Handbag",
    rating: 4.8,
    reviews: 234,
    category: "Fashion",
    badge: "Designer",
    badgeColor: "bg-gradient-to-r from-rose-600 to-rose-700",
  },
  {
    id: 22,
    name: "Luxury Blazer",
    price: 12999,
    originalPrice: 17999,
    image: "/Coat.jpg?height=300&width=300&text=Luxury+Blazer",
    rating: 4.6,
    reviews: 167,
    category: "Fashion",
    badge: "Formal",
    badgeColor: "bg-gradient-to-r from-stone-600 to-stone-700",
  },
  {
    id: 23,
    name: "Silk Scarf Collection",
    price: 3999,
    originalPrice: 5999,
    image: "/Scarf.jpg?height=300&width=300&text=Silk+Scarf",
    rating: 4.3,
    reviews: 189,
    category: "Fashion",
    badge: "Silk",
    badgeColor: "bg-gradient-to-r from-amber-600 to-amber-700",
  },
  {
    id: 24,
    name: "Premium Trousers",
    price: 5999,
    originalPrice: 8999,
    image: "/Trousers.jpg?height=300&width=300&text=Premium+Trousers",
    rating: 4.5,
    reviews: 123,
    category: "Fashion",
    badge: "Comfort",
    badgeColor: "bg-gradient-to-r from-gray-600 to-gray-700",
  },
  {
    id: 25,
    name: "Evening Gown",
    price: 18999,
    originalPrice: 25999,
    image: "/Gown.jpg?height=300&width=300&text=Evening+Gown",
    rating: 4.9,
    reviews: 89,
    category: "Fashion",
    badge: "Elegant",
    badgeColor: "bg-gradient-to-r from-purple-600 to-purple-700",
  },
  {
    id: 26,
    name: "Luxury Sneakers",
    price: 14999,
    originalPrice: 19999,
    image: "/Sneakers.jpg?height=300&width=300&text=Luxury+Sneakers",
    rating: 4.7,
    reviews: 267,
    category: "Fashion",
    badge: "Comfort",
    badgeColor: "bg-gradient-to-r from-blue-600 to-blue-700",
  },
  {
    id: 27,
    name: "Cashmere Coat",
    price: 32999,
    originalPrice: 42999,
    image: "/CashCoat.jpg?height=300&width=300&text=Cashmere+Coat",
    rating: 4.8,
    reviews: 134,
    category: "Fashion",
    badge: "Winter",
    badgeColor: "bg-gradient-to-r from-stone-700 to-stone-800",
  },
  {
    id: 28,
    name: "Designer Belt",
    price: 4999,
    originalPrice: 7999,
    image: "/Belt.jpg?height=300&width=300&text=Designer+Belt",
    rating: 4.4,
    reviews: 156,
    category: "Fashion",
    badge: "Accessory",
    badgeColor: "bg-gradient-to-r from-amber-600 to-amber-700",
  },

  // Home & Garden
  {
    id: 29,
    name: "Artisan Coffee Maker",
    price: 18999,
    originalPrice: 22999,
    image: "/Coffeemaker.jpg?height=300&width=300&text=Artisan+Coffee",
    rating: 4.6,
    reviews: 203,
    category: "Home & Garden",
    badge: "Artisan",
    badgeColor: "bg-gradient-to-r from-emerald-700 to-emerald-800",
  },
  {
    id: 30,
    name: "Premium Air Purifier",
    price: 25999,
    originalPrice: 31999,
    image: "/Air.jpg?height=300&width=300&text=Air+Purifier",
    rating: 4.7,
    reviews: 234,
    category: "Home & Garden",
    badge: "Health",
    badgeColor: "bg-gradient-to-r from-green-600 to-green-700",
  },

  // Books - Added items
  {
    id: 40,
    name: "The Art of Luxury Living",
    price: 2999,
    originalPrice: 3999,
    image: "/Luxury.jpg?height=300&width=300&text=Luxury+Living+Book",
    rating: 4.6,
    reviews: 189,
    category: "Books",
    badge: "Bestseller",
    badgeColor: "bg-gradient-to-r from-amber-600 to-amber-700",
  },
  {
    id: 41,
    name: "Modern Architecture Guide",
    price: 3499,
    originalPrice: 4499,
    image: "/MAG.jpg?height=300&width=300&text=Architecture+Book",
    rating: 4.5,
    reviews: 156,
    category: "Books",
    badge: "Design",
    badgeColor: "bg-gradient-to-r from-stone-600 to-stone-700",
  },
  {
    id: 42,
    name: "Culinary Masterpieces",
    price: 4999,
    originalPrice: 6999,
    image: "/Cook.jpg?height=300&width=300&text=Culinary+Book",
    rating: 4.8,
    reviews: 234,
    category: "Books",
    badge: "Chef's Choice",
    badgeColor: "bg-gradient-to-r from-emerald-600 to-emerald-700",
  },
  {
    id: 43,
    name: "Fashion Through Decades",
    price: 3999,
    originalPrice: 5499,
    image: "/FBook.jpg?height=300&width=300&text=Fashion+History",
    rating: 4.4,
    reviews: 167,
    category: "Books",
    badge: "Fashion",
    badgeColor: "bg-gradient-to-r from-rose-600 to-rose-700",
  },
  {
    id: 44,
    name: "Investment Strategies",
    price: 2499,
    originalPrice: 3499,
    image: "/MB.jpg?height=300&width=300&text=Investment+Book",
    rating: 4.7,
    reviews: 298,
    category: "Books",
    badge: "Finance",
    badgeColor: "bg-gradient-to-r from-blue-600 to-blue-700",
  },

  // Beauty - Added items
  {
    id: 50,
    name: "Luxury Skincare Set",
    price: 8999,
    originalPrice: 12999,
    image: "/Skincare.jpg?height=300&width=300&text=Skincare+Set",
    rating: 4.8,
    reviews: 267,
    category: "Beauty",
    badge: "Premium",
    badgeColor: "bg-gradient-to-r from-rose-600 to-rose-700",
  },
  {
    id: 51,
    name: "Professional Makeup Kit",
    price: 12999,
    originalPrice: 17999,
    image: "/Makeup.jpg?height=300&width=300&text=Makeup+Kit",
    rating: 4.7,
    reviews: 189,
    category: "Beauty",
    badge: "Pro",
    badgeColor: "bg-gradient-to-r from-purple-600 to-purple-700",
  },
  {
    id: 52,
    name: "Organic Face Serum",
    price: 4999,
    originalPrice: 6999,
    image: "/Serum.jpg?height=300&width=300&text=Face+Serum",
    rating: 4.6,
    reviews: 234,
    category: "Beauty",
    badge: "Organic",
    badgeColor: "bg-gradient-to-r from-green-600 to-green-700",
  },
  {
    id: 53,
    name: "Luxury Perfume Collection",
    price: 15999,
    originalPrice: 21999,
    image: "/Perfume.jpg?height=300&width=300&text=Perfume+Collection",
    rating: 4.9,
    reviews: 156,
    category: "Beauty",
    badge: "Signature",
    badgeColor: "bg-gradient-to-r from-amber-600 to-amber-700",
  },
  {
    id: 54,
    name: "Anti-Aging Cream",
    price: 6999,
    originalPrice: 9999,
    image: "/Cream.jpg?height=300&width=300&text=Anti+Aging+Cream",
    rating: 4.5,
    reviews: 198,
    category: "Beauty",
    badge: "Advanced",
    badgeColor: "bg-gradient-to-r from-blue-600 to-blue-700",
  },
]

const categories = ["All", "Electronics", "Fashion", "Home & Garden", "Sports", "Books", "Beauty"]

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [sortBy, setSortBy] = useState("featured")
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const applyFilters = () => {
    const filtered = products.filter((product) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
      return categoryMatch && priceMatch
    })

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filtered.sort((a, b) => b.id - a.id)
        break
      default:
        break
    }

    setFilteredProducts(filtered)
  }

  useEffect(() => {
    applyFilters()
  }, [selectedCategories, priceRange, sortBy])

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4 text-gray-900 flex items-center tracking-wide">
          <Crown className="h-4 w-4 mr-2 text-amber-600" />
          Categories
        </h3>
        <div className="space-y-3">
          {categories.slice(1).map((category) => (
            <div key={category} className="flex items-center space-x-3">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                className="border-gray-400 data-[state=checked]:bg-gray-900"
              />
              <Label htmlFor={category} className="text-sm text-gray-700 font-light">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4 text-gray-900 tracking-wide">Price Range</h3>
        <div className="px-2">
          <Slider value={priceRange} onValueChange={setPriceRange} max={50000} step={500} className="mb-3" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      <Button
        onClick={applyFilters}
        className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-medium tracking-wide"
      >
        Apply Filters
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-stone-50 to-slate-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-light mb-2 text-gray-900 tracking-wide">Premium Collection</h1>
            <p className="text-gray-600 font-light">
              Showing {filteredProducts.length} of {products.length} curated products
            </p>
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

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <Card className="bg-white border border-gray-200/50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Filter className="h-5 w-5 mr-2 text-gray-600" />
                  <h2 className="font-medium text-gray-900 tracking-wide">Filters</h2>
                </div>
                <FilterContent />
              </CardContent>
            </Card>
          </div>

          {/* Mobile Filters */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="mb-4 bg-white border-gray-300">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Products Grid/List */}
          <div className="flex-1">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
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
                {filteredProducts.map((product) => (
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
                            <Badge
                              className={`absolute top-2 left-2 text-xs ${product.badgeColor} text-white border-0`}
                            >
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
                              <span className="text-2xl font-medium text-gray-900">
                                ₹{product.price.toLocaleString()}
                              </span>
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
        </div>
      </div>

      <Footer />
    </div>
  )
}

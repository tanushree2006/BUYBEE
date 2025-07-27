"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const allProducts = [
  // Electronics
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 12999,
    originalPrice: 16999,
    image: "/placeholder.svg?height=300&width=300&text=Premium+Headphones",
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
    image: "/placeholder.svg?height=300&width=300&text=Luxury+Watch",
    rating: 4.9,
    reviews: 189,
    category: "Electronics",
    badge: "Premium",
    badgeColor: "bg-gradient-to-r from-slate-700 to-slate-800",
  },
  // Fashion
  {
    id: 16,
    name: "Designer Silk Dress",
    price: 8999,
    originalPrice: 12999,
    image: "/placeholder.svg?height=300&width=300&text=Silk+Dress",
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
    image: "/placeholder.svg?height=300&width=300&text=Cashmere+Sweater",
    rating: 4.8,
    reviews: 203,
    category: "Fashion",
    badge: "Luxury",
    badgeColor: "bg-gradient-to-r from-amber-600 to-amber-700",
  },
  // Books
  {
    id: 40,
    name: "The Art of Luxury Living",
    price: 2999,
    originalPrice: 3999,
    image: "/placeholder.svg?height=300&width=300&text=Luxury+Living+Book",
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
    image: "/placeholder.svg?height=300&width=300&text=Architecture+Book",
    rating: 4.5,
    reviews: 156,
    category: "Books",
    badge: "Design",
    badgeColor: "bg-gradient-to-r from-stone-600 to-stone-700",
  },
  // Beauty
  {
    id: 50,
    name: "Luxury Skincare Set",
    price: 8999,
    originalPrice: 12999,
    image: "/placeholder.svg?height=300&width=300&text=Skincare+Set",
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
    image: "/placeholder.svg?height=300&width=300&text=Makeup+Kit",
    rating: 4.7,
    reviews: 189,
    category: "Beauty",
    badge: "Pro",
    badgeColor: "bg-gradient-to-r from-purple-600 to-purple-700",
  },
]

const categories = ["All", "Electronics", "Fashion", "Home & Garden", "Sports", "Books", "Beauty"]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [sortBy, setSortBy] = useState("relevance")
  const [filteredProducts, setFilteredProducts] = useState(allProducts)

  useEffect(() => {
    applyFilters()
  }, [searchQuery, selectedCategories, priceRange, sortBy])

  const applyFilters = () => {
    const filtered = allProducts.filter((product) => {
      // Search query filter
      const matchesSearch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())

      // Category filter
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)

      // Price filter
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]

      return matchesSearch && categoryMatch && priceMatch
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
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Relevance - keep original order for search results
        break
    }

    setFilteredProducts(filtered)
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 50000])
    setSortBy("relevance")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    applyFilters()
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-gray-900 tracking-wide">Filters</h3>
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-gray-600 hover:text-gray-900">
            Clear All
          </Button>
        </div>

        {/* Active Filters */}
        {(selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 50000) && (
          <div className="mb-6">
            <p className="text-sm font-medium mb-3 text-gray-700">Active Filters:</p>
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map((category) => (
                <Badge key={category} variant="secondary" className="flex items-center gap-1 bg-gray-100 text-gray-700">
                  {category}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => handleCategoryChange(category, false)} />
                </Badge>
              ))}
              {(priceRange[0] > 0 || priceRange[1] < 50000) && (
                <Badge variant="secondary" className="flex items-center gap-1 bg-gray-100 text-gray-700">
                  ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setPriceRange([0, 50000])} />
                </Badge>
              )}
            </div>
          </div>
        )}
      </div>

      <div>
        <h3 className="font-medium mb-4 text-gray-900 tracking-wide">Categories</h3>
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
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-stone-50 to-slate-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-3 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="search"
                placeholder="Search luxury products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-white border-gray-300 h-12 text-lg"
              />
            </div>
            <Button type="submit" className="bg-gray-900 hover:bg-gray-800 px-8 h-12">
              Search
            </Button>
          </form>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light mb-2 text-gray-900 tracking-wide">
                {searchQuery ? `Search Results for "${searchQuery}"` : "All Products"}
              </h1>
              <p className="text-gray-600 font-light">
                Showing {filteredProducts.length} of {allProducts.length} products
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-white border-gray-300">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
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
                  {(selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 50000) && (
                    <Badge className="ml-2 bg-gray-900 text-white">
                      {selectedCategories.length + (priceRange[0] > 0 || priceRange[1] < 50000 ? 1 : 0)}
                    </Badge>
                  )}
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
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h2 className="text-2xl font-light mb-3 text-gray-900">No products found</h2>
                <p className="text-gray-600 mb-6 font-light">
                  {searchQuery
                    ? `No products match your search for "${searchQuery}"`
                    : "No products match your current filters"}
                </p>
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="border-gray-300 text-gray-700 bg-transparent"
                >
                  Clear Filters
                </Button>
              </div>
            ) : viewMode === "grid" ? (
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

                          <p className="text-gray-600 text-sm mb-4 font-light">Category: {product.category}</p>

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

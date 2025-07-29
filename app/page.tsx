"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Heart, ArrowUp, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const heroSlides = [
  {
    id: 1,
    title: "Luxury Collection 2024",
    subtitle: "Discover timeless elegance & premium quality",
    image: "/Luxurycollection.jpg?height=600&width=1200&text=Luxury+Collection",
    cta: "Shop Now",
    link: "/products",
    gradient: "from-slate-900 via-gray-800 to-slate-900",
  },
  {
    id: 2,
    title: "Premium Electronics",
    subtitle: "Cutting-edge technology meets sophisticated design",
    image: "/PremiumElectronics.jpg?height=600&width=1200&text=Premium+Electronics",
    cta: "Explore Collection",
    link: "/category/1",
    gradient: "from-gray-900 via-slate-800 to-gray-900",
  },
  {
    id: 3,
    title: "Designer Home & Living",
    subtitle: "Curated pieces for the discerning homeowner",
    image: "/HomeDesign.jpg?height=600&width=1200&text=Designer+Home",
    cta: "Shop Home",
    link: "/category/3",
    gradient: "from-stone-900 via-gray-800 to-stone-900",
  },
]

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "/Elec.jpg?height=200&width=200&text=Electronics",
    count: "150+ items",
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-gradient-to-br from-slate-50 to-gray-100",
  },
  {
    id: 2,
    name: "Fashion",
    image: "/Fashion.jpg?height=200&width=200&text=Fashion",
    count: "320+ items",
    color: "from-stone-600 to-stone-800",
    bgColor: "bg-gradient-to-br from-stone-50 to-amber-50",
  },
  {
    id: 3,
    name: "Home & Garden",
    image: "/HomeGarden.jpg?height=200&width=200&text=Home+Garden",
    count: "220+ items",
    color: "from-emerald-700 to-emerald-900",
    bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
  },
  {
    id: 4,
    name: "Sports",
    image: "/Sports.jpg?height=200&width=200&text=Sports",
    count: "180+ items",
    color: "from-blue-700 to-blue-900",
    bgColor: "bg-gradient-to-br from-blue-50 to-sky-50",
  },
  {
    id: 5,
    name: "Books",
    image: "/Books.jpg?height=200&width=200&text=Books",
    count: "450+ items",
    color: "from-amber-700 to-amber-900",
    bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
  },
  {
    id: 6,
    name: "Beauty",
    image: "/Beauty.jpg?height=200&width=200&text=Beauty",
    count: "280+ items",
    color: "from-rose-700 to-rose-900",
    bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
  },
]

const featuredProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 12999,
    originalPrice: 16999,
    image: "/Headphones.jpg?height=300&width=300&text=Premium+Headphones",
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
    image: "/SmartWatch.jpg?height=300&width=300&text=Luxury+Watch",
    rating: 4.9,
    reviews: 189,
    badge: "Premium",
    badgeColor: "bg-gradient-to-r from-slate-700 to-slate-800",
  },
  {
    id: 16,
    name: "Designer Silk Dress",
    price: 8999,
    originalPrice: 12999,
    image: "/SilkDress.jpg?height=300&width=300&text=Silk+Dress",
    rating: 4.7,
    reviews: 156,
    badge: "Designer",
    badgeColor: "bg-gradient-to-r from-stone-600 to-stone-700",
  },
  {
    id: 25,
    name: "Artisan Coffee Maker",
    price: 18999,
    originalPrice: 22999,
    image: "/Coffeemaker.jpg?height=300&width=300&text=Artisan+Coffee",
    rating: 4.6,
    reviews: 203,
    badge: "Artisan",
    badgeColor: "bg-gradient-to-r from-emerald-700 to-emerald-800",
  },
]

const features = [
  {
    icon: "🚚",
    title: "Complimentary Delivery",
    description: "Free white-glove delivery on orders over ₹5000",
    color: "from-slate-600 to-slate-700",
  },
  {
    icon: "🔒",
    title: "Secure Transactions",
    description: "Bank-grade security for all payments",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    icon: "↩️",
    title: "Hassle-Free Returns",
    description: "60-day return policy with free pickup",
    color: "from-stone-600 to-stone-700",
  },
  {
    icon: "👑",
    title: "Concierge Support",
    description: "Dedicated support for premium experience",
    color: "from-amber-600 to-amber-700",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-stone-50 to-slate-50">
      <Navbar />

      {/* Hero Slider */}
      <section className="relative h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-85`} />
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="max-w-3xl px-4">
                <div className="flex items-center justify-center mb-6">
                  <Crown className="h-8 w-8 text-amber-400 mr-2" />
                </div>
                <h1 className="text-6xl font-light mb-6 animate-fade-in tracking-wide">{slide.title}</h1>
                <p className="text-xl mb-8 animate-fade-in-delay text-gray-200 font-light tracking-wide">
                  {slide.subtitle}
                </p>
                <Link href={slide.link}>
                  <Button
                    size="lg"
                    className="animate-fade-in-delay-2 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl px-12 py-4 rounded-none font-medium tracking-wider uppercase text-sm"
                  >
                    {slide.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}

        <Button
          variant="outline"
          size="icon"
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 transition-all duration-300 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 text-gray-900 tracking-wide">Curated Collections</h2>
            <p className="text-gray-600 text-lg font-light">Discover our carefully selected premium categories</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/category/${category.id}`}>
                <Card
                  className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${category.bgColor} border border-gray-200/50 overflow-hidden`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10`} />
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={200}
                        height={200}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-medium mb-2 text-gray-900 tracking-wide">{category.name}</h3>
                    <p
                      className={`text-sm font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {category.count}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 text-gray-900 tracking-wide">Featured Collection</h2>
            <p className="text-gray-600 text-lg font-light">Handpicked premium products for the discerning customer</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-gray-200/50 overflow-hidden"
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
                        className={`absolute top-4 left-4 ${product.badgeColor} text-white border-0 font-medium px-3 py-1 tracking-wide`}
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
                        className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-4 font-medium tracking-wide"
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

          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent hover:bg-gray-50 border-gray-300 text-gray-900 hover:text-gray-900 px-12 py-3 font-medium tracking-wider uppercase text-sm"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white border border-gray-200/50"
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-medium mb-3 text-gray-900 tracking-wide">{feature.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          size="icon"
          className="fixed bottom-8 right-8 z-50 shadow-2xl bg-gray-900 hover:bg-gray-800 border-0"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

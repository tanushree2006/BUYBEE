"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu, X, Heart, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center shadow-lg">
              <Crown className="text-white font-bold text-lg h-6 w-6" />
            </div>
            <span className="text-2xl font-light text-gray-900 tracking-wide">BuyBee</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium tracking-wide">
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium tracking-wide"
            >
              Products
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-gray-900 transition-colors font-medium tracking-wide">
                Categories
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-xl">
                <DropdownMenuItem className="hover:bg-gray-50">
                  <Link href="/category/1">Electronics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-50">
                  <Link href="/category/2">Fashion</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-50">
                  <Link href="/category/3">Home & Garden</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-50">
                  <Link href="/category/4">Sports</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-50">
                  <Link href="/category/5">Books</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-50">
                  <Link href="/category/6">Beauty</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium tracking-wide"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium tracking-wide"
            >
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="flex w-full">
              <Input
                type="search"
                placeholder="Search luxury products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-r-none bg-white border-gray-300 placeholder:text-gray-500 focus:border-gray-400"
              />
              <Button type="submit" className="rounded-l-none bg-gray-900 hover:bg-gray-800 border-0">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              <Heart className="h-5 w-5" />
            </Button>

            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gray-900 text-white border-0">
                  3
                </Badge>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-xl"
              >
                <DropdownMenuItem className="hover:bg-gray-50">Profile</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-50">Orders</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-50">Settings</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-50">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 py-4">
            <div className="flex flex-col space-y-4">
              <form onSubmit={handleSearch} className="flex">
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-r-none bg-white border-gray-300"
                />
                <Button type="submit" className="rounded-l-none bg-gray-900 hover:bg-gray-800 border-0">
                  <Search className="h-4 w-4" />
                </Button>
              </form>

              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Products
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const initialCartItems = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones Pro",
    price: 6799,
    image: "/placeholder.svg?height=100&width=100&text=Headphones",
    quantity: 2,
    color: "Midnight Black",
    size: "Standard",
  },
  {
    id: 2,
    name: "Smart Fitness Watch Ultra",
    price: 15999,
    image: "/placeholder.svg?height=100&width=100&text=Smart+Watch",
    quantity: 1,
    color: "Space Silver",
    size: "42mm",
  },
  {
    id: 3,
    name: "Premium Coffee Maker Deluxe",
    price: 12999,
    image: "/placeholder.svg?height=100&width=100&text=Coffee+Maker",
    quantity: 1,
    color: "Stainless Steel",
    size: "12-Cup",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item)),
    )
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 2000 ? 0 : 199
  const tax = subtotal * 0.18
  const total = subtotal + shipping + tax

  const applyPromoCode = () => {
    console.log("Applying promo code:", promoCode)
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
            <ShoppingBag className="h-16 w-16 text-purple-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your cart is empty! 🛒
          </h1>
          <p className="text-gray-600 mb-8 text-lg">Looks like you haven't added any amazing items to your cart yet.</p>
          <Link href="/products">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-full px-8 py-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Start Shopping ✨
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent flex items-center">
            <Sparkles className="h-8 w-8 mr-3 text-purple-500" />
            Shopping Cart
          </h1>
          <Link href="/products">
            <Button variant="outline" className="border-purple-200 hover:bg-purple-50 rounded-full bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="bg-white/80 backdrop-blur-md border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Link href={`/product/${item.id}`}>
                            <h3 className="font-bold hover:text-purple-600 transition-colors text-gray-800">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-gray-600 bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1 rounded-full inline-block mt-1">
                            {item.color} | {item.size}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-purple-200 hover:bg-purple-50 rounded-full bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-12 text-center font-bold text-gray-800">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-purple-200 hover:bg-purple-50 rounded-full bg-transparent"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="font-bold text-gray-800">₹{(item.price * item.quantity).toLocaleString()}</p>
                          <p className="text-sm text-gray-600">₹{item.price.toLocaleString()} each</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 bg-white/80 backdrop-blur-md border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-gray-800 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-purple-500" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">
                    Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
                  </span>
                  <span className="font-semibold text-gray-800">₹{subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-700">Shipping</span>
                  <span className="font-semibold text-gray-800">
                    {shipping === 0 ? (
                      <span className="text-green-600 font-bold">Free! 🎉</span>
                    ) : (
                      `₹${shipping.toLocaleString()}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-700">Tax (GST 18%)</span>
                  <span className="font-semibold text-gray-800">₹{tax.toLocaleString()}</span>
                </div>

                <Separator />

                <div className="flex justify-between text-xl font-bold">
                  <span className="text-gray-800">Total</span>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                {shipping > 0 && (
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg border border-yellow-200">
                    <p className="text-sm text-orange-700 font-medium">
                      💡 Add ₹{(2000 - subtotal).toLocaleString()} more for free shipping!
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="bg-white border-purple-200"
                    />
                    <Button
                      variant="outline"
                      onClick={applyPromoCode}
                      className="border-purple-200 hover:bg-purple-50 bg-transparent"
                    >
                      Apply
                    </Button>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-full py-4 text-lg font-bold"
                    size="lg"
                  >
                    Proceed to Checkout 🚀
                  </Button>
                </Link>

                <div className="text-center text-sm text-gray-600 bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg">
                  <p className="flex items-center justify-center">🔒 Secure checkout with SSL encryption</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

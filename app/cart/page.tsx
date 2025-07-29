"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
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
    // You can enhance this, e.g., by showing an animation, etc.
    console.log("Applying promo code:", promoCode)
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center py-24">
          <ShoppingBag size={64} className="text-slate-400 mb-4" />
          <h1 className="text-2xl font-semibold text-slate-800 mb-2">
            Your Cart is Empty
          </h1>
          <p className="text-slate-500 mb-6">
            Looks like you haven&apos;t added any amazing items yet.
          </p>
          <Link href="/products">
            <Button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white">
              Start Shopping
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50 flex flex-col">
      <Navbar />
      <main className="flex-1 container max-w-3xl mx-auto pt-12 pb-20 px-4">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 flex items-center gap-3">
          <Sparkles className="text-amber-700" size={30} /> Your Cart
        </h2>
        <div className="mb-8 text-lg text-slate-600">
          {subtotal > 2000
            ? (
              <span>
                <span className="bg-gradient-to-r from-slate-600 to-slate-800 text-white rounded px-2 py-1 mr-2 text-xs">
                  Complimentary Delivery
                </span>
                You qualify for <span className="text-amber-700 font-semibold">free white-glove delivery</span>!
              </span>
            )
            : (
              <span>
                <span className="bg-gradient-to-r from-slate-600 to-slate-800 text-white rounded px-2 py-1 mr-2 text-xs">
                  Delivery Offer
                </span>
                Add <span className="font-bold text-amber-700">₹{(2000 - subtotal).toLocaleString()}</span> more for free shipping!
              </span>
            )
          }
        </div>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id} className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-md">
              <CardContent className="flex items-center space-x-4 py-4">
                <Image
                  width={80}
                  height={80}
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg border"
                />
                <div className="flex-1">
                  <div className="text-lg font-semibold text-slate-800">{item.name}</div>
                  <div className="text-slate-500 text-sm">{item.color} | {item.size}</div>
                  <div className="flex items-center mt-2">
                    <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="text-slate-600" size={18} />
                    </Button>
                    <span className="mx-2 text-base">{item.quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="text-slate-600" size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                      <Trash2 className="text-rose-700" size={18} />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between h-full">
                  <div className="text-md font-semibold text-amber-700 mb-2">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400">₹{item.price.toLocaleString()} each</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Cart summary */}
        <Card className="bg-gradient-to-r from-slate-50 to-amber-50 mt-8 border-0 shadow">
          <CardContent className="py-6">
            <div className="flex justify-between text-lg mb-2">
              <span className="text-slate-800">Subtotal</span>
              <span className="font-semibold text-slate-700">₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-md text-slate-600 mb-2">
              <span>Shipping</span>
              <span>{shipping === 0 ? <span className="text-emerald-700">FREE</span> : `₹${shipping}`}</span>
            </div>
            <div className="flex justify-between text-md text-slate-600 mb-2">
              <span>Tax (18%)</span>
              <span>₹{tax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="border-t my-3" />
            <div className="flex justify-between text-xl font-bold text-amber-800">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            <div className="mt-6 flex items-center">
              <Input
                type="text"
                placeholder="Promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="max-w-xs mr-2"
              />
              <Button
                className="bg-gradient-to-r from-stone-700 to-stone-900 text-white"
                onClick={applyPromoCode}
              >
                Apply
              </Button>
            </div>
            import Link from "next/link"

// later in JSX:
<Link href="/checkout" passHref>
  <Button className="mt-6 w-full bg-gradient-to-r from-amber-700 to-amber-900 text-white py-3 text-lg shadow">
    Secure Checkout
  </Button>
</Link>

            <div className="text-xs text-slate-400 text-center mt-3">
              🔒 Secure checkout with SSL encryption & premium support
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

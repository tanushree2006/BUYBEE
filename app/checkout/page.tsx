"use client"
import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Lock, Sparkles, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const cartItems = [
  { id: 1, name: "Wireless Bluetooth Headphones", price: 6799, quantity: 2, image: "/placeholder.svg?height=80&width=80" },
  { id: 2, name: "Smart Fitness Watch", price: 15999, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
]

export default function CheckoutPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "IN",
    phone: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [sameAsShipping, setSameAsShipping] = useState(true)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 2000 ? 0 : 199
  const tax = subtotal * 0.18
  const total = subtotal + shipping + tax

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement actual order processing logic here if needed

    // Redirect to order confirmation page
    router.push("/order-confirmation")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 flex flex-col">
      <Navbar />

      <main className="container max-w-4xl mx-auto py-12 px-6 flex flex-col space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/cart" passHref>
            <Button variant="ghost" className="flex items-center gap-2 text-slate-700 rounded-lg">
              <ArrowLeft size={22} /> Back to Cart
            </Button>
          </Link>
          <h1 className="text-4xl font-extrabold text-amber-900 flex items-center gap-3">
            <Sparkles className="text-amber-600" size={34} /> Secure Checkout
          </h1>
          <Lock className="text-amber-700 ml-auto" size={28} />
        </div>

        {/* Shipping Info Card */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl text-amber-800 font-semibold">Shipping Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="rounded-md border-amber-300"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="rounded-md border-amber-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-slate-700 font-medium">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="rounded-md border-amber-300"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-slate-700 font-medium">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="rounded-md border-amber-300"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address" className="text-slate-700 font-medium">Address</Label>
                <Input
                  id="address"
                  placeholder="123, Example Street"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  required
                  className="rounded-md border-amber-300"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="city" className="text-slate-700 font-medium">City</Label>
                  <Input
                    id="city"
                    placeholder="Mumbai"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    required
                    className="rounded-md border-amber-300"
                  />
                </div>
                <div>
                  <Label htmlFor="state" className="text-slate-700 font-medium">State</Label>
                  <Input
                    id="state"
                    placeholder="Maharashtra"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    required
                    className="rounded-md border-amber-300"
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode" className="text-slate-700 font-medium">Zip Code</Label>
                  <Input
                    id="zipCode"
                    placeholder="400001"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    required
                    className="rounded-md border-amber-300"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="country" className="text-slate-700 font-medium">Country</Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => handleInputChange("country", value)}
                >
                  <SelectTrigger id="country" className="rounded-md border border-amber-300">
                    <SelectValue className="text-slate-800" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="IN">India</SelectItem>
                    <SelectItem value="US">United States</SelectItem>
                    <SelectItem value="GB">United Kingdom</SelectItem>
                    <SelectItem value="CA">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Checkbox
                id="sameAsShipping"
                checked={sameAsShipping}
                onCheckedChange={(checked) => setSameAsShipping(!!checked)}
                className="text-amber-700 font-semibold"
              >
                Billing address same as shipping
              </Checkbox>

              {/* Submit button inside form so pressing Enter submits */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-700 to-amber-900 text-white py-4 text-lg shadow-lg mt-6"
              >
                Complete Purchase
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Billing info if different */}
        {!sameAsShipping && (
          <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 rounded-xl">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 font-semibold">Billing Information</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add billing form fields if needed */}
              <p className="italic text-slate-500">Please fill billing address details.</p>
            </CardContent>
          </Card>
        )}

        {/* Payment Method */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl text-amber-800 font-semibold">Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="flex flex-col gap-4 text-slate-800">
              <Label className="flex items-center gap-3 cursor-pointer font-semibold">
                <RadioGroupItem value="card" />
                <CreditCard className="text-amber-700" size={20} />
                Credit/Debit Card
              </Label>
              <Label className="flex items-center gap-3 cursor-pointer font-semibold">
                <RadioGroupItem value="cod" />
                Cash on Delivery
              </Label>
            </RadioGroup>

            {paymentMethod === "card" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  placeholder="Cardholder Name"
                  value={formData.cardName}
                  onChange={(e) => handleInputChange("cardName", e.target.value)}
                  required
                  className="rounded-md border-amber-300"
                />
                <Input
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                  required
                  className="rounded-md border-amber-300"
                />
                <Input
                  placeholder="Expiry Date (MM/YY)"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                  required
                  className="rounded-md border-amber-300"
                />
                <Input
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={(e) => handleInputChange("cvv", e.target.value)}
                  required
                  type="password"
                  className="rounded-md border-amber-300"
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 rounded-xl">
          <CardContent className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
            <div className="space-y-1 text-slate-800 font-semibold">
              <div className="text-lg">Order Summary</div>
              <div className="text-sm text-slate-600">
                {cartItems.length} item{cartItems.length > 1 ? "s" : ""} &bull; Subtotal: ₹{subtotal.toLocaleString()}
              </div>
              <div className="text-sm text-slate-600">Shipping: {shipping === 0 ? "FREE" : `₹${shipping}`}</div>
              <div className="text-sm text-slate-600">Tax (18%): ₹{tax.toLocaleString()}</div>
            </div>
            <div className="text-2xl font-extrabold text-amber-700">Total: ₹{total.toLocaleString()}</div>
          </CardContent>
        </Card>

        <p className="text-xs text-slate-400 text-center mt-4">
          🔒 Secure checkout with SSL encryption & premium customer support
        </p>
      </main>

      <Footer />
    </div>
  )
}

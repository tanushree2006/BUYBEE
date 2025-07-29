"use client"
import Link from "next/link"
import { CheckCircle, Truck, Mail, Package } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "react-day-picker"

const orderDetails = {
  orderNumber: "BUY-2024-001234",
  orderDate: "January 15, 2024",
  status: "Confirmed",
  estimatedDelivery: "January 20-22, 2024",
  items: [
    { id: 1, name: "Wireless Bluetooth Headphones", price: 79.99, quantity: 2, image: "/placeholder.svg?height=60&width=60" },
    { id: 2, name: "Smart Fitness Watch", price: 199.99, quantity: 1, image: "/placeholder.svg?height=60&width=60" },
  ],
  shippingAddress: {
    name: "John Doe",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
  },
  paymentMethod: "•••• •••• •••• 1234",
  subtotal: 359.97,
  shipping: 9.99,
  tax: 28.8,
  total: 398.76,
}

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 flex flex-col">
      <Navbar />

      <main className="container max-w-4xl mx-auto py-16 px-6 space-y-10">
        <div className="flex flex-col items-center gap-4">
          <CheckCircle size={64} className="text-amber-600" />
          <h1 className="text-4xl font-bold text-amber-900">Thank you for your purchase!</h1>
          <p className="text-lg text-slate-700 max-w-xl text-center">
            Your order has been successfully placed and is now being processed.
          </p>
          <Badge className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 rounded-full text-lg">
            Order Confirmed
          </Badge>
        </div>

        <Card className="shadow-lg bg-gradient-to-br from-white to-gray-50 rounded-xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800 font-semibold">Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-semibold">Order Number:</span> {orderDetails.orderNumber}
              </div>
              <div>
                <span className="font-semibold">Order Date:</span> {orderDetails.orderDate}
              </div>
              <div>
                <span className="font-semibold">Status:</span> {orderDetails.status}
              </div>
              <div>
                <span className="font-semibold">Estimated Delivery:</span> {orderDetails.estimatedDelivery}
              </div>
            </div>

            <div>
              <h3 className="text-amber-800 font-semibold text-lg mb-2">Items Purchased</h3>
              <div className="space-y-2">
                {orderDetails.items.map(item => (
                  <div key={item.id} className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg border" />
                      <div>
                        <div className="font-semibold text-slate-900">{item.name}</div>
                        <div className="text-slate-600 text-sm">Quantity: {item.quantity}</div>
                      </div>
                    </div>
                    <div className="text-amber-700 font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 text-slate-700">
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Shipping Address</h3>
                <div>{orderDetails.shippingAddress.name}</div>
                <div>{orderDetails.shippingAddress.address}</div>
                <div>
                  {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zipCode}
                </div>
                <div>{orderDetails.shippingAddress.country}</div>
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Payment Method</h3>
                <div>Credit Card</div>
                <div>{orderDetails.paymentMethod}</div>
                <div className="mt-3 font-semibold text-amber-700 text-lg">Total Paid: ${orderDetails.total.toFixed(2)}</div>
              </div>
            </div>

            <div className="text-center pt-6 text-sm text-slate-500">
              If you have any questions about your order, please don&apos;t hesitate to contact us.
            </div>
          </CardContent>
        </Card>

        import Link from "next/link"
<div className="flex justify-center">
  <Link href="/" legacyBehavior>
    <a>
      <Button className="bg-gradient-to-r from-amber-700 to-amber-900 text-white px-8 py-3 text-lg shadow-lg rounded-lg">
        Back to Home
      </Button>
    </a>
  </Link>
</div>

      </main>

      <Footer />
    </div>
  )
}

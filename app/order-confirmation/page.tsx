"use client"

import Link from "next/link"
import { CheckCircle, Package, Truck, Mail, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const orderDetails = {
  orderNumber: "BUY-2024-001234",
  orderDate: "January 15, 2024",
  status: "Confirmed",
  estimatedDelivery: "January 20-22, 2024",
  items: [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      quantity: 2,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      quantity: 1,
      image: "/placeholder.svg?height=60&width=60",
    },
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
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground text-lg">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        {/* Order Summary Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Order Details</CardTitle>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {orderDetails.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Order Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Order Number</p>
                <p className="font-semibold">{orderDetails.orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Order Date</p>
                <p className="font-semibold">{orderDetails.orderDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                <p className="font-semibold">{orderDetails.estimatedDelivery}</p>
              </div>
            </div>

            <Separator />

            {/* Order Items */}
            <div>
              <h3 className="font-semibold mb-4">Items Ordered</h3>
              <div className="space-y-3">
                {orderDetails.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <Package className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">${item.price} each</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Order Total */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${orderDetails.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${orderDetails.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${orderDetails.tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${orderDetails.total.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shipping and Payment Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="h-5 w-5 mr-2" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="font-medium">{orderDetails.shippingAddress.name}</p>
                <p>{orderDetails.shippingAddress.address}</p>
                <p>
                  {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state}{" "}
                  {orderDetails.shippingAddress.zipCode}
                </p>
                <p>{orderDetails.shippingAddress.country}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Credit Card</p>
              <p className="text-muted-foreground">{orderDetails.paymentMethod}</p>
              <p className="text-sm text-green-600 mt-2">Payment Successful</p>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Order Confirmation Email</p>
                  <p className="text-sm text-muted-foreground">
                    We've sent a confirmation email with your order details to your email address.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Order Processing</p>
                  <p className="text-sm text-muted-foreground">
                    Your order is being prepared for shipment. You'll receive tracking information once it ships.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Delivery</p>
                  <p className="text-sm text-muted-foreground">Estimated delivery: {orderDetails.estimatedDelivery}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="flex items-center bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Download Receipt
          </Button>

          <Button variant="outline">Track Your Order</Button>

          <Link href="/products">
            <Button className="flex items-center">
              Continue Shopping
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Support Info */}
        <div className="text-center mt-8 p-6 bg-muted/30 rounded-lg">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-muted-foreground mb-4">
            If you have any questions about your order, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="outline">Contact Support</Button>
            </Link>
            <Button variant="outline">Live Chat</Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

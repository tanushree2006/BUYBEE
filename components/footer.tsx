import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold text-primary">BuyBee</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Your trusted online marketplace for quality products at great prices. Shop with confidence and enjoy fast,
              secure delivery.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link href="/products" className="block text-muted-foreground hover:text-primary transition-colors">
                All Products
              </Link>
              <Link href="/cart" className="block text-muted-foreground hover:text-primary transition-colors">
                Shopping Cart
              </Link>
              <Link href="/search" className="block text-muted-foreground hover:text-primary transition-colors">
                Search
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Shipping Info
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Returns & Exchanges
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Size Guide
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Track Your Order
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@buybee.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Commerce St, City, State 12345</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex">
                <Input placeholder="Your email" className="rounded-r-none" />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 BuyBee. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}

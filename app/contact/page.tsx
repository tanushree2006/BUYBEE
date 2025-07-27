"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name.",
        variant: "destructive",
      })
      return false
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return false
    }

    if (!formData.subject.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter a subject.",
        variant: "destructive",
      })
      return false
    }

    if (!formData.category) {
      toast({
        title: "Validation Error",
        description: "Please select a category.",
        variant: "destructive",
      })
      return false
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      toast({
        title: "Validation Error",
        description: "Please enter a message with at least 10 characters.",
        variant: "destructive",
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">support@buybee.com</p>
                    <p className="text-muted-foreground">sales@buybee.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      123 Commerce Street
                      <br />
                      Suite 100
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                      <br />
                      Saturday: 10:00 AM - 4:00 PM EST
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Order Status & Tracking
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Returns & Exchanges
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Shipping Information
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Payment Issues
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Product Questions
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="order">Order Support</SelectItem>
                        <SelectItem value="product">Product Question</SelectItem>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="billing">Billing & Payment</SelectItem>
                        <SelectItem value="returns">Returns & Exchanges</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Minimum 10 characters ({formData.message.length}/10)
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Support Options */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-muted-foreground mb-4">Get instant help from our support team</p>
              <Button variant="outline">Start Chat</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our customer service</p>
              <Button variant="outline">+1 (555) 123-4567</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Help Center</h3>
              <p className="text-muted-foreground mb-4">Browse our comprehensive FAQ section</p>
              <Button variant="outline">Visit Help Center</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

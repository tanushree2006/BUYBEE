import Image from "next/image"
import { Users, Award, Globe, Heart, Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving customers worldwide with fast, reliable shipping to over 100 countries.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Every product is carefully selected and tested to meet our high quality standards.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Our dedicated support team is here to help you 24/7 with any questions or concerns.",
  },
  {
    icon: Heart,
    title: "Sustainable",
    description: "Committed to eco-friendly practices and supporting sustainable product lines.",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Customer",
    content:
      "BuyBee has become my go-to online store. The product quality is excellent and shipping is always fast. Highly recommended!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Verified Customer",
    content:
      "Amazing customer service and great prices. I've been shopping here for over a year and never had any issues.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Verified Customer",
    content: "The variety of products is incredible and the website is so easy to use. Love the fast checkout process!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

const stats = [
  { number: "500K+", label: "Happy Customers" },
  { number: "50K+", label: "Products" },
  { number: "100+", label: "Countries" },
  { number: "99.9%", label: "Uptime" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">About BuyBee</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Your Trusted Online Marketplace</h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Since 2020, BuyBee has been connecting customers with quality products from around the world. We're
                passionate about providing an exceptional shopping experience with unbeatable prices, fast shipping, and
                outstanding customer service.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="BuyBee Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At BuyBee, our mission is to make online shopping simple, secure, and enjoyable for everyone. We believe
            that great products should be accessible to all, which is why we work tirelessly to curate the best
            selection at competitive prices while maintaining the highest standards of customer service and
            satisfaction.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose BuyBee?</h2>
            <p className="text-muted-foreground">We're committed to providing the best online shopping experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">The passionate people behind BuyBee's success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "CEO & Founder",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Visionary leader with 15+ years in e-commerce",
              },
              {
                name: "Maria Garcia",
                role: "Head of Customer Experience",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Passionate about creating exceptional customer journeys",
              },
              {
                name: "David Kim",
                role: "Chief Technology Officer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Tech innovator focused on seamless user experiences",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">Don't just take our word for it - hear from our satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Customer Obsession",
                description:
                  "We put our customers at the center of everything we do, constantly innovating to exceed their expectations.",
              },
              {
                title: "Quality First",
                description:
                  "We never compromise on quality, carefully vetting every product and partner to ensure excellence.",
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and ideas to continuously improve the shopping experience.",
              },
              {
                title: "Integrity",
                description: "We conduct business with honesty, transparency, and respect for all our stakeholders.",
              },
            ].map((value, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

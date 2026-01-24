"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const faqs = [
    {
      question: "What is the minimum order quantity?",
      answer:
        "The minimum order quantity for all our bamboo salt and bamboo stone products is 100 kgs. We offer competitive pricing for bulk orders.",
    },
    {
      question: "What payment terms do you offer?",
      answer:
        "We require 30% advance payment to process your order. The remaining 70% is due upon delivery or as per agreed terms.",
    },
    {
      question: "What is your delivery timeline?",
      answer:
        "Standard delivery time is 30 days from order confirmation. Rush deliveries may be available on request with additional charges.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship internationally. Please contact us for specific quotes and shipping arrangements for your location.",
    },
    {
      question: "What makes your bamboo salt different?",
      answer:
        "Our bamboo salt is produced using traditional roasting methods combined with modern quality control. We offer 1-9x roasting levels, with each level providing different mineral concentrations and therapeutic properties.",
    },
    {
      question: "Can I get a sample before placing a large order?",
      answer:
        "Yes, we can provide samples for evaluation. Please contact us directly to arrange sample orders and pricing.",
    },
    {
      question: "How should I store the bamboo salt and stones?",
      answer:
        "Keep bamboo salt in a cool, dry place away from moisture. Use airtight containers for long-term storage. Bamboo stones can be stored indefinitely in a dry environment.",
    },
    {
      question: "Do you provide certificates or testing reports?",
      answer:
        "Yes, we can provide quality certificates and testing reports for bulk orders. Contact us for specific documentation requirements.",
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "✓ Email sent successfully! We'll get back to you soon.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      } else {
        setSubmitMessage({
          type: "error",
          text: `Error: ${data.error || "Failed to send email. Please try again."}`,
        })
      }
    } catch (error) {
      console.error("Error:", error)
      setSubmitMessage({
        type: "error",
        text: "Failed to send email. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center mb-4">
            <div className="line-accent"></div>
          </div>
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle">
            Reach out to us for inquiries, bulk orders, or any questions about our premium bamboo products
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="card-premium p-8 text-center space-y-4 hover:border-primary/60">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center text-3xl shadow-md">
              📞
            </div>
            <div>
              <h3 className="font-serif font-bold text-foreground mb-2 text-lg">Phone</h3>
              <a href="tel:+919092233456" className="text-primary hover:text-primary/80 font-semibold text-lg">
                +91 909 223 3456
              </a>
              <p className="text-sm text-muted-foreground mt-2">Mon-Fri, 9AM-6PM IST</p>
            </div>
          </Card>

          <Card className="card-premium p-8 text-center space-y-4 hover:border-primary/60">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center text-3xl shadow-md">
              ✉️
            </div>
            <div>
              <h3 className="font-serif font-bold text-foreground mb-2 text-lg">Email</h3>
              <a
                href="mailto:sjgroupsvpm@gmail.com"
                className="text-primary hover:text-primary/80 font-semibold break-all"
              >
                sjgroupsvpm@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">We reply within 24 hours</p>
            </div>
          </Card>

          <Card className="card-premium p-8 text-center space-y-4 hover:border-primary/60">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center text-3xl shadow-md">
              📍
            </div>
            <div>
              <h3 className="font-serif font-bold text-foreground mb-2 text-lg">Address</h3>
              <p className="text-muted-foreground font-medium">
                Building No. 372/2, East Yamuna Street, Vandimedu, Viluppuram 605602, Tamil Nadu, India
              </p>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="card-premium p-8 md:p-12 border-primary/20 bg-gradient-to-br from-background to-background-light">
          <div className="mb-8">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-2">Send us a Message</h2>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you promptly</p>
          </div>

          {submitMessage && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                submitMessage.type === "success"
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : "bg-red-50 border border-red-200 text-red-800"
              }`}
            >
              {submitMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">Full Name *</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">Email *</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-base"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">Phone *</label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">Company</label>
                <Input
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-background border-border text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-foreground">Message *</label>
              <Textarea
                name="message"
                placeholder="Tell us about your inquiry, requirements, and any specific questions..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={7}
                className="bg-background border-border resize-none text-base"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white hover:bg-primary/90 text-base font-semibold py-6 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message via Email"}
            </button>
          </form>
        </Card>

        {/* FAQ Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="line-accent"></div>
            </div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common questions about our products and services</p>
          </div>

          <Card className="card-premium p-8 md:p-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-b-0">
                  <AccordionTrigger className="font-serif font-bold text-foreground hover:text-primary py-4 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="card-premium p-8 md:p-12 bg-gradient-to-r from-primary/8 to-secondary-light/8 border-primary/30 text-center space-y-6">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Ready to Order?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with us via email for personalized assistance, quotes on bulk orders, and comprehensive product information.
            </p>
          </div>
          <a href="mailto:sjgroupsvpm@gmail.com">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-base px-8">
              Send Email Quote Request
            </Button>
          </a>
        </Card>
      </div>
    </section>
  )
}

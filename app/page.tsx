"use client"

import Hero from "@/components/hero"
import BambooSaltInfo from "@/components/bamboo-salt-info"
import BambooStoneInfo from "@/components/bamboo-stone-info"
import BenefitsSection from "@/components/benefits-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />

      {/* Bamboo Salt Information */}
      <BambooSaltInfo />

      {/* Bamboo Stone Information */}
      <BambooStoneInfo />

      {/* Order & Delivery Summary */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="section-title">Order & Delivery Details</h2>
            <p className="section-subtitle">Clear terms to help you plan bulk purchases and logistics.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border bg-white/50">
              <h3 className="text-xl font-bold text-foreground">Minimum Order</h3>
              <p className="text-primary font-semibold text-2xl mt-2">100 kgs</p>
              <p className="text-sm text-muted-foreground mt-3">We maintain consistent quality at scale — minimum orders ensure proper batching, roasting, and packaging. Contact us for custom quantites and packaging options for smaller sample orders.</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-white/50">
              <h3 className="text-xl font-bold text-foreground">Advance</h3>
              <p className="text-primary font-semibold text-2xl mt-2">30%</p>
              <p className="text-sm text-muted-foreground mt-3">A 30% advance secures production scheduling and raw material sourcing. The remaining amount is payable prior to shipment or as negotiated for repeat buyers.</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-white/50">
              <h3 className="text-xl font-bold text-foreground">Delivery Time</h3>
              <p className="text-primary font-semibold text-2xl mt-2">~30 Days</p>
              <p className="text-sm text-muted-foreground mt-3">Standard lead time is approximately 30 days from order confirmation. Timelines may vary for large custom orders or during peak seasons — contact us for expedited options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Uses */}
      <BenefitsSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/8 to-secondary-light/8 border-y border-border">
        <div className="container-custom text-center">
          <h2 className="section-title">Ready to Experience Premium Quality?</h2>
          <p className="section-subtitle">
            Browse our complete range of bamboo salt and stone products, expertly roasted to perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                Shop Products
              </Button>
            </Link>
            <button 
              onClick={() => window.open('mailto:sjgroupsvpm@gmail.com?subject=Product%20Inquiry&body=Hi%20SJ%20GROUPS%2C%0AI%20would%20like%20to%20get%20a%20quote%20for%20your%20bamboo%20products.%0AThank%20you', '_self')}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-10 px-6"
            >
              Get Email Quote
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

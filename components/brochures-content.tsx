"use client"

import { Card } from "@/components/ui/card"

export default function BrochuresContent() {
  const brochure = {
    name: "Product Brochure",
    description: "Comprehensive guide to our Bamboo Salt and Bamboo Stone products",
    image: "/assets/sj-brochure.png",
    pdf: "/assets/brochure/sj-brochure.pdf",
    details: "Complete specifications, roasting levels, benefits, and usage information for all our premium products."
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="line-accent"></div>
          </div>
          <h1 className="section-title">Product Brochures</h1>
          <p className="section-subtitle">Download our detailed product brochure with complete specifications and information</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-premium p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Brochure Image - A4 Sheet Size */}
              <div className="flex justify-center">
                <div className="w-full max-w-sm aspect-[8.5/11] bg-white rounded-lg shadow-xl overflow-hidden border-2 border-border">
                  <img
                    src={brochure.image}
                    alt={brochure.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Brochure Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">{brochure.name}</h2>
                  <p className="text-muted-foreground text-lg">{brochure.description}</p>
                </div>

                <div className="bg-secondary-light/10 border border-secondary-light/30 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">What's Included:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Product specifications and features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Complete roasting levels (1-9x)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Health benefits and applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Packaging and ordering information</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-muted-foreground italic">{brochure.details}</p>

                <div className="flex gap-3 pt-4">
                  <a
                    href={brochure.image}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:brightness-95 transition-all shadow-md"
                  >
                    View Full Size
                  </a>
                  <a
                    href={brochure.pdf}
                    download
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-background-light rounded-xl border border-border">
            <div className="text-3xl mb-2">📄</div>
            <h3 className="font-semibold text-foreground mb-2">High Quality Print</h3>
            <p className="text-sm text-muted-foreground">Professional A4 format ready for printing</p>
          </div>
          <div className="text-center p-6 bg-background-light rounded-xl border border-border">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-semibold text-foreground mb-2">Digital Friendly</h3>
            <p className="text-sm text-muted-foreground">Easy to share and view on any device</p>
          </div>
          <div className="text-center p-6 bg-background-light rounded-xl border border-border">
            <div className="text-3xl mb-2">✨</div>
            <h3 className="font-semibold text-foreground mb-2">Comprehensive</h3>
            <p className="text-sm text-muted-foreground">All products and details in one document</p>
          </div>
        </div>
      </div>
    </section>
  )
}

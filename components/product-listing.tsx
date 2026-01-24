"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const productCategories = [
  {
    name: "Bamboo Salt",
    slug: "bamboo-salt",
    description: "Premium roasted bamboo salt with enhanced mineral properties",
    icon: "🧂",
    image: "/assets/bamboo-salt-info-1.png",
    products: [
      { name: "3x Roasted", slug: "bamboo-salt-3x", image: "/assets/products/bamboo-salt-3x.jpeg" },
      { name: "6x Roasted", slug: "bamboo-salt-6x", image: "/assets/products/bamboo-salt-6x.jpeg" },
      { name: "7x Roasted", slug: "bamboo-salt-7x", image: "/assets/products/bamboo-salt-7x.jpeg" },
      { name: "8x Roasted", slug: "bamboo-salt-8x", image: "/assets/products/sj-home.jpeg" },
      { name: "9x Roasted", slug: "bamboo-salt-9x", image: "/assets/products/bamboo-salt-9x.jpeg" },
    ],
  },
  {
    name: "Bamboo Stone",
    slug: "bamboo-stone",
    description: "Natural mineral-rich bamboo stones with multiple roasting options",
    icon: "🪨",
    image: "/assets/products/bamboo-stone.png",
    products: [
      { name: "Bamboo Stone Collection", slug: "bamboo-stone", image: "/assets/products/bamboo-stone.png" },
    ],
  },
]

export default function ProductListing() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="section-title text-foreground">Our Premium Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From 1-9x roasted varieties, each product is carefully crafted to deliver exceptional quality and authentic
            flavor.
          </p>
        </div>

        <div className="space-y-16">
          {productCategories.map((category) => (
            <div key={category.slug} className="space-y-8">
              {/* Bamboo Stone - Special Layout */}
              {category.slug === "bamboo-stone" ? (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Side - Name and Description */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center gap-3">
                      <span className="text-4xl">{category.icon}</span>
                      {category.name}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">{category.description}</p>
                    <p className="text-foreground text-base leading-relaxed">
                      Our Bamboo Stone collection features premium mineral-rich stones created through traditional roasting methods.
                      These natural formations are perfect for spa treatments, wellness therapies, and holistic health applications.
                    </p>
                  </div>

                  {/* Right Side - Product Container */}
                  <div>
                    {category.products.map((product) => (
                      <Link key={product.slug} href={`/products/${product.slug}`}>
                        <Card className="card-premium cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
                          <div className="w-full h-80 overflow-hidden bg-background-light">
                            <img
                              src={product.image ? product.image : `/assets/${product.slug}.jpg`}
                              alt={product.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="font-semibold text-foreground mb-2 text-xl">{product.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Premium roasted {category.name.toLowerCase()}
                            </p>
                            <Button size="sm" className="w-full bg-primary text-white hover:brightness-90">
                              View Details
                            </Button>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                /* Bamboo Salt - Original Grid Layout */
                <>
                  <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center gap-3">
                        <span className="text-4xl">{category.icon}</span>
                        {category.name}
                      </h2>
                      <p className="text-muted-foreground text-lg">{category.description}</p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {category.products.map((product) => (
                      <Link key={product.slug} href={`/products/${product.slug}`}>
                        <Card className="card-premium h-full cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                          <div className="w-full h-64 overflow-hidden bg-background-light">
                            <img
                              src={product.image ? product.image : `/assets/${product.slug}.jpg`}
                              alt={product.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4 flex-grow">
                              Premium roasted {category.name.toLowerCase()}
                            </p>
                            <Button size="sm" className="w-full bg-primary text-white hover:brightness-90">
                              View Details
                            </Button>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </>
              )}

              <div className="bg-secondary-light/10 border border-secondary-light/30 rounded-xl p-6 mb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Minimum Order</p>
                    <p className="text-muted-foreground">100 kgs</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Payment</p>
                    <p className="text-muted-foreground">30% Advance</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Delivery</p>
                    <p className="text-muted-foreground">30 Days</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Support</p>
                    <p className="text-muted-foreground">24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="card-premium p-8 bg-gradient-to-br from-primary/5 to-secondary-light/5">
            <h3 className="text-2xl font-bold text-foreground mb-4">Get Your Quote Today</h3>
            <p className="text-muted-foreground mb-6">
              Contact us via email for personalized quotes and bulk orders
            </p>
            <button 
              onClick={() => window.open('mailto:sjgroupsvpm@gmail.com?subject=Bulk%20Order%20Quote&body=Hi%20SJ%20GROUPS%2C%0AI%20am%20interested%20in%20ordering%20your%20bamboo%20products.%0APlease%20provide%20a%20quote.%0AThank%20you', '_self')}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-white hover:brightness-90 h-10 px-6"
            >
              Request Quote via Email
            </button>
          </Card>
        </div>
      </div>
    </section>
  )
}

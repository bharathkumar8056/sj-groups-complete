"use client"

import { Card } from "@/components/ui/card"

export default function BambooSaltInfo() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom space-y-20">
        {/* First Section: What is Bamboo Salt + Major Functions with Image */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="line-accent"></div>
                <span className="text-primary font-sans text-xs tracking-widest font-semibold uppercase">Bamboo Salt</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">What is Bamboo Salt?</h2>
            </div>

            <p className="text-base md:text-lg text-foreground leading-relaxed font-light">
              Bamboo salt is originally from Korean folk remedies with a thousand years' history. It provides alkaline organic mineral salt with 70-80 essential minerals and trace elements. It is a strong anti-oxidant and able to restore body cells effectively. Long-term consumption of bamboo salt can balance the pH value of body fluids and is very beneficial to our acidic bodies, helping to improve immune system and health.
            </p>

            <div className="space-y-6 pt-4">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Major Functions of Bamboo Salt</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                  <div>
                    <p className="font-semibold text-foreground text-base mb-1">Supply Essential Minerals and Trace Elements</p>
                    <p className="text-sm text-foreground leading-relaxed">Bamboo Salt contains 70-80 types of minerals and trace elements essential to life and optimizes function of other nutrients</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                  <div>
                    <p className="font-semibold text-foreground text-base mb-1">Balancing of Body pH</p>
                    <p className="text-sm text-foreground leading-relaxed">Bamboo Salt possesses strong alkalinity (pH 10-12) that can neutralize excess acidic wastes and toxins in our body</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                  <div>
                    <p className="font-semibold text-foreground text-base mb-1">Powerful Anti-Oxidant</p>
                    <p className="text-sm text-foreground leading-relaxed">Due to environment and food contamination, large amounts of harmful free radicals are produced in the body. Bamboo salt eliminates free radicals by activating various antioxidant enzymes with strong antioxidant action</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Image for What is Bamboo Salt section */}
          <div className="relative h-fit">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary-light/10 rounded-3xl blur-2xl -z-10"></div>
            <Card className="card-premium overflow-hidden h-[500px] md:h-[650px]">
              <img 
                src="/assets/bamboo-salt-info-1.png" 
                alt="Bamboo Salt Product" 
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>

        {/* Second Section: Extraction & Production Process with Image */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Extraction & Production Process</h3>
            <div className="space-y-4">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-sans font-bold text-primary text-lg">
                  1
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-foreground text-base">Pure Sea Salt Collection from the Western Coast of South Korea</p>
                  <p className="text-sm text-foreground mt-2">Only premium quality sea salt from pristine coastal waters is selected. The salt is naturally sun-dried using traditional methods to preserve its mineral content and purity</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-sans font-bold text-primary text-lg">
                  2
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-foreground text-base">Collection of 3 Years Old Bamboo Trunk</p>
                  <p className="text-sm text-foreground mt-2">Bamboo at this age has optimal density and mineral composition. The bamboo is carefully harvested from pollution-free mountain regions to ensure the highest quality for the roasting process</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-sans font-bold text-primary text-lg">
                  3
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-foreground text-base">Fill Sundried Salt into the Bamboo Trunk</p>
                  <p className="text-sm text-foreground mt-2">The bamboo is cut into precise sections and thoroughly cleaned. Sea salt is carefully packed into the hollow bamboo cylinders, ensuring complete filling without air pockets for uniform heat distribution</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-sans font-bold text-primary text-lg">
                  4
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-foreground text-base">Seal Opening with Red Clay from Unpolluted Deep Mountain</p>
                  <p className="text-sm text-foreground mt-2">Seal opening of bamboo trunk with red clay from unpolluted deep mountain (from 10 meter depth is used because it is richer in minerals and lower in impurities)</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-sans font-bold text-primary text-lg">
                  5
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-foreground text-base">Bake at High Temperature (900°C – 1500°C for 6-8 Hours)</p>
                  <p className="text-sm text-foreground mt-2">Bake for 6-8hours at temperature between 900C – 1500C to remove the impurities and heavy metals. Minerals and trace elements from the red clay and bamboo trunk are condensed into the bamboo salt</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-sans font-bold text-primary text-lg">
                  6
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-foreground text-base">1-Time Roasted Bamboo Salt is Complete</p>
                  <p className="text-sm text-foreground mt-2">After cooling, the bamboo ash is removed to reveal the transformed salt. The first roasting creates a foundation of enhanced minerals and begins the purification process that will continue through subsequent roastings</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-sans font-bold text-primary text-lg">
                  7
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-foreground text-base">Repeat the Burning Process</p>
                  <p className="text-sm text-foreground mt-2">Baked bamboo salt is ground into powder form and filled into a new bamboo trunk and sealed with red clay for the next burning process. This increases good mineral content and eliminates bad minerals</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-sans font-bold text-primary text-lg">
                  8
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-foreground text-base">9th Burn: Purple Crystalline Bamboo Salt</p>
                  <p className="text-sm text-foreground mt-2">The 9th burn bamboo salt is purple in color and found to have the highest efficacy. Scientists believe the color change is due to rearrangement of sulfur molecules into hexagonal shapes. This final roasting achieves maximum alkalinity (pH 10-12) and the most potent antioxidant properties, making it the premium grade for therapeutic use</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image for Extraction Process */}
          <div className="relative h-fit">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary-light/10 rounded-3xl blur-2xl -z-10"></div>
            <Card className="card-premium overflow-hidden h-[500px] md:h-[650px]">
              <img
                src="/assets/bamboo-cutting.png"
                alt="Bamboo Salt Roasting Process"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>

        {/* Third Section: Why Make Salt into Bamboo Salt */}
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="line-accent"></div>
              <span className="text-primary font-sans text-xs tracking-widest font-semibold uppercase">The Science</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">Why Make Salt into Bamboo Salt?</h2>
          </div>

          <p className="text-base md:text-lg text-foreground leading-relaxed font-light">
            Salt is essential for physiological activities and supplies minerals needed by the human body. However, due to modern environmental pollution and mineral imbalance, salt is recreated as bamboo salt by baking it in bamboo nodes to enhance its purity, mineral absorption, and health benefits.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-4">
            <Card className="card-premium p-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight">Remove Impurities in Salt</h3>
              <p className="text-sm text-foreground leading-relaxed">
                Baking salt inside bamboo at temperatures above 1,300°C removes harmful impurities such as bittern and heavy metals while retaining beneficial minerals.
              </p>
            </Card>

            <Card className="card-premium p-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight">Make Minerals More Absorbable</h3>
              <p className="text-sm text-foreground leading-relaxed">
                High-temperature processing activates minerals, allowing them to dissolve and ionize, which helps the human body absorb them more effectively.
              </p>
            </Card>

            <Card className="card-premium p-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight">Synthesize Natural Minerals</h3>
              <p className="text-sm text-foreground leading-relaxed">
                During baking, minerals from bamboo, clay, and resin naturally combine with salt, enriching it with health-supporting properties that aid disease prevention.
              </p>
            </Card>
          </div>
        </div>

        {/* Fourth Section: Health Benefits with Image */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="line-accent"></div>
                <span className="text-primary font-sans text-xs tracking-widest font-semibold uppercase">Health & Wellness</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">Health Benefits of Bamboo Salt</h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                <div>
                  <p className="font-semibold text-foreground text-base mb-1">Anti-Allergic Effect</p>
                  <p className="text-sm text-foreground leading-relaxed">Bamboo salt suppresses immediate allergic reactions by inhibiting histamine release, thereby reducing swelling and allergy symptoms.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                <div>
                  <p className="font-semibold text-foreground text-base mb-1">Anti-Obesity Support</p>
                  <p className="text-sm text-foreground leading-relaxed">Regular intake helps reduce body weight and serum lipid levels, showing a preventive effect against obesity.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                <div>
                  <p className="font-semibold text-foreground text-base mb-1">Anti-Cancer Properties</p>
                  <p className="text-sm text-foreground leading-relaxed">Compared to regular salts, bamboo salt shows significantly higher anticancer and antimutagenic effects due to repeated high-temperature roasting.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                <div>
                  <p className="font-semibold text-foreground text-base mb-1">Dental Health & Oral Care</p>
                  <p className="text-sm text-foreground leading-relaxed">Bamboo salt strengthens tooth enamel, reduces mineral loss, prevents plaque formation, and lowers the risk of gingivitis.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                <div>
                  <p className="font-semibold text-foreground text-base mb-1">Anti-Inflammatory Action</p>
                  <p className="text-sm text-foreground leading-relaxed">It effectively reduces inflammation, contributing to the prevention and treatment of inflammatory diseases.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                <div>
                  <p className="font-semibold text-foreground text-base mb-1">Antimicrobial Protection (Salmonella & Candida)</p>
                  <p className="text-sm text-foreground leading-relaxed">Bamboo salt contains natural antimicrobial compounds that inhibit bacteria, fungi, and yeast, including Salmonella and Candida infections.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                <div>
                  <p className="font-semibold text-foreground text-base mb-1">Hearing & Ear Protection</p>
                  <p className="text-sm text-foreground leading-relaxed">Rich in magnesium, bamboo salt helps prevent noise-induced hearing loss and reduces chemotherapy-related ear damage.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                <div>
                  <p className="font-semibold text-foreground text-base mb-1">Anti-Gastric Ulcer & Diabetes Support</p>
                  <p className="text-sm text-foreground leading-relaxed">It generates hydrogen sulfide, aiding gastric ulcer healing, improving insulin sensitivity, and enhancing glucose uptake.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image for Health Benefits */}
          <div className="relative h-fit">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary-light/10 rounded-3xl blur-2xl -z-10"></div>
            <Card className="card-premium overflow-hidden h-[500px] md:h-[650px]">
              <img
                src="/assets/bamboo-salt-benefits.png"
                alt="Bamboo Salt Health Benefits"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

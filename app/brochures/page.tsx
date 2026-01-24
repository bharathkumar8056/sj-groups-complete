import BrochuresContent from "@/components/brochures-content"

export const metadata = {
  title: "Product Brochures - SJ GROUPS",
  description: "Download our comprehensive product brochure with detailed specifications and information",
}

export default function BrochuresPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background-light pt-24">
      <BrochuresContent />
    </main>
  )
}

import CertificationsContent from "@/components/certifications-content"

export const metadata = {
  title: "Certifications - SJ GROUPS",
  description: "View our quality certifications from IEC, FSSAI, and APEDA",
}

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background-light pt-24">
      <CertificationsContent />
    </main>
  )
}

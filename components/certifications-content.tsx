"use client"

export default function CertificationsContent() {
  const certifications = [
    {
      name: "IEC Certificate",
      organization: "International Electrotechnical Commission",
      description: "Quality assurance and standardization certification",
      image: "/assets/certifications/iec-code.jpg",
      // pdf: "/assets/certifications/Certificate-IEC.pdf",
      details: "Official certification validating our quality standards and operational excellence",
      blur: true
    },
    {
      name: "FSSAI Certificate",
      organization: "Food Safety & Standards Authority of India",
      description: "Food safety and hygiene compliance certification",
      image: "/assets/certifications/fssai.jpg",
      // pdf: "/assets/certifications/fssai.pdf",
      details: "Ensures our products meet all food safety and hygiene standards set by FSSAI",
      blur: true
    },
    {
      name: "APEDA Certificate",
      organization: "Agricultural & Processed Food Products Export Development Authority",
      description: "Export quality certification for agricultural products",
      image: "/assets/certifications/apeda.jpg",
      // pdf: "/assets/certifications/apeda.pdf",
      details: "Certification validating our products meet international export standards",
      blur: true
    },
    {
      name: "Udyam Certificate",
      organization: "Ministry of Micro, Small and Medium Enterprises",
      description: "MSME registration and recognition certificate",
      image: "/assets/certifications/udyam.jpg",
      // pdf: "/assets/certifications/sj-udyam.pdf",
      details: "Official registration certificate recognizing our enterprise under the MSME Development Act",
      blur: true
    },
    {
      name: "GST Certificate",
      organization: "Goods and Services Tax Network",
      description: "GST registration and tax compliance certificate",
      image: "/assets/certifications/gst.jpg",
      // pdf: "/assets/certifications/sj-gst.pdf",
      details: "Valid GST registration certificate ensuring compliance with Indian tax regulations",
      blur: true
    },
    {
      name: "Lab Report",
      organization: "Certified Testing Laboratory",
      description: "Product quality and safety analysis report",
      image: "/assets/certifications/lab-report.png",
      details: "Comprehensive laboratory analysis report validating product quality, purity, and safety standards",
      blur: true
    }
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="line-accent"></div>
          </div>
          <h1 className="section-title">Our Certifications</h1>
          <p className="section-subtitle">Official certifications and quality standards from recognized authorities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex flex-col items-center">
              {/* Certificate Image */}
              <div className="w-full aspect-[8.5/11] bg-white rounded-lg shadow-xl overflow-hidden border-2 border-border">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className={`w-full h-full object-cover ${cert.blur ? "blur-[3px]" : ""}`}
                />
              </div>

              {/* Certificate Name */}
              <h3 className="text-xl font-bold text-foreground mt-4 text-center">{cert.name}</h3>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-background-light rounded-xl border border-border">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-semibold text-foreground mb-2">Verified Quality</h3>
            <p className="text-sm text-muted-foreground">All certifications verified and up-to-date</p>
          </div>
          <div className="text-center p-6 bg-background-light rounded-xl border border-border">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-semibold text-foreground mb-2">Industry Standards</h3>
            <p className="text-sm text-muted-foreground">Compliance with international quality standards</p>
          </div>
          <div className="text-center p-6 bg-background-light rounded-xl border border-border">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="font-semibold text-foreground mb-2">Global Trust</h3>
            <p className="text-sm text-muted-foreground">Recognized by authorities worldwide</p>
          </div>
        </div>
      </div>
    </section>
  )
}

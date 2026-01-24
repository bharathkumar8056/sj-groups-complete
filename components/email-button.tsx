"use client"

import { Mail } from "lucide-react"

export default function EmailButton() {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Product Inquiry - SJ GROUPS")
    const body = encodeURIComponent("Hi SJ GROUPS,\n\nI would like to get a quote for your bamboo products.\n\nPlease contact me at your earliest convenience.\n\nThank you!")
    window.location.href = `mailto:sjgroupsvpm@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <button
      onClick={handleEmailClick}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contact us via email"
    >
      <div className="bg-primary hover:brightness-90 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-16 h-16">
        <Mail size={28} className="group-hover:animate-bounce" />
      </div>
    </button>
  )
}

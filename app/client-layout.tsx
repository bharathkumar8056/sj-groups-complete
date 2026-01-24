"use client"

import type React from "react"
import Navbar from "@/components/navbar"
import EmailButton from "@/components/email-button"
import Footer from "@/components/footer"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // <CHANGE> Added scroll to top on route change
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <EmailButton />
      <Footer />
    </>
  )
}

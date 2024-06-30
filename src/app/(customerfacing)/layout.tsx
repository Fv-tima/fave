import { Nav, NavLink } from "../../components/Nav"
import React from "react"
import Footer from "@/components/Footer"
export const dynamic = "force-dynamic"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Shop</NavLink>
        <NavLink href="/products">Trending</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
      <Footer/>
    </>
  )
}
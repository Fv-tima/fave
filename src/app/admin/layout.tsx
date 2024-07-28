import { Nav, NavLink } from "@/components/Nav"
export const dynamic = "force-dynamic"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </div>
  )
}




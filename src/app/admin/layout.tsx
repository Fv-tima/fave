import { Nav, NavLink } from "@/components/Nav"
import {
  ClerkProvider,
  SignedIn,
  UserButton,
} from '@clerk/nextjs'
import { auth } from "@clerk/nextjs/server"
import AdminNav from "./products/_components/AdminNav"
export const dynamic = "force-dynamic"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>)

{
  const { userId }: any = auth()
  return (
    <ClerkProvider>
      {userId ? <SignedIn>  <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <UserButton />
      </Nav>
        <div className="container my-6">{children}</div></SignedIn> : <AdminNav />}

    </ClerkProvider>
  )
}




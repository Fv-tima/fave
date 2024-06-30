import React from 'react'
import { Nav } from '@/components/Nav'
import { SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'


export default function AdminNav() {
  return (
    <div>
   <Nav>
   <SignedOut><SignInButton /></SignedOut>
   <SignedOut><SignUpButton /></SignedOut>
   </Nav>
   <div className=" flex flex-col justify-center items-center h-screen text-center w-full px-[40px] "><h1 className='text-3xl mb-4'>Welcome to Jewellery crest by Fave Login or Signup to update your product</h1>
   <div className="flex space-x-8">
    <Button variant="outline" className= "bg-[#a38e7e] text-white"><SignedOut><SignInButton /></SignedOut></Button>
    <Button variant="outline" className= "bg-[#a38e7e] text-white"><SignedOut><SignUpButton /></SignedOut></Button></div></div>
   </div>
  )
}

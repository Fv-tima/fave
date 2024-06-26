"use client"
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ComponentProps, ReactNode } from "react"

export function Nav({ children }: { children: ReactNode }) {
  const [openNav, setOpenNav] = useState(false);

  const open = () => {
    setOpenNav((prev) => !prev);
  };
  return (
    <nav className="bg-[#a38e7e] text-primary-foreground flex justify-center px-4">
       <div className="flex justify-between items-center w-full px-[40px] py-6 h-4 md:h-8">
        <div className=" cursor-pointer" onClick={open}>
          {openNav ? <Image src="/imgs/close.png"
            alt="Close"
            width={15}
            height={15} /> :
            <Image src="/imgs/menu.png"
              alt="Menu"
              width={25}
              height={25} />}
        </div>
        <Link href="/"  >
        <Link href="/" className="italic font-serif font-bold text-xl text-center text-white/50" >
        fave
      </Link>
        </Link>
        <div className="hidden md:flex space-x-8">
        {children}
        </div>
      </div>
      {openNav && (
        <div className="mt-4 h-screen justify-start ml-10 flex" >
          <div onClick={open}>
            <ul className="md:hidden flex flex-col space-y-[38px] ">
            {children}
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname()
  return (
     <Link 
      {...props}
      className={cn("text-[16px] font-[600]", pathname === props.href)}/>
  )
}





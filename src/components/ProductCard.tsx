"use client"
import { formatCurrency } from "@/lib/formatters"

import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"

type ProductCardProps = {
  id: string
  name: string
  priceInCents: number
  description: string
  imagePath: string
}

export function ProductCard({
  id,
  name,
  priceInCents,
  description,
  imagePath,
}: ProductCardProps) {

 const whatsappNumber = '+2348066952753'; // Replace with your actual WhatsApp number (if needed)

  const handleWhatsAppClick = () => {
    // Enhanced validation for WhatsApp number format (international format)
    const isValidNumber = /^\+?([0-9]{2,3})\)?[-.\s]?([0-9]{3,4})[-.\s]?([0-9]{3,})$/.test(whatsappNumber);
    if (!isValidNumber) {
      console.error('Invalid WhatsApp number format. Please provide a valid number in international format (e.g., +2348123456789).');
      return; // Prevent redirect if number is invalid
    }

    // Encode the price and image URL for proper WhatsApp message formatting
    const encodedPrice = encodeURIComponent(priceInCents);
    const encodedImageURL = encodeURIComponent(imagePath); // Assuming you have an image prop, replace with your image URL

    // Construct the WhatsApp URL with clear message, item ID, and optional image preview
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi,%20I'm%20interested%20in%20purchasing%20item%20:%20${name}%20(price:%20${encodedPrice}):%20${encodedImageURL}`;

    // Use Next.js Link for client-side navigation (avoids full page reload)
    window.location.href = whatsappUrl;
  };
  return (
    <Link href={`/products/${id}`}>
    <Card className="flex overflow-hidden flex-col">
      <div className="relative w-full h-auto aspect-video">
        <Image src={imagePath} fill alt={name} />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{formatCurrency(priceInCents / 100)}</CardDescription>
      </CardHeader>
      <CardFooter>
         <button className='hover:bg-[#66625f] hover:text-white text-sm p-1 bg-transparent text-[#66625f] px-2 border-2 rounded-sm' onClick={handleWhatsAppClick}>Order now</button>
      </CardFooter>
    </Card>
    </Link>
  )
}

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden flex flex-col animate-pulse">
      <div className="w-full aspect-video bg-gray-300" />
      <CardHeader>
        <CardTitle>
          <div className="w-3/4 h-6 rounded-full bg-gray-300" />
        </CardTitle>
        <CardDescription>
          <div className="w-1/2 h-4 rounded-full bg-gray-300" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-3/4 h-4 rounded-full bg-gray-300" />
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled size="lg"></Button>
      </CardFooter>
    </Card>
  )
}
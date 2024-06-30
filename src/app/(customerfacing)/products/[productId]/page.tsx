import { ProductCardSkeleton } from "@/components/ProductCard"
import { formatCurrency } from "@/lib/formatters"
import db from "@/app/db/db"
import { cache } from "@/lib/cache"
import { Suspense } from "react"
import React from "react"
import Image from "next/image"

type ProdDetails = {
  productId: string,
}

const getProducts = cache(() => {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { name: "asc" },
  })
}, ["/products", "getProducts"])

export default function ProductsPage({ params }: { params: ProdDetails }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Suspense
        fallback={
          <>
            <ProductCardSkeleton />
          </>
        }
      >
        <ProductsSuspense params={params} />
      </Suspense>
    </div>
  )
}

async function ProductsSuspense({params}:any) {
  const products = await getProducts()

  const product: any = products.find((item) => (item.id) === (params.productId))

  return (
    <div className="flex flex-col justify-center items-center w-full space-y-3 border-b-gray-400 border-b-[1.5px] my-4 pb-4">
    <Image
      src={product.imagePath} 
      alt={product.name}
      width={400}
      height={300}
      className='rounded h-[300px]' />
    <h1 className="text-gray-400 mr-auto">SALE</h1>
    <p className="text-2xl mr-auto">{product.name}</p>
    <p className=" mr-auto text-gray-500">{formatCurrency(product.priceInNaira / 100)}</p>
    <p className="mr-auto italic">{product.description}</p>
  </div>)
}
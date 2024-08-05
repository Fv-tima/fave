

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="md:pt-[100px] p-[40px] bg-[#a38e7e] flex flex-col space-y-4 text-white/50">
      <Link href="/" className="italic font-serif font-bold text-xl text-center" >
        fave
      </Link>
      <ul className="flex justify-center items-center md:space-x-[48px] space-x-[30px]">
        <Link className="text-[14px] font-[400] uppercase " href="/shop"><li>Shop</li></Link>
        <Link className="text-[14px] font-[400] uppercase " href="/shop"><li>Trending</li></Link>
        <Link className="text-[14px] font-[400] uppercase " href="/shop"><li>About</li></Link>
      </ul>
      <hr className='h-[1px] text-grey bg-grey' />
      <div className="flex justify-between items-center text-sm mt-4">
        <p className='italic'>Copyrights 2024 | Ima</p>
        <div className="flex space-x-4 items-center">
          <Image
            src="/imgs/fb.png"
            width={25}
            height={25}
            alt="facebook" />
          <Image
            src="/imgs/x.png"
            width={25}
            height={25}
            alt="x" />
          <Image
            src="/imgs/what.png"
            width={25}
            height={25}
            alt="wa" />
        </div>
      </div>
    </div>
  )
}


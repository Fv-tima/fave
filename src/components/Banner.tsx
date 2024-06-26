import React from 'react'
import { Button } from './ui/button'

export default function Banner() {
  return (
    <div className='banner flex flex-col justify-end md:justify-center items-center md:px-[100px] p-[40px] space-y-6 md:space-y-8 mt-[40px]'>
      <p className="font-bold text-3xl uppercase">Try something new</p>
      <p>Get inspired from our signature </p>
      <div className="flex space-x-8">
        <Button variant="outline">New arrivals</Button>
        <Button variant="outline">Best sellers</Button>
      </div>
  </div>
  )
}
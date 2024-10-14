"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
import Image from "next/image";
import productsData from "@/data/products.json";
import { link } from "fs";

function page() {
  return (
    <div className="min-h-screen py-12 pt-36 bg-gray-900">
      <div className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">
       All Products {productsData.products.length}
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-10 mb-20">
        {productsData.products.map((product) => (
          <BackgroundGradient key={"id"} className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src={product.image}
            alt="guitar"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {product.title}
          </p>
   
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {product.description}
          </p>
          <Link href={"https://www.amazon.in/Medellin-Acoustic-Guitar-learning-course/dp/B0CJY91RB1/ref=asc_df_B0CJY91RB1/?tag=googleshopdes-21&linkCode=df0&hvadid=666440602796&hvpos=&hvnetw=g&hvrand=10316373322805868170&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9302611&hvtargid=pla-2263043126627&mcid=334102ce257f30418dc06c606ac5d94c&th=1" } target="_blank">
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
             {product.price}
            </span>
          </button>
          </Link>
        </BackgroundGradient>

        ))}
      
    </div>
    </div>
  );
}

export default page;

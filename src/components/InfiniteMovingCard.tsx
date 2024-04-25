"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function InfiniteMovingCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony: Voices of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            
        <div className="w-full max-w-6xl">
       <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        />
        </div>

            
        </div>
    </div>
  )
}

const testimonials = [
    {
      quote:
        "Music is the one incorporeal entrance into the higher world of knowledge which comprehends mankind but which mankind cannot comprehend.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "Music is the divine way to tell beautiful, poetic things to the heart. He was also a dedicated humanitarian and peace activist, and he used his music to promote social justice and human rights. Casals legacy continues to inspire musicians and music lovers around the world",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All sounds have been as music to my listening: / Pacific lamentations of slow bells, / The crunch of boots on blue snow rosy-glistening, / Shuffle of autumn leaves; and all farewells:",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "When music sounds, gone is the earth I know, / And all her lovely things even lovelier grow; / Her flowers in vision flame, her forest trees / Lift burdened branches, stilled with ecstasies.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Music is my channel broadcasting the emotions of love, pain and happiness with a rhythm... The harmony of the notes, and rhythm explains it all...it can be with unheard words, from an unseen poet, a silent songwriter.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

export default InfiniteMovingCard

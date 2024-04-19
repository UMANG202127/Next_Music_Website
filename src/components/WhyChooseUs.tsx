
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Discover your sound with us: A personal journey in Music Mastery",
      description:
        "Embark on a musical journey that's uniquely yours. Our personalised instruction adapts to your individual needs, setting the stage unparalleled growth and creativity. At your Music School, your aspirations meet our dedicated support, creating a harmonious path to mystery.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          A personal journey in Music Mastery
        </div>
      ),
    },
    {
      title: "Live Feedback & Engagement",
      description:
        "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative projects. This approach enhance your understanding and mastery of music concepts and performance techniques.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          Real time changes
        </div>
      ),
    },
    {
      title: "Cutting-Edge Curriculum",
      description:
        "Our curriculum is continously updated to include the latest music education trends and technologies, ensuring you're always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Cutting-Edge Curriculum
        </div>
      ),
    },
    {
      title: "Limitless Learning Opportunities",
      description:
        "With our expansive resource library and dynamic course offerings, you will never find yourself without something new to explore. Our platform provides continous opportunities for  growth ensuring your musical skills are always advancing.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Limitless Learning Opportunities
        </div>
      ),
    },
  ];
  

function WhyChooseUs() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs

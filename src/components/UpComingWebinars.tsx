'use client'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link"

function UpComingWebinars() {

  const featuredWebinar =[
    {
        title: "Understanding Music Theory",
    description:
      "Understanding music theory involves learning the language and concepts that explain how music works. It covers various topics such as notes, scales, intervals, chords, rhythm, and reading sheet music.",
    slug :"understanding-music-theory",
    isFeatured: true,
    },
    {
        title: "The Art of Improvisation",
    description:
      "Improvisation in music is the art of creating music spontaneously, without prior preparation or planning. It involves a musician's ability to think on their feet, respond to the music around them, and express themselves freely through their instrument.",
    slug :"the-art-of-improvisation",
    isFeatured: true,
    },
    {
        title: "The Language of Music",
    description:
      "The genre owes much of its success in the first two decades of the 21st century to digital video sharing, with artists such as Daddy Yankee, Luis Fonsi, Jennifer Lopez, Shakira, and Bad Bunny being at the forefront of this trend.",
    slug :"the-language-of-music",
    isFeatured: true,
    },
    {
        title: "The Art of Songwriting",
    description:
      "The Art of Songwriting is a craft that involves creating a melody and lyrics to express emotions, tell a story, or convey a message. It requires creativity, skill, and practice to write a song that resonates with listeners.",
    slug :"the-art-of-songwriting",
    isFeatured: true,
    },
    {
        title: "Music Marketing",
    description:
      "The use of 3D audio and spatial sound is becoming more prevalent in music production, creating a more immersive listening experience.",
    slug :"music-marketing",
    isFeatured: true,
    },
    {
        title: "The Future of Music",
    description:
      "Overall, the music industry is set to continue evolving in 2024, with new technologies and trends shaping the way music is produced, marketed, and consumed.",
    slug :"the-future-of-music",
    isFeatured: true,
    }

  ]
  
 


  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10">
          <HoverEffect
          items={featuredWebinar.map(webinar => (
            {
                title: webinar.title,
                description: webinar.description,
                link: '/'
            }
          ))}
          />
        </div>
        <div className="mt-10 text-center">
            <Link href={"/webinars"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
                View All Webinars
            </Link>
        </div>
      </div>
    </div>
  )
}

export default UpComingWebinars

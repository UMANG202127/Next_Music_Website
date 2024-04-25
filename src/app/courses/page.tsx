'use client';
import courseData from "@/data/music_courses.json"

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h2 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">All Courses {courseData.courses.length}</h2>
    </div>
  )
}

export default page

'use client';

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-5xl text-center 
        font-sans font-bold mb-8 text-white">Registeration For Admission</h1>
      <div>
        <form action="" className="flex flex-wrap justify-center">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name"/>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" placeholder="Email Address"/>
        </form>
      </div>
    </div>
  )
}

export default page

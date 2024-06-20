'use client'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export default function logout(){
    return(
        
            <div className="min-h-screen bg-black py-12 pt-36">
      <div className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">
       hey 
      </div>
           <LogoutLink>logout</LogoutLink>
        </div>
    )
}


import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"


export default async function profile(){
  
  const {getUser} = getKindeServerSession()

  const user = await getUser();

  if (!user) return redirect('/')

 
  
  return(
    <>
    <div className="min-h-screen bg-black py-12 pt-36">
      <div className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">
       hey {user.given_name} {user.family_name}
      </div>
      

    </div>
    </>
  )
}


'use client'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'


export default function ProfilePage() {
  const router = useRouter();

  const logout = async () =>{
    try {
      await axios.get('/api/users/logout')
      toast.success('logout successfull')
      router.push("/login")
      
    } catch (error: any) {
      console.log(error.message)
      toast.error(error.message)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile page</h1>
      <hr />
      <p>profile page</p>
      <hr />
      <button 
      onClick={logout}
      className="bg-blue-500 hover:bg-blue-700 text-white font bold py-2 px-4 rounded mt-4">logout</button>
    </div>
  )
}



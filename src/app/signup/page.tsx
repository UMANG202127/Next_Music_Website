"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] =useState(false);

  
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup Successfull", response.data);
      router.push("/login");
    } 
    
    catch (error: any) {
      console.log("signup failed", error.message);
      toast.error(error.message);
    }

    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">{loading ? "processing" : "Signup"}</h1>
      <hr />
      
      <label htmlFor="username">username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        type="text"
      />
      
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        type="email"
      />
      
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        type="password"
      />
      
      <button
        onClick={onSignup}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        disabled = {buttonDisabled}>
        {buttonDisabled ? "Please fill the form" : "Signup"}
      </button>
      <Link href={"/login"}>Already have an account? Login here.</Link>
    </div>
  );
}

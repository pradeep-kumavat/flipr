"use client"
import React, { useEffect } from "react";
import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const router = useRouter()
  const [user , setUser] = useState({
    email:"",
    password:""
  })

  const [buttonDisabled , setButtonDisabled] = useState(false)
  const [loading , setloading] = useState(false)

  const onLogin = async()=>{
    try {
      setloading(true)
      const response = await axios.post("/api/login",user)

      console.log("Login success", response.data)
      
      router.push("/admin")

    } catch (error:any) {
      console.error("Signup failed ",error);
      
    }
  }

  useEffect(()=>{
  if(user.email.length > 0 && user.password.length >0 ){
    setButtonDisabled(false)
  }
  else{
    setButtonDisabled(true)
  }
  },[user])

  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900">Login</h2>
          <p className="text-sm text-center text-gray-600 mt-2 hover:underline">
            Or{' '}
            <Link href="/signup">
              Register for an account
            </Link>
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-custom-green focus:border-custom-green sm:text-sm text-black"
                placeholder="Email address"
                value={user.email}
                onChange={(e)=> setUser({...user, email:e.target.value })} 
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-custom-green focus:border-custom-green sm:text-sm text-black"
                placeholder="Password"
                value={user.password}
                onChange={(e)=> setUser({...user, password:e.target.value })} 
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-custom-green border-gray-300 rounded focus:ring-custom-green"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link href="#">
                  Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={onLogin}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-custom-green rounded-md hover:bg-custom-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
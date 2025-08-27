import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setisSignInForm] = useState();

  const toggleSignInForm = () => {
  setisSignInForm(!isSignInForm)
  }

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <img
        src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg"
        alt="login"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Centered Form */}
      <div className="flex justify-center items-center min-h-screen">
        <form className="w-3/12 p-12 bg-black text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl px-4">{isSignInForm ? "Sign in" : "Sign Up"}</h1>
           {!isSignInForm && (<input
            type="text"
            placeholder="Full name"
            className="p-2 my-2 w-full bg-gray-700 rounded"
          />)}
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 w-full bg-gray-700 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-700 rounded"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
           {isSignInForm ? "Sign in" : "Sign Up"}
          </button>
          <p className='px-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up Now" : "Already registered Sign in "} </p>
        </form>
      </div>
    </div>
  )
}

export default Login

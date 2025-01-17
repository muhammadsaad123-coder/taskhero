'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import apple from '../pictures/apple.png'
import google from '../pictures/google.png'
import facebook from '../pictures/facebook.png'

function Page() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="flex items-center w-full justify-center py-10 bg-slate-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h1 className="text-3xl font-bold text-center text-purple-600">taskhero</h1>
          <h2 className="mt-4 text-lg text-center text-gray-700">
            {isLogin ? 'Login to Your Account' : 'Create a New Account'}
          </h2>

          <form className="mt-6">
            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Email"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Username"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Password"
                required
              />
            </div>

            {isLogin ? (
              <a href="#" className="block text-sm text-purple-600 mt-1 text-right">
                Forgot password?
              </a>
            ) : (
              <div className="mb-4">
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-purple-600 underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-purple-600 underline"
                >
                  Login
                </button>
              </>
            )}
          </p>

          <div className="mt-6 text-center">
            <span className="text-gray-600">or</span>
          </div>

          <div className="mt-4">
            <button className="w-full flex items-center justify-center border-2 border-black
                               py-2 rounded-md hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2">
              <Image
                src={facebook}
                alt=""
                width={20}
                height={20}
                className="mr-2"
              />
              Continue with Facebook
            </button>
            <button className="w-full flex items-center border-2 border-black
                               justify-center py-2 rounded-md hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 mb-2">
              <Image
                src={google}
                alt=""
                width={20}
                height={20}
                className="mr-2"
              />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center border-2 border-black
                               py-2 rounded-md hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-black">
              <Image
                src={apple}
                alt=""
                width={20}
                height={20}
                className="mr-2"
              />
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

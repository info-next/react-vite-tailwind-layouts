import React from 'react';
import './Login.scss';
import img from '../../assets/images/marmi/59.jpg'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login__page" style={{ backgroundImage: `url(${img})` }}>
    <div className="login__row min-h-screen">
      <div className="login__hero flex flex-col justify-center items-center py-10 px-4 sm:px-8 xl:px-20 text-white">
        {/* <a href="/" className="w-48 inline-block"><img src="assets/images/logo.png" alt="Lieblings" /></a> */}
        <h1>MOLARA</h1>
        <h2 className="text-center mt-6">Welcome back!</h2>
      </div>
      <div className="login__content p-4 sm:p-8 flex flex-col justify-center bg-accent">
        <div className="login w-full max-w-xl rounded-md mx-auto border p-4 sm:p-8 xl:p-20">
          <form>
            <h1 className="text-2xl font-bold">Sign in</h1>
            <div className="mb-4 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email"> Email </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password"> Password </label>
              <input
                className="text-sm bg-gray-100 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="Your password"
              />
            </div>
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900"> Keep me signed in </label>
            </div>
            <div className="flex w-full mt-6">
              <Link to="/">
              <button
                className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="submit"
              >
                Sign in
              </button>
              </Link>
            </div>
          </form>
          {/* <div className="mt-4">
            <a className="hover:underline hover:text-accent">Forgot password?</a>
          </div> */}
          <div className="mt-3">
            <span className="text-gray-600 text-sm"> Don't have an account? </span>
            <Link to="/auth/sign-up" className="text-gray-700 text-sm font-semibold hover:text-accent"> Sign up </Link>
          </div>
          <div className="mt-4">
            <a href="/" className="text-gray-700 text-sm hover:text-accent inline-flex items-center">
              <span className="h-4 w-4 leading-4 text-lg mr-2">&larr;</span>
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
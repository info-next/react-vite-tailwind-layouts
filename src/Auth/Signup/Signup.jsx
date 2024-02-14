import React from 'react';
import img from '../../assets/images/marmi/60.jpg';
import './Signup.scss';
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <div className="login__page" style={{ backgroundImage: `url(${img})` }}>
      <div className="login__row min-h-screen">
        <div className="login__hero flex flex-col justify-center items-center py-10 px-4 sm:px-8 xl:px-20 text-white">
          <h1>MOLARA</h1>
          {/* <a href="/" className="w-48 inline-block"><img src="assets/images/logo.png" alt="Lieblings" /></a> */}
          <h2 className="text-center mt-6">JOIN US AND DISCOVER THE WORLD OF MARBLE</h2>
        </div>
        <div className="login__content p-4 sm:p-8 flex flex-col justify-center bg-accent">
          <div className="login w-full max-w-xl rounded-md mx-auto border p-4 sm:p-8 xl:p-20">
            <form>
              <h1 className="text-2xl font-bold">Sign up</h1>
              <div className="mb-4 mt-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name"> Name </label>
                <input
                  className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10"
                  id="name"
                  type="text"
                  placeholder="Full name"
                />
              </div>
              <div className="mb-4 mt-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email"> Email </label>
                <input
                  className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10"
                  id="email"
                  type="text"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-6 mt-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password"> Password </label>
                <input
                  className="text-sm bg-gray-100 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              {/* Uncomment this section for confirmation password
              <div className="mb-6 mt-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password2"> Confirmation Password </label>
                <input
                  className="text-sm bg-gray-100 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                  id="password2"
                  type="password"
                  placeholder="Confirmation password"
                />
              </div>
              */}
              {/* Uncomment this section for "I agree with MOLARA Terms and conditions"
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900"> I agree with MOLARA Terms and conditions. </label>
              </div>
              */}
              <div className="flex w-full mt-6">
                <button
                  className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
            </form>
            <div className="mt-3">
              <span className="text-gray-600 text-sm"> Already have an account? </span>
              <Link to="/auth" className="text-gray-700 text-sm font-semibold hover:text-accent"> Login </Link>
            </div>
            <div className="mt-4">
            <Link to="/" className="text-gray-700 text-sm hover:text-accent inline-flex items-center">
                <span className="h-4 w-4 leading-4 text-lg mr-2">&larr;</span>
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Signup
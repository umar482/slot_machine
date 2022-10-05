import React from 'react'

function SignIn() {
  return (
    <div className="max-w-2xl p-8 rounded-xl mx-auto text-center my-16 bg-gray-50">
    <h1 className="font-black text-3xl">Slot Machine</h1>

    <p className="text-lg text-gray-600 my-4">Test Your Luck</p>

      <div className="flex justify-center items-center space-x-3">
        <a className='bg-sky-500 text-white
        px-3 py-2 font-semibold' href='/users/sign_in'>Sign in</a>
        <a className='bg-sky-500 text-white
        px-3 py-2 font-semibold' href='/users/new'>Sign up</a>
      </div>
    </div>
  )
}

export default SignIn
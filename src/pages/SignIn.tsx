import React from 'react'
import login from '../assets/images/login.png'
const SignIn = () => {
    return (
        <div className="bg-gradient-to-r from-violet-50 to-violet-500 min-h-screen flex items-center justify-center">
            <div className="flex p-6 max-w-5xl mx-auto flex-col md:flex-row md:items-center justify-between gap-10bg-gradient-to-r from-violet-50 to-violet-500 rounded-xl shadow-lg">
                <div className="flex-1">
                    <img src={login} alt="Register" className='rounded-xl w-full object-cover' />
                </div>
                <div className="flex-1">
                    <div className="flex flex-col gap-6">
                        <div className="mx-auto w-full max-w-sm">
                            <h1 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-800'>
                                Login  Your account
                            </h1>
                            <form className="space-y-4 mt-6">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full pl-4 p-2 border-2 shadow-md rounded-3xl outline-none hover:shadow-lg hover:border-violet-400"
                                />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full pl-4 p-2 border-2 shadow-md rounded-3xl outline-none hover:shadow-lg hover:border-violet-400"
                                />
                                <div className="flex justify-center">
                                    <button className="bg-gradient-to-t from-blue-500 to-indigo-900 text-white text-lg font-medium rounded-full w-full p-3 transform transition duration-500 ease-in-out hover:shadow-lg hover:from-indigo-900 hover:to-blue-500 active:scale-95">
                                        SignIn
                                    </button>
                                </div>
                            </form>
                            <p className="text-center mt-4 text-gray-600 hover:text-black cursor-pointer">
                                Don't have an account?  <span className="font-semibold">Signup</span>
                            </p>
                            <div className="flex items-center justify-center mt-6 space-x-2">
                                <hr className="w-1/3 border-gray-300" />
                                <span className="text-gray-500">or</span>
                                <hr className="w-1/3 border-gray-300" />
                            </div>
                            <div className="flex justify-center mt-4">
                                <button className='flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white shadow-md hover:scale-105 transition duration-300 ease-in-out'>
                                    <img
                                        src='../src/assets/images/google.png'
                                        alt='Google logo'
                                        className='w-6 h-6 mr-2'
                                    />
                                    <span className='text-gray-700 font-semibold'>SignIn with Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
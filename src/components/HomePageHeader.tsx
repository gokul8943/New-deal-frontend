import { Button } from 'antd'
import React from 'react'
import homeimage from '../assets/images/newhome1.jpg'

interface HomePageHeaderProps{
    onclick:() => void
    propertyClick :() => void
}

const HomePageHeader:React.FC<HomePageHeaderProps> = ({onclick,propertyClick}) => {

    return (
        <div className="col-span-12 min-h-[600px] bg-gradient-to-r from-indigo-100 via-purple-50 to-blue-100 rounded-2xl m-[30px] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="grid md:grid-cols-2 h-full relative">
                {/* Left Content */}
                <div className="flex flex-col justify-center px-8 md:px-16 space-y-8">
                    <div className="inline-flex items-center gap-2 bg-white/90 rounded-full py-2 px-4 shadow-md w-fit">
                        <span className="animate-pulse h-3 w-3 bg-green-500 rounded-full"></span>
                        <span className="text-sm font-medium text-gray-600">Live Properties Available</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                        Find Your Dream{' '}
                        <span className="relative">
                            <span className="relative z-10 text-indigo-600">Property</span>
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path fill="currentColor" d="M0 5 Q 25 0, 50 5 Q 75 10, 100 5 L 100 10 L 0 10 Z"></path>
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-700 max-w-xl leading-relaxed">
                        Discover the perfect property that matches your lifestyle. From luxury homes
                        to affordable apartments, we've got everything you need.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button
                            size="large"
                            type="primary"
                            className="bg-indigo-600 hover:bg-indigo-700 h-12 px-8 flex items-center gap-2 text-base"
                            onClick={onclick}
                        >
                            <span>Explore Properties</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Button>
                        <Button
                            size="large"
                            className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 h-12 px-8 flex items-center gap-2 text-base"
                            onClick={propertyClick}
                        >
                            <span>List Your Property</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 pt-8">
                        <div>
                            <div className="text-2xl font-bold text-indigo-600">2000+</div>
                            <div className="text-sm text-gray-600">Properties</div>
                        </div>
                        <div className="border-l border-gray-200 pl-8">
                            <div className="text-2xl font-bold text-indigo-600">500+</div>
                            <div className="text-sm text-gray-600">Happy Clients</div>
                        </div>
                        <div className="border-l border-gray-200 pl-8">
                            <div className="text-2xl font-bold text-indigo-600">10+</div>
                            <div className="text-sm text-gray-600">Years</div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="hidden md:flex items-center justify-center p-8 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <img
                        src={homeimage}
                        alt="Modern House"
                        className="max-w-md w-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 relative z-10"
                    />

                    {/* Floating Card */}
                    <div className="absolute bottom-12 -left-8 bg-white rounded-xl shadow-lg p-4 transform hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 text-xl">✓</span>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-800">Trusted Platform</div>
                                <div className="text-xs text-gray-500">Verified Properties</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageHeader

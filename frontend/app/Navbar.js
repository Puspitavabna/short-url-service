import Image from "next/image"
import Logo from "./public/Logo.png"
export default function Navbar() {
    return (
        <>
            <div className="bg-gradient-to-r from-pink-500 to-blue-400 text-white py-2 text-sm md:text-sm font-medium">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-center flex-1 ">
                        <span className="font-bold   text-cyan-400">🚀 FRESH BEGINNINGS SALE: <span className="font-bold text-white">Extra 25% OFF</span><span className="font-bold text-white">, Limited Spots - start your journey today!</span></span>
                    </div>
                    <div className="flex gap-6 text-sm">
                        {/* <a href="#" class="hover:underline">About us</a>
                        <a href="#" class="hover:underline">Contact</a> */}
                    </div>
                </div>
            </div>
            {/* <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                             <Image
                                            src={Logo}
                                            alt="Smartphone showing analytics"
                                            width={100} // Set the width (matches max-w-md, which is 28rem or 448px)
                                            height={80} // Set the height (adjust based on your image's aspect ratio)
                                            className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                                            priority // Optional: Loads the image eagerly for above-the-fold content
                                          />
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            </div>
                        </div>

                        <div className="md:hidden">
                            <button className="text-gray-300 hover:text-white focus:outline-none">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav> */}

        </>
    )
}
import { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
} from '@heroicons/react/outline';
import {
    UserCircleIcon
} from '@heroicons/react/solid';

export default function Header() {
    const [isShadow, setIsShadow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsShadow(window.scrollY > 50);
        });
    }, []);
    return (
        <header className={["bg-white sticky top-0 left-0 z-50 border-b", isShadow ? "shadow-bar" : ""].join(" ")}>
            <div className="container mx-auto p-4 md:px-6">
                <nav className="grid grid-cols-2 sm:grid-cols-3">
                    <div className="relative flex items-center h-11 cursor-pointer my-auto">
                        <Image
                            src="https://storage-dummy.netlify.app/assets/images/tw-grt.svg"
                            objectFit="contain"
                            layout="fill"
                            objectPosition="left"
                        />
                    </div>
                    <div className="nav-search hidden sm:flex items-center border rounded-xl hover:shadow-bar duration-500 transition-all">
                        <input type="text" placeholder="Start your search" className="w-full outline-none bg-transparent px-4 py-2 text-sm text-gray-600" />
                        <SearchIcon className="hidden md:inline-flex h-10 text-gray-500 rounded-full p-2 cursor-pointer mx-4" />
                    </div>
                    <div className="flex items-center space-x-3 md:space-x-4 justify-end">
                        <Link href="/membership">
                            <a className="font-medium text-base hidden lg:inline-flex py-2 px-4 rounded-full duration-300 transition text-gray-500 hover:bg-gray-100">Become a host</a>
                        </Link>
                        <GlobeAltIcon className="h-6 w-6 cursor-pointer text-gray-500" />
                        <div className="flex items-center relative space-x-2 text-blue-700 border-2 p-2 rounded-xl duration-300 transition hover:shadow-md">
                            <MenuIcon className="h-5 w-5 cursor-pointer" />
                            <UserCircleIcon className="h-7 w-7 cursor-pointer" />
                            <span className="absolute right-2 border-2 border-white top-3 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium h-3 w-3 shadow-lg rounded-full"></span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

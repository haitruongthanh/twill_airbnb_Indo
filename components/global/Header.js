import { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon
} from '@heroicons/react/outline';

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
                            <a className="font-medium text-base hidden lg:inline-flex text-gray-500 hover:text-gray-600">Become a host</a>
                        </Link>
                        <GlobeAltIcon className="h-6 w-6 cursor-pointer text-gray-500" />
                        <div className="flex items-center space-x-2 text-blue-700 border-2 p-2 rounded-xl">
                            <MenuIcon className="h-6 w-6 cursor-pointer" />
                            <UserCircleIcon className="h-6 w-6 cursor-pointer" />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import { useState, useEffect } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { DateRangePicker } from 'react-date-range';

import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
} from '@heroicons/react/outline';
import {
    UserIcon,
    UserCircleIcon
} from '@heroicons/react/solid';

import TwDark from 'public/tw-grt.svg';
import TwLight from 'public/tw-grt-white.svg';
import { set } from 'date-fns';

export default function Header({ isClean, isNotClean, placeholder }) {
    const [isShadow, setIsShadow] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [guestNumber, setGuestNumber] = useState(1);

    const router = useRouter();

    function changeBackground() {
        if (window.scrollY >= 10) {
            setIsShadow(true);
        } else {
            setIsShadow(false);
        }
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    // Fungsi sementara untuk handle buttton Search di searchbar
    function searchItem() {
        router.push({
            pathname: '/rooms/tw',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guestNumber
            }
        });
    }

    // Untuk menghapus value dari searchbar
    function resetInput() {
        setSearchInput('');
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', changeBackground);
        }
        return () => window.removeEventListener('scroll', changeBackground);
    }, [changeBackground]);

    if (isClean) {
        return (
            <header className={["w-full bg-white dark:bg-gray-50 sticky top-0 left-0 z-50 border-b", isShadow ? "shadow-bar" : ""].join(" ")}>
                <div className="container mx-auto p-4 md:px-6">
                    <nav className="grid grid-cols-2 sm:grid-cols-3">
                        <div onClick={() => router.push("/")} className="relative flex items-center h-11 cursor-pointer my-auto">
                            <Image
                                src={TwDark}
                                objectFit="contain"
                                layout="fill"
                                objectPosition="left"
                            />
                        </div>
                        <div className="nav-search hidden sm:flex items-center border border-gray-300 rounded-xl hover:shadow-bar duration-500 transition-all">
                            <input
                                type="text"
                                placeholder={placeholder || "Mulai pencarian Anda"}
                                className="nav-search w-full outline-none bg-transparent px-4 py-2 text-sm text-gray-600"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <SearchIcon className="hidden md:inline-flex h-10 rounded-full p-2 cursor-pointer mx-4 text-gray-500" />
                        </div>
                        <div className="flex items-center space-x-3 md:space-x-4 justify-end">
                            <Link href="/membership">
                                <a className="font-medium text-sm hidden lg:inline-flex py-2 px-4 rounded-full duration-300 transition text-gray-500 hover:bg-gray-100">Mulai terima tamu</a>
                            </Link>
                            <GlobeAltIcon className="h-6 w-6 cursor-pointer text-gray-500" />
                            <div className="flex items-center relative space-x-2 text-blue-700 border-2 p-2 rounded-xl duration-300 transition hover:shadow-md">
                                <MenuIcon className="h-5 w-5 cursor-pointer text-gray-700" />
                                <UserCircleIcon className="h-7 w-7 cursor-pointer text-gray-700" />
                                <span className="absolute right-2 border-2 border-white top-3 -mt-2 -mr-1 text-xs text-white font-medium bg-red-500 h-3 w-3 shadow-lg rounded-full"></span>
                            </div>
                        </div>
                        {searchInput && (
                            <div className={["flex flex-col col-span-3 mt-4 md:mt-7 p-3 bg-white rounded-b-2xl rounded-t-lg mx-auto", isShadow ? 'shadow-bar' : ''].join(" ")}>
                                <DateRangePicker
                                    ranges={[selectionRange]}
                                    minDate={new Date()}
                                    onChange={handleSelect}
                                    rangeColors={["#2C385C"]}
                                />
                                <div className="px-2 pt-3 inline-flex items-center border-b mb-6">
                                    <h2 className="flex-grow text-base font-medium text-gray-700 leading-normal">Jumlah tamu</h2>

                                    <UserIcon className="h-5 w-5" />
                                    <input
                                        type="number"
                                        className="w-12 pl-2 text-sm text-blue-700 font-medium outline-none"
                                        value={guestNumber}
                                        min={1}
                                        onChange={(e) => setGuestNumber(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center space-x-4 px-2">
                                    <button onClick={resetInput} className="flex-grow outline-none select-none text-sm font-medium border-2 border-red-400 text-red-400 py-2 px-6 rounded-xl hover:bg-red-200 duration-300 transition">Batal</button>
                                    <button className="flex-grow outline-none select-none text-sm font-medium border-2 border-gray-700 text-gray-700 py-2 px-6 rounded-xl hover:bg-gray-200 duration-300 transition">Cari</button>
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </header>
        )
    }

    if (isNotClean) {
        return (
            <header className={["w-full fixed top-0 left-0 z-50", isShadow ? "bg-white dark:bg-gray-50 shadow-bar border-b" : ""].join(" ")}>
                <div className="container mx-auto py-2 px-4 md:py-4 md:px-6">
                    <nav className="grid grid-cols-2 sm:grid-cols-3">
                        <div onClick={() => router.push("/")} className="relative flex items-center h-11 cursor-pointer my-auto">
                            <Image
                                src={isShadow ? TwDark : TwLight}
                                objectFit="contain"
                                layout="fill"
                                objectPosition="left"
                            />
                        </div>
                        <div className={["nav-search hidden sm:flex items-center border rounded-xl hover:shadow-bar duration-500 transition-all", isShadow ? "border-gray-300" : "border-white"].join(" ")}>
                            <input
                                type="text"
                                placeholder={placeholder || "Mulai pencarian Anda"}
                                className={["nav-search w-full outline-none bg-transparent px-4 py-2 text-sm", isShadow ? 'text-gray-600 nav-search-dark' : 'text-white nav-search-light'].join(" ")}
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <SearchIcon className={["hidden sm:inline-flex h-10 rounded-full p-2 cursor-pointer mx-4", isShadow ? "text-gray-500" : "text-white"].join(" ")} />
                        </div>
                        <div className="flex items-center space-x-3 md:space-x-4 justify-end">
                            <Link href="/membership">
                                <a className={["font-medium text-sm hidden lg:inline-flex py-2 px-4 rounded-full duration-300 transition", isShadow ? 'text-gray-500 hover:bg-gray-100' : 'text-white hover:bg-gray-700'].join(" ")}>Mulai terima tamu</a>
                            </Link>
                            <GlobeAltIcon className={["h-6 w-6 cursor-pointer", isShadow ? 'text-gray-500' : 'text-white'].join(" ")} />
                            <div className="flex items-center relative space-x-2 text-blue-700 border-2 p-2 rounded-xl duration-300 transition hover:shadow-md">
                                <MenuIcon className={["h-5 w-5 cursor-pointer", isShadow ? 'text-gray-700' : 'text-white'].join(" ")} />
                                <UserCircleIcon className={["h-7 w-7 cursor-pointer", isShadow ? 'text-gray-700' : 'text-white'].join(" ")} />
                                <span className={["absolute right-2 border-2 border-white top-3 -mt-2 -mr-1 text-xs text-white font-medium h-3 w-3 shadow-lg rounded-full", isShadow ? "bg-red-500" : "bg-green-500"].join(" ")}></span>
                            </div>
                        </div>

                        {searchInput && (
                            <div className={["flex flex-col col-span-3 mt-4 md:mt-7 p-3 bg-white rounded-b-2xl rounded-t-lg mx-auto", isShadow ? 'shadow-bar' : ''].join(" ")}>
                                <DateRangePicker
                                    ranges={[selectionRange]}
                                    minDate={new Date()}
                                    onChange={handleSelect}
                                    rangeColors={["#2C385C"]}
                                />
                                <div className="px-2 pt-3 inline-flex items-center border-b mb-6">
                                    <h2 className="flex-grow text-base font-medium text-gray-700 leading-normal">Jumlah tamu</h2>

                                    <UserIcon className="h-5 w-5" />
                                    <input
                                        type="number"
                                        className="w-12 pl-2 text-sm text-blue-700 font-medium outline-none"
                                        value={guestNumber}
                                        min={1}
                                        onChange={(e) => setGuestNumber(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center space-x-4 px-2">
                                    <button onClick={resetInput} className="flex-grow outline-none select-none text-sm font-medium border-2 border-red-400 text-red-400 py-2 px-6 rounded-xl hover:bg-red-200 duration-300 transition">Batal</button>
                                    <button onClick={searchItem} className="flex-grow outline-none select-none text-sm font-medium border-2 border-gray-700 text-gray-700 py-2 px-6 rounded-xl hover:bg-gray-200 duration-300 transition">Cari</button>
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </header>
        )
    }
}

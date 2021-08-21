import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChevronLeftIcon } from '@heroicons/react/outline';

import WrapperInput from '@/components/parts/Login/WrapperInput';
import TwDark from 'public/tw-grt.svg';

export default function Login() {
    const DataContentInput = [
        {
            title: 'Email',
            name: 'email',
            id: 'email',
            type: 'email',
            placeholder: 'Masukan email',
        },
        {
            title: 'Password',
            name: 'password',
            id: 'password',
            type: 'password',
            placeholder: 'Masukan password',
        },
    ];

    const router = useRouter();
    return (
        <>
            <Head>
                <title>Twill Apps</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <article className="split-screen relative flex flex-col md:flex-row md:h-screen">
                <button onClick={() => router.push("/")}
                    className="absolute left-5 top-5 md:left-16 md:top-10 flex duration-300 transition-all items-center 
                text-white hover:text-gray-400/80 font-semibold text-base cursor-pointer">
                    <ChevronLeftIcon className="h-3 w-3" />
                    Back
                </button>
                <div className="column-left flex justify-center items-center h-52 md:flex md:h-auto md:w-1/2">
                    <div className="flex flex-col">
                        <div className="text-gray-100 mt-5 text-center">
                            <h1 className="text-3xl px-4 lg:px-0 lg:text-4xl font-bold">
                                Jelajahi banyak tempat
                            </h1>
                            <p className="font-normal text-sm mt-4">
                                Temukan pengalaman terbaikmu di Twill.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="column-right flex justify-center items-center md:flex md:h-auto md:w-1/2">
                    <form className="w-80">
                        <div className="form-wrapper copy text-gray-800 text-center mt-4 mb-8">
                            <h2 className="text-3xl font-bold">Masuk</h2>
                            <div className="login-container">
                                <p className="my-4 text-sm">
                                    Buat akun baru{" "}
                                    <a href="/" className="text-blue-800 underline hover:no-underline">
                                        <strong>Daftar</strong>
                                    </a>
                                </p>
                            </div>
                        </div>
                        {DataContentInput.map((input) => {
                            return (
                                <WrapperInput
                                    key={input.title}
                                    title={input.title}
                                    type={input.type}
                                    name={input.name}
                                    id={input.id}
                                    placeholder={input.placeholder}
                                />
                            );
                        })}
                        <button
                            className="btn-signup cursor-pointer block w-full 
                            bg-blue-900 text-white font-semibold border-none p-3 mt-8 rounded-xl 
                            text-sm hover:bg-blue-800 transition-all focus:outline-none"
                        >
                            Masuk
                        </button>

                        <div className="copy legal-option text-left mt-8">
                            <span className="text-sm font-medium text-gray-500">
                                Atau login dengan{" "}
                                <a href="/" className="text-lg text-gray-700/90 underline hover:no-underline">Google</a>
                            </span>
                        </div>
                    </form>
                </div>
            </article>
        </>
    )
}

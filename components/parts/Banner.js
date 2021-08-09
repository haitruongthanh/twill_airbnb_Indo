import Image from 'next/image';

export default function Banner() {
    return (
        <article className="banner-section relative">
            <div className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:min-h-screen">
                <Image
                    src="https://links.papareact.com/0fm"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="banner-content absolute top-1/2 w-full text-center">
                    <p className="text-base font-bold text-gray-700 sm:text-lg select-none">Not sure where to go? Perfect.</p>
                    <button className="text-white bg-gray-700 px-7 py-3 md:px-11 md:py-4 text-sm md:text-base shadow-md rounded-xl font-semibold my-3 duration-300 outline-none transition-all hover:shadow-xl active:scale-90 tracking-wide">Perjalanan fleksibel</button>
                </div>
            </div>
        </article>
    )
}
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
                    <p className="text-base font-semibold text-gray-700 sm:text-lg select-none">Belum punya tujuan? Kami bisa membantu Anda.</p>
                    <button className="button-banner">Perjalanan fleksibel</button>
                </div>
            </div>
        </article>
    )
}

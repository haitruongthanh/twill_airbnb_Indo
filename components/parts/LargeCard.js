import Image from 'next/image';

export default function LargeCard({ img, title, description, buttonText, classButton }) {
    return (
        <>
            <div className="relative h-96 min-w-[300px] z-0">
                <div className="overlay absolute bg-gradient-to-r from-gray-800/50 to-gray-600/30 inset-0 z-10 rounded-2xl"></div>
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className="absolute top-24 left-7 md:top-28 md:left-12 cursor-default">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 w-64 sm:w-7/12 md:w-6/12 text-white leading-tight md:leading-snug select-none">{title}</h3>
                <p className="font-normal text-sm text-white select-none">{description}</p>
                <button className={["py-3 px-6 mt-6 text-sm font-medium shadow-bar transition duration-300 hover:shadow-xl rounded-xl", classButton].join(" ")}>{buttonText}</button>
            </div>
        </>
    )
}

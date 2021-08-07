import Image from 'next/image';

export default function LargeCard({ img, title, description, buttonText }) {
    return (
        <>
            <div className="relative h-96 min-w-[300px] ">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl animate-pulse"
                />
            </div>
            <div className="absolute top-24 left-7 md:top-32 md:left-12">
                <h3 className="text-4xl font-semibold mb-3 w-64 text-gray-800">{title}</h3>
                <p className="font-normal text-base text-gray-600">{description}</p>
                <button className="bg-gray-700 py-3 px-6 mt-6 text-sm shadow-bar transition duration-300 hover:shadow-xl rounded-xl text-white tracking-wide">{buttonText}</button>
            </div>
        </>
    )
}

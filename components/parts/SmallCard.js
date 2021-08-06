import Image from 'next/image';

export default function SmallCard({ img, location, distance }) {
    return (
        <div className="sm-card flex items-center m-2 mt-5 rounded-xl duration-300 transition cursor-pointer hover:bg-gray-100 hover:scale-105 transform ease-out">
            <div className="relative h-16 w-16">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>
            <div className="px-3">
                <h2 className="font-semibold text-lg text-gray-700">{location}</h2>
                <p className="font-normal text-sm text-gray-500">{distance}</p>
            </div>
        </div>
    )
}

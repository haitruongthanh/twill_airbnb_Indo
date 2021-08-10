import Image from 'next/image';

export default function SmallCard({ img, location, distance }) {
    return (
        <div className="sm-card">
            <div className="relative h-16 w-16">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>
            <div className="px-3">
                <h2 className="font-semibold text-lg text-gray-700 dark:text-white">{location}</h2>
                <p className="font-normal text-sm text-gray-500 dark:text-gray-400">{distance}</p>
            </div>
        </div>
    )
}

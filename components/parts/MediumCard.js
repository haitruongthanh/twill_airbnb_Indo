import Image from 'next/image';

export default function MediumCard({ img, title }) {
    return (
        <div className="md-card cursor-pointer">
            <div className="relative h-80 w-80 hover:scale-105 transition transform duration-300 ease-out">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-2xl"
                />
            </div>
            <h3 className="font-semibold text-lg text-gray-700 my-3 mx-2">{title}</h3>
        </div>
    )
}

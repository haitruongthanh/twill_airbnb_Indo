import Image from 'next/image';
import { HeartIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

export default function InfoCard({
    img, location, title, description, star, price, total
}) {
    return (
        <div className="card">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>
            <div className="card-item flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <div className="card-location inline-flex items-center space-x-1">
                        <LocationMarkerIcon className="h-4 w-4 cursor-pointer hidden dark:text-gray-50 xl:block" />
                        <p className="card-detail text-gray-600 dark:text-gray-300 underline">{location}</p>
                    </div>
                    <div className="card-like inline-flex items-center space-x-2">
                        <HeartIcon className="h-5 w-5 cursor-pointer dark:text-white" />
                        <span className="hidden xl:block ml-1 text-sm font-medium underline select-none dark:text-white">Simpan</span>
                    </div>
                </div>
                <h4 className="text-xl font-bold text-gray-700 dark:text-gray-50 my-2">{title}</h4>
                <div className="border-b-2 border-gray-400/50 dark:border-gray-200 w-10 pt-2" />

                <p className="pt-2 text-sm font-medium text-gray-700 dark:text-gray-50 flex-grow">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <span className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-50">
                        <StarIcon className="h-5 w-5 text-blue-700/80 dark:text-gray-50 mr-1" />
                        {star}
                    </span>
                    <div className="text-gray-700 dark:text-gray-50 flex flex-col">
                        <span className="text-lg xl:text-2xl font-bold pb-1">{price}</span>
                        <span className="text-right font-normal">{total}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

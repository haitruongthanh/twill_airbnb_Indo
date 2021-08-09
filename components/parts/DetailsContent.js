import { useState } from 'react';
import { useRouter } from "next/dist/client/router";
import DetailsRoom from "@/components/parts/DetailsRoom";
import {
    ChevronLeftIcon,
    AdjustmentsIcon
} from '@heroicons/react/outline';

export default function DetailsContent({ location, startDate, endDate, guestNumber, data }) {
    const [isSetting, setIsSetting] = useState(false);
    const router = useRouter();

    const settingBadge = [
        { name: 'Fleksibilitas Pembatalan', classNames: 'badge-tag-mobile', classNamesDesktop: 'badge-tag' },
        { name: 'Jenis tempat', classNames: 'badge-tag-mobile', classNamesDesktop: 'badge-tag' },
        { name: 'Harga', classNames: 'badge-tag-mobile', classNamesDesktop: 'badge-tag' },
        { name: 'Kamar Lengkap', classNames: 'badge-tag-mobile', classNamesDesktop: 'badge-tag' },
        { name: '...', classNames: 'badge-tag-mobile', classNamesDesktop: 'badge-tag' },
    ];
    return (
        <article className="container mx-auto flex flex-col">
            <section className="py-5 flex-grow px-4 lg:px-6">
                <button onClick={() => router.push("/")} className="flex duration-300 transition-all items-center text-blue-700 hover:text-blue-700/80 font-semibold text-base cursor-pointer">
                    <ChevronLeftIcon className="h-3 w-3" />
                    Back
                </button>
                <p className="text-xs font-medium text-gray-600/70 mt-4 lg:mt-6 mb-4">
                    300+ Tempat menginap{" "}
                    <span className="badge-calendar">{startDate}</span>{" - "}<br className="lg:hidden" />
                    <span className="badge-calendar leading-9 lg:leading-3">{endDate}</span>{" "}
                    untuk <span className="font-semibold text-gray-700">{guestNumber}</span> tamu
                </p>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug lg:leading-relaxed mt-2 mb-4 lg:mb-6">Tempat menginap di {location}</h1>

                <div className="badge-wrapper relative z-30">
                    <button onClick={() => setIsSetting(!isSetting)} className="block lg:hidden btn-setting">
                        <AdjustmentsIcon className="h-5 w-5 text-blue-700" />
                        {isSetting && (
                            <ul className="absolute w-[200px] rounded-xl overflow-hidden mt-3 bg-gray-200">
                                {settingBadge.map(({ name, classNames }) => (
                                    <li key={name}><span className={classNames}>{name}</span></li>
                                ))}
                            </ul>
                        )}
                    </button>
                    <ul className="hidden mb-5 lg:inline-flex lg:space-x-2 max-w-2xl lg:flex-wrap whitespace-nowrap">
                        {settingBadge.map(({ name, classNamesDesktop }) => (
                            <li key={name}><span className={classNamesDesktop}>{name}</span></li>
                        ))}
                    </ul>
                </div>
            </section>

            <DetailsRoom data={data} />
        </article>
    )
}

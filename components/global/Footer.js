import Link from 'next/link';
import {
    GlobeAltIcon,
    CurrencyDollarIcon
} from '@heroicons/react/outline'

export default function Footer() {
    const FooterContent = [
        {
            name: 'Tentang',
            links: [
                { nameLinks: 'Cara kerja Twill', path: '/d/abouttwill' },
                { nameLinks: 'Ruang Berita', path: '/d/newsroom' },
                { nameLinks: 'Twill 2021', path: '/d/twill-2021' },
                { nameLinks: 'Investor', path: '/d/investors' },
                { nameLinks: 'Twill Membership', path: '/d/twill-membership' },
                { nameLinks: 'Karier', path: '/d/twill-career' },
            ]
        },
        {
            name: 'Komunitas',
            links: [
                { nameLinks: 'Keberagaman & Rasa diterima', path: '/k/keberagaman-twill' },
                { nameLinks: 'Aksesibilitas', path: '/k/accessibility' },
                { nameLinks: 'Frontline Stay', path: '/k/frontline-stay' },
                { nameLinks: 'Referal Tamu', path: '/k/referal-guest' },
                { nameLinks: 'Twill.org', path: '/k/twillorg' },
            ]
        },
        {
            name: 'Tuan Rumah',
            links: [
                { nameLinks: 'Terima tamu di rumah anda', path: '/h/terima-tamu' },
                { nameLinks: 'Adakan pengalaman online', path: '/h/online-experience' },
                { nameLinks: 'Adakan pengalaman', path: '/h/experience' },
                { nameLinks: 'Pusat Informasi', path: '/h/information-center' },
                { nameLinks: 'Pusat Komunitas', path: '/h/community-center' },
            ]
        },
        {
            name: 'Dukungan',
            links: [
                { nameLinks: 'Respons COVID-19 Twill', path: '/s/covidtwill' },
                { nameLinks: 'Pusat Bantuan', path: '/s/help-center' },
                { nameLinks: 'Opsi pembatalan', path: '/s/opsi-pembatalan' },
                { nameLinks: 'Kepercayaan & Keselamatan', path: '/s/trust-and-safety' },
                { nameLinks: 'Dukungan Lingkungan Tinggal', path: '/s/neighbors' },
            ]
        }
    ];

    return (
        <footer className="border-t dark:border-black/60 bg-gray-100 dark:bg-gray-800">
            <nav className="footer-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 px-10 py-4 lg:px-32 lg:py-12">
                {FooterContent.map(({ name, links }) => (
                    <div className="space-y-5 flex flex-col" key={name}>
                        <h5 className="font-bold text-sm uppercase text-gray-700 dark:text-white">{name}</h5>
                        {links.map(({ nameLinks, path }) => (
                            <Link href={path} key={nameLinks}>
                                <a className="text-sm text-gray-500 dark:text-gray-400 font-medium hover:underline hover:text-gray-600">{nameLinks}</a>
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>
            <div className="flex flex-col items-center justify-between px-10 py-5 space-y-4 md:space-y-0 md:flex-row lg:px-32 lg:py-10">
                <div className="font-normal text-center md:text-left text-sm text-gray-500 dark:text-gray-400 select-none">
                    &copy; 2021 Twill, Inc. &bull;{" "}
                    <Link href="/s/privasi">
                        <a className="hover:underline">Privasi</a>
                    </Link> &bull;{" "}
                    <Link href="/s/ketentuan-layanan">
                        <a className="hover:underline">Ketentuan</a>
                    </Link> &bull;{" "}
                    <Link href="/d/twillmaps">
                        <a className="hover:underline">Peta Situs</a>
                    </Link>
                </div>
                <div className="flex items-center">
                    <GlobeAltIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-1" />
                    <p className="font-normal text-sm text-gray-500 dark:text-gray-400 underline hover:no-underline cursor-pointer mr-5">Bahasa Indonesia (ID)</p>

                    <CurrencyDollarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-1" />
                    <p className="font-normal text-sm text-gray-500 dark:text-gray-400 underline hover:no-underline cursor-pointer mr-5">USD</p>
                </div>
            </div>
        </footer>
    )
}

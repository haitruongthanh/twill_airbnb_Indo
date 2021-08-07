import Link from 'next/link';
import {
    GlobeAltIcon,
    CurrencyDollarIcon
} from '@heroicons/react/outline'

export default function Footer() {
    const FooterContent = [
        {
            name: 'About',
            links: [
                { nameLinks: 'How Twill works', path: '/about' },
                { nameLinks: 'Newsroom', path: '/about' },
                { nameLinks: 'Investors', path: '/about' },
                { nameLinks: 'Twill Membership', path: '/about' },
            ]
        },
        {
            name: 'Community',
            links: [
                { nameLinks: 'Accessibility', path: '/community' },
                { nameLinks: 'Frontline Stay', path: '/community' },
                { nameLinks: 'Twill Associates', path: '/community' },
                { nameLinks: 'Referal Guest', path: '/community' },
            ]
        },
        {
            name: 'Host',
            links: [
                { nameLinks: 'Community Center', path: '/host' },
                { nameLinks: 'Information Center', path: '/host' },
                { nameLinks: 'Host Experience', path: '/host' },
            ]
        },
        {
            name: 'Support',
            links: [
                { nameLinks: 'Response COVID-19 Twill', path: '/support' },
                { nameLinks: 'Help Center', path: '/support' },
                { nameLinks: 'Trust & Safety', path: '/support' },
                { nameLinks: 'Neighborhood Support', path: '/support' },
            ]
        }
    ];

    return (
        <footer className="border-t bg-gray-100">
            <nav className="footer-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 px-10 py-4 lg:px-32 lg:py-12">
                {FooterContent.map(({ name, links }) => (
                    <div className="space-y-5 flex flex-col" key={name}>
                        <h5 className="font-bold text-base uppercase text-gray-700">{name}</h5>
                        {links.map(({ nameLinks, path }) => (
                            <Link href={path} key={nameLinks}>
                                <a className="text-sm text-gray-500 font-medium hover:underline hover:text-gray-600">{nameLinks}</a>
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>
            <div className="flex flex-col items-center justify-between px-10 py-5 space-y-4 md:space-y-0 md:flex-row lg:px-32 lg:py-10">
                <p className="font-normal text-center md:text-left text-sm text-gray-500 select-none">&copy; 2021 Twill, Inc. &bull; Privasi &bull; Ketentuan &bull; Peta Situs</p>
                <div className="flex items-center">
                    <GlobeAltIcon className="w-5 h-5 text-gray-500 mr-1" />
                    <p className="font-normal text-sm text-gray-500 underline hover:no-underline cursor-pointer mr-5">English Language (EN)</p>

                    <CurrencyDollarIcon className="w-5 h-5 text-gray-500 mr-1" />
                    <p className="font-normal text-sm text-gray-500 underline hover:no-underline cursor-pointer mr-5">USD</p>
                </div>
            </div>
        </footer>
    )
}

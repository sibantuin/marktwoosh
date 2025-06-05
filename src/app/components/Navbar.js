'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navLinkClass = (path) =>
        `transition-all hover:text-[#83E617] ${pathname === path || (path === '/portfolio' && pathname.startsWith('/portfolio'))
            ? 'text-[#83E617]'
            : 'text-white'
        }`;

    return (
        <div className="fixed top-0 left-0 w-full z-50 
            bg-black/60 backdrop-blur-md
            flex font-regular items-center justify-between px-4 py-4 md:px-8 md:py-5
            transition duration-300">
            <Link href="/">
                <Image
                    src="/icon/ic_marktwoosh.svg"
                    alt="Marktwoosh Logo"
                    width={50}
                    height={50}
                // className="w-10 h-10 md:w-12 md:h-12 transition-all bg-transparent hover:shadow-[0_0_12px_white,_0_0_36px_white,_0_0_72px_white]"
                />
            </Link>

            <div className="flex gap-8 text-gray-600 ml-16">
                <Link href="/" className={navLinkClass('/')}>Home</Link>
                <Link href="/aboutus" className={navLinkClass('/aboutus')}>About us</Link>
                <Link href="/pricing" className={navLinkClass('/pricing')}>Pricing</Link>
                <Link href="/portfolio" className={navLinkClass('/portfolio')}>Portofolio</Link>
            </div>
            <Link href="/contact">
                <button className="flex items-center gap-2 bg-[#101310] border text-xs text-white px-6 py-3 rounded-full transition-all hover:shadow-[0_0_24px_rgba(255,255,255,0.4)] hover:border-white/20 relative hover:before:absolute hover:before:-inset-[3px] hover:before:bg-gradient-to-r hover:before:from-white/20 hover:before:to-white/10 hover:before:rounded-full hover:before:blur-[12px]">
                    Get in Touch
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-[0.5px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </Link>
        </div>
    );
}
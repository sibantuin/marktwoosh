'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const NAV_ITEMS = [
        { name: 'Home', path: '/' },
        { name: 'About us', path: '/aboutus' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Portfolio', path: '/portfolio' }
    ];
    const navLinkClass = (path) =>
        `transition-all duration-300 text-lg ${pathname === path || (path === '/portfolio' && pathname.startsWith('/portfolio'))
            ? 'text-[#83E617]'
            : 'text-white hover:text-[#83E617]'
        }`;
    const handleScrollToTop = (e, targetPath) => {
        if (pathname === targetPath) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md px-4 py-4 md:px-8 md:py-5 transition duration-300">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/icon/ic_marktwoosh.svg"
                        alt="Marktwoosh Logo"
                        width={50}
                        height={50}
                    />
                </Link>
                <div className="hidden md:flex gap-8 ml-16">
                    {NAV_ITEMS.map(({ name, path }) => (
                        <Link
                            key={path}
                            href={path}
                            onClick={(e) => handleScrollToTop(e, path)}
                            className={navLinkClass(path)}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:flex">
                    <Link href="/contact">
                        <button className="flex items-center gap-2 bg-black border text-xs text-white px-6 py-3 rounded-full transition-all hover:font-semibold hover:bg-[#83E617] hover:border-[#83E617] hover:text-black duration-300">
                            Get in Touch
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-[0.5px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-4">
                    {NAV_ITEMS.map(({ name, path }) => (
                        <Link
                            key={path}
                            href={path}
                            onClick={(e) => {
                                handleScrollToTop(e, path);
                                setIsOpen(false);
                            }}
                            className={navLinkClass(path)}
                        >
                            {name}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <button className="mt-4 w-full bg-black border text-sm text-white px-6 py-3 rounded-full transition-all hover:font-semibold hover:bg-[#83E617] hover:border-[#83E617] hover:text-black duration-300">
                            Get in Touch
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}
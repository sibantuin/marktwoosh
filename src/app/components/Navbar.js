'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="bg-black flex font-reguler items-center justify-between px-16 py-4 shadow-md">
            <Link href="/">
                <Image
                    src="/ic_marktwoosh.svg"
                    alt="Marktwoosh Logo"
                    width={50}
                    height={50}
                />
            </Link>
            <div className="flex gap-8 text-gray-600">
                <Link href="/" className="text-white transition-all hover:text-white hover:text-shadow-[0_0_24px_rgba(255,255,255,0.8)]">Home</Link>
                <Link href="/aboutus" className="text-white transition-all hover:text-white hover:text-shadow-[0_0_24px_rgba(255,255,255,0.8)]">About us</Link>
                <Link href="/pricing" className="text-white transition-all hover:text-white hover:text-shadow-[0_0_24px_rgba(255,255,255,0.8)]">Pricing</Link>
                <Link href="/portfolio" className="text-white transition-all hover:text-white hover:text-shadow-[0_0_24px_rgba(255,255,255,0.8)]">Portofolio</Link>
            </div>
            <Link href="/contact">
                <button className="flex items-center gap-2 bg-[#101310] border text-xs text-white px-6 py-2 rounded-full transition-all hover:shadow-[0_0_24px_rgba(255,255,255,0.4)] hover:border-white/20 relative hover:before:absolute hover:before:-inset-[3px] hover:before:bg-gradient-to-r hover:before:from-white/20 hover:before:to-white/10 hover:before:rounded-full hover:before:blur-[12px]">
                    Contact
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </Link>
        </div>
    )
}
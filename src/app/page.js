"use client";

import Navbar from './components/Navbar'
import LandingPage from './page/landingpage';
import Number from './page/number';
import OurClient from './page/ourclient';
import OurService from './page/ourservice';

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <OurClient />
      <OurService />
      <Number />
    </>
  );
}

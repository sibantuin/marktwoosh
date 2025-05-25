"use client";

import Footer from './components/Footer';
import Navbar from './components/Navbar'
import LandingPage from './page/landingpage';
import Number from './page/number';
import OurClient from './page/ourclient';
import OurService from './page/ourservice';

export default function Home() {
  return (
    <div id='home'>
      <Navbar />
      <LandingPage />
      <OurClient />
      {/* <OurService /> */}
      <Number />
      <Footer />
    </div>
  );
}

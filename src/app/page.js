"use client";

import Footer from './components/Footer';
import Navbar from './components/Navbar'
import CalltoAction from './page/calltoaction';
import LandingPage from './page/landingpage';
import Number from './page/number';
import OurClient from './page/ourclient';
import OurService from './page/ourservice';
import OurWork from './page/ourwork';
import Testimonials from './page/testimonial';
import WhyUs from './page/whyus';

export default function Home() {
  return (
    <div id='home' className='bg-black text-white'>
      <Navbar />
      <LandingPage />
      <OurClient />
      {/* <OurService /> */}
      <CalltoAction />
      <WhyUs />
      <Number />
      <OurWork />
      <Testimonials />
      <Footer />
    </div>
  );
}
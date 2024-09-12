import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Solutions from '@/components/sections/Solutions';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import MeetOurFounder from '@/components/sections/MeetOurFounder';
import WhyUs from '@/components/sections/WhyUs';
import ContactUs from '@/components/sections/ContactUs';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Solutions />
      <Services />
      <About />
      <MeetOurFounder />
      <WhyUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
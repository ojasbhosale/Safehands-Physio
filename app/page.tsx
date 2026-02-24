import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import WhyChooseUs from '@/components/sections/whychooseus';
import Reviews from '@/components/sections/reviews';
import Contact from '@/components/sections/contact';


export default function Home() {
  return (
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    );
}
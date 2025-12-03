import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
// Portfolio section hidden - retained for future use
// import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        {/* Portfolio section hidden - retained for future use */}
        {/* <Portfolio /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
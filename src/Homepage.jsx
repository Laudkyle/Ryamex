import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Contact from './components/Contact';


function HomePage() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Hero />
      <About />
      <Services />
      <Partners />
      <Contact />
    </div>
  );
}

export default HomePage;
import React, { useEffect, useRef } from 'react';

const About = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        const speed = 0.2;

        const yPos = -(scrollPosition * speed);
        parallaxRef.current.style.transform = `translate3d(0, ${yPos}px, 0) scale(1.05)`;

        const opacity = 1 - scrollPosition * 0.001;
        parallaxRef.current.style.opacity = Math.max(opacity, 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="relative overflow-hidden bg-black text-white py-32">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/assets/images/warehouse.jpg')",
          backgroundAttachment: 'fixed',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out',
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-4">
            Who We Are
          </span>
          <h2 className="text-5xl md:text-6xl font-black">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              About Ryamex Ventures
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            We are Ghana’s trusted partner in beverage distribution, delivering excellence
            with innovation and precision nationwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Panel */}
          <div className="hidden lg:block">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/assets/images/warehouse.jpg"
                alt="Ryamex Warehouse"
                className="w-full h-[450px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Textual Info */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Revolutionizing Beverage Logistics in <span className="text-blue-400">Ghana</span>
            </h3>
            <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
              <p>
                RYAMEX VENTURES is a supply and distribution powerhouse with a robust nationwide
                network, connecting global and local beverage brands to every region in Ghana.
              </p>
              <p>
                We specialize in high-efficiency logistics, on-time delivery, and strategic market
                reach, making us the go-to partner for ambitious brands looking to scale their
                footprint.
              </p>
              <p>
                Our commitment to excellence, innovation, and strong partnerships has earned us a
                reputation as the most reliable distributor in the country.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
                Explore Our Services
              </button>
              <button className="px-8 py-4 border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

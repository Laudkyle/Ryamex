import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Award, Target, Users, Zap, MapPin, TrendingUp, ArrowUpRight, Phone, Mail } from 'lucide-react';

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  const partners =[
  { name: 'Twellium Industrial Company', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Twellium_logo.jpg', desc: 'Manufacturers of Rush Energy Drink, Verna Mineral Water, and other beverages' },
  { name: 'Coca Cola Company', logo: 'https://cdn.prod.website-files.com/63f6e52346a353ca1752970e/6440bf1a03c90188594c39e7_study-cover-cocacola.jpeg', desc: 'World leader in beverage production with products like Coca-Cola, Fanta, and Sprite' },
  { name: 'Vitamilk Ghana', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjW2e22O-4K0Kj-VK62QFhSiOvLgoyMc9NHw&s', desc: 'Producers of Vitamilk and other beverages' },
 { name: 'Bel Aqua Mineral Water', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQFPUC43hiKKKA/company-logo_200_200/company-logo_200_200/0/1698526208443?e=2147483647&v=beta&t=T4hKLE7PpizCc4ntGLw3wKk0-JMsErLN-PlcgMgljXs', desc: 'Producers of high quality mineral water' },
  { name: 'Guinness Ghana Beverages', logo: 'https://media.licdn.com/dms/image/v2/D4E05AQHQAQrFo3sVsQ/videocover-low/B4EZd0RIPRG4B0-/0/1750002466163?e=2147483647&v=beta&t=iRdj_fUqpHHfL6ZzhlSd85A8d0k9wgC5w-LkhNiNM_0', desc: 'Producers of Guinness, Malta Guinness, Smirnoff Ice, and other alcoholic beverages' },
  { name: 'Multipac Ltd', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9o9WO5EOpNukXo3uJhw_HsQpVlScbzq8QTA&s', desc: 'Manufacturers of packaging materials for the beverage industry' },
  { name: 'Blow Chem Industries Ltd', logo: 'https://blowgroup.com/wp-content/uploads/2022/10/belbev1.jpg', desc: 'Chemical and beverage production company' },
  { name: 'U Fresh Company Ltd', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDG9nf6-P2_Xetxtf-MFIBxidn25GDYd6WLA&s', desc: 'Producers of U-Fresh juices and other beverages' },
  { name: 'Tampico Beverages', logo: 'https://tampico.com/wp-content/uploads/2022/02/Now-Serving-Smiles-Timeline-01-01-01-min.jpg', desc: 'International juice drink brand' },
  { name: 'Sulu Investments Limited', logo: 'https://suluneroghana.com/wp-content/uploads/2025/02/add.jpg', desc: 'Beverage production and investment company' },
  { name: 'Niche Confectionery Ghana Ltd', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmCrUpxZ4zsSpeovYl-Cy6VoqrlB8oesDVA&s', desc: 'Manufacturers of confectionery and beverage products' },
   { name: 'AquaFresh Ghana', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nxeJ7M3sNyhyKU4oecSDAf7wdnDM10s7lA&s', desc: 'Bottlers of mineral water and other beverages' },
  { name: 'Special Ice Company', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCsZfeUx6B583vXzBLzduHw_E4m8oqheHow&s', desc: 'Producers of packaged ice and cold beverages' },
];

  const slidesPerView = 2;
  const totalSlides = Math.ceil(partners.length / slidesPerView);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const founders = [
    {
      name: 'Mary Ofosua Agyepong',
      role: 'Co-Founder & CEO',
      image: '/api/placeholder/400/500',
      bio: 'Visionary leader transforming Ghana\'s beverage distribution landscape.',
      focus: 'Strategic Leadership'
    },
    {
      name: 'Mr. Constant Ekow Takyi',
      role: 'Co-Founder & Manager',
      image: '/api/placeholder/400/500',
      bio: 'Operations mastermind ensuring seamless nationwide distribution.',
      focus: 'Supply Chain Excellence'
    },
    {
      name: 'Mr. Hans Owusu Boateng',
      role: 'Legal',
      image: '/api/placeholder/400/500',
      bio: 'Financial architect driving sustainable growth and partnerships.',
      focus: 'Business Development'
    }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-emerald-400 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section - Full Screen */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
              🇬🇭 Ghana's Premier Distribution Network
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              RYAMEX
            </span>
            <br />
            <span className="text-white">VENTURES</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionizing beverage distribution across Ghana with cutting-edge logistics, 
            premium partnerships, and unmatched reliability.
          </p>

          {/* Stats Pills */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { label: 'Partner Brands', value: '13+' },
              { label: 'Regions Covered', value: '16' },
              { label: 'Years Strong', value: '15+' },
              { label: 'Distribution Points', value: '500+' }
            ].map((stat, index) => (
              <div key={index} className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <span className="text-2xl font-bold text-emerald-400">{stat.value}</span>
                <span className="text-gray-300 ml-2">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
              Explore Partnership
              <ArrowUpRight className="inline ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Our Story
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-12">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Our Vision
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            To become <span className="text-emerald-400 font-bold">West Africa's most trusted</span> beverage 
            distribution network, connecting premium brands with consumers through 
            <span className="text-blue-400 font-bold"> innovative technology</span> and 
            <span className="text-purple-400 font-bold"> exceptional service</span>.
          </p>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-24 bg-gray-900">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-black mb-6">
        <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          Trusted Partners
        </span>
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        We collaborate with Ghana's most prestigious beverage brands to deliver excellence nationwide.
      </p>
    </div>

    <div className="relative">
      {/* Controls */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-400/50 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-400/50 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full hover:bg-emerald-500/20 transition"
        >
          {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span className="text-sm">{isAutoPlaying ? 'Pause' : 'Play'}</span>
        </button>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2  gap-4 justify-items-center">
                {partners
                  .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                  .map((partner, index) => (
                    <div
                      key={index}
                      className="group w-full max-w-sm md:max-w-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-10 hover:border-emerald-400/50 shadow-lg transition-all duration-300 hover:scale-102"
                    >
                      <div className="h-60 overflow-hidden flex items-center justify-center mb-6 bg-white/5 rounded-xl">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="object-fit h-[100%] w-[100%] opacity-80 group-hover:opacity-100 transition-opacity "
                          onError={(e) => {
                            e.target.src = '/api/placeholder/240/100';
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                        {partner.name}
                      </h3>
                      {/* <p className="text-gray-400 text-sm">{partner.desc}</p> */}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-emerald-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Founders Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Meet the Founders
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three visionaries who transformed a simple idea into Ghana's leading beverage distribution empire.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="group relative">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 hover:border-emerald-400/50 transition-all duration-500">
                  <div className="aspect-w-3 aspect-h-4 relative">
                    <img 
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-xs font-medium mb-4">
                      {founder.focus}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 text-white">{founder.name}</h3>
                    <p className="text-emerald-400 font-medium mb-3">{founder.role}</p>
                    <p className="text-gray-300 text-sm">{founder.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Precision', desc: 'Every delivery, perfectly timed and executed.' },
              { icon: Users, title: 'Partnership', desc: 'Building lasting relationships that drive mutual success.' },
              { icon: Zap, title: 'Innovation', desc: 'Embracing technology to revolutionize distribution.' },
              { icon: Award, title: 'Excellence', desc: 'Setting the gold standard in beverage logistics.' }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">
            Ready to Partner?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
            Join Ghana's most dynamic beverage distribution network. Let's build something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
              <Phone className="inline mr-2 w-5 h-5" />
              Start Partnership
              <ArrowUpRight className="inline ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-white/50 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
              <Mail className="inline mr-2 w-5 h-5" />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

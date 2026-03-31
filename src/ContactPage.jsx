import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let’s connect! Reach out to us via phone, email, or the form below.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: Phone,
              title: 'Call Us',
              info: '0244730898',
            },
            {
              icon: Mail,
              title: 'Email',
              info: 'ryamexyz@gmail.com',
            },
            {
              icon: MapPin,
              title: 'Location',
              info: 'Naa Kwakor Street, New Gbawe. Ghana',
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 rounded-2xl hover:border-emerald-400/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 border border-emerald-400/30 rounded-full flex items-center justify-center">
                  <Icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.info}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Send Us a Message
            </span>
          </h2>

          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-emerald-400 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-400 outline-none"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-purple-400 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-emerald-400 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="group mt-4 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

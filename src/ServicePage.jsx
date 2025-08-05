import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Nationwide Distribution',
    icon: '🚚',
    description:
      'Our extensive network covers all regions of Ghana, ensuring timely delivery to urban and rural areas alike.',
    color: 'bg-blue-100',
  },
  {
    title: 'Inventory Management',
    icon: '📊',
    description:
      'Advanced tracking systems to maintain optimal stock levels and prevent shortages or overstocking.',
    color: 'bg-yellow-100',
  },
  {
    title: 'Marketing Support',
    icon: '📢',
    description:
      'We help our partners with in-market activation and promotional activities to boost brand visibility.',
    color: 'bg-purple-100',
  },
  {
    title: 'Retailer Network',
    icon: '🏪',
    description:
      'Access to our vast network of retailers, supermarkets, and wholesalers across Ghana.',
    color: 'bg-indigo-100',
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Empowering brands with comprehensive solutions tailored for the Ghanaian market.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-emerald-400/50 rounded-2xl p-8 transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg ${service.color}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">
            Let’s Work Together
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12">
            Discover how our services can elevate your brand and expand your reach across Ghana.
          </p>
          <button className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
            Get in Touch
            <ArrowUpRight className="inline ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

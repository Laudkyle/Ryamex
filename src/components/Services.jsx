import React from 'react';
import {
  Truck,
  BarChart,
  Megaphone,
  Store
} from 'lucide-react';

const services = [
  {
    title: 'Nationwide Distribution',
    icon: Truck,
    description: 'Our extensive network covers all regions of Ghana, ensuring timely delivery to urban and rural areas alike.',
    gradient: 'from-emerald-500/20 to-blue-500/20'
  },
  {
    title: 'Inventory Management',
    icon: BarChart,
    description: 'Advanced tracking systems to maintain optimal stock levels and prevent shortages or overstocking.',
    gradient: 'from-yellow-400/20 to-yellow-600/20'
  },
  {
    title: 'Marketing Support',
    icon: Megaphone,
    description: 'We help our partners with in-market activation and promotional activities to boost brand visibility.',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'Retailer Network',
    icon: Store,
    description: 'Access to our vast network of retailers, supermarkets, and wholesalers across Ghana.',
    gradient: 'from-indigo-500/20 to-blue-700/20'
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive distribution solutions tailored for beverage companies.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-emerald-400/30 bg-gradient-to-br ${service.gradient}`}
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-white/10 border border-white/20">
                  <Icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

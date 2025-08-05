// components/Partners.jsx
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Play, Pause } from 'lucide-react';

const partners = [
  { name: 'Twellium Industrial Company', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Twellium_logo.jpg', desc: 'Manufacturers of Rush Energy Drink, Verna Mineral Water, and other beverages' },
  { name: 'Coca Cola Company', logo: 'https://cdn.prod.website-files.com/63f6e52346a353ca1752970e/6440bf1a03c90188594c39e7_study-cover-cocacola.jpeg', desc: 'World leader in beverage production with products like Coca-Cola, Fanta, and Sprite' },
  { name: 'Vitamilk Ghana', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjW2e22O-4K0Kj-VK62QFhSiOvLgoyMc9NHw&s', desc: 'Producers of Vitamilk and other beverages' },
  { name: 'Bel Aqua mineral water', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQFPUC43hiKKKA/company-logo_200_200/company-logo_200_200/0/1698526208443?e=2147483647&v=beta&t=T4hKLE7PpizCc4ntGLw3wKk0-JMsErLN-PlcgMgljXs', desc: 'Specialists in beverage production and distribution' },
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

const Partners = () => {
  return (
    <section className="py-24 bg-black text-white" id="partners">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Our Trusted Sources
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          We collaborate with Ghana's leading beverage producers to deliver quality products nationwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-emerald-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-4 rounded-xl flex-shrink-0">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                    onError={(e) => (e.target.src = 'https://via.placeholder.com/120x60?text=No+Logo')}
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  {/* <p className="text-sm text-gray-400 mt-1">{partner.desc}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
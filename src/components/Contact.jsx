import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get in touch to discuss your distribution needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
            <form className="space-y-6">
              {[
                { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+233 XX XXX XXXX' }
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm text-gray-300 mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-md bg-black/30 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us about your distribution needs..."
                  className="w-full px-4 py-3 rounded-md bg-black/30 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold rounded-md hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Our Location</h3>
            <div className="h-96 bg-gray-800 border border-white/10 rounded-xl overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.755238724259!2d-0.2207424246864146!3d5.603602294393642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a7e4f6c7a7b%3A0x6b6b3e3e3e3e3e3e!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="RYAMEX Ventures Location"
              ></iframe>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: 'Head Office',
                  content: 'Hse. No. B921 Naa Kwakor Street, New Gbawe'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: ['0244730898233 (Mobile)', ' 0302336998 (Office)']
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: ['info@ryamex.com', 'ryamexyz@gmail.com']
                }
              ].map(({ icon: Icon, title, content }, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-emerald-500/20 p-3 rounded-xl border border-emerald-400/30 text-emerald-300 mr-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
                    {Array.isArray(content) ? (
                      content.map((line, i) => (
                        <p key={i} className="text-gray-400 text-sm">{line}</p>
                      ))
                    ) : (
                      <p className="text-gray-400 text-sm">{content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

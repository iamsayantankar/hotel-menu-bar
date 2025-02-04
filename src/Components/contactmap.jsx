import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ContactSection = () => {
  // Melbourne coordinates
  const position = [-37.8136, 144.9631];
  
  return (
    <section className="bg-[#2A2522] py-16 px-4 md:px-8">
      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone Card */}
          <div className="border-2 border-[#C29D59] p-6 bg-[#f5f5f5]">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Phone size={20} />
              <span>+1 233 898 0897</span>
            </div>
          </div>

          {/* Email Card */}
          <div className="border-2 border-[#C29D59] p-6 bg-[#f5f5f5]">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Mail size={20} />
              <span>email@example.com</span>
            </div>
          </div>

          {/* Address Card */}
          <div className="border-2 border-[#C29D59] p-6 bg-[#f5f5f5]">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin size={20} />
              <span>123 Main Street, Anytown, USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form and Map Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-white">CONTACT FORM</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b-2 border-gray-600 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#C29D59]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b-2 border-gray-600 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#C29D59]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-gray-600 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#C29D59] resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#C29D59] text-white px-8 py-3 hover:bg-[#A27B37] transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-[400px] z-0">
            <MapContainer 
              center={position} 
              zoom={13} 
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Our Location <br /> 123 Main Street, Anytown, USA
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-8 px-4">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-2">Contact Us</h1>
        <p className="text-lg text-gray-600">Get in touch with our team</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Information Card */}
        <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-indigo-900">Contact Information</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {/* Name */}
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-indigo-600 font-bold">
                  👤
                </div>
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="text-lg font-medium">MR MUHAMMAD FAISAL PEERZADA</p>
                </div>
              </div>

              {/* Phone */}
              <a 
                href="tel:03458340669" 
                className="flex items-center space-x-4 hover:bg-indigo-50 p-2 rounded-lg transition-colors cursor-pointer"
              >
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-indigo-600 font-bold">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact</p>
                  <p className="text-lg font-medium">03458340669</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:mohammadfaisalpirzada@gmail.com" 
                className="flex items-center space-x-4 hover:bg-indigo-50 p-2 rounded-lg transition-colors cursor-pointer"
              >
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-indigo-600 font-bold">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="text-lg font-medium">mohammadfaisalpirzada@gmail.com</p>
                </div>
              </a>

              {/* Address */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Sadar+karachi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:bg-indigo-50 p-2 rounded-lg transition-colors cursor-pointer"
              >
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-indigo-600 font-bold">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-500">Postal Address</p>
                  <p className="text-lg font-medium">Sadar karachi</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Map Section with Preview */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-indigo-900">Location Map</h2>
          </div>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Sadar+karachi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative"
          >
            <div className="aspect-video bg-indigo-50 flex flex-col items-center justify-center p-4">
              <div className="mb-3 text-6xl">📍</div>
              <div className="text-center">
                <p className="text-lg font-medium text-indigo-900 mb-1">Sadar, Karachi</p>
                <p className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                  Click to view on Google Maps →
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
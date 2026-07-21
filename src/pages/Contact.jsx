import React, { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#5A121A] min-h-screen font-sans pb-24 overflow-x-hidden">
      {/* Header Banner */}
      <div className="w-full bg-[#5A121A] text-white py-16 px-6 text-center space-y-3 border-b border-[#E5A912]/40">
        <p className="uppercase tracking-[6px] text-[#E5A912] text-xs font-extrabold">
          GET IN TOUCH
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold">CONTACT US</h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-16 space-y-16">
        {/* Main Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-[#5A121A]">We're Here for You</h2>
              <p className="text-gray-800 text-sm font-semibold leading-relaxed">
                Whether you have a question about our exclusive fragrances, shipping, or need assistance finding your perfect scent, our team is ready to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full border border-[#E5A912]/30 flex items-center justify-center text-xl shadow-sm shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-xs text-[#E5A912] mb-1">Our Boutique</h4>
                  <p className="font-serif font-bold text-lg text-[#5A121A]">Maka Al-Mukarama Road</p>
                  <p className="text-gray-800 text-sm font-semibold">Mogadishu, Somalia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full border border-[#E5A912]/30 flex items-center justify-center text-xl shadow-sm shrink-0">
                  📞
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-xs text-[#E5A912] mb-1">Phone</h4>
                  <p className="font-serif font-bold text-lg text-[#5A121A]">+252 61X XXX XXX</p>
                  <p className="text-gray-800 text-sm font-semibold">Sat - Thu, 8:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full border border-[#E5A912]/30 flex items-center justify-center text-xl shadow-sm shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-xs text-[#E5A912] mb-1">Email</h4>
                  <p className="font-serif font-bold text-lg text-[#5A121A]">info@faysancollection.com</p>
                  <p className="text-gray-800 text-sm font-semibold">Online Support 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E5A912]/30 shadow-md">
            <h3 className="font-serif font-bold text-2xl text-[#5A121A] pb-6 border-b border-gray-100 mb-6">Send a Message</h3>
            
            {status && (
              <div className="mb-6 p-4 bg-green-50 text-green-800 border border-green-200 rounded-lg text-sm font-semibold">
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5A121A] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-[#FAF8F5] border border-[#E5A912]/30 rounded-lg px-4 py-3 text-sm text-gray-900 font-medium focus:outline-none focus:border-[#5A121A]"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5A121A] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-[#FAF8F5] border border-[#E5A912]/30 rounded-lg px-4 py-3 text-sm text-gray-900 font-medium focus:outline-none focus:border-[#5A121A]"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5A121A] mb-1">Message</label>
                <textarea
                  required
                  rows="4"
                  className="w-full bg-[#FAF8F5] border border-[#E5A912]/30 rounded-lg px-4 py-3 text-sm text-gray-900 font-medium focus:outline-none focus:border-[#5A121A] resize-none"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#5A121A] text-white py-4 uppercase tracking-[0.2em] font-extrabold text-xs hover:bg-[#E5A912] transition duration-300 rounded shadow-lg mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="w-full bg-white p-4 rounded-2xl border border-[#E5A912]/30 shadow-md">
          <div className="mb-4 px-2">
            <h4 className="font-serif font-bold text-xl text-[#5A121A]">Visit Our Flagship Store</h4>
            <p className="text-gray-800 text-sm font-semibold">Locate our luxury boutique easily on Maka Al-Mukarama Road, Mogadishu.</p>
          </div>
          <div className="w-full h-96 rounded-xl overflow-hidden border border-[#E5A912]/20 relative">
            <iframe
              title="Mogadishu Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.46740698377!2d45.3182!3d2.0469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d541cfe6b607077%3A0xc54cfc5d336829!2sMaka%20Al-Mukarama%20Rd%2C%20Mogadishu%2C%20Somalia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
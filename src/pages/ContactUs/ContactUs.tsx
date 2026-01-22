import { RiSendPlaneFill } from "react-icons/ri";
import { HiMail, HiLocationMarker, HiClock } from "react-icons/hi";

export const ContactUs = () => {
  const mapSrc = "https://maps.google.com/maps?q=jharsuguda,%20768213&t=m&z=13&ie=UTF8&output=embed";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <h1 className="text-5xl font-black text-gray-900 tracking-tight mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
Feel free to contact us with any questions or concerns. You can use the form on our website or email us directly. We appreciate your interest and look forward to hearing from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: Info & Map (4/12) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Info Cards Container */}
            <div className="grid grid-cols-1 gap-4">
              {/* Contact Card */}
              <div className="flex items-center p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <HiMail size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Email & Phone
                  </h3>
                  <p className="text-gray-900 font-bold">abc@gmail.com</p>
                  <p className="text-gray-600 text-sm">+91 9828393930</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-center p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <HiLocationMarker size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Our Location
                  </h3>
                  <p className="text-gray-900 font-bold">
                    Raghunathpali, Kolabira
                  </p>
                  <p className="text-gray-600 text-sm">
                    Jharsuguda, Odisha 768213
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex items-center p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <HiClock size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Opening Hours
                  </h3>
                  <p className="text-gray-900 font-bold">
                    Mon - Fri: 9AM - 6PM
                  </p>
                  <p className="text-red-500 text-xs font-bold uppercase">
                    Closed on Sundays
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="h-80 rounded-3xl overflow-hidden shadow-inner border-4 border-white relative">
              <iframe
                className="w-full h-full grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                src={mapSrc}
                title="Location Map"
                loading="lazy"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold shadow-lg border border-white/20">
                📍 NH49, Jharsuguda
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form Section (7/12) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-gray-100 p-8 sm:p-12 relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

              <div className="relative">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-5">
                  Send us a message
                </h3>

                <form className="space-y-6" action="https://formsubmit.co/baatdekha@gmail.com">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-s font-bold text-gray-600 ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name..."
                        className="w-full px-5 py-4 bg-gray-100 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none text-gray-900 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-s font-bold text-gray-600 ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email..."
                        className="w-full px-5 py-4 bg-gray-100 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none text-gray-900 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-s font-bold text-gray-600 ml-1">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-5 py-4 bg-gray-100 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none resize-none text-gray-900 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center justify-center space-x-3 w-full sm:w-max px-12 py-5 bg-blue-600 hover:bg-gray-900 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-blue-500/20 active:scale-95 hover:-translate-y-1"
                  >
                    <span>Send Message</span>
                    <RiSendPlaneFill className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

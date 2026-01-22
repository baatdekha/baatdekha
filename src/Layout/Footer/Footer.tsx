
import React from 'react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaGlobe, 
  FaLifeRing, 
  FaShareAlt, 
  FaArrowRight 
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 text-slate-700 p-12 font-serif border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          
          {/* Section 1: Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <FaGlobe className="text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Services</h2>
            </div>
            <p className="text-slate-500 leading-relaxed italic">
              "Offering marketing and local assistance for everyone."
            </p>
          </div>

          {/* Section 2: Support Links */}
          <div className="flex flex-col">
            <h3 className="flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-widest text-sm mb-6">
              <FaLifeRing /> Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/service-guide" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-all group">
                  <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                  <span>Help Center</span>
                </a>
              </li>
              <li>
                <a href="/terms" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-all group">
                  <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                  <span>Privacy Policy</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div className="flex flex-col">
            <h3 className="flex items-center gap-2 text-rose-500 font-bold uppercase tracking-widest text-sm mb-6">
              <FaShareAlt /> Connect
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:+917682020188" 
                className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-rose-200 hover:shadow-md transition-all"
              >
                <FaPhoneAlt className="text-rose-500" />
                <span className="font-medium text-slate-800">+91 7682020188</span>
              </a>
              
              <a 
                href="mailto:baatdekha@gmail.com" 
                className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all"
              >
                <FaEnvelope className="text-indigo-500" />
                <span className="font-medium text-slate-800 break-all">baatdekha@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {currentYear} baatdekha.com • All rights reserved.</p>
          <div className="flex gap-6 hidden">
            <a href="#" className="hover:text-indigo-600">Facebook</a>
            <a href="#" className="hover:text-indigo-600">Instagram</a>
            <a href="#" className="hover:text-indigo-600">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

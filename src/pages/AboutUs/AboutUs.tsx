import React from "react";
import {
  FaMapSigns,
  FaGift,
  FaUserFriends,
  FaPaintRoller,
  FaShoppingBag,
  FaHardHat,
  FaCarSide,
  FaCheckCircle,
  FaLock,
  FaMagic,
  FaSyncAlt,
  FaSmile,
} from "react-icons/fa";

export const AboutUs = () => {
  return (
    <div className="font-poppins text-gray-800 bg-white">
      {/* SECTION 1: THE MEANING */}
      <section className="bg-linear-to-br from-[#08ffbd] to-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              What is Baatdekha?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Baatdekha is a name of our local language,{" "}
              <span className="font-semibold border-b-2 border-emerald-400">
                Sambalpuri
              </span>
              . It has 3 different types of meaning:
            </p>
          </header>

          <div className="space-y-6">
            {/* Meaning 1 - Highlighted */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-l-4 border-emerald-500">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                  <FaMapSigns size={24} />
                </div>
                <div>
                  <p className="text-gray-800 leading-relaxed">
                    When you show a way to another, that's called{" "}
                    <span className="font-bold uppercase text-sm tracking-wider">
                      baatdekha
                    </span>
                    .
                  </p>
                  <p className="mt-3 text-emerald-700 font-medium italic text-sm">
                    In this platform it means this option. We are providing some
                    digital services through our website that can help people.
                  </p>
                </div>
              </div>
            </div>

            {/* Meaning 2 */}
            <div className="bg-white/40 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-lg text-gray-600">
                  <FaGift size={24} />
                </div>
                <p className="text-gray-700 leading-relaxed pt-2">
                  When your relatives, friends, or any guests come to your home,
                  they have to give you some surprise, like any type of gift or
                  sweets or any more—that's also called{" "}
                  <span className="font-semibold italic">baatdekha</span>.
                </p>
              </div>
            </div>

            {/* Meaning 3 */}
            <div className="bg-white/40 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-lg text-gray-600">
                  <FaUserFriends size={24} />
                </div>
                <p className="text-gray-700 leading-relaxed pt-2">
                  Suppose you have a plan to go to your relative's house or any
                  of your friend’s houses, and they already know about that, and
                  they are waiting for you—that is called{" "}
                  <span className="font-semibold italic">baatdekha</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES */}
      <section className="bg-linear-to-br from-[#08ffbd]/20 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-10">
            We offer a wide range of services to the local villages on this
            platform, some of which are open to all users.
          </p>

          <h3 className="text-xl font-bold uppercase tracking-widest text-gray-500 mb-8">
            Our Services
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ServiceItem icon={<FaPaintRoller />} label="Paints Maker" />
            <ServiceItem icon={<FaShoppingBag />} label="Shop Together" />
            <ServiceItem icon={<FaHardHat />} label="Workers Finder" />
            <ServiceItem icon={<FaCarSide />} label="Vehicle Reservation" />
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY USE US */}
      <section className="bg-linear-to-t from-orange-100/50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100">
            <p className="text-gray-700 mb-8 leading-relaxed text-center">
              We are always trying to find some basic types of services related
              to our everyday life. It can benefit a lot of individuals.
            </p>

            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900 inline-block border-b-4 border-orange-400 pb-1">
                Why use baatdekha.com?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              <FeatureItem
                icon={<FaMagic className="text-orange-500" />}
                text="Easy to use"
              />
              <FeatureItem
                icon={<FaSmile className="text-orange-500" />}
                text="User-friendly"
              />
              <FeatureItem
                icon={<FaSyncAlt className="text-orange-500" />}
                text="Up-to-date service"
              />
              <FeatureItem
                icon={<FaLock className="text-orange-500" />}
                text="Privacy protection"
              />
              <FeatureItem
                icon={<FaCheckCircle className="text-orange-500" />}
                text="Neat & clean interface"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Sub-components
const ServiceItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3 border border-emerald-50">
    <div className="text-emerald-500 text-2xl">{icon}</div>
    <span className="text-sm font-bold text-gray-700">{label}</span>
  </div>
);

const FeatureItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="flex items-center gap-3 py-2 px-4 bg-orange-50/50 rounded-lg">
    {icon}
    <span className="font-medium text-gray-700">{text}</span>
  </div>
);

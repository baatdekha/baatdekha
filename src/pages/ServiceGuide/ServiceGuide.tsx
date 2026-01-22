import React from "react";
import {
    HiOutlinePaintBrush,
    HiOutlineShoppingBag,
    HiOutlineTruck,
    HiOutlineUsers,
} from "react-icons/hi2";
import { ServiceCard } from "./ServiceCard";

export const ServiceGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(circle_at_top_right,#e2e8f0,transparent)] px-6 py-20 font-poppins">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
            Community Hub
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
            Our{" "}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-500">
            Everything you need for your home and work in one simple place.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Paints Maker */}
          <ServiceCard
            id="paints-maker"
            title="Paints Maker"
            icon={<HiOutlinePaintBrush />}
            gradient="bg-gradient-to-br from-purple-500 to-pink-500"
            description={
              <p>
                Paints Maker is a tool where you can find and choose different
                types of colors for your home interior and exterior. These
                colors and their codes are based on{" "}
                <strong>Asian Paints</strong>. Select your color and ask for
                price via email or note the name/code to buy it from your
                nearest dealer.
              </p>
            }
          />

          {/* Workers Finder */}
          <ServiceCard
            id="workers-finder"
            title="Workers Finder"
            icon={<HiOutlineUsers />}
            gradient="bg-gradient-to-br from-blue-500 to-indigo-600"
            description={
              <div className="space-y-2">
                <p className="mb-4">
                  This tool helps workers and people looking to hire find each
                  other.
                </p>
                <p className="font-bold text-purple-900">
                  If you are a Worker:
                </p>
                <p>
                  Fill out the form to register. Your profile will be shown here
                  after we check and approve it.
                </p>

                <p className="font-bold text-slate-900">If you want Workers:</p>
                <p>
                  Look for plumbers, electricians, or welders. You can see their
                  profiles and call them directly.
                </p>
              </div>
            }
          />

          {/* Vehicle Reservation */}
          <ServiceCard
            id="vehicle-reservation"
            title="Vehicle Reservation"
            icon={<HiOutlineTruck />}
            gradient="bg-gradient-to-br from-emerald-500 to-teal-600"
            locationTag="Jharsuguda • Kolabira Block"
            description={
              <div>
                <p>
                  This service is only for villagers in Jharsuguda district,
                  Kolabira block.
                </p>
                <p>
                  If you need to travel or transport goods but can't find a
                  vehicle nearby, open this page and call vehicle drivers
                  directly.
                </p>
              </div>
            }
          />

          {/* Shop Together */}
          <ServiceCard
            id="shop-together"
            title="Shop Together"
            icon={<HiOutlineShoppingBag />}
            gradient="bg-gradient-to-br from-orange-400 to-red-500"
            description={
              <div>
                <p>
                  If you buy a small amount of construction materials, transport
                  charges are still high. This tool helps reduce that cost.
                </p>
                <h4 className="font-bold mt-2">How does it work?</h4>
                <p>
                  If two users need similar materials and live along the same
                  route, we combine the orders in one vehicle and split the
                  transport cost. This helps you save money.
                </p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

import shopTogetherBanner from "@/pages/Home/assets/shopping-in-raghunathpali.jpeg";

export const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-700 to-pink-500 flex items-center justify-center p-6">
      {/* Main Card */}
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Visual/Banner */}
        <div className="md:w-1/2 relative group">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={shopTogetherBanner}
            alt="Shop Together Banner"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        </div>

        {/* Right Side: Content */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-pink-300 mb-2">
            Coming Soon
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Shop Together, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-pink-300">
              Save Together.
            </span>
          </h1>

          <p className="text-gray-200 mb-8 leading-relaxed">
            We're building a new way to shop with your tribe. Get exclusive
            group discounts and shared rewards.
          </p>
        </div>
      </div>
    </div>
  );
};

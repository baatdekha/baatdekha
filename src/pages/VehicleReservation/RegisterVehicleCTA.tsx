import { MdDirectionsCar, MdArrowForward } from "react-icons/md";

export function RegisterVehicleCTA() {
  return (
    <div className="group relative overflow-hidden flex flex-col gap-4 p-6 rounded-[2.5rem] w-full max-w-sm shadow-xl transition-all duration-500 bg-linear-to-br from-slate-800 via-blue-900 to-cyan-700 border border-white/10 m-3">
      {/* --- DIAGONAL SHIMMER LAYER --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="animate-vehicle-shimmer absolute top-1/2 left-[-50%] w-[200%] h-[50px] bg-cyan-400/30 blur-2xl" />
      </div>

      {/* Decorative Automotive Light Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex flex-col">
          <span className="text-cyan-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-1 opacity-90">
            Transport Partner
          </span>
          <h2 className="text-2xl font-carter-one text-white leading-tight">
            Own a <span className="text-cyan-400">Vehicle?</span>
            <br />
            <span className="text-lg opacity-90">Earn with us.</span>
          </h2>
        </div>

        {/* Car Icon with "Driving" animation */}
        <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg animate-drive">
          <MdDirectionsCar size={32} className="text-white" />
        </div>
      </div>

      <p className="relative z-10 text-slate-200 text-sm font-medium opacity-80 leading-relaxed">
        Register your vehicle today and start getting booking
        requests.
      </p>

      {/* Action Button */}
      <a
        href="https://forms.gle/x9jJwcLCxu6KYRN36"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 mt-2 flex items-center justify-center gap-3 py-3.5 px-6 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-2xl shadow-lg shadow-cyan-900/20 transition-all active:scale-95 group"
      >
        <span>Register Vehicle</span>
        <MdArrowForward className="text-xl transition-transform duration-300 group-hover:translate-x-2" />
      </a>
    </div>
  );
}

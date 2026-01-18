// make another without shimmer animation, decide the final
export function WorkerSignupCTA() {
  return (
    <div className="group relative overflow-hidden flex flex-col gap-4 p-6 rounded-[2.5rem] w-full max-w-sm shadow-xl transition-all duration-500 bg-linear-to-br from-violet-600 via-violet-500 to-fuchsia-500 border border-white/20">
      {/* --- THE FULL-CARD SHIMMER LAYER --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="animate-card-shimmer absolute top-1/2 left-1/2 w-[200%] h-[100px] bg-white/20 blur-[30px]" />
      </div>

      {/* Background Blobs */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-25"></div>

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex flex-col">
          <span className="text-violet-100 text-[10px] font-bold uppercase tracking-[0.2em] mb-1 opacity-80">
            Join the team
          </span>
          <h2 className="text-2xl font-carter-one text-white leading-tight">
            Are you a <br />
            <span className="text-yellow-300">Skilled Worker?</span>
          </h2>
        </div>

        {/* Floating Icon */}
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/30 shadow-lg animate-inline-float">
          <svg
            className="h-7 w-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </div>

      <p className="relative z-10 text-violet-50 text-sm font-medium opacity-90 leading-relaxed">
        Register now to reach more customers near you. It's free and fast!
      </p>

      {/* Button - Clean and Simple */}
      <a
        href="https://forms.gle/PFtPoFPWoeNKJi167"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 mt-2 flex items-center justify-center gap-2 py-3.5 px-6 bg-white text-violet-700 font-bold rounded-2xl shadow-lg transition-all active:scale-95"
      >
        <span>Register Now</span>
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </a>
    </div>
  );
}

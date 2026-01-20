export function LoadingState() {
  // We create an array of 5 items to fill the screen
  const skeletons = Array.from({ length: 5 });

  return (
    <div className="flex flex-col gap-3 w-full animate-in fade-in duration-500">
      {skeletons.map((_, i) => (
        <div 
          key={i} 
          className="flex items-center gap-4 w-full p-3 bg-white border border-slate-100 rounded-2xl shadow-sm"
          style={{ opacity: 1 - i * 0.15 }} // Fades out bottom items slightly
        >
          {/* 1. Icon Box Skeleton */}
          <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-2xl animate-skeleton" />

          {/* 2. Text Content Skeleton */}
          <div className="flex-grow flex flex-col gap-2">
            {/* Name line */}
            <div className="h-4 w-32 bg-slate-100 rounded-md animate-skeleton" />
            
            {/* Meta info line (Village + Badge) */}
            <div className="flex gap-2">
              <div className="h-3 w-16 bg-slate-50 rounded animate-skeleton" />
              <div className="h-3 w-12 bg-slate-50 rounded animate-skeleton" />
            </div>
          </div>

          {/* 3. Button Skeleton */}
          <div className="flex-shrink-0 w-11 h-11 bg-slate-100 rounded-full animate-skeleton" />
        </div>
      ))}
      
      {/* Optional Loading Text */}
      <p className="text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-4 animate-pulse">
        Fetching local data...
      </p>
    </div>
  );
}

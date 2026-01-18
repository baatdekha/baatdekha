
// components/WorkerCard/WorkerCard.tsx
import { MdCall, MdLocationOn } from "react-icons/md";
import { type Worker } from "@/services/workersService";

interface WorkerCardProps extends Worker {}

export default function WorkerCard({
  name,
  village,
  occupation,
  mobile_no,
  imgSrc,
}: WorkerCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 h-full">
      
      {/* 1. PORTRAIT IMAGE - Tall aspect ratio for selfies */}
      <div className="relative bg-slate-100 w-full">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-50 object-cover object-top"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/avatar.jpg";
          }}
        />
        
        {/* Occupation Overlay - Clean & Compact */}
        <div className="absolute top-2 left-2 right-2">
           <span className="inline-block bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
             {occupation}
           </span>
        </div>
      </div>

      {/* 2. INFO SECTION - Optimized for narrow columns */}
      <div className="flex flex-col p-3 flex-grow justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-900 leading-tight line-clamp-1">
            {name}
          </h3>
          <div className="flex items-center gap-1 mt-1 text-slate-500">
            <MdLocationOn className="text-slate-400 shrink-0" size={14} />
            <span className="text-xs font-medium truncate">{village}</span>
          </div>
        </div>

        {/* 3. COMPACT CALL BUTTON */}
        <a
          href={`tel:${mobile_no}`}
          className="flex items-center justify-center gap-2 w-full bg-green-600 active:bg-green-700 text-white py-2.5 rounded-xl shadow-sm transition-transform active:scale-95"
        >
          <MdCall size={18} />
          <span className="font-bold text-sm">Call</span>
        </a>
      </div>
    </div>
  );
}

import { BiChevronRight } from "react-icons/bi";
import { HiOutlineMapPin } from "react-icons/hi2";

interface ServiceCardProps {
  id: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  gradient: string;
  locationTag?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  icon,
  gradient,
  locationTag,
}) => (
  <div
    id={id}
    className="group relative overflow-hidden rounded-4xl border border-white/20 bg-white/10 p-1 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
  >
    {/* Inner Card Content */}
    <div className="relative h-full rounded-[1.9rem] bg-white p-6 shadow-xl">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg ${gradient}`}
        >
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
      </div>

      {locationTag && (
        <div className="mb-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-blue-600">
          <HiOutlineMapPin className="text-sm" /> {locationTag}
        </div>
      )}

      <div className="mb-6 text-sm leading-relaxed text-slate-500">
        {description}
      </div>

      <button className="flex items-center gap-1 text-sm font-bold text-slate-900 transition-colors hover:text-blue-600">
        <a href={`/${id}`}>Get Started</a>
        <BiChevronRight className="text-xl transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);

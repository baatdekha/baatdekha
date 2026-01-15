// components/WorkerCard/WorkerCard.tsx
import { MdCall } from "react-icons/md";
import { type Worker } from "@/services/workersService";

interface WorkerCardProps extends Worker {}

export default function WorkerCard({
  name,
  village,
  occupation,
  contact,
  imgSrc,
}: WorkerCardProps) {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-2xl p-2 w-40 shadow-lg text-center">
      <div className="h-fit overflow-hidden">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-40 object-cover object-top aspect-auto rounded-2xl "
          loading="lazy"
          onError={e => {
            (e.currentTarget as HTMLImageElement).src = "avatar.jpg";
          }}
        />
      </div>

      <div className="flex flex-col">
        <span className="worker-name">{name}</span>
        <span className="worker-village">({village})</span>
        <span className="occupation">{occupation}</span>
      </div>

      <a href={`tel:${contact}`} className="inline-flex gap-2 justify-center bg-green-600 rounded-2xl p-2 text-white w-full">
        <MdCall className="call-icon" size={26} />
        <span>Call Me</span>
      </a>
    </div>
  );
}

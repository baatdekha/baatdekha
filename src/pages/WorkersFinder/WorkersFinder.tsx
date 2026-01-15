// components/WorkersFinder/WorkersFinder.tsx
import {RadioToolbar} from "@/components/RadioToolbar";
import WorkerCard from "./WorkerCard/WorkerCard";
import { useWorkers } from "@/hooks/useWorkers";

export default function WorkersFinder() {
  const {
    occupations,
    filtered,
    selectedOccupation,
    setSelectedOccupation,
    loading,
    error,
  } = useWorkers();

  if (loading) return <p>Loading workers...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center bg-gray-50 max-w-screen">
      <h3 className="px-3 italic font-bold m-5 text-center text-orange-500">
        <span>
          Plumber || Welder || Electrician || Painter || Mason || Labor ||
          Carpenter || Driver || Interior designer || Building contractor
        </span>
      </h3>

      <div className="flex flex-col gap-3 p-5 rounded-3xl max-w-72 text-lg font-carter-one text-white bg-linear-to-bl from-violet-500 to-fuchsia-500 ">
        <div>
          <span>If you are a worker, </span>
          <span>then Register now.</span>
        </div>

        <a
          href="https://forms.gle/PFtPoFPWoeNKJi167"
          className="p-2 bg-white rounded-2xl text-black text-center"
        >
          Click Here
        </a>
      </div>

      <div className="grid grid-cols-1 min-w-0 gap-3 bg-gray-100 py-5">
        <label className="p-2">🔴 Filter by Occupation:</label>

        <RadioToolbar
          name="occupations"
          options={occupations.map(o => ({ value: o, label: o }))}
          value={selectedOccupation}
          onChange={setSelectedOccupation}
        />
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {filtered.map(worker => (
          <WorkerCard key={worker.name} {...worker} />
        ))}
      </div>
    </div>
  );
}

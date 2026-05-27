import DashboardLayout from "../layouts/DashboardLayout";
import KpiCard from "../components/KpiCard";

function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            PujoPulse Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Real-time Kolkata festival intelligence.
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-5
          "
        >
          <KpiCard
            title="Active Pandals"
            value="324"
            change="+12% from yesterday"
          />

          <KpiCard
            title="Crowd Intensity"
            value="High"
            change="Peak around 9 PM"
          />

          <KpiCard
            title="Traffic Zones"
            value="18"
            change="4 severe congestion areas"
          />

          <KpiCard
            title="Weather"
            value="27°C"
            change="Rain expected tonight"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;
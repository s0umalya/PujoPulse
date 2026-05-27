import DashboardLayout from "../layouts/DashboardLayout";

function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold">
          PujoPulse Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Real-time Kolkata festival intelligence.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;
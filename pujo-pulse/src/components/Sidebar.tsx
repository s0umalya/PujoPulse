import {
  LayoutDashboard,
  Map,
  TrafficCone,
  BarChart3,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Live Map",
    icon: Map,
  },
  {
    title: "Traffic",
    icon: TrafficCone,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 h-screen p-5">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-cyan-400">
          PujoPulse
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Festival Intelligence
        </p>
      </div>

      <nav className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="
                flex
                items-center
                gap-3
                w-full
                p-3
                rounded-xl
                bg-slate-800/40
                hover:bg-slate-800
                transition
              "
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
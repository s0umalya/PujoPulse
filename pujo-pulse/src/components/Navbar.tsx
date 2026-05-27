import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header
      className="
        h-16
        border-b
        border-slate-800
        bg-slate-900/70
        backdrop-blur-md
        px-6
        flex
        items-center
        justify-between
      "
    >
      <div>
        <h2 className="text-xl font-semibold">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div
          className="
            flex
            items-center
            gap-2
            bg-slate-800
            px-3
            py-2
            rounded-lg
          "
        >
          <Search size={18} />

          <input
            type="text"
            placeholder="Search pandals..."
            className="
              bg-transparent
              outline-none
              text-sm
            "
          />
        </div>

        <button
          className="
            p-2
            rounded-lg
            bg-slate-800
            hover:bg-slate-700
          "
        >
          <Bell size={18} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
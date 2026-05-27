type KpiCardProps = {
  title: string;
  value: string;
  change: string;
};

function KpiCard({
  title,
  value,
  change,
}: KpiCardProps) {
  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-5
      "
    >
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>

      <p className="text-cyan-400 mt-2 text-sm">
        {change}
      </p>
    </div>
  );
}

export default KpiCard;
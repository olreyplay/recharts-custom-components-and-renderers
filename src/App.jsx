import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { month: "Jan", sales: 2400 },
  { month: "Feb", sales: 3200 },
  { month: "Mar", sales: 2800 },
  { month: "Apr", sales: 4100 },
];

/* ----------------------------
   Custom Tooltip Renderer
----------------------------- */
function CustomTooltip({ active, label, payload }) {
  if (!active || !payload?.length) return null;

  const value = payload[0].value;

  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: 10,
        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        pointerEvents: "none",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 4 }}>{label}</div>
      <div>
        <span style={{ opacity: 0.7 }}>Sales:</span> ${value.toLocaleString()}
      </div>
    </div>
  );
}

/* ----------------------------
   Custom Bar Shape
----------------------------- */
const RoundedBar = (props) => {
  const { x, y, width, height, fill } = props;

  return (
    <rect x={x} y={y} width={width} height={height} rx={8} ry={8} fill={fill} />
  );
};

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h2 style={{ marginTop: 0 }}>Custom Components & Renderers</h2>

      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(v) => `$${v / 1000}k`} />

        {/* Custom tooltip */}
        <Tooltip content={CustomTooltip} />

        {/* Custom bar shape */}
        <Bar dataKey="sales" fill="#6366f1" shape={<RoundedBar />} />
      </BarChart>
    </div>
  );
}

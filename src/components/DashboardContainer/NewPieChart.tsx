import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import RenderCustomizedLabel from "./DashboardTables/RenderCustomizedLabel";
import type { PieLabelRenderProps } from "recharts";

const NewPieChart = () => {
  const data01 = [
    { name: "SMS Services", value: 12.3, fill: "#0D6EFD" },
    { name: "Airtime & Data", value: 63.5, fill: "#6F54C2" },
    { name: "Bills Payment", value: 24.2, fill: "#04BD4B" },
  ];

  // Calculate total for percentage calculation
  const total = data01.reduce((sum, item) => sum + item.value, 0);

  // Custom label render function
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    // innerRadius,
    outerRadius,
    percent,
    name,
  }: PieLabelRenderProps) => {
    const RADIAN = Math.PI / 180;
    // const safeInnerRadius = typeof innerRadius === "number" ? innerRadius : 0;
    const safeOuterRadius = typeof outerRadius === "number" ? outerRadius : 0;
    const radius = safeOuterRadius + 70;
    const safeCx = typeof cx === "number" ? cx : 0;
    const safeCy = typeof cy === "number" ? cy : 0;
    const x = safeCx + radius * Math.cos(-midAngle * RADIAN);
    const y = safeCy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#333"
        // textAnchor={x > safeCx ? "start" : "end"}
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: "0.7em", fontWeight: 500 }}
      >
        {`${name}: ${(((percent ?? 0) * 100).toFixed(1))}%`}
      </text>
    );
  };

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={100} height={100}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={renderCustomizedLabel}
            labelLine={{ stroke: '#333', strokeWidth: 1 }} 
          />
          {/* <Tooltip 
            formatter={(value:number, name, props) => 
              [`${value}`, `${name}: ${(value).toFixed(1)}%`]
            }
          /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewPieChart;

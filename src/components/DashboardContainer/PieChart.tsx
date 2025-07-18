import { Doughnut, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import type { ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, PointElement, ChartDataLabels);

const PieChart = () => {
  const data = {
    labels: ["SME Services", "Airtime & Data", "Bills Payment"],
    datasets: [
      {
        label: "A",
        data: [12.3, 63.5, 24.2],
        backgroundColor: ["#0D6EFD", "#6F54C2", "#04BD4B"],
        borderColor: ["#0D6EFD", "#6F54C2", "#04BD4B"],
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      datalabels: {
        formatter: (value, context) => {
          const label = context.chart.data.labels?.[context.dataIndex];
          return `${label}: ${value.toFixed(1)}%`;
        },
        color: "#444",
        anchor: "end",
        align: "start",
        offset: 10,
        font: {
          size: 10,
        },
      },
    },
  };
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartOptions, ChartData } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export const AreaChart = () => {
  const newChartData = [0, 200, 400, 500, 350, 450, 400];

  const newData: ChartData<"line", number[], string> = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
    datasets: [
      {
        label: "Successful transaction",
        fill: true,
        data: newChartData,
        borderColor: "#2D66DD",
        backgroundColor: "rgba(135, 158, 233, 0.3)",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Transaction Volume",
      },
    },
    scales: {
    y: {
      type: 'linear', 
    //   ticks: {
    //     beginAtZero: true, 
    //   },
    },
  },
  };

  return <Line data={newData} options={options} />;
};

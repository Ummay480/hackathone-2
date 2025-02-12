"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale);

export default function Dashboard() {
  const data = {
    labels: ["Pizza", "Burgers", "Pasta", "Sushi", "Tacos"],
    datasets: [
      {
        label: "Orders",
        data: [50, 80, 30, 60, 40],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <Card>
          <CardContent>
            <h2 className="text-lg font-bold">Orders Overview</h2>
            <Bar data={data} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

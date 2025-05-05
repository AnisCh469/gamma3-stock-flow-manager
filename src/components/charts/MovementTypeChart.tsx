
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { prepareMovementTypeData } from "@/utils/chartUtils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

export const MovementTypeChart = () => {
  const data = prepareMovementTypeData();
  
  const config = {
    "Entrées": {
      label: "Entrées",
      theme: { light: "#8884d8", dark: "#8884d8" },
    },
    "Sorties": {
      label: "Sorties",
      theme: { light: "#82ca9d", dark: "#82ca9d" },
    },
    "Transferts": {
      label: "Transferts",
      theme: { light: "#ffc658", dark: "#ffc658" },
    },
    "Retours": {
      label: "Retours",
      theme: { light: "#ff8042", dark: "#ff8042" },
    },
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Mouvements par Mois</CardTitle>
        <CardDescription>Activité des 6 derniers mois</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="h-[300px]">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Entrées" fill="#8884d8" />
            <Bar dataKey="Sorties" fill="#82ca9d" />
            <Bar dataKey="Transferts" fill="#ffc658" />
            <Bar dataKey="Retours" fill="#ff8042" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

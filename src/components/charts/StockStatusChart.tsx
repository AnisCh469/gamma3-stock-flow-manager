
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { prepareStockStatusData } from "@/utils/chartUtils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

export const StockStatusChart = () => {
  const data = prepareStockStatusData();
  
  const config = {
    Low: {
      label: "Stock Faible",
      theme: { light: "#FF8042", dark: "#FF8042" },
    },
    Normal: {
      label: "Stock Normal",
      theme: { light: "#00C49F", dark: "#00C49F" },
    },
    Excess: {
      label: "Stock Excédent",
      theme: { light: "#0088FE", dark: "#0088FE" },
    },
  };

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Statut des Stocks</CardTitle>
        <CardDescription>Distribution des niveaux de stock</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="h-[200px]">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

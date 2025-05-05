
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { prepareItemCategoryData } from "@/utils/chartUtils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export const ItemCategoryChart = () => {
  const data = prepareItemCategoryData();
  
  // Create dynamic config based on category data
  const config = data.reduce((acc, { name }, index) => {
    acc[name] = {
      label: name,
      theme: { light: COLORS[index % COLORS.length], dark: COLORS[index % COLORS.length] },
    };
    return acc;
  }, {} as Record<string, {label: string, theme: {light: string, dark: string}}> );

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Distribution par Catégorie</CardTitle>
        <CardDescription>Articles par classe</CardDescription>
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

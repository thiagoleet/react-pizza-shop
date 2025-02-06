import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import colors from "tailwindcss/colors";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Lines,
  Tooltip,
  Line,
} from "recharts";

const dataMock = [
  {
    date: "2021-01-01",
    revenue: 1000,
  },
  {
    date: "2021-01-02",
    revenue: 2050,
  },
  {
    date: "2021-01-03",
    revenue: 800,
  },
  {
    date: "2021-01-04",
    revenue: 2400,
  },
  {
    date: "2021-01-05",
    revenue: 1800,
  },
  {
    date: "2021-01-06",
    revenue: 1300,
  },
  {
    date: "2021-01-07",
    revenue: 500,
  },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no perído
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer
          width="100%"
          height={240}
        >
          <LineChart
            data={dataMock}
            style={{ fontSize: 12 }}
          >
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              dy={16}
            />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors["violet"][500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { getSalesData, formatNumber, type TimeRange } from "@/lib/mock-data";

type ChartType = "bar" | "line";
type MetricType = "streams" | "downloads" | "revenue";

const metricConfig: Record<MetricType, { label: string; format: (n: number) => string }> = {
  streams: { label: "Streams", format: formatNumber },
  downloads: { label: "Downloads", format: formatNumber },
  revenue: { label: "Revenue", format: (n) => `$${formatNumber(n)}` },
};

export function SalesChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>("monthly");
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [metric, setMetric] = useState<MetricType>("streams");

  const data = getSalesData(timeRange);
  const config = metricConfig[metric];

  const barData = data.map((d) => ({
    month: d.month,
    [metric]: d[metric],
  }));

  const lineData = [
    {
      id: config.label,
      data: data.map((d) => ({
        x: d.month,
        y: d[metric],
      })),
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-col gap-4 space-y-0 sm:flex-row sm:items-center sm:justify-between">
        <CardTitle className="text-lg font-semibold">Sales Analytics</CardTitle>
        <div className="flex flex-wrap items-center gap-3">
          <Select
            value={metric}
            onValueChange={(value) => setMetric(value as MetricType)}
          >
            <SelectTrigger className="w-[130px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="streams">Streams</SelectItem>
              <SelectItem value="downloads">Downloads</SelectItem>
              <SelectItem value="revenue">Revenue</SelectItem>
            </SelectContent>
          </Select>
          <Tabs
            value={timeRange}
            onValueChange={(v) => setTimeRange(v as TimeRange)}
          >
            <TabsList>
              <TabsTrigger value="weekly">Week</TabsTrigger>
              <TabsTrigger value="monthly">Month</TabsTrigger>
              <TabsTrigger value="yearly">Year</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs
            value={chartType}
            onValueChange={(v) => setChartType(v as ChartType)}
          >
            <TabsList>
              <TabsTrigger value="bar">Bar</TabsTrigger>
              <TabsTrigger value="line">Line</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          {chartType === "bar" ? (
            <ResponsiveBar
              data={barData}
              keys={[metric]}
              indexBy="month"
              margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              colors={["#dc3228"]}
              borderRadius={4}
              axisBottom={{
                tickSize: 0,
                tickPadding: 12,
              }}
              axisLeft={{
                tickSize: 0,
                tickPadding: 12,
                format: (value) => config.format(value as number),
              }}
              enableLabel={false}
              theme={{
                axis: {
                  ticks: {
                    text: {
                      fill: "#a1a1aa",
                      fontSize: 12,
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: "#262626",
                  },
                },
              }}
              tooltip={({ value, indexValue }) => (
                <div className="rounded-md bg-card border border-border px-3 py-2 text-sm text-card-foreground shadow-lg">
                  <strong>{indexValue}</strong>: {config.format(value as number)}
                </div>
              )}
            />
          ) : (
            <ResponsiveLine
              data={lineData}
              margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{ type: "linear", min: "auto", max: "auto" }}
              curve="monotoneX"
              colors={["#dc3228"]}
              lineWidth={3}
              pointSize={8}
              pointColor="#dc3228"
              pointBorderWidth={2}
              pointBorderColor="#ffffff"
              enableArea={true}
              areaOpacity={0.1}
              axisBottom={{
                tickSize: 0,
                tickPadding: 12,
              }}
              axisLeft={{
                tickSize: 0,
                tickPadding: 12,
                format: (value) => config.format(value as number),
              }}
              theme={{
                axis: {
                  ticks: {
                    text: {
                      fill: "#a1a1aa",
                      fontSize: 12,
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: "#262626",
                  },
                },
              }}
              tooltip={({ point }) => (
                <div className=" flex rounded-md bg-card border border-border px-3 py-2 text-sm text-card-foreground shadow-lg">
                  <strong>{point.data.xFormatted}</strong>:{" "}
                  {config.format(point.data.y as number)}
                </div>
              )}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}

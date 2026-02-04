"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsivePie } from "@nivo/pie";
import {
  fanMetrics,
  topCountries,
  revenueBySource,
  formatNumber,
} from "@/lib/mock-data";

export function FanEngagement() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Platform Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Platform Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {fanMetrics.map((platform) => (
              <div
                key={platform.platform}
                className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">
                    {platform.platform.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{platform.platform}</p>
                    <p className="text-sm text-muted-foreground">
                      {formatNumber(platform.followers)} followers
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-primary">
                    +{platform.growth}%
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {platform.engagement}% engagement
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Revenue Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Revenue Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px]">
            <ResponsivePie
              data={revenueBySource}
              margin={{ top: 20, right: 80, bottom: 20, left: 80 }}
              innerRadius={0.6}
              padAngle={2}
              cornerRadius={4}
              colors={{ datum: "data.color" }}
              borderWidth={0}
              enableArcLinkLabels={true}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#a1a1aa"
              arcLinkLabelsThickness={1}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor="#ffffff"
              tooltip={({ datum }) => (
                <div className="rounded-md bg-card border border-border px-3 py-2 text-sm text-card-foreground shadow-lg">
                  <strong>{datum.id}</strong>: {datum.value}%
                </div>
              )}
            />
          </div>
        </CardContent>
      </Card>

      {/* Top Countries */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Top Listening Countries
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-5">
            {topCountries.map((country, index) => (
              <div
                key={country.country}
                className="rounded-lg border border-border p-4 text-center transition-colors hover:bg-muted/50"
              >
                <p className="text-2xl font-bold text-primary">#{index + 1}</p>
                <p className="mt-1 font-medium">{country.country}</p>
                <p className="text-sm text-muted-foreground">
                  {formatNumber(country.listeners)} listeners
                </p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${country.percentage}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {country.percentage}%
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

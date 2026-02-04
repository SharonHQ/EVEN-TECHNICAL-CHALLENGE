"use client";

import { Header } from "@/components/header";
import { RecentReleases } from "@/components/recent-releases";
import { SalesChart } from "@/components/sales-chart";
import { FanEngagement } from "@/components/fan-engagement";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="releases">Releases</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="fans">Fans</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <SalesChart />
              <RecentReleases />
            </div>
            <FanEngagement />
          </TabsContent>

          <TabsContent value="releases">
            <RecentReleases />
          </TabsContent>

          <TabsContent value="analytics">
            <SalesChart />
          </TabsContent>

          <TabsContent value="fans">
            <FanEngagement />
          </TabsContent>
        </Tabs>
      </main>
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        Made by Sharon with <span className="text-primary">❤️</span> for{" "}
        <a
          href="https://even.biz"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold tracking-wider text-primary hover:opacity-80 transition-opacity"
        >
          EVEN
        </a>
      </footer>
    </div>
  );
}

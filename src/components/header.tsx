"use client";

import { artistInfo, formatNumber } from "@/lib/mock-data";

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              {artistInfo.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                {artistInfo.name}
              </h1>
              <p className="text-sm text-muted-foreground">
                {artistInfo.genre} · {artistInfo.origin}
              </p>
            </div>
          </div>
          <div className="flex gap-6 text-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">
                {formatNumber(artistInfo.monthlyListeners)}
              </p>
              <p className="text-muted-foreground">Monthly Listeners</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">
                {formatNumber(artistInfo.totalStreams)}
              </p>
              <p className="text-muted-foreground">Total Streams</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">
                {formatNumber(artistInfo.followers)}
              </p>
              <p className="text-muted-foreground">Followers</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

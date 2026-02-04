"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  recentReleases,
  filterReleases,
  formatNumber,
  type ReleaseType,
} from "@/lib/mock-data";

const typeColors: Record<string, string> = {
  album: "bg-primary text-primary-foreground",
  single: "bg-secondary text-secondary-foreground",
  ep: "bg-muted text-muted-foreground",
};

export function RecentReleases() {
  const [filter, setFilter] = useState<ReleaseType>("all");
  const filteredReleases = filterReleases(recentReleases, filter);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">Recent Releases</CardTitle>
        <Select
          value={filter}
          onValueChange={(value) => setFilter(value as ReleaseType)}
        >
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="album">Albums</SelectItem>
            <SelectItem value="ep">EPs</SelectItem>
            <SelectItem value="single">Singles</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredReleases.map((release) => (
            <div
              key={release.id}
              className="group flex gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={release.coverUrl}
                  alt={release.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="64px"
                />
              </div>
              <div className="flex min-w-0 flex-col justify-between">
                <div>
                  <h3 className="truncate font-medium">{release.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {new Date(release.releaseDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex lg:flex-col items-center gap-2 lg:gap-1">
                  <Badge variant="secondary" className={typeColors[release.type]}>
                    {release.type.toUpperCase()}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {formatNumber(release.streams)} plays
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredReleases.length === 0 && (
          <p className="py-8 text-center text-muted-foreground">
            No releases found for this filter.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

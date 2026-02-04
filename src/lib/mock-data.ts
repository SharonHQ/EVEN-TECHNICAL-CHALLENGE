// Mock data for the Artist Dashboard - Mild Orange

export interface Release {
  id: string;
  title: string;
  type: "single" | "album" | "ep";
  releaseDate: string;
  coverUrl: string;
  streams: number;
  revenue: number;
}

export interface SalesData {
  month: string;
  streams: number;
  downloads: number;
  revenue: number;
}

export interface FanMetric {
  platform: string;
  followers: number;
  growth: number;
  engagement: number;
}

export interface TopCountry {
  country: string;
  listeners: number;
  percentage: number;
}

export const artistInfo = {
  name: "Mild Orange",
  genre: "Indie / Dream Pop",
  origin: "Dunedin, New Zealand",
  monthlyListeners: 3847392,
  totalStreams: 456789432,
  followers: 1234567,
};

export const recentReleases: Release[] = [
  {
    id: "1",
    title: "The//Glow",
    type: "album",
    releaseDate: "2025-08-08",
    coverUrl: "https://picsum.photos/seed/theglow/300/300",
    streams: 12523891,
    revenue: 50095.56,
  },
  {
    id: "2",
    title: "Silver Star",
    type: "single",
    releaseDate: "2025-05-30",
    coverUrl: "https://picsum.photos/seed/silverstar/300/300",
    streams: 4891456,
    revenue: 19565.82,
  },
  {
    id: "3",
    title: "Moonglade",
    type: "single",
    releaseDate: "2025-04-25",
    coverUrl: "https://picsum.photos/seed/moonglade/300/300",
    streams: 5267823,
    revenue: 21071.29,
  },
  {
    id: "4",
    title: "Right or Wrong",
    type: "single",
    releaseDate: "2025-03-28",
    coverUrl: "https://picsum.photos/seed/rightorwrong/300/300",
    streams: 3814567,
    revenue: 15258.27,
  },
  {
    id: "5",
    title: "There's No Rush",
    type: "single",
    releaseDate: "2025-02-28",
    coverUrl: "https://picsum.photos/seed/nonorush/300/300",
    streams: 4292345,
    revenue: 17169.38,
  },
  {
    id: "6",
    title: "Welcome Back (To The//Glow)",
    type: "single",
    releaseDate: "2025-01-31",
    coverUrl: "https://picsum.photos/seed/welcomeback/300/300",
    streams: 3134567,
    revenue: 12538.27,
  },
  {
    id: "7",
    title: "Rubicon",
    type: "single",
    releaseDate: "2024-11-29",
    coverUrl: "https://picsum.photos/seed/rubicon/300/300",
    streams: 6234567,
    revenue: 24938.27,
  },
  {
    id: "8",
    title: "MOOD",
    type: "single",
    releaseDate: "2024-10-25",
    coverUrl: "https://picsum.photos/seed/mood/300/300",
    streams: 5834567,
    revenue: 23338.27,
  },
  {
    id: "9",
    title: "Looking For Space",
    type: "album",
    releaseDate: "2022-03-25",
    coverUrl: "https://picsum.photos/seed/lookingforspace/300/300",
    streams: 89234567,
    revenue: 356938.27,
  },
  {
    id: "10",
    title: "Mild Orange",
    type: "album",
    releaseDate: "2020-02-07",
    coverUrl: "https://picsum.photos/seed/mildorangealbum/300/300",
    streams: 156234567,
    revenue: 624938.27,
  },
  {
    id: "11",
    title: "Foreplay",
    type: "album",
    releaseDate: "2018-08-03",
    coverUrl: "https://picsum.photos/seed/foreplay/300/300",
    streams: 198234567,
    revenue: 792938.27,
  },
];

export const salesDataMonthly: SalesData[] = [
  { month: "Aug", streams: 8892000, downloads: 42400, revenue: 35568 },
  { month: "Sep", streams: 9156000, downloads: 44200, revenue: 36624 },
  { month: "Oct", streams: 10891000, downloads: 48900, revenue: 43564 },
  { month: "Nov", streams: 11124000, downloads: 51300, revenue: 44496 },
  { month: "Dec", streams: 12567000, downloads: 54500, revenue: 50268 },
  { month: "Jan", streams: 14234000, downloads: 58900, revenue: 56936 },
];

export const salesDataWeekly: SalesData[] = [
  { month: "Week 1", streams: 2892000, downloads: 12800, revenue: 11568 },
  { month: "Week 2", streams: 3423000, downloads: 14700, revenue: 13692 },
  { month: "Week 3", streams: 3856000, downloads: 16500, revenue: 15424 },
  { month: "Week 4", streams: 4063000, downloads: 17900, revenue: 16252 },
];

export const salesDataYearly: SalesData[] = [
  { month: "2020", streams: 42890000, downloads: 189000, revenue: 171560 },
  { month: "2021", streams: 64560000, downloads: 256000, revenue: 258240 },
  { month: "2022", streams: 98920000, downloads: 334000, revenue: 395680 },
  { month: "2023", streams: 112340000, downloads: 412000, revenue: 449360 },
  { month: "2024", streams: 127890000, downloads: 498000, revenue: 511560 },
  { month: "2025", streams: 68234000, downloads: 312000, revenue: 272936 },
];

export const fanMetrics: FanMetric[] = [
  { platform: "Spotify", followers: 856789, growth: 14.5, engagement: 9.2 },
  { platform: "Apple Music", followers: 334567, growth: 11.3, engagement: 7.5 },
  { platform: "YouTube", followers: 289234, growth: 18.2, engagement: 5.8 },
  { platform: "Instagram", followers: 412456, growth: 25.1, engagement: 6.6 },
  { platform: "TikTok", followers: 634567, growth: 52.8, engagement: 14.3 },
];

export const topCountries: TopCountry[] = [
  { country: "United States", listeners: 1192345, percentage: 31.0 },
  { country: "Australia", listeners: 556789, percentage: 14.5 },
  { country: "New Zealand", listeners: 412456, percentage: 10.7 },
  { country: "United Kingdom", listeners: 378934, percentage: 9.8 },
  { country: "Germany", listeners: 234567, percentage: 6.1 },
];

export const revenueBySource = [
  { id: "Streaming", value: 72, color: "#dc3228" },
  { id: "Downloads", value: 10, color: "#e85a52" },
  { id: "Sync Licensing", value: 12, color: "#6b6b6b" },
  { id: "Merch", value: 6, color: "#8b8b8b" },
];

export type TimeRange = "weekly" | "monthly" | "yearly";
export type ReleaseType = "all" | "single" | "album" | "ep";

export function getSalesData(range: TimeRange): SalesData[] {
  switch (range) {
    case "weekly":
      return salesDataWeekly;
    case "yearly":
      return salesDataYearly;
    default:
      return salesDataMonthly;
  }
}

export function filterReleases(releases: Release[], type: ReleaseType): Release[] {
  if (type === "all") return releases;
  return releases.filter((r) => r.type === type);
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

